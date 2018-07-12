//Global Declaration

let imageArray = document.getElementsByClassName('lb-gallery');
let imageCaption = document.getElementsByClassName('caption');
let lbCounter = document.getElementById('lightbox-counter');
let lbCaption = document.getElementById('lightbox-caption');

let boxCurrent = 0;
let boxPath = '';

console.log(imageArray);
console.log(imageCaption);

// Close Lightbox

function openLightbox(srcPath,imgIndex) {

	document.getElementById('mainContainer').style.display = "block";
	document.getElementById('stagePhoto').src = srcPath;
	boxCurrent = imgIndex;
	boxPath = srcPath;

	lbCounter.innerHTML = (boxCurrent+1) + " / " + imageArray.length; //update lightbox counter indication
	lbCaption.innerHTML = imageCaption[boxCurrent].innerHTML;

}

// Open Lightbox

function closeLightbox() {
	document.getElementById('mainContainer').style.display = "none";
}


// Next Slide

document.getElementById('lightbox-next').onclick = function(event) {

	event.preventDefault();
	if(boxCurrent===(imageArray.length-1)){  //prevent overflow
		boxCurrent = 0;
	}
	else {
		boxCurrent += 1;
	}

	lbCounter.innerHTML = (boxCurrent+1) + " / " + imageArray.length; //update lightbox counter indication
	lbCaption.innerHTML = imageCaption[boxCurrent].innerHTML;
	document.getElementById('stagePhoto').src = imageArray[boxCurrent].src;
}

// Previous Slide

document.getElementById('lightbox-prev').onclick = function(event) {

	event.preventDefault();
	if(boxCurrent===0){  //prevent overflow
		boxCurrent = (imageArray.length-1);
	}
	else {
		boxCurrent -= 1;
	}

	lbCounter.innerHTML = (boxCurrent+1) + " / " + imageArray.length; //update lightbox counter indication
	lbCaption.innerHTML = imageCaption[boxCurrent].innerHTML;
	document.getElementById('stagePhoto').src = imageArray[boxCurrent].src;
}




