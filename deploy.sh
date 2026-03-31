#!/bin/bash

IMAGE_NAME="raul-albanil-web"
DEPLOY_DIR="deployment"
TAR_FILE="$DEPLOY_DIR/raul-albanil-web.tar"

echo "1. Preparando directorio de despliegue..."
rm -rf $DEPLOY_DIR
mkdir -p $DEPLOY_DIR

echo "2. Compilando la imagen de Docker..."
docker build --no-cache -t $IMAGE_NAME .

echo "3. Exportando la imagen..."
docker save -o $TAR_FILE $IMAGE_NAME

echo "4. Copiando archivos de configuración para producción..."
cp docker-compose.yml $DEPLOY_DIR/
# Copia el archivo de producción y lo renombra como el .env principal
cp env/pro/.env $DEPLOY_DIR/.env

echo "Proceso completado."