#!/bin/sh

find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.tiff" \) | while IFS= read -r archivo; do
    # Extraer el nombre del archivo junto con su ruta, quitando la extensión
    nombre_base="${archivo%.*}"
    
    # Ejecutar la conversión
    cwebp -q 80 "$archivo" -o "${nombre_base}.webp"
done
