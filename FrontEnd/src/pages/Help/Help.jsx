import React from "react";

export default function Help() {
  return (
    <div className="font-sans leading-relaxed text-gray-900">
      <header className="bg-yellow-400 py-6 text-center">
        <h1 className="text-3xl font-bold">Guía de Ayuda - NutriMarket</h1>
      </header>
      <nav className="max-w-3xl mx-auto p-4">
        <ul className="flex justify-center space-x-4">
          {["registro", "compras", "pagos", "envios", "contacto"].map((section) => (
            <li key={section}>
              <a href={`#${section}`} className="text-blue-600 hover:underline capitalize">
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="max-w-3xl mx-auto p-4 mt-8 space-y-8">
        <section id="registro" className="space-y-4">
          <h2 className="text-2xl font-semibold">Registro</h2>
          <p>Para registrarse en NutriMarket, siga estos pasos:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Haga clic en el botón "Crear cuenta" en la parte inferior de la página.</li>
            <li>Complete el formulario con la información que se le pida y cree una contraseña.</li>
            <li>Haga clic en "Crear" para completar el registro.</li>
          </ol>
        </section>
        <section id="compras" className="space-y-4">
          <h2 className="text-2xl font-semibold">Realizar Compras</h2>
          <p>Para realizar una compra, siga estos pasos:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Navegue por nuestras categorías de productos o utilice la barra de búsqueda para encontrar productos específicos.</li>
            <li>Añada los productos que desee a su carrito de compras.</li>
            <li>Cuando esté listo para finalizar su compra, haga clic en el icono del carrito y luego en "Realizar pedido".</li>
            <li>Rellene los datos necesarios que se le pidan de su tarjeta y haga clic en "Pagar".</li>
          </ol>
        </section>
        <section id="pagos" className="space-y-4">
          <h2 className="text-2xl font-semibold">Métodos de Pago</h2>
          <p>Aceptamos los siguientes métodos de pago:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Tarjetas de crédito y débito (Visa, MasterCard, etc.)</li>
          </ul>
        </section>
        <section id="envios" className="space-y-4">
          <h2 className="text-2xl font-semibold">Envíos</h2>
          <p>Ofrecemos las siguientes opciones de entrega:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Entrega a Domicilio: El pedido se entregará en su domicilio.</li>
            <li>Recogida en Tienda: Se prepara el pedido para que usted solo tenga que recogerlo.</li>
          </ul>
        </section>
        <section id="contacto" className="space-y-4">
          <h2 className="text-2xl font-semibold">Contacto</h2>
          <p>Si tiene alguna pregunta o necesita ayuda, puede contactarnos a través de los siguientes medios:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Correo electrónico:{" "}
              <a href="mailto:soporte@nutrimarket.com" className="text-blue-600 underline">
                soporte@nutrimarket.com
              </a>
            </li>
            <li>Teléfono: +34 611 122 133</li>
          </ul>
        </section>
      </main>
      <footer className="bg-yellow-400 text-center text-sm text-gray-700 py-6 mt-8">
        <p>&copy; NutriMarket - Tienda Online. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
