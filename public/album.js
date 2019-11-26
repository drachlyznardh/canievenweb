
const loadAlbum = (id) => {

	fetch('https://jsonplaceholder.typicode.com/albums?id=' + id).then(response => response.json()).then(json => {
		document.getElementById('album-title').textContent = json[0].title
	})

	fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id).then(response => response.json()).then(json => {
		for (let photo of json) {
			document.getElementById('album-content').append(`
				<div class="gallery-album">
					<a class="thumbnail" onclick="loadPhoto(${photo.id})">
						<img src="${photo.thumbnailUrl}"/>
					</a>
					<div class="description">
						<p>${photo.title}</p>
					</div>
			`)
		}
	})

	$('#modal-album').modal("show")
}

