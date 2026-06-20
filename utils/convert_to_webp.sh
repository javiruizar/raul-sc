#!/bin/bash

# Establecer directorio objetivo: parámetro $1 o ../public por defecto
TARGET_DIR="${1:-../public}"

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

# Contadores
count_procesados=0
count_omitidos=0

# Bucle con sustitución de procesos para evitar subshells y mantener los contadores
while read -r img_path; do
    
    # Extraer la ruta sin la extensión original
    base_path="${img_path%.*}"
    output_webp="${base_path}.webp"
    
    # Comprobar si el archivo WebP ya existe
    if [ -f "$output_webp" ]; then
        echo "Omitiendo: $img_path (ya existe)"
        ((count_omitidos++))
        continue
    fi
    
    echo "Procesando: $img_path"
    
    # Ejecutar la conversión con calidad 80
    if cwebp -q 80 "$img_path" -o "$output_webp" -quiet; then
        echo " -> Creado: $output_webp"
        ((count_procesados++))
    else
        echo " -> [ERROR] Falló la conversión de: $img_path"
    fi

done < <(find "$TARGET_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.tiff" -o -iname "*.bmp" \))

echo "--------------------------------------------------------"
echo "Proceso finalizado."
echo "Imágenes convertidas: $count_procesados"
echo "Imágenes omitidas: $count_omitidos"