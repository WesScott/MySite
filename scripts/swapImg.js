function detImage(toChange){
"use strict";
  if(toChange === "bank"){ changeBank(); }
  else if (toChange === "py"){ changePy(); }
  else if (toChange === "brack"){ changeBrack(); }
  else if (toChange === "market"){ changeMarket(); } 
}


var bankStats = {
  curr : 1,
  ceiling : 5
};
function changeBank(){
	"use strict";
	var image = document.getElementById("bank");
	if(bankStats.curr === 1){
		image.src = "images/programs/Bank2.png";
		bankStats.curr++;
	}
	
	else if(bankStats.curr === 2){
		image.src = "images/programs/Bank3.png";
		bankStats.curr++;
	}
	
	else if(bankStats.curr === 3){
		image.src = "images/programs/Bank4.png";
		bankStats.curr++;
	}
	
	else if(bankStats.curr === 4){
		image.src = "images/programs/Bank5.png";
		bankStats.curr++;
	}

	else if(bankStats.curr === bankStats.ceiling){
		image.src = "images/programs/Bank1.png";
		bankStats.curr = 1;
	}
}


var pyStats = {
  curr : 1,
  ceiling : 3
};
function changePy(){
  "use strict";
	var image = document.getElementById("py");
	if(pyStats.curr === 1){
		image.src = "images/programs/py2.png";
		pyStats.curr++;
	}
	
	else if(pyStats.curr === 2){
		image.src = "images/programs/py3.png";
		pyStats.curr++;
	}

	else if(pyStats.curr === pyStats.ceiling){
		image.src = "images/programs/py1.png";
		pyStats.curr = 1;
	}
}


var brackStats = {
  curr : 1,
  ceiling : 3
};
function changeBrack(){
  "use strict";
	var image = document.getElementById("brack");
	if(brackStats.curr === 1){
		image.src = "images/me.jpg";
		brackStats.curr++;
	}

	else if(brackStats.curr === 2){
		image.src = "images/resume.png";
		brackStats.curr++;
	}
	
	else if(brackStats.curr === brackStats.ceiling){
		image.src = "images/linkedin.png";
		brackStats.curr = 1;
	}
}


var marketStats = {
  curr : 0,
  ceiling : 0
};
function changeMarket(){
  "use strict";
	var image = document.getElementById("mark");
	
}
