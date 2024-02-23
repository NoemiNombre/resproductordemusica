// authorization
// if (!localStorage.getItem('isLogged')) {
//     window.location.href = '/index.html';
//   }

// iniciacion de variables de conteiners LEFT-side





const songsConteinerList = document.getElementById("allSongsConteiner");
const playlistConteinerList = document.getElementById("playlistConteiner");
const favoritesConteinerList = document.getElementById("favoritesConteiner");





// canciones

class canciones {
    constructor(
        id,
        nombre,
        artista,
        album,
        anio,
        duracion,
        genero,
        caratula,
        urlCan,
        isFavorite = false,
        inplaylist = false
    ) {
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.album = album;
        this.anio = anio;
        this.duracion = duracion;
        this.genero = genero;
        this.caratula = caratula;
        this.urlCan = urlCan;
        this.isFavorite = isFavorite;
        this.inplaylist = inplaylist;
    }

    getId() {
        return "${this.id}";
    }

    getUrl() {
        return "${this.urlCan";
    }
}
// todaslascaniones
const todasLasCanciones = [
    // id, nombre, artista, album, año, duracion, genero, caratula, urlCan, isFavorite = false, inCart = false
    new canciones(
        1,
        "Dame Beso",
        "Kali Uchis",
        "Orquídeas",
        "2024",
        "03:34",
        "Pop",
        "./asset/PORTADAS/Car1.png",
        "./asset/AUDIOS/Audio1.mp3"
    ),
    new canciones(
        2,
        "Forgiveness",
        "SZA",
        "SOS",
        "2023",
        "02:23",
        "Hip Hop",
        "./asset/PORTADAS/Car2.png",
        "./asset/AUDIOS/Audio2.mp3"
    ),
    new canciones(
        3,
        "Obsessed",
        "Mariah Carey",
        "Memoirs of an Imperfect Angel",
        "2009",
        "04:02",
        "R&B",
        "./asset/PORTADAS/Car3.png",
        "./asset/AUDIOS/Audio3.mp3"
    ),
    new canciones(
        4,
        "Rush",
        "Troye Sivan",
        "Something to give each other",
        "2023",
        "02:36",
        "House Pop",
        "./asset/PORTADAS/Car4.png",
        "./asset/AUDIOS/Audio4.mp3"
    ),
    new canciones(
        5,
        "Telekinesis",
        "Travis Scott, SZA",
        "Utopia",
        "2023",
        "05:55",
        "Hip Hop",
        "./asset/PORTADAS/Car5.png",
        "./asset/AUDIOS/Audio5.mp3"
    ),
    new canciones(
        6,
        "Bloom",
        "Troye Sivan",
        "Bloom",
        "2018",
        "03:45",
        "Pop",
        "./asset/PORTADAS/Car6.png",
        "./asset/AUDIOS/Audio6.mp3"
    ),
    new canciones(
        7,
        "Prom",
        "SZA",
        "CTRL",
        "2017",
        "03:17",
        "R&B",
        "./asset/PORTADAS/Car7.png",
        "./asset/AUDIOS/Audio7.mp3"
    ),
    new canciones(
        8,
        "Diosa",
        "kali Uchis",
        "Orquídeas",
        "2024",
        "02:37",
        "Pop",
        "./asset/PORTADAS/Car1.png",
        "./asset/AUDIOS/Audio8.mp3"
    ),
    new canciones(
        9,
        "Te Mata",
        "kali Uchis",
        "Orquídeas",
        "2024",
        "03:52",
        "Pop",
        "./asset/PORTADAS/Car1.png",
        "./asset/AUDIOS/Audio9.mp3"
    ),
    new canciones(
        10,
        "Carolina",
        "Karol G",
        "Mañana será bonito",
        "2023",
        "02:41",
        "Urbano",
        "./asset/PORTADAS/Car8.png",
        "./asset/AUDIOS/Audio10.mp3"
    ),
    new canciones(
        11,
        "Amargura",
        "Karol G",
        "Mañana será bonito",
        "2023",
        "02:49",
        "Urbano",
        "./asset/PORTADAS/Car8.png",
        "./asset/AUDIOS/Audio11.mp3"
    ),
    new canciones(
        12,
        "Mientras me curo del cora",
        "Karol G",
        "Mañana será bonito",
        "2023",
        "02:42",
        "Urbano",
        "./asset/PORTADAS/Car8.png",
        "./asset/AUDIOS/Audio12.mp3"
    ),
    new canciones(
        13,
        "Mirando a la luna",
        "Beret y Reik",
        "Resilencia",
        "2022",
        "03:09",
        "Pop",
        "./asset/PORTADAS/Car9.png",
        "./asset/AUDIOS/Audio13.mp3"
    ),
    new canciones(
        14,
        "Beso robado",
        "Beret",
        "Resilencia",
        "2022",
        "04:19",
        "Pop",
        "./asset/PORTADAS/Car9.png",
        "./asset/AUDIOS/Audio14.mp3"
    ),
    new canciones(
        15,
        "Perderte",
        "Beret",
        "Resilencia",
        "2022",
        "02:45",
        "Pop",
        "./asset/PORTADAS/Car9.png",
        "./asset/AUDIOS/Audio15.mp3"
    ),
    new canciones(
        16,
        "Me enamoré",
        "Shakira",
        "El dorado",
        "2017",
        "03:51",
        "Reggaeton",
        "./asset/PORTADAS/Car10.png",
        "./asset/AUDIOS/Audio16.mp3"
    ),
    new canciones(
        17,
        "TSQ",
        "Humbe",
        "Esencia",
        "2023",
        "02:59",
        "Pop",
        "./asset/PORTADAS/Car11.png",
        "./asset/AUDIOS/Audio17.mp3"
    ),
    new canciones(
        18,
        "Para siempre ep2",
        "Humbe",
        "Esencia",
        "2023",
        "03:47",
        "Pop",
        "./asset/PORTADAS/Car11.png",
        "./asset/AUDIOS/Audio18.mp3"
    ),
    new canciones(
        19,
        "Patadas de ahogado",
        "Latin Mafia, Humbe",
        "Patadas de ahogado",
        "2023",
        "03:44",
        "Pop",
        "./asset/PORTADAS/Car12.png",
        "./asset/AUDIOS/Audio19.mp3"
    ),
    new canciones(
        20,
        "Chocolatito",
        "Pol Granch",
        "Tengo que calmarme",
        "2020",
        "02:59",
        "Pop",
        "./asset/PORTADAS/Car13.png",
        "./asset/AUDIOS/Audio20.mp3"
    ),
    new canciones(
        21,
        "Kriño",
        "Pol Granch",
        "Amor escupido",
        "2022",
        "03:21",
        "Urbano latino",
        "./asset/PORTADAS/Car14.png",
        "./asset/AUDIOS/Audio21.mp3"
    ),
    new canciones(
        22,
        "Please notice",
        "Christian Leave",
        "Hope",
        "2016",
        "01:56",
        "Pop",
        "./asset/PORTADAS/Car15.png",
        "./asset/AUDIOS/Audio22.mp3"
    ),
    new canciones(
        23,
        "Whatever it takes",
        "Imagine Dragons",
        "Envolve",
        "2017",
        "03:21",
        "R&B contemporáneo",
        "./asset/PORTADAS/Car16.png",
        "./asset/AUDIOS/Audio23.mp3"
    ),
    new canciones(
        24,
        "Zitti e buoni",
        "Måneskin ",
        "Teatro D'Ira",
        "2021",
        "03:19",
        "Rock",
        "./asset/PORTADAS/Car17.png",
        "./asset/AUDIOS/Audio24.mp3"
    ),
    new canciones(
        25,
        "Sugar new canciones",
        "Robin Schulz",
        "Sugar",
        "2015",
        "03:44",
        "Dance Electronica",
        "./asset/PORTADAS/Car18.png",
        "./asset/AUDIOS/Audio25.mp3"
    ),
    new canciones(
        26,
        "Memories",
        "David Guetta ",
        "One more Love",
        "2010",
        "03:28",
        "Techno pop House Hip Hop",
        "./asset/PORTADAS/Car19.png",
        "./asset/AUDIOS/Audio26.mp3"
    ),
    new canciones(
        27,
        "Cake By The Ocean",
        "DNCE",
        "DNCE",
        "2016",
        "04:17",
        "Dance-pop",
        "./asset/PORTADAS/Car20.png",
        "./asset/AUDIOS/Audio27.mp3"
    ),
    new canciones(
        28,
        "Love Me Again",
        "John Newman",
        "Tribute",
        "2013",
        "03:59",
        "Pop",
        "./asset/PORTADAS/Car21.png",
        "./asset/AUDIOS/Audio28.mp3"
    ),
    new canciones(
        29,
        "Ride",
        "twenty one pilots",
        "Blurryface",
        "2015",
        "03:34",
        "Alternativa",
        "./asset/PORTADAS/Car22.png",
        "./asset/AUDIOS/Audio29.mp3"
    ),
    new canciones(
        30,
        "Wake Me Up",
        "Avicii",
        "Verdadero",
        "2013",
        "04:07",
        "Folktronica",
        "./asset/PORTADAS/Car23.png",
        "./asset/AUDIOS/Audio30.mp3"
    ),
    new canciones(
        31,
        "Can't Hold us",
        "Macklemore & Ryan Lewis",
        "The Heist",
        "2012",
        "04:18",
        "Hip Hop",
        "./asset/PORTADAS/Car24.png",
        "./asset/AUDIOS/Audio31.mp3"
    ),
    new canciones(
        32,
        "Adventure Of A Lifetime ",
        "Coldplay",
        "A Head Full of Dreams",
        "2015",
        "04:23",
        "Pop",
        "./asset/PORTADAS/Car25.png",
        "./asset/AUDIOS/Audio32.mp3"
    ),
];
let listaActiva = 'Todos';
// playlists
class Playlists {
    constructor({ nombrePlaylist, cancionEnLista = [], conteiner }) {
        this.currentIndex = 0
        this.nombrePlaylist = nombrePlaylist;
        this.cancionEnLista = cancionEnLista;
        this.conteiner = conteiner;




    }

    renderList() {
        if (this.cancionEnLista === 0) this.conteiner.innerHTML = ``;
        else
            this.conteiner.innerHTML = this.cancionEnLista.map(
                (song, index) => `
        <div class="busquedacanciones">
        <img class= "portada-cancion" src=${song.caratula} alt="portada-canciones">
        <div class="cancion"> 
          <div class="nombre-cancion">${song.nombre}</div>
          <div class="artista">${song.artista}</div> 
        </div>
       
        <div class="butonesCancion">
            <button id="${index + 1}"><img src="./asset/play-solid.svg" alt="play" onClick="reproductor.updateContainer(${song.id},${song.isFavorite},${song.inplaylist})" ></button>

            ${song.isFavorite ?
                        ` <button id="heart-solid"><img src="./asset/heart-regular.svg" alt="corazon" onClick="favoritos.removeCancion(${index})"> </button>`
                        :
                        ` <button id="heart-solid"><img src="./asset/heart-solid.svg" alt="corazon" onClick="favoritos.addCancion(todasLasCanciones[${index}],'favoritos')"> </button>`}
          
           ${song.inplaylist ?
                        `<button id="plus"><img src="./asset/trash-solid.svg" alt="plus"  onClick="playlist1.removeCancion(${index})"></button>`
                        :

                        `<button id="plus"><img src="./asset/plus-solid.svg" alt="plus"  onClick="playlist1.addCancion(todasLasCanciones[${index}], 'playList')"></button>`
            }


           

            
        </div>
        </div>`
            );



        let playsong = document.getElementsByClassName("play-boton");
        for (let i = 0; i < playsong.length; i++) {
            playsong[i].addEventListener("click", () => {
                let id = playsong[i].parentElement.getAttribute("data-Song");
                this.currentSong = todasLasCanciones.find((song) => song.id == id);

            });
        }

    }

    searchSong(query) {
        // search solo by nombre
        const resultsNombre = this.cancionEnLista.filter((song) =>
            song.nombre.toLowerCase().includes(query.toLowerCase())
        );

        // por artista
        const resultsArtista = this.cancionEnLista.filter((song) =>
            song.artista.toLowerCase().includes(query.toLowerCase())
        );

        // por genero
        const resultsGenero = this.cancionEnLista.filter((song) =>
            song.genero.toLowerCase().includes(query.toLowerCase())
        );

        let filtroDeCaciones = [
            ...resultsNombre,
            ...resultsArtista,
            ...resultsGenero,
        ];
        filtroDeCaciones = [...new Set(filtroDeCaciones)];

        if (filtroDeCaciones === 0)
            this.conteiner.innerHTML = `No se encontraron canciones`;
        else
            songsConteinerList.innerHTML = filtroDeCaciones.map(
                (song, index) => `
        <div class="busquedacanciones">
        <img class= "portada-cancion" src=${song.caratula} alt="portada-canciones">
        <div class="cancion"> 
          <div class="nombre-cancion">${song.nombre}</div>
          <div class="artista">${song.artista}</div> 
        </div>
                
        <div class="butonesCancion">
        <button id="${index + 1}"><img src="./asset/play-solid.svg" alt="play" onClick="reproductor.updateContainer(${song.id},${song.isFavorite},${song.inplaylist})" ></button>

        ${song.isFavorite ?
                    ` <button id="heart-solid"><img src="./asset/heart-regular.svg" alt="corazon" onClick="favoritos.removeCancion(${index})"> </button>`
                    :
                    ` <button id="heart-solid"><img src="./asset/heart-solid.svg" alt="corazon" onClick="favoritos.addCancion(todasLasCanciones[${index}],'favoritos')"> </button>`}
      
       ${song.inplaylist ?
                    `<button id="plus"><img src="./asset/trash-solid.svg" alt="plus"  onClick="playlist1.removeCancion(${index})"></button>`
                    :

                    `<button id="plus"><img src="./asset/plus-solid.svg" alt="plus"  onClick="playlist1.addCancion(todasLasCanciones[${index}], 'playList')"></button>`
        }


       

        
    </div>
    </div>
        `
            );
    }

    addCancion(cancion, lista) {
        if (!this.cancionEnLista.includes(cancion)) {
            if (lista == 'favoritos') {
                cancion.isFavorite = true

            }

            if (lista == 'playList') {
                cancion.inplaylist = true
            }
            console.log(cancion)

            this.cancionEnLista.push(cancion);
            this.renderList();
        }



    }

    removeCancion(index) {
        //let index = this.cancionEnLista.indexOf(cancion)
        console.log(index, this.cancionEnLista)
        this.cancionEnLista.splice(index, 1)
        this.renderList();

 
    }



}

const allSongs = new Playlists({
    nombrePlaylist: "Canciones",
    cancionEnLista: todasLasCanciones,
    conteiner: songsConteinerList,
});
const playlist1 = new Playlists({
    nombrePlaylist: "Mi Playlist",
    conteiner: playlistConteinerList,
});
const favoritos = new Playlists({
    nombrePlaylist: "Favoritos",
    conteiner: favoritesConteinerList,
});


// reproductor
class Reproductor {
    constructor(id) {
        this.currentIndex = id
        this.currentSong = todasLasCanciones[id];
        // this.audio = new Audio(todasLasCanciones[2].urlCan);
        this.audio = new Audio(todasLasCanciones[id].urlCan);

        this.iniciarBotones();

    }
    // Method to update the reproductorConteiner inner HTML
    updateContainer(id, isFavorite, inplaylist) {


        this.audio.pause();
        this.currentSong = '';
        this.audio.src = '';



        /*if (!song.isFavorite && ! song.inplaylist ) {
            listaActiva = 'Todos'
            this.currentSong = todasLasCanciones[id]
            this.audio.src = todasLasCanciones[id].urlCan

        } if (listaActiva == 'favoritos') {
            this.currentSong = favoritos.cancionEnLista[id]
            this.audio.src = favoritos.cancionEnLista[id].urlCan

        } if (listaActiva == 'playList') {
            this.currentSong = playlist1.cancionEnLista[id]
            this.audio.src = playlist1.cancionEnLista[id].urlCan

        }*/

        let canciones = []

        if (!isFavorite && !inplaylist) {
            listaActiva = 'Todos'
            canciones = todasLasCanciones

        }
        if (isFavorite) {
            listaActiva = 'favoritos'
            canciones = favoritos.cancionEnLista

        }
        if (inplaylist) {
            listaActiva = 'playList'
            canciones = playlist1.cancionEnLista

        }

        canciones.forEach(cancion => {
            if (cancion.id == id) {
                this.currentSong = cancion
                this.audio.src = cancion.urlCan
            }
        })



        const reproductorConteiner = document.getElementById("cancion-Reproductor");


        reproductorConteiner.innerHTML = `
            <img id="albumImg" src="${this.currentSong.caratula}" alt="album1">
            <div class="infoCancion">
                <p>Nombre: ${this.currentSong.nombre}</p>
                <p>Duración: ${this.currentSong.duracion}</p>
                <p>Album: ${this.currentSong.album}</p>
                <p>Año: ${this.currentSong.anio}</p>
                <p>Género: ${this.currentSong.genero}</p>
            </div>
          `;



        this.audio.play();
    }
    iniciarBotones = function () {
        // play
        let play = document.getElementById("play-button");

        play.addEventListener("click", () => {
            this.audio.play();

        });

        this.audio.addEventListener("ended", () => {
            this.audio.src = "./asset/AUDIOS/";

            this.audio.play();
        });
        // pause
        const pause = document.getElementById("pause-button");

        pause.addEventListener("click", () => {
            this.audio.pause();
        });

        // mute

        const mute = document.getElementById("mute-button");

        mute.addEventListener("click", () => {
            this.audio.muted = true;
        });
        // volumen
        const volume = document.getElementById("volume-button");
        volume.addEventListener("click", () => {
            this.audio.muted = false;
        });

        // siguiente
        const siguiente = document.getElementById("foward-button");
        siguiente.addEventListener('click', () => {
            console.log(this.currentIndex, listaActiva);
            // debugger
            let canciones = []
            if (listaActiva == 'favoritos') {
                canciones = favoritos.cancionEnLista

            } else {
                if (listaActiva == 'playList') {
                    canciones = playlist1.cancionEnLista

                } else {
                    canciones = todasLasCanciones
                }
            }

            /*this.audio.addEventListener("ended", () => {
            this.audio.src = "./asset/AUDIOS/";
        
            this.audio.play();
        });*/



            if (this.currentIndex === (canciones.length - 1)) {
                let nextIndex = this.currentIndex + 1
                this.updateContainer(canciones[nextIndex].id, canciones[nextIndex].isFavorite, canciones[nextIndex].inplaylist);
                this.currentIndex = 0
            }
            else {
                let nextIndex = this.currentIndex + 1
                this.updateContainer(canciones[nextIndex].id, canciones[nextIndex].isFavorite, canciones[nextIndex].inplaylist);
                this.currentIndex++
            }

        })

        // previous
        const atras = document.getElementById("back-button");
        atras.addEventListener("click", () => {
            let canciones = []
            if (listaActiva == 'favoritos') {
                canciones = favoritos.cancionEnLista

            } else {
                if (listaActiva == 'playList') {
                    canciones = playlist1.cancionEnLista

                } else {
                    canciones = todasLasCanciones
                }
            }


            if (this.currentIndex === 0) {
                let prevIndex = this.currentIndex - 1
                this.updateContainer(canciones[prevIndex].id, canciones[prevIndex].isFavorite, canciones[prevIndex].inplaylist);
                this.currentIndex = 0
            }
            else {
                let prevIndex = this.currentIndex - 1
                this.updateContainer(canciones[prevIndex].id, canciones[prevIndex].isFavorite, canciones[prevIndex].inplaylist);
                this.currentIndex--
            }
        });

    };



}

// botones siguiente y back de audioxs
// 
// let audio = new Audio()

// nextButton.addEventListener('click', changeAudio);
// audio.addEventListener('ended', changeAudio);

// let index = 0

// function changeAudio() {
//   if (!audio.src) {
//     audio.src = songs[index];
//     audio.play();
//   } else {
//     if (index === songs.length - 1) {
//       index = 0;
//     } else {
//       index++
//     }
//     audio.src = songs[index];
//     audio.play()
//   }

// }




// iniciacion de variables de conteiners RIGTH-side

const reproductorConteiner = document.getElementById("cancion-Reproductor");

// creacion de reproductor
let reproductor = new Reproductor(0);

reproductorConteiner.innerHTML = ` 
<img id="albumImg" src="${reproductor.currentSong.caratula}" alt="album1">
                <div class="infoCancion">
                    <p>Nombre: ${reproductor.currentSong.nombre}</p>
                    <p>Duración: ${reproductor.currentSong.duracion}</p>
                    <p>Album: ${reproductor.currentSong.album}</p>
                    <p>Año: ${reproductor.currentSong.anio}</p>
                    <p>Género: ${reproductor.currentSong.genero}</p>
                </div>
                
`;


// llamado a metodos con las variables que cree arrib

allSongs.renderList();
playlist1.renderList();
favoritos.renderList();


// creacion de variables para citar a clases

// buscar por enter y boton
const searchInput = document.getElementById("input-buscardor");
const searchButton = document.getElementById("botonBuscar");
searchButton.addEventListener("click", () => {
    allSongs.searchSong(searchInput.value);
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        allSongs.searchSong(searchInput.value);
    }
});