#!/bin/bash

# Verificar si se ha pasado el directorio por parámetro
if [ -z "$1" ]; then
    echo "Error: Debes especificar un directorio."
    echo "Uso: $0 /ruta/al/directorio"
    exit 1
fi

TARGET_DIR="$1"

# Verificar si el directorio existe
if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: El directorio '$TARGET_DIR' no existe."
    exit 1
fi

# Verificar si cwebp está instalado
if ! command -v cwebp &> /dev/null; then
    echo "Error: 'cwebp' no está instalado. Instálalo con: sudo apt install webp"
    exit 1
fi

echo "Iniciando la conversión de imágenes a WebP en: $TARGET_DIR"
echo "--------------------------------------------------------"

# Contador de archivos procesados
count=0

# Buscar archivos de forma recursiva ignorando mayúsculas/minúsculas
# Filtra extensiones comunes que se benefician de la conversión a WebP
find "$TARGET_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.tiff" -o -iname "*.bmp" \) | while read -r img_path; do
    
    # Extraer la ruta sin la extensión original
    base_path="${img_path%.*}"
    output_webp="${base_path}.webp"
    
    echo "Procesando: $img_path"
    
    # Ejecutar la conversión con calidad 80
    if cwebp -q 80 "$img_path" -o "$output_webp" -quiet; then
        echo " -> Creado: $output_webp"
        ((count++))
    else
        echo " -> [ERROR] Falló la conversión de: $img_path"
    fi
done

echo "--------------------------------------------------------"
echo "Proceso finalizado."