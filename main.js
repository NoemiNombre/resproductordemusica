// buscardor input
// busquedacanciones class de canciones 

let canciones = ["Cancion 1", "Cancion 2", "Cancion 3", "Cancion 4", "Cancion 5", "Cancion 6", "Cancion 7"];

let contendorBusqueda = document.getElementsByClassName("busquedacanciones");

canciones.forEach(
    can => {
        contendorBusqueda.innerHTML += `<li class="busquedacanciones">${can}`;
        console.log("esto escan" + can)
    }

);

let inputBuscar = document.getElementById("botonBuscar");
console.log(inputBuscar)

inputBuscar.addEventListener(
    "click",

    function () {
        let resultadoBusq = document.getElementById("buscardor").value;
        //write expresion filter the songs arra by regex
        let expresion = new RegExp(resultadoBusq, "i");

        let cancionesFiltradas = canciones.filter(

            can => expresion.test(can)
        );
       

        // aqui se llama a la nueva array y se cmbia el resultado en pantalla y en consolelog//
        const desaparece = []
        
        desaparece.push(cancionesFiltradas)
        console.log(desaparece);

        let resulatdoBusquedaRectangulo = document.getElementsByClassName("busquedacanciones");

        for (let i = 0; i < resulatdoBusquedaRectangulo.length; i++) {

            document.getElementsByTagName('ul')[0].innerHTML = desaparece

        }
    }

);


