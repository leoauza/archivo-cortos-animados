fetch('data/cortos.json')
  .then(response => response.json())
  .then(cortos => {
    const contenedor = document.getElementById('listado');

    cortos.forEach(corto => {
      const item = document.createElement('article');
      item.innerHTML = `
        <h2>${corto.titulo} (${corto.anio})</h2>
        <p><strong>${corto.director}</strong> — ${corto.tecnica}</p>
        <p>${corto.descripcion}</p>
        <hr>
      `;
      contenedor.appendChild(item);
    });
    .catch(error => {
  console.error('No se pudieron cargar los cortos:', error);
});


