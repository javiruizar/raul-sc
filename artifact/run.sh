#!/bin/bash
VERSION=$(cat VERSION)
IMAGE_FULL_NAME="raul-albanil-web:$VERSION"

echo "Comprobando si la versión $VERSION ya existe en el NAS..."

# Comprobar si la imagen con ese tag ya existe
if ! docker image inspect "$IMAGE_FULL_NAME" > /dev/null 2>&1; then
    echo "Versión nueva detectada. Importando imagen..."
    docker load -i "raul-albanil-web-1.0.0.tar"
else
    echo "La versión $VERSION ya está instalada. Saltando carga de imagen."
fi

echo "Creando directorio para los archivos que el cliente suba"
mkdir -p /home/javi/web-projects/raul-albanil/uploads

echo "Reiniciando contenedores con versión $VERSION..."
# Exportamos la variable para que docker-compose la use
export IMAGE_TAG=$VERSION
docker compose down
docker compose up -d

echo "Esperando a que la base de datos esté lista..."
sleep 10

echo "Ejecutando migraciones de base de datos..."
docker exec raul-albanil-web npx prisma migrate deploy

echo "------------------------------------------------"
echo "¡Despliegue de la v$VERSION completado con éxito!"
