import { writeFile, mkdir, readdir, stat } from "fs/promises";
import path from "path";

export async function getDirectorySize(dirPath: string): Promise<number> {
  try {
    let totalSize = 0;
    const files = await readdir(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const fileStat = await stat(filePath);
      if (fileStat.isFile()) {
        totalSize += fileStat.size;
      }
    }
    return totalSize;
  } catch (error: unknown) {
    const fsError = error as NodeJS.ErrnoException;
    if (fsError.code === 'ENOENT') return 0;
    throw error;
  }
}

export async function saveFilesLocally(files: File[]): Promise<{ uploadedPaths: string[], warning: string | null }> {
  const uploadedPaths: string[] = [];
  const MAX_FILE_SIZE = 60 * 1024 * 1024;
  const MAX_SERVER_STORAGE = 100 * 1024 * 1024;
  let uploadWarning: string | null = null;

  const uploadDir = path.join(process.cwd(), "public/uploads");
  const currentStorageSize = await getDirectorySize(uploadDir);
  const incomingSize = files.reduce((acc, file) => acc + file.size, 0);

  if (currentStorageSize + incomingSize > MAX_SERVER_STORAGE) {
    uploadWarning = "No hemos podido guardar los archivos adjuntos. Por favor, envíelos por email indicando el código de referencia facilitado.";
  } else {
    try { await mkdir(uploadDir, { recursive: true }); } catch (e) {
      console.error("Error al crear el directorio de uploads:", e);
    }

    for (const file of files) {
      if (file.size === 0) continue;
      
      if (file.size > MAX_FILE_SIZE) {
        throw new Error(`El archivo ${file.name} supera el límite de 60MB`);
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${file.name.replaceAll(" ", "_")}`;
      const filePath = path.join(uploadDir, fileName);
      
      await writeFile(filePath, buffer);
      uploadedPaths.push(`/uploads/${fileName}`);
    }
  }

  return { uploadedPaths, warning: uploadWarning };
}
