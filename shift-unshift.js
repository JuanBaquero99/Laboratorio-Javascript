//Metodos para modificar el array original (Mutabilidad)

//Shift()

const colors = ['yellow', 'blue', 'red']
const removedColor = colors.shift()

console.log(colors)
console.log(removedColor)

//Unshift()

const newColors = colors.unshift('Pink', 'Purple')

console.log(colors)
console.log(newColors)

//
function ManagePlaylist (playlist, newSong){
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ['FERXXO 100', 'Tengo Fe', 'Que Putas', 'Passionfruit']
const newSongToAdd = 'Belixe'
    
const updatePlaylist = ManagePlaylist(initialPlaylist, newSongToAdd)
console.log('Initial Playlist: ', initialPlaylist)
console.log('New song to add; ', newSongToAdd)
console.log('Updated playlist: ', updatePlaylist)

//Estos metodos modifican el arreglo original. Podemos ver que al agrega de primeras