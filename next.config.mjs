/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio']
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    env: {
        xRapidApiKey: 'd5aed76c56msh638ce8d6491f990p1db15ajsnab83a12b10c4',
        xRapidApiHost: 'cars-by-api-ninjas.p.rapidapi.com',
        studioCarImage: 'https://cdn.imagin.studio/getimage'
      },
};

export default nextConfig;
