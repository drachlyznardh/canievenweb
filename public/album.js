
// album = document.getElementById('album')

// function toggleAlbum() {
// 	$('#modal-album').modal("toggle")
// }
// function windowOnClick(event) { if (event.target === album) toggleAlbum(); }

function loadAlbum(id) => {
	$('#modal-album').modal("show")

	fetch('https://jsonplaceholder.typicode.com/albums/' + id).then(response => json()).then(json => {
		$('#album-title').innerHTML = json.title
	})
}

// window.addEventListener("click", windowOnClick)

