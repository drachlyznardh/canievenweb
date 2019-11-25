
const loadAlbums = () => {
	fetch("https://jsonplaceholder.typicode.com/albums").then(response => response.json())
		.then(albums => {
			for (let album of albums) {

				document.getElementById('albums').innerHTML = document.getElementById('albums').innerHTML + `
					<div class="album">
						<h3>${album.id} &ndash; ${album.title}</h3>
						<div class="description">
							<span id="counter-${album.id}">Qualche</span> foto</strong><br/>
							scattate da<br/>
							<span class="glyphicon glyphicon-user"></span> <a id="author-${album.id}">qualcuno</a>, <span class="glyphicon glyphicon-map-marker"></span> <a id="location-${album.id}">da qualche parte</a>
						</div>
						<img id="thumbnail-${album.id}" class="thumbnail" src="/node.svg"/>
					</div>
				`

				fetch("https://jsonplaceholder.typicode.com/users/" + album.userId + "/").then(response => response.json())
					.then(json => {
						var author = document.getElementById('author-' + album.id)
						author.innerHTML = json.name
						author.href = json.website

						var userLocation = document.getElementById('location-' + album.id)
						userLocation.innerHTML = json.address.city
						userLocation.href = 'https://www.google.com/maps/@' + json.address.geo.lat + ',' + json.address.geo.lng + ',15z'
				})
			}
	})
}

loadAlbums();

