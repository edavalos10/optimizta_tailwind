import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMsg('Ocurrió un error. Intenta nuevamente.');
      }
    } catch (err) {
      setErrorMsg('No se pudo enviar el mensaje. Intenta más tarde.');
    }
  };

  return (
    <div className="font-sans text-gray-800">
      <Head>
        <title>Optimizta - Consultoría para MYPES</title>
        <meta name="description" content="Consultoría práctica para negocios reales." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/logo.png" alt="Optimizta logo" className="h-10" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section className="text-center my-10">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Consultoría práctica para negocios reales</h2>
          <p className="text-lg text-gray-600">Ayudamos a las MYPES a resolver sus problemas operativos para crecer con orden y eficiencia.</p>
        </section>

        <section id="services" className="grid md:grid-cols-3 gap-6 my-10">
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Diagnóstico Express</h3>
            <p>Detectamos tus cuellos de botella operativos en menos de 48 horas.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Optimización de procesos</h3>
            <p>Simplificamos tareas repetitivas y te ayudamos a reducir errores.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Asesoría para crecer</h3>
            <p>Te guiamos para escalar tu negocio con decisiones basadas en datos.</p>
          </div>
        </section>

        <section id="benefits" className="my-10">
          <h3 className="text-2xl font-bold text-indigo-800 mb-6">¿Por qué elegirnos?</h3>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>Soluciones prácticas y sin tecnicismos innecesarios.</li>
            <li>Acompañamiento personalizado y directo.</li>
            <li>Resultados visibles desde las primeras semanas.</li>
            <li>Nos enfocamos en lo que de verdad importa: reducir errores y generar ingresos.</li>
          </ul>
        </section>

        <section id="contact" className="my-10">
          <h3 className="text-2xl font-bold text-indigo-800 mb-6">Contáctanos</h3>
          <form
    action="https://formspree.io/f/mrbkbgkd"
    method="POST"
    className="space-y-4"
  >
    <input name="name" type="text" placeholder="Tu nombre" required className="w-full p-3 border rounded" />
    <input name="email" type="email" placeholder="Tu correo" required className="w-full p-3 border rounded" />
    <textarea name="message" placeholder="Tu mensaje" required className="w-full p-3 border rounded h-32" />
    <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">Enviar mensaje</button>
  </form>
</section>

      </main>

      <a href="https://wa.me/51981831698" target="_blank" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg text-xl">💬</a>
    </div>
  );
}
