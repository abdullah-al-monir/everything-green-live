'use client';

import { useEffect, useRef } from 'react';


export function MeterGauge({ value = 78 }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const angleRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height * 0.8;
    const radius = 85;

    const drawGauge = () => {
      ctx.clearRect(0, 0, width, height);

      const gradientBg = ctx.createRadialGradient(
        centerX,
        centerY - 50,
        10,
        centerX,
        centerY,
        radius + 20
      );
      gradientBg.addColorStop(0, 'rgba(76, 175, 140, 0.08)');
      gradientBg.addColorStop(0.5, 'rgba(76, 175, 140, 0.04)');
      gradientBg.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 10, Math.PI, Math.PI * 2);
      ctx.fillStyle = gradientBg;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI, Math.PI * 2);
      ctx.strokeStyle = '#E5E7EB';
      ctx.lineWidth = 12;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Draw colored segments
      const segments = [
        { start: 0, end: 0.2, color: '#EF4444' },
        { start: 0.2, end: 0.4, color: '#FCD34D' },
        { start: 0.4, end: 0.6, color: '#BEF264' },
        { start: 0.6, end: 1, color: '#22C55E' },
      ];

      segments.forEach((segment) => {
        const startAngle = Math.PI + Math.PI * segment.start;
        const endAngle = Math.PI + Math.PI * segment.end;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle = segment.color;
        ctx.lineWidth = 12;
        ctx.lineCap = 'round';
        ctx.stroke();
      });

      // Draw scale tick marks
      const tickCount = 18;
      for (let i = 0; i <= tickCount; i++) {
        const angle = Math.PI + (Math.PI / tickCount) * i;
        const outerRadius = radius + 7;
        const innerRadius = radius + 1;

        const x1 = centerX + Math.cos(angle) * innerRadius;
        const y1 = centerY + Math.sin(angle) * innerRadius;
        const x2 = centerX + Math.cos(angle) * outerRadius;
        const y2 = centerY + Math.sin(angle) * outerRadius;

        ctx.strokeStyle = '#D1D5DB';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Draw scale numbers
      const numbers = [
        { value: 10, angle: Math.PI },
        { value: 20, angle: Math.PI + Math.PI * 0.2 },
        { value: 40, angle: Math.PI + Math.PI * 0.4 },
        { value: 60, angle: Math.PI + Math.PI * 0.6 },
        { value: 80, angle: Math.PI + Math.PI * 0.8 },
        { value: 100, angle: Math.PI * 2 },
      ];

      numbers.forEach((num) => {
        const labelRadius = radius + 22;
        const labelX = centerX + Math.cos(num.angle) * labelRadius;
        const labelY = centerY + Math.sin(num.angle) * labelRadius;

        ctx.fillStyle = '#6B7280';
        ctx.font = 'bold 11px Inter, -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(num.value.toString(), labelX, labelY);
      });

      // Oscillating needle animation - smooth back and forth
      const baseAngle = Math.PI + (Math.PI * value) / 100;
      const oscillation = Math.sin(angleRef.current * 0.04) * 0.1; // Smooth wave
      const needleAngle = baseAngle + oscillation;

      const needleLength = radius * 0.7;
      const needleX = centerX + Math.cos(needleAngle) * needleLength;
      const needleY = centerY + Math.sin(needleAngle) * needleLength;

      // Draw needle with gradient
      const needleGradient = ctx.createLinearGradient(
        centerX,
        centerY,
        needleX,
        needleY
      );
      needleGradient.addColorStop(0, '#374151');
      needleGradient.addColorStop(0.8, '#1F2937');
      needleGradient.addColorStop(1, '#111827');

      ctx.strokeStyle = needleGradient;
      ctx.lineWidth = 3.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(needleX, needleY);
      ctx.stroke();

      // Draw needle tip
      ctx.fillStyle = '#111827';
      ctx.beginPath();
      ctx.arc(needleX, needleY, 3, 0, Math.PI * 2);
      ctx.fill();

      // Draw center circle with shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 7.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw center circle main
      ctx.fillStyle = '#1F2937';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw center circle inner highlight
      ctx.fillStyle = '#4B5563';
      ctx.beginPath();
      ctx.arc(centerX - 1.2, centerY - 1.2, 1.5, 0, Math.PI * 2);
      ctx.fill();

      angleRef.current += 0.5;
      animationRef.current = requestAnimationFrame(drawGauge);
    };

    drawGauge();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value]);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h4 className="text-sm font-bold text-gray-900 mb-6">
        Keyword Attribution{' '}
        <span className="text-green-600">Green Keyword Manager</span>
      </h4>

      <div className="relative w-full" style={{ aspectRatio: '1/0.65' }}>
        <canvas ref={canvasRef} width={320} height={200} className="w-full h-auto" />
      </div>
    </div>
  );
}