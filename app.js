//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarroBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarListeners();


function cargarListeners() {
	// Agregar Nuevo Curso DOM
	listaCursos.addEventListener('click', agregarCurso);

	//Eliminar DOM
	carrito.addEventListener('click', eliminarCurso);

	//Limpiar DOM
	vaciarCarroBtn.addEventListener('click', vaciarCarrito);
}

//Funciones
function agregarCurso(e) {
	e.preventDefault();
	//Delegation Cursos
	if (e.target.classList.contains('agregar-carrito')) {
		let curso = e.target.parentElement.parentElement;
		leerDatosCurso(curso);
	}
}

function leerDatosCurso(curso) {
	const infoCurso = {
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span ').textContent,
		cantidad: 1,
		id: curso.querySelector('a').getAttribute('data-id'),
	};

	articulosCarrito = [...articulosCarrito, infoCurso];
	insertarCarrito(articulosCarrito);

}

function insertarCarrito(cursos) {
	const row = document.createElement('tr');
	cursos.forEach((curso) => {
		row.innerHTML = `
        <td>
            <img src="${curso.imagen}" style="width:100%;"/>
        </td>
        <td>${curso.titulo}</td>		
		<td>${curso.cantidad}</td>
		<td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
	`;
	});

	contenedorCarrito.appendChild(row);
}

//Elimina curso del dom
function eliminarCurso(e) {
	e.preventDefault();

	if (e.target.classList.contains('borrar-curso')) {
		const cursoActual = e.target.parentElement.parentElement;

		cursoActual.remove();
	}

	
}

//Elimina cursos del DOM
function vaciarCarrito(e) {
	e.preventDefault();

	contenedorCarrito.innerHTML = '';
}


