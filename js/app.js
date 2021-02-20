const producto = document.querySelector('.productos');
   const cursos = document.getElementById('cursos');
   const divcabecera =document.getElementsByClassName('.divcabecera');
   
   const menu1 = document.createElement('div');
   const container1 = document.querySelector('button')
   producto.addEventListener('click',obtenerCurso)

   function obtenerCurso(e){
    
    if(e.target.classList.contains('agregarCarrito')){
        const curso = e.target.parentElement;
        extraerDatos(curso);                            
    }                       
 }       
 function extraerDatos(curso){
   
    const cursoElegido = {
        imagen : curso.querySelector('img').imagen,
        nombre : curso.querySelector('h3').textContent,
        precio : curso.querySelector('strong').textContent
    }
    
        pintarCurso(cursoElegido);
 }
 function pintarCurso(curso){
    let container = document.createElement('button');
    let imagen = document.createElement('p');
    let nombre = document.createElement('p');
    let precio = document.createElement('p');

    imagen = curso.imagen
    nombre = curso.nombre;
    precio = curso.precio;

      menu1.innerHTML=`
      <td>${curso.nombre} </td>
      <td>${curso.precio} </td>
        `
       menu1.classList.add('menu1');
       container1.appendChild(menu1)

       const btnMenu = document.getElementById('cursos')
       const Menu2 = document.querySelector('.menu1')
       btnMenu.addEventListener("click",function(e){
           Menu2.classList.toggle('active')
       })

    // container.innerHTML=`
     // <td>${curso.nombre} </td>
     // <td>${curso.precio} </td>
      //  `
     //   cursos.appendChild(container)
  
  
}
    