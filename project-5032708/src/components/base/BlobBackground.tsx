
interface BlobBackgroundProps {
  variant?: 'hero' | 'section' | 'footer' | 'mixed';
  className?: string;
}

export default function BlobBackground({ variant = 'hero', className = '' }: BlobBackgroundProps) {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Gradiente suave verde menta/azul claro com formas orgânicas */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B8E6D5] via-[#A8D5E6] to-[#9BC4E8]"></div>
        
        {/* Formas orgânicas roxas/lilás mais espalhadas e irregulares como amebas */}
        <div className="absolute top-[10%] right-[15%] w-[600px] h-[400px] bg-[#D4B5E8] opacity-60 blur-xl" style={{ borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-[550px] h-[650px] bg-[#C8A8E0] opacity-50 blur-xl" style={{ borderRadius: '38% 62% 45% 55% / 62% 35% 65% 38%' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[500px] h-[350px] bg-[#E0C8F0] opacity-40 blur-xl" style={{ borderRadius: '71% 29% 62% 38% / 44% 59% 41% 56%' }}></div>
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Gradiente suave para seções */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C8E6D8] via-[#B8D8E8] to-[#A8C8E0]"></div>
        
        {/* Formas orgânicas sutis mais espalhadas e irregulares */}
        <div className="absolute top-[20%] right-[20%] w-[500px] h-[350px] bg-[#D8C0E8] opacity-40 blur-xl" style={{ borderRadius: '45% 55% 38% 62% / 58% 42% 58% 42%' }}></div>
        <div className="absolute bottom-[30%] left-[15%] w-[480px] h-[420px] bg-[#C8B0E0] opacity-35 blur-xl" style={{ borderRadius: '67% 33% 51% 49% / 39% 61% 39% 61%' }}></div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Gradiente para footer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B8E0D0] via-[#C8D0E8] to-[#B8C8E8]"></div>
        
        {/* Formas orgânicas mais espalhadas e irregulares */}
        <div className="absolute top-[10%] right-[25%] w-[550px] h-[450px] bg-[#D0B8E8] opacity-50 blur-xl" style={{ borderRadius: '52% 48% 63% 37% / 47% 56% 44% 53%' }}></div>
        <div className="absolute bottom-[15%] left-[20%] w-[600px] h-[500px] bg-[#C0A8E0] opacity-45 blur-xl" style={{ borderRadius: '41% 59% 48% 52% / 64% 38% 62% 36%' }}></div>
      </div>
    );
  }

  if (variant === 'mixed') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Gradiente suave verde menta/azul claro */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B8E6D5] via-[#A8D5E6] to-[#9BC4E8]"></div>
        
        {/* Formas orgânicas roxas/lilás mais espalhadas e irregulares como amebas */}
        <div className="absolute top-[15%] right-[10%] w-[520px] h-[380px] bg-[#D4B5E8] opacity-60 blur-xl" style={{ borderRadius: '58% 42% 47% 53% / 61% 44% 56% 39%' }}></div>
        <div className="absolute bottom-[25%] left-[8%] w-[580px] h-[620px] bg-[#C8A8E0] opacity-50 blur-xl" style={{ borderRadius: '35% 65% 52% 48% / 68% 32% 68% 32%' }}></div>
        <div className="absolute top-[45%] left-[35%] w-[460px] h-[340px] bg-[#E0C8F0] opacity-40 blur-xl" style={{ borderRadius: '73% 27% 59% 41% / 42% 63% 37% 58%' }}></div>
      </div>
    );
  }

  return null;
}
