#!/bin/bash

# Configuración de variables
IMAGE_NAME="raul-albanil-web"
DEPLOY_DIR="deployment"
TAR_FILE="$DEPLOY_DIR/raul-albanil-web.tar"

echo "1. Limpiando y preparando directorio de despliegue..."
rm -rf $DEPLOY_DIR
mkdir -p $DEPLOY_DIR

echo "2. Compilando la imagen de Docker..."
# NOTA: Si tu NAS tiene procesador ARM, usa esta línea en su lugar:
# docker buildx build --platform linux/arm64 -t $IMAGE_NAME .
docker build -t $IMAGE_NAME .

echo "3. Exportando la imagen a archivo .tar (esto puede tardar...)"
docker save -o $TAR_FILE $IMAGE_NAME

echo "4. Copiando archivos de configuración..."
cp docker-compose.yml $DEPLOY_DIR/
# Copiamos el env de producción y lo renombramos a .env para el NAS
cp env/pro/.env $DEPLOY_DIR/.env

echo "5. Creando script de ejecución remota (run.sh)..."
cat <<EOF > $DEPLOY_DIR/run.sh
#!/bin/bash
echo "Importando imagen de Docker..."
docker load -i raul-albanil-web.tar

echo "Reiniciando contenedores..."
docker-compose down
docker-compose up -d

echo "Esperando a que la base de datos esté lista..."
sleep 10

echo "Ejecutando migraciones de base de datos..."
docker exec raul-albanil-web npx prisma migrate deploy

echo "------------------------------------------------"
echo "¡Despliegue completado con éxito!"
EOF

# Dar permisos de ejecución al run.sh generado
chmod +x $DEPLOY_DIR/run.sh

echo "================================================"
echo "PROCESO FINALIZADO"
echo "Sube la carpeta '$DEPLOY_DIR' a tu NAS y ejecuta ./run.sh"
echo "================================================"