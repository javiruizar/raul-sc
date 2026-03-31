#!/bin/bash

# Configuración de variables
IMAGE_NAME="raul-albanil-web"
VERSION=0.0.1 
DEPLOY_DIR="deployment"
# Definimos el nombre del archivo tar con la versión para evitar confusiones
TAR_FILENAME="$IMAGE_NAME-$VERSION.tar"
TAR_PATH="$DEPLOY_DIR/$TAR_FILENAME"

echo "1. Limpiando y preparando directorio de despliegue para v$VERSION..."
rm -rf $DEPLOY_DIR
mkdir -p $DEPLOY_DIR

echo "2. Compilando la imagen de Docker..."
# Etiquetamos con la versión específica
docker build -t $IMAGE_NAME:$VERSION .

echo "3. Exportando la imagen a archivo .tar..."
docker save -o $TAR_PATH $IMAGE_NAME:$VERSION

echo "4. Copiando archivos de configuración..."
cp docker-compose.yml $DEPLOY_DIR/
cp env/pro/.env $DEPLOY_DIR/.env
# Guardamos la versión en un archivo de texto para que el NAS la lea
echo "$VERSION" > $DEPLOY_DIR/VERSION

echo "5. Creando script de ejecución remota (run.sh)..."
cat <<EOF > $DEPLOY_DIR/run.sh
#!/bin/bash
VERSION=\$(cat VERSION)
IMAGE_FULL_NAME="$IMAGE_NAME:\$VERSION"

echo "Comprobando si la versión \$VERSION ya existe en el NAS..."

# Comprobar si la imagen con ese tag ya existe
if ! docker image inspect "\$IMAGE_FULL_NAME" > /dev/null 2>&1; then
    echo "Versión nueva detectada. Importando imagen..."
    docker load -i "$TAR_FILENAME"
else
    echo "La versión \$VERSION ya está instalada. Saltando carga de imagen."
fi

echo "Creando directorio para los archivos que el cliente suba"
mkdir -p /home/javi/web-projects/raul-albanil/uploads

echo "Reiniciando contenedores con versión \$VERSION..."
# Exportamos la variable para que docker-compose la use
export IMAGE_TAG=\$VERSION
docker compose down
docker compose up -d

echo "Esperando a que la base de datos esté lista..."
sleep 10

echo "Ejecutando migraciones de base de datos..."
docker exec raul-albanil-web npx prisma migrate deploy

echo "------------------------------------------------"
echo "¡Despliegue de la v\$VERSION completado con éxito!"
EOF

# Dar permisos de ejecución al run.sh generado
chmod +x $DEPLOY_DIR/run.sh

echo "6. Sincronizando con el servidor..."
rsync -avz $DEPLOY_DIR/ minipc:web-projects/raul-albanil/

echo "================================================"
echo "PROCESO FINALIZADO"
echo "Ejecuta ./run.sh en tu NAS (dentro de web-projects/raul-albanil/)"
echo "================================================"