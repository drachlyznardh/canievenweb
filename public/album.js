
const loadAlbum = (id) => {

	fetch('https://jsonplaceholder.typicode.com/albums?id=' + id).then(response => response.json()).then(json => {
		document.getElementById('album-title').textContent = json[0].title
	})

	fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id).then(response => response.json()).then(json => {
		document.getElementById('album-content').textContent = json
	})

	$('#modal-album').modal("show")
	document.getElementById('album-title').textContent = `Album #${id}`
}

