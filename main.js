// buscardor input
// busquedacanciones class de canciones 


// start para el botonbuscador




//     function () {
//         let resultadoBusq = document.getElementById("buscardor").value;
//         //write expresion filter the songs arra by regex
//         let expresion = new RegExp(resultadoBusq, "i");

//         let cancionesFiltradas = canciones.filter(

//             can => expresion.test(can)
//         );


//         // aqui se llama a la nueva array y se cmbia el resultado en pantalla y en consolelog//
//         const desaparece = []

//         desaparece.push(cancionesFiltradas)
//         console.log(desaparece);

//         let resulatdoBusquedaRectangulo = document.getElementsByClassName("busquedacanciones");

//         for (let i = 0; i < resulatdoBusquedaRectangulo.length; i++) {

//             document.getElementsByTagName('ul')[0].innerHTML = desaparece

//         }
//     }

// );
// end para el botonbuscador





// clase de canciones 
class canciones {
    constructor(id, nombre, artista, album, anio, duracion, genero, caratula, urlCan) {
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.album = album;
        this.anio = anio;
        this.duracion = duracion;
        this.genero = genero;
        this.caratula = caratula;
        this.urlCan = urlCan;
    }

    // start getter
    getId() {
        return '${this.id}';
    }
    getCanNombreyArtista() {
        return '${this.nombre} - ${this.artista}';
    }

    getCanNombreyAlbum() {
        return '${this.nombre} - ${this.album}';
    }

    getCanNombreyAnio() {
        return '${this.nombre} - ${this.anio}';
    }

    getCanNombreyDuracion() {
        return '${this.nombre} - ${this.duracion}';
    }

    getCanNombreyGenero() {
        return '${this.nombre} - ${this.genero}';
    }
    getCanNombreyCaratula() {
        return '${this.nombre} - ${this.caratula}';
    }
    getCanNombreyURL() {
        return '${this.nombre} - ${this.urlCan}';
    }




}

// clase de playlist
class playlist {

    constructor(nombrePlalist, listaCanciones, orderEscuchar) {
        this.nombrePlalist = nombrePlalist;
        this.listaCanciones = listaCanciones;
        this.orderEscuchar = orderEscuchar;
    }
    getnombrePlalist() {
        return this.nombrePlalist;
    }

    getPlaylistCanciones() {
        return this.listaCanciones;
    }

    getPlaylistOrdenEscucha() {
        return this.orderEscuchar;
    }

    addSongtoPlaylist(cancion) {
        this.listaCanciones.push(cancion);
    }
    removeSongPlaylist(cancion) {
        this.listaCanciones = this.listaCanciones.filter(can => can !== cancion);
    }

}

// calse reproductor


class reproductor {

    catalogodeCanciones;
    currenSong;
    audio;



    constructor() {
        this.catalogodeCanciones = [
            // id, nombre, artista, album, año, duracion, genero, caratula, urlCan

            new canciones(1,
                "Dame Beso",
                "Kali Uchis",
                "Orquídeas",
                "2024",
                "03:34",
                "Pop",
                "./asset/PORTADAS/Car1.png",
                "./asset/AUDIOS/Audio1.mp3"
            ),
            new canciones(2,
                "Forgiveness",
                "SZA",
                "SOS",
                "2023",
                "02:23",
                "Hip Hop",
                "./asset/PORTADAS/Car2.png",
                "./asset/AUDIOS/Audio2.mp3"
            ),
            new canciones(3,
                "Obsessed",
                "Mariah Carey",
                "Memoirs of an Imperfect Angel",
                "2009",
                "04:02",
                "R&B",
                "./asset/PORTADAS/Car3.png",
                "./asset/AUDIOS/Audio3.mp3"
            ),
            new canciones(4,
                "Rush",
                "Troye Sivan",
                "Something to give each other",
                "2023",
                "02:36",
                "House Pop",
                "./asset/PORTADAS/Car4.png",
                "./asset/AUDIOS/Audio4.mp3"
            ),
            new canciones(5,
                "Telekinesis",
                "Travis Scott, SZA",
                "Utopia",
                "2023",
                "05:55",
                "Hip Hop",
                "./asset/PORTADAS/Car5.png",
                "./asset/AUDIOS/Audio5.mp3"
            ),
            new canciones(6,
                "Bloom",
                "Troye Sivan",
                "Bloom",
                "2018",
                "03:45",
                "Pop",
                "./asset/PORTADAS/Car6.png",
                "./asset/AUDIOS/Audio6.mp3"
            ),
            new canciones(7,
                "Prom",
                "SZA",
                "CTRL",
                "2017",
                "03:17",
                "R&B",
                "./asset/PORTADAS/Car7.png",
                "./asset/AUDIOS/Audio7.mp3"
            ),
            new canciones(8,
                "Diosa",
                "kali Uchis",
                "Orquídeas",
                "2024",
                "02:37",
                "Pop",
                "./asset/PORTADAS/Car1.png",
                "./asset/AUDIOS/Audio8.mp3"
            ),
            new canciones(9,
                "Te Mata",
                "kali Uchis",
                "Orquídeas",
                "2024",
                "03:52",
                "Pop",
                "./asset/PORTADAS/Car1.png",
                "./asset/AUDIOS/Audio9.mp3"
            ),
            new canciones(10,
                "Carolina",
                "Karol G",
                "Mañana será bonito",
                "2023",
                "02:41",
                "Urbano",
                "./asset/PORTADAS/Car8.png",
                "./asset/AUDIOS/Audio10.mp3"
            ),
            new canciones(11,
                "Amargura",
                "Karol G",
                "Mañana será bonito",
                "2023",
                "02:49",
                "Urbano",
                "./asset/PORTADAS/Car8.png",
                "./asset/AUDIOS/Audio11.mp3"
            ),
            new canciones(12,
                "Mientras me curo del cora",
                "Karol G",
                "Mañana será bonito",
                "2023",
                "02:42",
                "Urbano",
                "./asset/PORTADAS/Car8.png",
                "./asset/AUDIOS/Audio12.mp3"
            ),
            new canciones(13,
                "Mirando a la luna",
                "Beret y Reik",
                "Resilencia",
                "2022",
                "03:09",
                "Pop",
                "./asset/PORTADAS/Car9.png",
                "./asset/AUDIOS/Audio13.mp3"
            ),
            new canciones(14,
                "Beso robado",
                "Beret",
                "Resilencia",
                "2022",
                "04:19",
                "Pop",
                "./asset/PORTADAS/Car9.png",
                "./asset/AUDIOS/Audio14.mp3"
            ),
            new canciones(15,
                "Perderte",
                "Beret",
                "Resilencia",
                "2022",
                "02:45",
                "Pop",
                "./asset/PORTADAS/Car9.png",
                "./asset/AUDIOS/Audio15.mp3"
            ),
            new canciones(16,
                "Me enamoré",
                "Shakira",
                "El dorado",
                "2017",
                "03:51",
                "Reggaeton",
                "./asset/PORTADAS/Car10.png",
                "./asset/AUDIOS/Audio16.mp3"
            ),
            new canciones(17,
                "TSQ",
                "Humbe",
                "Esencia",
                "2023",
                "02:59",
                "Pop",
                "./asset/PORTADAS/Car11.png",
                "./asset/AUDIOS/Audio17.mp3"
            ),
            new canciones(18,
                "Para siempre ep2",
                "Humbe",
                "Esencia",
                "2023",
                "03:47",
                "Pop",
                "./asset/PORTADAS/Car11.png",
                "./asset/AUDIOS/Audio18.mp3"
            ),
            new canciones(19,
                "Patadas de ahogado",
                "Latin Mafia, Humbe",
                "Patadas de ahogado",
                "2023",
                "03:44",
                "Pop",
                "./asset/PORTADAS/Car12.png",
                "./asset/AUDIOS/Audio19.mp3"
            ),
            new canciones(20,
                "Chocolatito",
                "Pol Granch",
                "Tengo que calmarme",
                "2020",
                "02:59",
                "Pop",
                "./asset/PORTADAS/Car13.png",
                "./asset/AUDIOS/Audio20.mp3"
            ),
            new canciones(21,
                "Kriño",
                "Pol Granch",
                "Amor escupido",
                "2022",
                "03:21",
                "Urbano latino",
                "./asset/PORTADAS/Car14.png",
                "./asset/AUDIOS/Audio21.mp3"
            ),
            new canciones(22,
                "Please notice",
                "Christian Leave",
                "Hope",
                "2016",
                "01:56",
                "Pop",
                "./asset/PORTADAS/Car15.png",
                "./asset/AUDIOS/Audio22.mp3"
            ),
            new canciones(23,
                "Whatever it takes",
                "Imagine Dragons",
                "Envolve",
                "2017",
                "03:21",
                "R&B contemporáneo",
                "./asset/PORTADAS/Car16.png",
                "./asset/AUDIOS/Audio23.mp3"
            ),
            new canciones(24,
                "Zitti e buoni",
                "Måneskin ",
                "Teatro D'Ira",
                "2021",
                "03:19",
                "Rock",
                "./asset/PORTADAS/Car17.png",
                "./asset/AUDIOS/Audio24.mp3"
            ),
            new canciones(25,
                "Sugar new canciones(feat. Francesco Yates)",
                "Robin Schulz",
                "Sugar",
                "2015",
                "03:44",
                "Dance Electronica",
                "./asset/PORTADAS/Car18.png",
                "./asset/AUDIOS/Audio25.mp3"
            ),
            new canciones(26,
                "Memories",
                "David Guetta Feat. Kid Cudi ",
                "One more Love",
                "2010",
                "03:28",
                "Techno pop House Hip Hop",
                "./asset/PORTADAS/Car19.png",
                "./asset/AUDIOS/Audio26.mp3"
            ),
            new canciones(27,
                "Cake By The Ocean",
                "DNCE",
                "DNCE",
                "2016",
                "04:17",
                "Dance-pop",
                "./asset/PORTADAS/Car20.png",
                "./asset/AUDIOS/Audio27.mp3"
            ),
            new canciones(28,
                "Love Me Again",
                "John Newman",
                "Tribute",
                "2013",
                "03:59",
                "Pop",
                "./asset/PORTADAS/Car21.png",
                "./asset/AUDIOS/Audio28.mp3"
            ),
            new canciones(29,
                "Ride ",
                "twenty one pilots",
                "Blurryface",
                "2015",
                "03:34",
                "Alternativa",
                "./asset/PORTADAS/Car22.png",
                "./asset/AUDIOS/Audio29.mp3"
            ),
            new canciones(30,
                "Wake Me Up ",
                "Avicii",
                "Verdadero",
                "2013",
                "04:07",
                "Folktronica",
                "./asset/PORTADAS/Car23.png",
                "./asset/AUDIOS/Audio30.mp3"
            ),
            new canciones(31,
                "CAN'T HOLD US FEAT. RAY DALTON",
                "MACKLEMORE & RYAN LEWIS",
                "The Heist",
                "2012",
                "04:18",
                "Hip Hop",
                "./asset/PORTADAS/Car24.png",
                "./asset/AUDIOS/Audio31.mp3"
            ),
            new canciones(32,
                "Adventure Of A Lifetime ",
                "Coldplay",
                "A Head Full of Dreams",
                "2015",
                "04:23",
                "Pop",
                "./asset/PORTADAS/Car25.png",
                "./asset/AUDIOS/Audio32.mp3"
            )


        ];
        console.log(this.catalogodeCanciones[0])

        this.mostrarCancion();
        this.botonBuscar();

        this.currentSong = this.catalogodeCanciones[0];
        this.audio = new Audio();




    }

    botonBuscar = function () {
        let buscar = document.getElementById("botonBuscar")
        buscar.addEventListener("click", () => {
            this.buscarCancion(document.getElementById("buscardor").value)
        });
        console.log("hola");
    }

    mostrarCancion = function () {
    
        // reecorre el array de la cancion y me dice que cancion es en la descripcion 
        let songs = document.getElementById("buscardor");
        this.catalogodeCanciones.forEach(can => {
            songs.innerHTML += `<li id="busqueda_${canciones.id}" class="cancion">${canciones.nombre}
            </li>;`
        });
    }

    
    buscarCancion = function (InputUser) {
        InputUser = InputUser.trim(InputUser);
        InputUser = InputUser.toLowerCase();

        let songs = document.getElementById("buscardor");
        songs.innerHTML = '';
        let nombre_resultado = this.catalogodeCanciones.filter(can => can.nombre.match(InputUser));
        let album_resultado = this.catalogodeCanciones.filter(can => can.album.match(InputUser));
        let artista_resultado = this.catalogodeCanciones.filter(can => can.artista.match(InputUser));

        let cancionesFiltradas = [...nombre_resultado, ...album_resultado, ...artista_resultado];

        cancionesFiltradas = [...new Set(cancionesFiltradas)]

        this.mostrarCancion(cancionesFiltradas);

    }


    // let inputBuscar = document.getElementById("botonBuscar");
    // console.log(inputBuscar)


    // botonBusqueda = function () {


    //     let inputBuscar = document.getElementById("botonBuscar");

    //     inputBuscar.addEventListener(
    //         "click",
    //         () => { this.buscarCancion(document.getElementById('buscardor').value) });
    //     console.log("entro");
    // }



    // cambio de portada 

    cambioPortada = function () {
        const caratula = document.getElementById("albumImg");
        caratula.src = "/PORTADAS/" + this.currenSong.caratula;
    }

    // method


    play = function (cancion) {
        //play html

        // let audio = new Audio(this.currenSong.urlCan);
        cancion.play();
    }

    stop = function (cancion) {
        //stop html
        console.log(); ("stop")
        // let audio = new Audio(this.currenSong.urlCan);
        cancion.stop();
    }

    // letbuscar y play 

}


let player = new reproductor();
let favoritos = new playlist("Favoritos");
let NewPlaylist = new playlist("Playlist1");


