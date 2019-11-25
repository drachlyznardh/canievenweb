
const loadAlbums = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "https://jsonplaceholder.typicode.com/albums", false);
	request.send();

	const albums = JSON.parse(request.responseText);

	for (let album of albums) {
		document.getElementById('albums').innerHTML = document.getElementById('albums').innerHTML + `
			<div>
				<h3>${album.title}</h3>
			</div>
		`
	}
}

loadAlbums();

