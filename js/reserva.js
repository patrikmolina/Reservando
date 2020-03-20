var Reserva = function (horario, cantidadPersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDeDescuento = codigoDeDescuento;
}
Reserva.prototype.precioBase = function () {
    let precioBase = this.cantidadPersonas * this.precioPorPersona
    if (precioBase < 0) {
        return ('Ha ingresado un número incorrecto')
    }
    return precioBase;
}

Reserva.prototype.precioFinalReserva = function (adicional, descuentos) {
    debugger
    let precioBase = this.precioBase();
    let precioFinal = precioBase -  this.descuentoPorCodigo(precioBase) + this.adicional(precioBase) - this.descuentosPorGruposGrandes(precioBase);
    return precioFinal;
}

Reserva.prototype.descuentosPorGruposGrandes = function (precioBase) {

    if (this.cantidadPersonas >= 4 || this.cantidadPersonas <= 6) {
        return precioBase * 0.05;
    }

    if (this.cantidadPersonas >= 7 || this.cantidadPersonas <= 8) {
        return precioBase * 0.1;
    }

    if (this.cantidadPersonas >= 9) {
        return precioBase * 0.15;
    }
}


Reserva.prototype.descuentoPorCodigo = function (precioBase) {
    if (this.codigoDeDescuento == 'DES15') {
        return   precioBase * 0.15;
    };

    if (this.codigoDeDescuento == 'DES200') {
        return 200;
    };

    if (this.codigoDeDescuento == 'DES1') {
        return  this.precioPorPersona;
    }
}

Reserva.prototype.adicional = function (precioBase) {
    if ((this.horario.getHours() >= 13 && this.horario.getHours() <= 14) || (this.horario.getHours() >= 20 && this.horario.getHours() <= 21)) {
         
        return precioBase * 0.05;
    }
  
  let diaDeAdicional = this.horario.getDay();
    if (diaDeAdicional == 0 || diaDeAdicional > 4   ){
        return precioBase * 0.1;
    }
}
