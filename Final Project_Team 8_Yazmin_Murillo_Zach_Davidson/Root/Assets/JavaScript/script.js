/* 
   Cruz Landscaping
   Filename: script.js

   Author:   Zachary Davidson
   Date:     7/27/20
   Supporting Files: none
 */

/* create variables */
var speclwork = document.querySelector("#imageswap1");
var fatherwork = document.querySelector("#imageswap2");
var lumberwork = document.querySelector("#imageswap3");
var teamwork = document.querySelector("#imageswap4");
var figureImage = document.querySelector("img");

/*Staff Page Images*/
function showWork() {
	speclwork.src = "Assets/images/LandscapeWork.jpg";

}

function showFather(){
	fatherwork.src = "Assets/images/father_work.jpg";
	figureImage.alt = "an example of our work";
}

function showLumber(){
	lumberwork.src = "Assets/images/lumber_Work.jpg";
	figureImage.alt = "an example of our work";
}

function showTeam(){
	teamwork.src = "Assets/images/team_Work.jpg";
	figureImage.alt = "an example of our work";
}


/* create even listeners for lsit item clicks */
speclwork.addEventListener("click", showWork, false)
fatherwork.addEventListener("click", showFather, false);
lumberwork.addEventListener("click", showLumber, false);
teamwork.addEventListener("click", showTeam, false);




	

