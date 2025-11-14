# Raúl Albañil - Sitio Web Profesional

Sitio web moderno y profesional para servicios de albañilería y reformas, especializado en restauración de casas antiguas.

## 🚀 Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: shadcn/ui
- **Formularios**: React Hook Form + Zod
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Construir para producción
pnpm build

# Ejecutar en producción
pnpm start
```

## 🏗️ Estructura del Proyecto

```
raul-albanil/
├── src/
│   ├── app/              # Páginas y rutas (App Router)
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes de shadcn/ui
│   │   ├── layout/      # Header, Footer, Navigation
│   │   ├── home/        # Componentes de la página de inicio
│   │   └── shared/      # Componentes compartidos
│   ├── data/            # Datos estáticos (servicios, proyectos, etc.)
│   ├── lib/             # Utilidades y funciones auxiliares
│   ├── styles/          # Estilos globales
│   └── types/           # Tipos TypeScript
├── public/              # Archivos estáticos
└── plans/               # Documentación y planes
```

## 🎨 Paleta de Colores

- **Primario**: `#D4581E` (Naranja terracota)
- **Secundario**: `#2C3E50` (Azul oscuro)
- **Acento**: `#F39C12` (Amarillo cálido)
- **Neutros**: Escala de grises

## 📄 Páginas

1. **Inicio** (`/`) - Landing page con hero, servicios y proyectos destacados
2. **Servicios** (`/servicios`) - Catálogo completo de servicios
3. **Proyectos** (`/proyectos`) - Galería de trabajos realizados
4. **Sobre Nosotros** (`/sobre-nosotros`) - Información sobre el albañil
5. **Contacto** (`/contacto`) - Formulario de contacto
6. **Presupuesto** (`/presupuesto`) - Solicitud de presupuesto detallada

## 🔧 Desarrollo

El proyecto sigue el plan detallado en `/plans/plan-desarrollo-web-albanil.md`.

### Fase Actual: Fase 1 - Configuración Inicial ✅

- [x] Inicializar proyecto Next.js
- [x] Instalar dependencias
- [x] Configurar estructura base

### Próximas Fases

- [ ] Fase 2: Componentes Base y Layout
- [ ] Fase 3: Datos y Contenido
- [ ] Fase 4-9: Desarrollo de páginas
- [ ] Fase 10: API Routes
- [ ] Fase 11: Optimización
- [ ] Fase 12: Deploy

## 📝 Variables de Entorno

Crear un archivo `.env.local` con las siguientes variables:

```env
# Email Service (Resend o EmailJS)
EMAIL_API_KEY=tu_api_key_aqui
EMAIL_FROM=noreply@tudominio.com
EMAIL_TO=contacto@tudominio.com

# Google Maps (opcional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
```

## 🚀 Deploy

El proyecto está configurado para desplegarse en Vercel:

1. Conectar el repositorio a Vercel
2. Configurar las variables de entorno
3. Deploy automático en cada push

## 📞 Contacto

Para más información sobre el desarrollo del proyecto, consulta el plan en `/plans/plan-desarrollo-web-albanil.md`.

---

**Versión**: 0.1.0  
**Última actualización**: Octubre 2024
