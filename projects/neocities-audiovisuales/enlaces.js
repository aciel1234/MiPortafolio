    const enlaceArchivo1 = document.getElementById('enero');
    const enlaceArchivo2 = document.getElementById('febrero');
    const enlaceArchivo3 = document.getElementById('marzo');
    const enlaceArchivo4 = document.getElementById('abril');
    const enlaceArchivo5 = document.getElementById('mayo');
    const enlaceArchivo6 = document.getElementById('junio');
    const enlaceArchivo7 = document.getElementById('julio');
    const enlaceArchivo8 = document.getElementById('agosto');
    const enlaceArchivo9 = document.getElementById('septiembre');
    const enlaceArchivo10 = document.getElementById('octubre');
    const enlaceArchivo11 = document.getElementById('noviembre');
    const enlaceArchivo12 = document.getElementById('diciembre');
    const contenidoArchivo = document.getElementById('contenidoArchivo');

    function mostrarArchivo(archivo) {
      fetch(archivo)
        .then(response => response.text())
        .then(data => {
          const filas = data.split('\n');
          let tabla = '<table><thead><tr>';
          const encabezados = filas[0].split(',');
          encabezados.forEach(encabezado => {
            tabla += `<th>${encabezado}</th>`;
          });
          tabla += '</tr></thead><tbody>';

          for (let i = 1; i < filas.length; i++) {
            const celdas = filas[i].split(',');
            tabla += '<tr>';
            celdas.forEach(celda => {
              tabla += `<td>${celda}</td>`;
            });
            tabla += '</tr>';
          }

          tabla += '</tbody></table>';
          contenidoArchivo.innerHTML = tabla;
        })
        .catch(error => {
          console.error("Error al obtener el archivo:", error);
        });
    }

    enlaceArchivo1.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('enero.txt'); // Reemplaza con la ruta del archivo 1
    });

    enlaceArchivo2.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('febrero.txt'); // Reemplaza con la ruta del archivo 2
    });

    enlaceArchivo3.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('marzo.txt'); // Reemplaza con la ruta del archivo 2
    });

    enlaceArchivo4.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('abril.txt'); // Reemplaza con la ruta del archivo 2
    });

    enlaceArchivo5.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('mayo.txt'); // Reemplaza con la ruta del archivo 2
    });

    enlaceArchivo6.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('junio.txt'); // Reemplaza con la ruta del archivo 2
    });

    enlaceArchivo7.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('julio.txt'); // Reemplaza con la ruta del archivo 2
    });

    enlaceArchivo8.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('agosto.txt'); // Reemplaza con la ruta del archivo 2
    });

    enlaceArchivo9.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('septiembre.txt'); // Reemplaza con la ruta del archivo 2
    });

    enlaceArchivo10.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('octubre.txt'); // Reemplaza con la ruta del archivo 2
    });

    enlaceArchivo11.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('noviembre.txt'); // Reemplaza con la ruta del archivo 2
    });

    enlaceArchivo12.addEventListener('click', function(event) {
      event.preventDefault();
      mostrarArchivo('diciembre.txt'); // Reemplaza con la ruta del archivo 2
    });
  
    
    
    
    
    
    
    