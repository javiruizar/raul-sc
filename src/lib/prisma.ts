// DESACTIVADO (2026-11-19): no hay base de datos. Se quitaron de package.json las dependencias
// (@prisma/client, @prisma/adapter-pg, pg, @types/pg y prisma) para que Vercel no las instale
// en cada despliegue, y este fichero y prisma.config.ts están excluidos en tsconfig.json.
// Para reactivarlo: pnpm add @prisma/client @prisma/adapter-pg pg && pnpm add -D prisma @types/pg,
// quitar ambos ficheros del "exclude" de tsconfig.json y descomentar Prisma en el Dockerfile,
// deploy.sh y api/presupuesto/route.ts.
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