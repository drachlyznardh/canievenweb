
const loadAlbums = () => {
	const xhttp = new XMLHttpRequest();
	request.open("GET", "https://http://jsonplaceholder.typicode.com/albums", false);
	request.send();

	const albums = JSON.parse(request.responseText);
	document.getElementsbyId('albums').innerHTML = albums;

	/* for (album in albums) {
		document.getElementsbyId('albums').innerHTML = document.getElementsbyId('albums').innerHTML + `
			<div>
				<h3>Album</h3>
				${album}
			</div>
		`
	} */
}

loadAlbums();

