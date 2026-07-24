import { v2 as cloudinary } from 'cloudinary';

// La configuración se lee automáticamente si existe CLOUDINARY_URL en el entorno.
// Opcionalmente podemos configurarla explícitamente si se usan las variables por separado.
if (process.env.CLOUDINARY_CLOUD_NAME) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

/**
 * Sube un archivo a Cloudinary
 * @param file Archivo a subir (objeto File nativo)
 * @param folderName Nombre de la carpeta en Cloudinary (opcional)
 * @returns La URL pública segura del archivo subido
 */
export async function uploadImageToCloudinary(file: File, folderName: string = 'presupuestos'): Promise<string> {
  if (!process.env.CLOUDINARY_CLOUD_NAME && !process.env.CLOUDINARY_URL) {
    throw new Error('Cloudinary no está configurado en las variables de entorno.');
  }

  // Convertimos el archivo a buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folderName,
        resource_type: 'auto', // Permite imágenes, videos, pdfs, etc.
      },
      (error, result) => {
        if (error) {
          console.error('Error en Cloudinary:', error);
          reject(new Error('No se pudo subir el archivo a Cloudinary'));
        } else if (result) {
          resolve(result.secure_url);
        } else {
          reject(new Error('Respuesta vacía de Cloudinary'));
        }
      }
    );

    // Escribimos el buffer en el stream y lo cerramos
    uploadStream.end(buffer);
  });
}
