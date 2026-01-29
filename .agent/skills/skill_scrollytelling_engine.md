Propósito: Implementar un motor de renderizado de secuencias de imágenes sincronizado con el scroll usando Canvas y Framer Motion.
Instrucciones para el Agente:
1. Arquitectura: Usa Next.js y un componente <canvas> con position: sticky. El contenedor padre debe tener una altura de 400vh o más para permitir un recorrido suave.
2. Lógica de Renderizado:
    ◦ Carga una secuencia de imágenes (ej: frame_001.webp a frame_120.webp).
    ◦ Usa useScroll de Framer Motion para obtener un valor de 0 a 1.
    ◦ Mapea el progreso del scroll al índice de la imagen: frameIndex = Math.floor(scrollYProgress * (totalFrames - 1)).
    ◦ Dibuja la imagen en el Canvas usando requestAnimationFrame para mantener 60fps.
3. Optimización: Implementa un "Pre-loader" para asegurar que todas las imágenes estén en caché antes de iniciar la animación para evitar parpadeos (flickering).