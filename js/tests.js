var expect = chai.expect;

function mockRestaurant(){
    return new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
};

function mockListadoRestaurant(){
    var listadoDeRestaurantes= [
    new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
    new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
    new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]),
    new Restaurant(5, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
    new Restaurant(6, "Green salad", "Ensalada", "Berlín", ["17:00", "19:00", "20:30"], "../img/ensalada2.jpg", [8, 3, 2, 1, 8, 7]),
    new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
    new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
    new Restaurant(9, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]),
    new Restaurant(10, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]),
    new Restaurant(11, "Frogburguer", "Hamburguesa", "París", ["12:00", "15:00", "17:30"], "../img/hamburguesa1.jpg", [9, 8, 5, 2, 9]),]
            return new Listado(listadoDeRestaurantes);
};

describe('test Reserva Horarios', ()=> {
    
    var restaurante;
    var horariosOriginal;
    var horariosControl;

    beforeEach(function(){
        restaurante = mockRestaurant();
        horariosOriginal = restaurante.horarios;
        horariosControl = [...restaurante.horarios];
    })

    it('Si esta disponible el horario, se elimina', function(){
        //["13:00", "15:30", "18:00"]
        let horarioAReservar = horariosOriginal[1];
        let resultado = restaurante.reservarHorario(horarioAReservar);
        expect(resultado).that.does.not.include(horarioAReservar);
    });

    it('Si el horario que se reserva no existe, el array se mantiene igual', function(){
        let horarioAReservar = "20:30";
        restaurante.reservarHorario(horarioAReservar);
        expect(horariosOriginal).to.eql(horariosControl);
    });

    it('Intenta reservar un horario sin pasar ningún parametro en la función, el array se mantiene igual',()=>{
        restaurante.reservarHorario();
        expect(horariosOriginal).to.eql(horariosControl);
    });
});

describe('test Puntuacion', ()=>{

    let restaurante;
    let calificaciones;
 
    beforeEach(function() {
        //[6, 7, 9, 10, 5]
        restaurante = mockRestaurant();
        calificaciones  = restaurante.calificaciones;
    });

    it('Dado un restaurant con X calificaciones la puntuación (promedio de las mismas) se calcula de forma correcta',function(){
        let promedioEsperado = 7.4;
        let promedioObtenido = restaurante.obtenerPuntuacion();
        expect(promedioObtenido).to.be.equal(promedioEsperado);
    });

    it ('Dado un array vacio, devuelve el valor 0', function(){
        restaurante.calificaciones = [];
        let promedioObtenido = restaurante.obtenerPuntuacion();
        expect(promedioObtenido).to.be.equal(0);
    });

});

describe ('Test de Calificaciones', () => {
    /*  
        1-Agregar la calificación (8) y chequear si se agrego
        2-Agregar un valor negativo y corrobor que no se agruegue
        3-Que no agregue numeros con decimales
        4-Agregar un string y que no se refleje  */

        let restaurante;

        beforeEach(function(){
            restaurante = mockRestaurant();
        });

        it('Agregar una calificacion (8) y corroborar si se agrega en el array de calificaciones', function(){
            let arrayCalificaciones = restaurante.calificaciones
            restaurante.calificar(8);
            expect(arrayCalificaciones).that.does.include(8);
        });

        it('Agregar un valor negativo y el array de calificaciones se mantiene igual', function(){
            let arrayCalificaciones = restaurante.calificaciones
            restaurante.calificar(-8);
            expect(arrayCalificaciones).that.not.include(-8);
        });

        it('Agregar un numero decimal y que el array se mantenga igual', function(){
            let arrayCalificaciones = restaurante.calificaciones
            restaurante.calificar(8.29);
            expect(arrayCalificaciones).that.not.include(8.29);
        });

        it('gregar un string y que no se refleje', function(){
            let arrayCalificaciones = restaurante.calificaciones
            restaurante.calificar('hola');
            expect(arrayCalificaciones).that.not.include('hola');
        });

});

describe('Test buscar restaurante', () =>{
    
    /*
        1-Buscar un ID existente y que nos devuelva el restaurante correcto
        2-Buscar un ID inexistente y que nos devuelva "No se ha encontrado ningún restaurant"   
        3-Buscar un String y nos devuelva "No se ha encontrado ningún restaurant"
    */
        
    beforeEach(function(){
        restaurante = mockListadoRestaurant();
    });
        it ('Buscar un ID existente y que nos devuelva el restaurante correcto', function(){
            
            var IdRestaurant = listado.buscarRestaurante(1);
                expect(IdRestaurant.nombre).to.be.equal(listadoDeRestaurantes[0].nombre);
            });

        it('Buscar un ID inexistente y que nos devuelva "No se ha encontrado ningún restaurant', () =>{

            let IdRestaurant = listado.buscarRestaurante(39)
            expect(IdRestaurant).to.be.equal("No se ha encontrado ningún restaurant");
        });

        it('Buscar un String y nos devuelva "No se ha encontrado ningún restaurant"', () =>{
            let IdRestaurant = listado.buscarRestaurante("olavarria")
            expect(IdRestaurant).to.be.equal("No se ha encontrado ningún restaurant");
        })
});


describe(' Test Obtener Restaurante', () =>{

    /*
    1-Buscar un filtroRubro, filtroCiudad y filtroHorario y que te retorne un valor valido
    2-Buscar un filtroRubro y filtroCiudad valido y filtroHorario invalido y que retorne "No se encontraron resultados" 
    3-Buscar un filtroRubro y filtroHorario valido y filtroCiudad invalido y que retorne "No se encontraron resultados" 
    4-Buscar un filtroRubro invalido y filtroCiudad  y filtroHorario valido y que retorne "No se encontraron resultados" 
    */

        it ('Buscar un filtroRubro, filtroCiudad y filtroHorario y que te retorne un valor valido', () =>{
         let filtroRestaurante = listado.obtenerRestaurantes("Asiática", "Londres", ["15:00", "14:30", "12:30"]);
         expect(filtroRestaurante[0].nombre).to.be.equal("Mandarín Kitchen");
        })

        it ('Buscar un filtroRubro y filtroCiudad valido y filtroHorario invalido y que retorne "No se encontraron resultados"', () =>{
            let filtroRestaurante = listado.obtenerRestaurantes("Asiatica", "Londres", ["23:00", "15:00", "38:00"]);
            expect(filtroRestaurante).to.be.equal("No se encontraron resultados");
        })

        it ('Buscar un filtroRubro y filtroHorario valido y filtroCiudad invalido y que retorne "No se encontraron resultados"', () =>{
         let filtroRestaurante = listado.obtenerRestaurantes("Asiatica", "Nueva York", ["15:00", "14:30", "12:30"]);
         expect(filtroRestaurante).to.be.equal("No se encontraron resultados");
        })

        it ('Buscar un filtroRubro invalido y filtroCiudad  y filtroHorario valido y que retorne "No se encontraron resultados"', () =>{
            let filtroRestaurante = listado.obtenerRestaurantes("Hamburguesa", "Londres", ["15:00", "14:30", "12:30"]);
            expect(filtroRestaurante).to.be.equal("No se encontraron resultados");
        })
});