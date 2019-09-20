function thankMsg() {
    var fname = " " + document.getElementById("name").value + " ";
    document.getElementById("name").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("message").style.display = "none";
    document.getElementById("smt").style.display = "none";
    document.getElementById("thanktext").innerHTML = "Thank you,<strong>" + fname + "</strong>we will get back to you soon!";
}

function outputUpdate(vol) {
	document.querySelector('#volume').value = vol;
    calc();
}

function outputUpdate2(vol2) {
	document.querySelector('#volume2').value = vol2;
    calc();
}


function calc(){
    var couch = document.getElementById('couch').value;
    var armchair = document.getElementById('armchair').value;
    var ptime = document.getElementById('ptime').value;
    var design = document.getElementById('design').value;
        var vol = document.getElementById('volume').value;
        var vol2 = document.getElementById('volume2').value;
    var estimate = ((couch * armchair * ptime * design * vol * vol2)).toFixed(2);

    estimate = estimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('estimate').innerHTML = "Your Estimate = " + "$ " + estimate;

}
// Project image 1

var modal1 = document.getElementById("pr1Modal");
var img1 = document.getElementById("pr1");
var modal1Img = document.getElementById("img1");
var captionText1 = document.getElementById("caption1");
img1.onclick = function(){
  modal1.style.display = "block";
  modal1Img.src = this.src;
  captionText1.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close1")[0];
span.onclick = function() { 
  modal1.style.display = "none";
}

// Project image 2

var modal2 = document.getElementById("pr2Modal");
var img2 = document.getElementById("pr2");
var modal2Img = document.getElementById("img2");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modal2Img.src = this.src;
  captionText2.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];
span.onclick = function() { 
  modal2.style.display = "none";
}

// Project image 3

var modal3 = document.getElementById("pr3Modal");
var img3 = document.getElementById("pr3");
var modal3Img = document.getElementById("img3");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
  modal3.style.display = "block";
  modal3Img.src = this.src;
  captionText3.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close3")[0];
span.onclick = function() { 
  modal3.style.display = "none";
}

// Project image 4

var modal4 = document.getElementById("pr4Modal");
var img4 = document.getElementById("pr4");
var modal4Img = document.getElementById("img4");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
  modal4.style.display = "block";
  modal4Img.src = this.src;
  captionText4.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close4")[0];
span.onclick = function() { 
  modal4.style.display = "none";
}