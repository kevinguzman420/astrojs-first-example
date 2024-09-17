// src/pages/api/submit.js
export async function post({ request }) {
  const data = await request.json();

  // Aquí puedes procesar los datos, guardarlos en una base de datos, etc.
  console.log("Datos recibidos:", data);

  // Simula una respuesta de la API
  return new Response(
    JSON.stringify({ message: "Datos recibidos correctamente" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
