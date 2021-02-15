const fs = require ("fs");

let cursosOf =[
	{
		nombre: 'Node.JS',
		id: 1,
		precio: 0.0,
		duracion: 32
	},
	{
		nombre: 'Ingles',
		id: 2,
		precio: 200000,
		duracion: 64
	},
	{
		nombre: 'Matematicas',
		id: 3,
		precio: 250000,
		duracion: 56
	},
];

function mostrarCursos(){
var contador=1;
for (let i=0; i<cursosOf.length; i++){
	contador=contador+1;
		setTimeout( () => {
			console.log(`El curso se llama:  ${cursosOf[i].nombre} id del curso:  ${cursosOf[i].id} tiene un precio de:  ${cursosOf[i].precio}  y tiene una duracion de:  ${cursosOf[i].duracion}  horas.`);
		}, 2000*contador);
}
}

const opciones = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	cedula:{
		demand: true,
		alias: 'x',
	}

}

const argv = require('yargs')
			.command('inscribir', 'matricular', opciones)
			.argv;

//console.log(argv);

function inscribirCurso(){
	if (argv.id == 1 || argv.id == 2 || argv.id == 3 ){
		let texto = `el estudiante ${argv.nombre} con cedula ${argv.cedula} esta matriculado en el curso ${cursosOf[argv.id-1].nombre} con un precio de ${cursosOf[argv.id-1].precio}`;
		fs.writeFile('inscripcionCurso.txt' , texto, (err) => {
		if(err) throw (err);
		console.log('Usted quedo inscrito en el curso');
	});
	}else {
		console.log('El id que ha seleccionado no corresponde a ningun curso');
		mostrarCursos();
	}
}

inscribirCurso();


//let estudiante = cursosOf.find(info => info.id == id)

