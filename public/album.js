
const loadAlbums = () => {
	fetch("https://jsonplaceholder.typicode.com/albums").then(response => response.json())
		.then(albums => {
			for (let album of albums) {

				document.getElementById('albums').innerHTML = document.getElementById('albums').innerHTML + `
					<div class="album">
						<a class="thumbnail" onclick="toggleAlbum();loadAlbum(${album.id})">
							<img onclick="toggleAlbum()" id="thumbnail-${album.id}" src="/node.svg"/>
						</a>
						<div class="description">
							<span id="counter-${album.id}">Qualche</span> foto</strong><br/>
							scattate da<br/>
							<span class="glyphicon glyphicon-user"></span> <a id="author-${album.id}">qualcuno</a>,<br/>
							<span class="glyphicon glyphicon-map-marker"></span> <a id="location-${album.id}">da qualche parte</a>
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

				fetch("http://jsonplaceholder.typicode.com/photos?albumId=" + album.id).then(response => response.json())
					.then(json => {
						document.getElementById('counter-' + album.id).innerHTML = json.length
						document.getElementById('thumbnail-' + album.id).src = json[Math.floor(Math.random() * json.length)].thumbnailUrl
				})
			}
	})
}

modalAlbum = document.getElementById('modal-album')

function toggleAlbum() { modalAlbum.classList.toggle("show-modal"); }
function windowOnClick(event) { if (event.target === modalAlbum) toggleAlbum(); }

function loadAlbum(id) {
	modalAlbum.innerHTML = id
}

window.addEventListener("click", windowOnClick)

loadAlbums();

