
const loadAlbums = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "https://jsonplaceholder.typicode.com/albums", false);
	request.send();

	const albums = JSON.parse(request.responseText);

	for (let album of albums) {

		document.getElementById('albums').innerHTML = document.getElementById('albums').innerHTML + `
			<div class="album">
				<h3>${album.id} &ndash; ${album.title}</h3>
				<img class="thumbnail" src="" />
				<div class="description">
					<strong>${album} photos</strong>
					scattate da <a id="author-${album.id}">some author</a>, <a id="location-${album.id}">some place</a>
				</div>
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
}

loadAlbums();

