// authorization
// if (!localStorage.getItem('isLogged')) {
//     window.location.href = '/index.html';
//   }



// iniciacion de variables de conteiners LEFT-side
const songsConteinerList = document.getElementById("allSongsConteiner")
const playlistConteinerList = document.getElementById("playlistConteiner")
const favoritesConteinerList = document.getElementById("favoritesConteiner")




// canciones
class canciones {
    constructor(id, nombre, artista, album, anio, duracion, genero, caratula, urlCan, isFavorite = false, inCart = false) {
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
        this.inCart = inCart;
    }
}
// todaslascaniones
const todasLasCanciones = [
    // id, nombre, artista, album, año, duracion, genero, caratula, urlCan, isFavorite = false, inCart = false
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
        "Sugar new canciones",
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
        "David Guetta ",
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
        "Ride",
        "twenty one pilots",
        "Blurryface",
        "2015",
        "03:34",
        "Alternativa",
        "./asset/PORTADAS/Car22.png",
        "./asset/AUDIOS/Audio29.mp3"
    ),
    new canciones(30,
        "Wake Me Up",
        "Avicii",
        "Verdadero",
        "2013",
        "04:07",
        "Folktronica",
        "./asset/PORTADAS/Car23.png",
        "./asset/AUDIOS/Audio30.mp3"
    ),
    new canciones(31,
        "Can't Hold us",
        "Macklemore & Ryan Lewis",
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
]
// playlists
class Playlists {

    constructor({ nombrePlaylist, cancionEnLista = [], conteiner }) {
        this.nombrePlaylist = nombrePlaylist;
        this.cancionEnLista = cancionEnLista;
        this.conteiner = conteiner;
    }



    renderList() {
        if (this.cancionEnLista === 0) this.conteiner.innerHTML = ``
        else this.conteiner.innerHTML = this.cancionEnLista.map(song => `
        <div class="busquedacanciones">
        <img class= "portada-cancion" src=${song.caratula} alt="portada-canciones">
        <div class="cancion"> 
          <div class="nombre-cancion">${song.nombre}</div>
          <div class="artista">${song.artista}</div> 
        </div>
       
        <div class="butonesCancion">
            <button id="play"><img src="./asset/play-solid.svg" alt="play" onClick="audio.play()")></button>

            <button id="heart-solid"><img src="./asset/heart-solid.svg" alt="corazon" onClick="favoritos.addCancion(todasLasCanciones[0])"></button>

            <button id="plus"><img src="./asset/plus-solid.svg" alt="plus"  onClick="playlist1.addCancion(todasLasCanciones[0])"></button>
        </div>
    </div>`)
    }

    searchSong(query) {
       
        
        // search solo by nombre
        const resultsNombre = this.cancionEnLista.filter(song => song.nombre.toLowerCase().includes(query.toLowerCase()))
         // por artista
        const resultsArtista = this.cancionEnLista.filter(song => song.artista.toLowerCase().includes(query.toLowerCase()))

        if (resultsNombre.length === 0 && resultsArtista.length === 0  ) this.conteiner.innerHTML = `No se encontraron canciones`
        else  songsConteinerList.innerHTML = resultsArtista.map((song) => `
        <div class="busquedacanciones">
        <img class= "portada-cancion" src=${song.caratula} alt="portada-canciones">
        <div class="cancion"> 
          <div class="nombre-cancion">${song.nombre}</div>
          <div class="artista">${song.artista}</div> 
        </div>
                
        <div class="butonesCancion">
        
        <button id="play"><img src="./asset/play-solid.svg" alt="play" onClick="audio.play()")></button>


            <button id="heart-solid"><img src="./asset/heart-solid.svg" alt="corazon" onClick="favoritos.addCancion(todasLasCanciones[0])"></button>

            <button id="plus"><img src="./asset/plus-solid.svg" alt="plus"  onClick="playlist1.addCancion(todasLasCanciones[0])"></button>
        </div>
    </div>
        `)


    }

    addCancion(cancion) {
        this.cancionEnLista.push(cancion)
        this.renderList()
    }


    removeCancion(cancion) {

        this.cancionEnLista = this.cancionEnLista.filter(song => song !== cancion)

    }
}

// reproductor
// class Reproductor {
//     currentSong;

// constructor(){
//     this.mostrarCancion();
//     this.currentSong=todasLasCanciones[0];
// }
    
// }


// AUDIO setup 
const audio = new Audio ('./asset/AUDIOS/Audio1.mp3')


// botones play, pause y mute de audio

const play = document.getElementById('play-button')
const pause = document.getElementById('pause-button')
const mute = document.getElementById('mute-button')
const volume = document.getElementById('volume-button')

play.addEventListener('click', () => {
    audio.play()
 })

 pause.addEventListener('click', ()=>{
    audio.pause()
 })

 mute.addEventListener('click',()=>{
    audio.muted = true
 })

 volume.addEventListener('click', ()=>{
    audio.muted = false
 })
//  cuando se acaba la cancion 
audio.addEventListener('ended', ()=>{
    audio.src='./asset/AUDIOS/Audio2.mp3'; 
    // usar id 

    audio.play()
})

// botones de canciones en todaslas canciones
const playLittle = document.getElementById('play-little')

playLittle.addEventListener('click', () => {
    // usar id
    audio.play()
})


// botones siguiente y back de audio
const siguiente = document.getElementById('foward-button')
const atras = document.getElementById('back-button')

// ID DE CANCION

// let idCancion = 

// function loadCancion(idCancio){
//     // audio.src=todasLasCanciones[idCancio].urlCan;
//     // audio.src=todasLasCanciones[idCancio].urlCan;
//     // audio.src=todasLasCanciones[idCancio].urlCan;
//     // audio.src=todasLasCanciones[idCancio].urlCan;
// }

// siguiente.addEventListener('click',()=>{
//     if(idCancion < todasLasCanciones.length -1){ 
//         todasLasCanciones.id++;
//         audio.src='.//asset/AUDIOS/
//     }
// })

atras.addEventListener('click',()=>{})




// iniciacion de variables de conteiners RIGTH-side


function cambioCurrentSong(id){

}
const reproductorConteiner = document.getElementById("cancion-Reproductor")
reproductorConteiner.innerHTML = ` 
<img id="albumImg" src="${todasLasCanciones[0].caratula}" alt="album1">
                <div class="infoCancion">
                    <p>Nombre: ${todasLasCanciones[0].nombre}</p>
                    <p>Duración: ${todasLasCanciones[0].duracion}</p>
                    <p>Album: ${todasLasCanciones[0].album}</p>
                    <p>Año: ${todasLasCanciones[0].anio}</p>
                    <p>Género: ${todasLasCanciones[0].genero}</p>
                </div>
`
// creacion de reproductor
// const reproductor= new Reproductor()

// creacion de variables para citar a clases
const allSongs = new Playlists({ nombrePlaylist: "Canciones", cancionEnLista: todasLasCanciones, conteiner: songsConteinerList })
const playlist1 = new Playlists({ nombrePlaylist: "Mi Playlist", conteiner: playlistConteinerList })
const favoritos = new Playlists({ nombrePlaylist: "Favoritos", conteiner: favoritesConteinerList })

// llamado a metodos con las variables que cree arrib

allSongs.renderList()
playlist1.renderList()
favoritos.renderList()


// buscar por enter y boton 
const searchInput = document.getElementById("input-buscardor")
const searchButton = document.getElementById("botonBuscar")
searchButton.addEventListener('click', () => {
    allSongs.searchSong(searchInput.value);
})

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        allSongs.searchSong(searchInput.value);
    }
})
