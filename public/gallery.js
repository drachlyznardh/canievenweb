
const loadGallery = () => {
	fetch("https://jsonplaceholder.typicode.com/albums").then(response => response.json()).then(json => {
		$('#gallery').empty()
		for (let album of json) {

			$('#gallery').append(`
				<div class="gallery-album">
					<a class="thumbnail" onclick="loadAlbum(${album.id})">
						<img id="thumbnail-${album.id}" src="/node.svg"/>
					</a>
					<div class="description">
						<span id="counter-${album.id}">Qualche</span> foto</strong><br/>
						scattate da<br/>
						<span class="glyphicon glyphicon-user"></span> <a id="author-${album.id}">qualcuno</a>,<br/>
						<span class="glyphicon glyphicon-map-marker"></span> <a id="location-${album.id}">da qualche parte</a>
					</div>
				</div>
			`)

			fetch("https://jsonplaceholder.typicode.com/users/" + album.userId + "/").then(response => response.json()).then(json => {
				var author = document.getElementById('author-' + album.id)
				author.innerHTML = json.name
				author.href = 'http://' + json.website

				var userLocation = document.getElementById('location-' + album.id)
				userLocation.innerHTML = json.address.city
				userLocation.href = 'https://www.google.com/maps/@' + json.address.geo.lat + ',' + json.address.geo.lng + ',15z'
			})

			fetch("http://jsonplaceholder.typicode.com/photos?albumId=" + album.id).then(response => response.json()).then(json => {
				document.getElementById('counter-' + album.id).innerHTML = json.length
				document.getElementById('thumbnail-' + album.id).src = json[Math.floor(Math.random() * json.length)].thumbnailUrl
			})
		}
	})
}

loadGallery();

