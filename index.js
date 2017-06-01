// Get the modal
var modal = document.getElementById('myModal');

// Get the modal content
var modalContent = document.getElementById('modal-content');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the Submit button
var submit = document.getElementById("submit");

// Get the form
var form = document.getElementById("form");

// Get all images in an array
var images = document.getElementsByTagName("img")




// After a pause, display the modal
setTimeout(function(){ 
	modal.style.display = "block";
}, 1000);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the use clicks Submit, show borat, then close the modal
submit.onclick = function(e) {
	e.preventDefault();
	console.log(modalContent)
	form.style.display = "none";
	modalContent.style.backgroundImage = "url('images/borat.png')";
	modalContent.style.backgroundSize = "contain";
	modalContent.style.marginTop = "100px";
	modalContent.style.height = "690px";
	modalContent.style.width = "694px";
	setTimeout(function(){
		modal.style.display = "none";
	}, 2000);
};

// Lightbox
for ( i = 0 ; i < images.length ; i++ ) {
	images[i].addEventListener('click', function (e) {
		// Display Modal Background
		modal.style.display = "block";
		// Do not display the form
		form.style.display = "none";
		// Display the image clicked
		modalContent.style.background = "url(" + this.src + ")";
		modalContent.style.backgroundRepeat = "no-repeat";
		// Size modal to image
		modalContent.style.height = "500px";
		modalContent.style.width = "";
		modalContent.style.backgroundSize = "contain";


		// Optional: Display next and previous buttons


	});
}