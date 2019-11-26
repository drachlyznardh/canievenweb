
const loadAlbum = (id) => {

	fetch('https://jsonplaceholder.typicode.com/albums?id=' + id).then(response => response.json()).then(json => {
		document.getElementById('album-title').textContent = json[0].title

		fetch('https://jsonplaceholder.typicode.com/users/' + json[0].userId).then(response => response.json()).then(json => {
			var author = document.getElementById('album-author')
			author.textContent = json.name
			author.href = 'http://' + json.website
		})
	})

	fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id).then(response => response.json()).then(json => {
		$('#album-content').empty()
		for (let photo of json) {

			$('#album-content').append(`
				<div class="album-element">
					<a class="thumbnail" onclick="loadPhoto(${photo.id})">
						<img src="${photo.thumbnailUrl}"/>
					</a>
					<div class="description">
						<p class="hide-overflow">${photo.title}</p>
					</div>
				</div>
			`)
		}
	})

	$('#tabnav a[href="#album"]').tab('show')
}

const backToGallery = () => {
	$('#tabnav a[href="#gallery"]').tab('show')
}

