/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Con esta opcion podemos evitar que al ejecutar npm run build , nos arroje errores o sugerencias y poder subir un sitio a produccion, es recomendable no activarlo porque se puede estallar la pagina en producción pero es opcional para cada quien
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
