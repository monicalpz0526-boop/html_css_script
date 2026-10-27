const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');

btnAgregar.addEventListener('click',() => {
    const tarea = inputTarea.value.trim();

 if (tarea === ''){
    alert("agregar tarea");
    return;
 }
const nuevaTarea = document.createElement('li');

const textoTarea = document.createElement('span');
textoTarea.textContent = tarea;
nuevaTarea.appendChild(textoTarea);

const inputEditar = document.createElement('input');
inputEditar.type = 'text';
inputEditar.style.display = 'none';

const btnEditar = document.createElement('button');
btnEditar.textContent = 'Editar';
btnEditar.classList.add("btnEditar");

const btnGuardar = document.createElement('button');
btnGuardar.textContent = 'Guardar';
btnGuardar.classList.add("btnGuardar");
btnGuardar.style.display = 'none';

btnEditar.addEventListener('click', () => {
    inputEditar.value = textoTarea.textContent;

    textoTarea.style.display = 'none';
    inputEditar.style.display = 'inline-block';

    btnEditar.style.display = 'none';
    btnGuardar.style.display = 'inline-block';

    inputEditar.focus();
    inputEditar.select();
});

btnGuardar.addEventListener('click', () => {
    const nuevoNombre = inputEditar.value.trim();

    if (nuevoNombre === '') {
        alert('Escribe el nombre de la tarea');
        return;
    }

    textoTarea.textContent = nuevoNombre;

    textoTarea.style.display = 'inline';
    inputEditar.style.display = 'none';

    btnGuardar.style.display = 'none';
    btnEditar.style.display = 'inline-block';
});

nuevaTarea.appendChild(inputEditar);
nuevaTarea.appendChild(btnEditar);
nuevaTarea.appendChild(btnGuardar);

listaTareas.appendChild(nuevaTarea);

 const btnEliminar = document.createElement('button')
 btnEliminar.textContent='Eliminar'
 nuevaTarea.appendChild(btnEliminar);
 



btnEliminar.addEventListener('click',() => {
 nuevaTarea.remove();
});
 
 inputTarea.value='';

});
 