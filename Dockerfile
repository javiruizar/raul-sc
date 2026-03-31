# Usamos una imagen basada en Debian para mayor compatibilidad
FROM node:20-slim
WORKDIR /app

# Instalamos dependencias necesarias para el motor de Prisma
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Copiamos los archivos de configuración de paquetes
COPY package.json package-lock.json* ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Generamos el cliente de Prisma proporcionando una URL ficticia para pasar la validación
RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" npx prisma generate

# Compilamos la aplicación de Next.js
# Si el build de Next.js también requiere la variable, se la pasamos aquí también
RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" npm run build

# Exponemos el puerto de la aplicación
EXPOSE 3000

# Comando de inicio del servidor en producción
CMD ["npm", "start"]