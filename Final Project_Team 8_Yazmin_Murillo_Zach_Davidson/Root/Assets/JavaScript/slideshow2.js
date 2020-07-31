/* 
   Cruz Landscaping
   Filename: slideshow.js

   Author:   Zachary Davidson
   Date:     7/27/20
   Supporting Files: image1, image2, image3
 */
 /*Createing Varables*/
var i=0;
var images = [];
var time = 2000;

/*Image List*/
images[0] = "assets/images/image2.jpg";
images[1] = "assets/images/image3.jpg";



// change image
	function changeImg(){
		document.slide.src = images[i];
	
	if(i < images.length - 1){
		i++;
	} else {
		i=0;
	}
		setTimeout("changeImg()", time);
	}
	window.onload= changeImg;
	