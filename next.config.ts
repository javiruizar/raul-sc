import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Solo los hosts que se usan con next/image: fotos de los autores de las reseñas de Google
    // (solo con Places API, ahora desactivada; las reseñas copiadas a mano no llevan foto).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
