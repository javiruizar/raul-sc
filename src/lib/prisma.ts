import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Extraemos la URL de las variables de entorno
const connectionString = `${process.env.DATABASE_URL}`;

// Creamos un Pool de conexiones nativo de Postgres
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Instanciamos Prisma pasándole el adaptador
const prismaClientSingleton = () => {
  return new PrismaClient({ adapter });
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma