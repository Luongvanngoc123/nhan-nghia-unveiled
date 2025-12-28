import { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  swayOffset: number;
  swaySpeed: number;
}

const FallingPetals = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize petals
    const petalCount = Math.min(35, Math.floor(window.innerWidth / 40));
    
    const createPetal = (startFromTop = false): Petal => ({
      x: Math.random() * canvas.width,
      y: startFromTop ? -20 : Math.random() * canvas.height,
      size: Math.random() * 8 + 6,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 1 + 0.5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.4 + 0.3,
      swayOffset: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.02 + 0.01,
    });

    petalsRef.current = Array.from({ length: petalCount }, () => createPetal(false));

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.globalAlpha = petal.opacity;

      // Draw a cherry blossom petal shape
      ctx.beginPath();
      ctx.moveTo(0, -petal.size / 2);
      ctx.bezierCurveTo(
        petal.size / 2, -petal.size / 2,
        petal.size / 2, petal.size / 2,
        0, petal.size / 2
      );
      ctx.bezierCurveTo(
        -petal.size / 2, petal.size / 2,
        -petal.size / 2, -petal.size / 2,
        0, -petal.size / 2
      );
      
      // Gradient fill for petal
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, petal.size);
      gradient.addColorStop(0, 'rgba(255, 200, 210, 0.9)');
      gradient.addColorStop(0.5, 'rgba(255, 182, 193, 0.8)');
      gradient.addColorStop(1, 'rgba(219, 112, 147, 0.6)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current.forEach((petal, index) => {
        // Update position with gentle swaying
        petal.swayOffset += petal.swaySpeed;
        petal.x += petal.speedX + Math.sin(petal.swayOffset) * 0.5;
        petal.y += petal.speedY;
        petal.rotation += petal.rotationSpeed;

        // Reset petal when it goes off screen
        if (petal.y > canvas.height + 20 || petal.x < -20 || petal.x > canvas.width + 20) {
          petalsRef.current[index] = createPetal(true);
        }

        drawPetal(petal);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default FallingPetals;
