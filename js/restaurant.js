var Restaurant = function (id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function (horarioReservado) {
    let horarios = [...this.horarios];

//     for (var i = 0; i < this.horarios.length; i++) {
//         if (this.horarios[i] === horarioReservado) {
//             this.horarios.splice(i, 1);
//             return;
//         }
//     }
    
    console.log(horarios);
    console.log(this.horarios); //13:00, 18:00
    return this.horarios.filter(horario => horario !== horarioReservado);
}

Restaurant.prototype.calificar = function (nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

//Modularización de función obtenerPuntuacion
//SUMATORIA
function sumatoria(numeros) {
    var suma = 0;
    for (let index = 0; index < numeros.length; index++) {
        suma += numeros[index];
    }
    return suma;
}
//PROMEDIO
function promedio(numeros) {
    var promedio = sumatoria(numeros) / numeros.length;
    return Math.round(promedio * 10) / 10;
}


Restaurant.prototype.obtenerPuntuacion = function () {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        var numeros = this.calificaciones;
        return promedio(numeros);
        /* var sumatoria = 0;
         for (var i = 0; i < this.calificaciones.length; i++) {
             sumatoria += this.calificaciones[i]
         }
         var promedio = sumatoria / this.calificaciones.length;
         return Math.round(promedio * 10) / 10;*/
    }


};

