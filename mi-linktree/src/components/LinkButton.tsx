// src/components/LinkButton.tsx

interface LinkButtonProps {
  title: string;
  url: string;
  icon?: string; // 👈 Nueva propiedad opcional para la ruta del icono
}

export function LinkButton({ title, url, icon }: LinkButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      // Añadimos "gap-3" para separar el icono del texto
      className="w-full flex items-center justify-center gap-3 bg-[#E4E5E6] text-gray-800 text-sm sm:text-base font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl border border-transparent hover:border-red-600 hover:bg-white hover:text-red-600 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/10"
    >
      {/* Si se pasa un icono, lo renderizamos con un tamaño base de 20x20px (w-5 h-5) */}
      {icon && (
        <img 
          src={icon} 
          alt={`Icono`} 
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain" 
        />
      )}
      <span>{title}</span>
    </a>
  );
}