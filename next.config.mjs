/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp', 'image/avif'],  // Enable both WebP and AVIF
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    }
}

export default nextConfig