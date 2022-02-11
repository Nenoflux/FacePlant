
// Friend object constructor
function friend(name,age, about,dateOfBirth,status,pImage){
	this.name =name;
	this.age =age;
	this.about =about;
	this.dateOfBirth =dateOfBirth;
	this.status =status;
	this.pImage =pImage;
};


//Debug friends
var Garisa = new friend ("Garisa",10,"Totally awesome","2008/07/14","Yeah off of you","images/Profile pictures/IMG_0503.jpg"); 

var James = new friend ("James", 51, "A badass", "1942/06/14", "Totally old","images/Profile pictures/upwork1.png");

var Larry = new friend ("Larry", 34, "Real Family guy", "1971/06/14", "His okay","images/Profile pictures/Larry.jpg");

var Reese = new friend ("Retha", 49, "An old aunty", "1964/06/14", "She is really steamy","images/Profile pictures/Retha.jpg");

var Savage21 = new friend ("21_Savage", 21, "Till a nigga get killed", "2001/06/14", "Being Savage","images/Profile pictures/ouvat.jpg");

var Quavo = new friend ("Quavo_Huncho", 25, "Young rich nigga", "2001/06/14", "Makin Huncho Jack","images/Profile pictures/Takz.jpg");

var Elsie = new friend ("Elsie_Elza",39,"Teachin", "1974/06/15","Really lazy right now","images/Profile pictures/elsiePic.jpg");

var limbo = new friend ("No Face",21,"He is Illu","2121/05/12","Time travelling","images/");

var Fransie = new friend ("TMT_Frans",13,"The notorious family guy","2005/09/24","He is really on annoying","images/Profile pictures/Lin.jpg");

//Array containing Friends11
var Friends = [Garisa, James, Larry, Reese, Savage21, Quavo, Elsie, limbo, Fransie];

//For loop Create html friend Container
for(i=0; i<Friends.length; i++){

//create html profile framework
var profileContainer = document.createElement("div");
var imageContainer = document.createElement("div");
var infoContainer = document.createElement("div");
var impContainer = document.createElement("div");
var image = document.createElement("img");

//filling in profile variables
var info = document.createTextNode("Name: "+Friends[i].name);
var info2 = document.createTextNode("Age: "+Friends[i].age);
var info3 = document.createTextNode("About: "+Friends[i].about);
var info4 = document.createTextNode("Date of birth: "+Friends[i].dateOfBirth);
var info5 = document.createTextNode("Impression: "+Friends[i].status);
image.src =Friends[i].pImage;

//modified Attributes 
image.width=134;
image.height=125;
image.alt="This person has no profile picture"
image.class="facePic";
imageContainer.id="ContainerImage";
infoContainer.id="ContainerInfo";
profileContainer.id="ContainerProfile";

//Assembling profile by appending
infoContainer.appendChild(info);
infoContainer.appendChild(info2);
infoContainer.appendChild(info3);
infoContainer.appendChild(info4);
impContainer.appendChild(info5);
imageContainer.appendChild(image);
profileContainer.appendChild(imageContainer);
profileContainer.appendChild(impContainer);
profileContainer.appendChild(infoContainer);

//Connect assembled profile to the DOM
var friendlist = document.getElementById("friendlist");
friendlist.appendChild(profileContainer);
};