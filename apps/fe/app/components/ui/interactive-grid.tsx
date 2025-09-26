"use client";

import React, { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface InteractiveGridProps {
  className?: string;
  pointColor?: string;
  lineColor?: string;
  pointOpacity?: number;
  lineOpacity?: number;
}

export function InteractiveGrid({ 
  className,
  pointColor = "255, 255, 255",
  lineColor = "255, 255, 255", 
  pointOpacity = 0.1,
  lineOpacity = 0.05
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initPoints = () => {
      pointsRef.current = [];
      const numPoints = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < numPoints; i++) {
        pointsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      pointsRef.current.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;

        ctx.fillStyle = `rgba(${pointColor}, ${pointOpacity})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.strokeStyle = `rgba(${lineColor}, ${lineOpacity})`;
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < pointsRef.current.length; i++) {
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const dx = pointsRef.current[i].x - pointsRef.current[j].x;
          const dy = pointsRef.current[i].y - pointsRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(pointsRef.current[i].x, pointsRef.current[i].y);
            ctx.lineTo(pointsRef.current[j].x, pointsRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initPoints();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initPoints();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
}