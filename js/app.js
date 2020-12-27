//Variables
const marca= document.querySelector('#marca');
      year = document.querySelector('#year');
      minimo = document.querySelector('#minimo');
      maximo = document.querySelector('#maximo')
      puertas = document.querySelector('#puertas')
      transmision = document.querySelector('#transmision')
      color = document.querySelector('#color')
      
      //Contenedor para los resultados
      resultado = document.querySelector('#resultado');


      max = new Date().getFullYear();
      min = max -10;

//Datos de busqueda
const datosBusqueda ={
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
	puertas: '',
    transmision: '',
	color: ''
}

//EventListener

document.addEventListener('DOMContentLoaded', () => { 
    mostrarAutos(autos); //Muestra los autos al cargar


    //Llenar las opciones de años
    llenarSelect();
 } );

//EventListener para los selectores de busqueda
marca.addEventListener('change', e => { 
    
    datosBusqueda.marca = e.target.value; 

    filtrarAuto();
} );

year.addEventListener('change', e => { 
    
    datosBusqueda.year = parseInt(e.target.value); 

    filtrarAuto();

} );

minimo.addEventListener('change', e => { 
    
    datosBusqueda.minimo = parseInt(e.target.value);

    filtrarAuto();

} );

maximo.addEventListener('change', e => { 
    
    datosBusqueda.maximo = parseInt(e.target.value); 

    filtrarAuto();

} );

puertas.addEventListener('change', e => { 
    
    datosBusqueda.puertas = parseInt(e.target.value); 

    filtrarAuto();

} );

transmision.addEventListener('change', e => { 
    
    datosBusqueda.transmision = e.target.value; 

    filtrarAuto();
    
} );

color.addEventListener('change', e => { 
    
    datosBusqueda.color = e.target.value;

    filtrarAuto();

} );


//Funciones


//Muestra los autos en HTML
function mostrarAutos(autos){
    
    limpiarHTML(); //Elimina el HTML previo
    autos.forEach( auto => {
        const { marca, modelo, year, puertas, precio, color, transmision } = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `

            ${marca}  ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio $${precio} - Color: ${color} 


        `;

        //Insertar en HTML
        resultado.appendChild(autoHTML);
    })    
}

//Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);    
    }
}


//Genera los años del select
function llenarSelect() {

    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega cada opcion
    }

}

//Funcion que filtra en base a la busqueda
function filtrarAuto() {

    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

  if( resultado.length ){   
    mostrarAutos(resultado);
  } else {
      noResultado();
  }


}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = `No hay resultados, intente con otro filtros para su busqueda`;
    resultado.appendChild(noResultado);
}


function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if( marca ){
        return auto.marca === marca;
    }
    return auto
}

function filtrarYear (auto) {
    const { year } = datosBusqueda;
    if( year ){
        return auto.year === year;
    }
    return auto
}


function filtrarMinimo (auto) {
    const { minimo } = datosBusqueda;
    if( minimo ){
        return auto.precio >= minimo;
    }
    return auto
}


function filtrarMaximo (auto) {
    const { maximo } = datosBusqueda;
    if( maximo ){
        return auto.precio <= maximo;
    }
    return auto
}


function filtrarPuertas (auto) {
    const { puertas } = datosBusqueda;
    if( puertas ){
        return auto.puertas === puertas;
    }
    return auto
}


function filtrarTransmision (auto) {
    const { transmision } = datosBusqueda;
    if( transmision ){
        return auto.transmision === transmision;
    }
    return auto
}


function filtrarColor (auto) {
    const { color } = datosBusqueda;
    if( color ){
        return auto.color === color;
    }
    return auto
}