
modalAlbum = document.getElementById('album')

function toggleAlbum() { modalAlbum.classList.toggle("show-modal"); }
function windowOnClick(event) { if (event.target === modalAlbum) toggleAlbum(); }

function loadAlbum(id) {
	modalAlbum.innerHTML = id
}

window.addEventListener("click", windowOnClick)

