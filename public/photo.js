
const loadPhoto = (id) => {

	fetch('http://jsonplaceholder.typicode.com/photos?id=' + id).then(response => response.json()).then(json => {
		photo = json[0]
		document.getElementById('photo-img').src = photo.url
		document.getElementById('photo-description').textContent = photo.title
	})

	$('#tabnav a[href=#photo]').tab('show')
}

const backToAlbum = () => {
	$('#tabnav a[href="#album"]').tab('show')
}

