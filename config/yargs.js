
const descripcion = {
        demmand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
}

const completado ={
        default: true,
        alias: 'c',
        desc: 'Marca como colpletada o pendiente la tarea'
    }


const argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer', {descripcion})
                .command('listar', 'Listar todas las tareas')
                .command('actualizar', 'Actualizar el estado de una tarea', {descripcion, completado} )
                .command('borrar', 'Borra un elemento por hacer', {descripcion})
                .help()
                .argv;


module.exports = {
    argv
}
