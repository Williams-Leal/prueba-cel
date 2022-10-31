window.addEventListener("load", () => {
  const form = document.getElementById("fomulario");
  let resultado;
  let resumen = document.getElementById("resumen");
  const tiket = "200";
  resumen = document.addEventListener("submit", (e) => {
    e.preventDefault();
    const cantidad = document.getElementById("cantidad").value;
    const categoria = document.getElementById("Categoria").value;
    switch (categoria) {
      case "1":
        resultado = tiket - tiket * 0.8;
        break;
      case "2":
        resultado = tiket - tiket * 0.5;
        break;
      case "3":
        resultado = tiket - tiket * 0.15;
        break;
    }
    resultado = resultado * cantidad;
    document.getElementById("respuesta").value = resultado;
  });
});
