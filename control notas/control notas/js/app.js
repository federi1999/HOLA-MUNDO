
const formulario = document.getElementById('agregar-gasto');
const form = document.getElementById('numeros');

class Interfaz {
    
     imprimirMensaje(mensaje, tipo) {
          const divMensaje = document.createElement('div');
          divMensaje.classList.add('text-center', 'alert');
          if(tipo === 'error') {
               divMensaje.classList.add('alert-danger');
          } else {
               divMensaje.classList.add('alert-success');
          }
          divMensaje.appendChild(document.createTextNode(mensaje));
          // Insertar en el DOM
          document.querySelector('.primario').insertBefore(divMensaje, formulario);

          // Quitar el alert despues de 3 segundos
          setTimeout(function() {
               document.querySelector('.primario .alert').remove();
               formulario.reset();
          }, 3000);
     }
    
     agregarListado(estudiante) {
          //aplicamos destructuring
          const {nombre, nota} = estudiante;
          const gastosListado = document.querySelector('#gastos ul');

          // Crear un LI
          const li = document.createElement('li');
          li.className = 'list-group-item d-flex justify-content-between align-items-center';
          // Insertar 
          if(nota>=0 && nota<=10){
               li.innerHTML = `
               ${nombre}
               <span class="badge badge-danger badge-pill"> Nota:&nbsp;&nbsp;${nota} </span>
          `;
          }else if(nota>=11 && nota<=20){
               li.innerHTML = `
               ${nombre}
               <span class="badge badge-success badge-pill"> Nota:&nbsp;&nbsp;${nota} </span>
          `;
          }else if(nota>=21){
               li.innerHTML = `
               ${nombre}
               <span class="badge badge-primary badge-pill"> Nota:&nbsp;&nbsp;${nota} </span>
          `;
          }
         


          // Insertar al HTML
          gastosListado.appendChild(li);


          
     }
     
     agregar(numero) {
        
          const resultado = document.querySelector('#resultado ul');
          const div = document.querySelector('#div ul');
          const suma = document.querySelector('#suma ul');
          const resta = document.querySelector('#resta ul');
          

          
         
         
         
          for(let i = 1;i<=10;i++){
               const li = document.createElement('li');
               li.innerHTML = `
                ${numero + "x " + i + "= " + numero * i} 
               `;
               resultado.appendChild(li);
          }
          for(let i = 1;i<=10;i++){
               const li = document.createElement('li');
               li.innerHTML = `
                ${numero + "/ " + i + "= " + numero / i} 
               `;
               div.appendChild(li);
          }
          for(let i = 1;i<=10;i++){
               const li = document.createElement('li');
               li.innerHTML = `
                ${numero + "+ " + i + "= " + numero + i} 
               `;
               suma.appendChild(li);
          }
          for(let i = 1;i<=10;i++){
               const li = document.createElement('li');
               li.innerHTML = `
                ${numero + "-" + i + "= " + (numero-i)} 
               `;
               resta.appendChild(li);
          }
         

          
     }
}

form.addEventListener('submit',(e)=>{
     e.preventDefault();
     let num = document.querySelector('#numero').value;
     num = parseInt(num);
     const ui = new Interfaz();

     if(num !=''){
         
          ui.agregar(num);
     }

})
formulario.addEventListener('submit', (e)=> {
     e.preventDefault();
     
     // Leer del formulario de Gastos
     const nombre = document.querySelector('#nombre').value;
     const cantidad = document.querySelector('#nota').value;

     // Instanciar la Interfaz
     const ui = new Interfaz();

     // Comprobar que los campos no esten vacios
     if(nombre === '' || cantidad === '') {
          // 2 parametros: mensaje y tipo
          ui.imprimirMensaje('Hubo un error', 'error');
     } else {
          const estudiante ={
               nombre:nombre,
               nota:cantidad
          }
          
          // Insertar en el HTML
          ui.imprimirMensaje('Correcto', 'correcto');
          ui.agregarListado(estudiante);
         
     }
});

