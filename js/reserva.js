var Reserva = function (Horario, CantidadDePersonas, PrecioPorPersona, CodigoDeDescuento){
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.PrecioPorPersona = PrecioPorPersona;
    this.CodDescuento = CodigoDeDescuento;
}

Reserva.prototype.precioDeReserva = function (cantidadDePersonas, precioPersona) {
    let precioReserva = cantidadDePersonas*precioPersona;
    return precioReserva;
}

Reserva.prototype.precioFinalReserva = function(precioBase, adicional, descuentos){
    let precioFinal = this.preciobase(cantidadDePersonas,precioPersona) + adicional - descuentos
    return precioFinal;
}

Reserva.prototype.descuentosPorGruposGrandes = function (){
    switch (cantidadPersonas) {
        case 1:
            if (this.cantidadPersonas >=4 || this.cantidadPersonas <= 6){
                return total*0,05;
            }
            break
        case 2: 
        if (this.cantidadPersonas >=7 || this.cantidadPersonas <= 8){
            return total*0,10;
        }
            break;
            case 3: 
        if (this.cantidadPersonas >9){
            return total*0,15;
        }
            break;
        default:
            break;
    }
}

Reserva.prototype.descuentoPorCodigo = function(){
    
}
