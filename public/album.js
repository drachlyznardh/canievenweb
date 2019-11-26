
const loadAlbum = (id) => {

	fetch('https://jsonplaceholder.typicode.com/albums?id=' + id).then(response => response.json()).then(json => {
		document.getElementById('album-title').textContent = json[0].title
	})

	fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id).then(response => response.json()).then(json => {
		$('#album-content').empty()
		// document.getElementById('album-content').empty()
		// document.getElementById('album-content').append(`
		// 	<p>Cane</p>
		// `)
		for (let photo of json) {
			document.getElementById('album-content').append(`
				<div class="gallery-album">
					<!--
					<a class="thumbnail" onclick="loadPhoto(${photo.id})">
						<img src="${photo.thumbnailUrl}"/>
					</a>
					<div class="description">
						<p>${photo.title}</p>
					</div>
					-->
				</div>
			`)
		}
	})

	$('#tabnav a[href="#album"]').tab('show')
}

const backToGallery = () => {
	$('#tabnav a[href="#gallery"]').tab('show')
}

