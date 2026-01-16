fetch('data/cortos.json')
  .then(response => response.json())
  .then(cortos => {
    const contenedor = document.getElementById('listado');

    cortos.forEach(corto => {
      const item = document.createElement('article');
      item.classList.add('card-corto');

item.innerHTML = `
  <div class="card-img">
<img 
  src="img/cortos/${corto.slug}.webp" 
  alt="Poster de ${corto.titulo}"
  onerror="this.src='img/placeholder.png'"
>
  </div>

  <div class="card-info">
    <h3>${corto.titulo}</h3>
    <p class="meta">
      ${corto.anio} · ${corto.director}
    </p>
    <p class="tecnica">${corto.tecnica}</p>
  </div>
`;

      contenedor.appendChild(item);
    });
  })
  .catch(error => {
    console.error('No se pudieron cargar los cortos:', error);
  });



