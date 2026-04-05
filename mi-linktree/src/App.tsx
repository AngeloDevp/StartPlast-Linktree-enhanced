// src/App.tsx
import { LinkButton } from './components/LinkButton';

function App() {
  const numeroWhatsApp = "584129851283"; 
  const mensaje = "Hola! Me gustaría recibir información sobre sus productos y cómo realizar un pedido";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:py-12">
      
      {/* Contenedor (Card) */}
      <div className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] sm:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-6 sm:p-10 flex flex-col items-center transition-all duration-500">

        {/* Perfil */}
        <div className="flex flex-col items-center">
          <img 
            src="/logo.jpeg" 
            alt="Logo StarPlast" 
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-full border border-gray-100 shadow-sm mb-4 sm:mb-6 bg-white p-1"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mb-2 sm:mb-3 text-center">
            @StarPlast_ve
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed max-w-xs sm:max-w-sm text-center">
            Fábrica de artículos escolares de primer nivel desde hace 4 décadas.
            Calidad Star: Siempre impulsando grandes ideas en cada trazo.
          </p>
        </div> {/* <--- ESTE ERA EL DIV QUE FALTABA */}

        {/* Contenedor de Botones */}
        <div className="w-full flex flex-col items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          
          <LinkButton
            title="Consultas y Ventas"
            url={linkWhatsApp}
            icon="/whatsapp-icon.svg"
          />
          
          <LinkButton
            title="Catálogo Star"
            url="/catalogo-star.pdf"
            icon="/pdf-icon.svg"
          />
          
        </div>

      </div> 
      {/* Cierra el Contenedor Card */}

    </div>
);
}

export default App;