let linkGoogle = document.getElementById('linkGoogle');
let divCuadrado = document.getElementById('divCuadrado');
let selectPais = document.getElementById('selectPais');
let selectDpto = document.getElementById('selectDpto');
let inputNombre=document.getElementById('inputNombre');
let inputMensaje= document.getElementById('inputMensaje');
let inputletras= document.getElementById('inputletras');


let paises = [
	{ id: 12343, nombre: 'Perú' },
	{ id: 12, nombre: 'México' },
	{ id: 13, nombre: 'China' },
	{ id: 19, nombre: 'Argentina' }
];
let departamentos = [
	{ id: 22, nombre: 'Lima', idPais: 12343, stock: true },
	{ id: 23, nombre: 'Puno', idPais: 12343, stock: false },
	{ id: 24, nombre: 'Wujan', idPais: 13, stock: false },
	{ id: 25, nombre: 'Acapulco', idPais: 12, stock: true },
	{ id: 26, nombre: 'Fujian', idPais: 13, stock: false },
	{ id: 27, nombre: 'Buenos Aires', idPais: 19, stock: true },
	{ id: 28, nombre: 'Cordova', idPais: 19, stock: false },
	{ id: 29, nombre: 'Tulum', idPais: 12, stock: true }
];


(() => {
	console.log('asasdasdasdasdas');
	paises.forEach((pais) => {
		let option = document.createElement('option');
		option.value = pais.id;
		option.innerText = pais.nombre;
		selectPais.append(option);
	});
})();

linkGoogle.onclick = (e) => {
	e.preventDefault();
	console.log('Click en linkGoogle');
};

divCuadrado.onclick = (e) => {
	console.log('Click divcuadrado');
	console.log(e);
};

divCuadrado.onmouseover = (e) => {
	console.log(e);
	/**
	 * Se dispara el evento cuando el mouse ingresa al área que ocupa
	 * un elemento
	 */
};
divCuadrado.onmouseout = (e) => {
	console.log(e);
	/**
	 * Se dispara el evento cuando el mouse sale del área que ocupa
	 * un elemento
	 */
};

selectPais.onchange = (e) => {
	selectDpto.innerHTML = `<option value="0">-Seleccione Dpto-</option>`;
	/**
	 * Cada vez que cambie el valor del selectPais,
	 * se debe de cargar la lista de departamentos que le pertenecen
	 * Si el valor del país es 0, se deberá limpiar los options
	 * del selectDpto
	 */
	let idPais = +selectPais.value;
	departamentos.forEach((dpto) => {
		if (dpto.idPais === idPais) {
			let option = document.createElement('option');
			option.value = dpto.id;
			option.innerText = dpto.nombre;
			selectDpto.append(option);
		}
	});
};

inputNombre.onkeyup=(e)=>{
	console.log(inputNombre.value);
}

inputMensaje.onkeyup=()=>{
	let texto=inputMensaje.value;
	let caracteres=texto.lenght;
	// console.log(caracteres);
	if(caracteres>50){
		inputMensaje.value=inputMensaje.value.substr(0,49);
	}else{
		letras.innerText=50-caracteres;
	}

	/**
	 * Cada vez que se escriba un nuevo caracteres en el textarea
	 * debera de restarse de la cuenta maxima de 50 caracteres.
	 * cuando la cantidad total llegue a 50 caracteres, no deberan escribirse
	 * mas caracteres
	 */


}

//onsubmit
formulario.onsubmit=(e)=>{
	e.preventDefault();
	/**
	 * siempre que creemos una expresion regular (regexp) tenemos que instanciar a la clase de
	Regexp
	new RegExp()
	como parametros RegExp me pide el conjunto de caracteres que voy a validar y todo eso lo 
	guardamos en una variable llamada regexLetras
	Ahora para yo poder utilizar el regex tengo que usar la funcion testigo
	accedo mediante el regexletras.test(string) y como parametro me pide un string y esta funcion
	y esta funcion devuelve True o False
	 */
	
	
}



