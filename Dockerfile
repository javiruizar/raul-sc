# Usamos una imagen basada en Debian para mayor compatibilidad
FROM node:20-slim
WORKDIR /app

# Instalamos pnpm y dependencias del sistema para Prisma
RUN corepack enable && corepack prepare pnpm@10.19.0 --activate \
    && apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Copiamos los archivos de configuración de paquetes
COPY package.json pnpm-lock.yaml ./

# Instalamos las dependencias
RUN pnpm install --frozen-lockfile

# Copiamos el resto del código fuente
COPY . .

# Generamos el cliente de Prisma proporcionando una URL ficticia para pasar la validación
RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" pnpm exec prisma generate

# Compilamos la aplicación de Next.js
RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" pnpm run build

# Exponemos el puerto de la aplicación
EXPOSE 3000

# Comando de inicio del servidor en producción
CMD ["pnpm", "start"]