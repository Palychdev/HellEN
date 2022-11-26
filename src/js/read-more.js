let i = 0;
function read() {
	if (!i) {
		document.getElementById("more").style.display = "none";
		document.getElementById("more").style.height = "0";
		document.getElementById("dots").style.display = "inline";
		document.getElementById("read").innerHTML = "Read more";
		i = 1;
	}
	else {
		document.getElementById("more").style.display = "inline";
		document.getElementById("more").style.height = "auto";
		document.getElementById("dots").style.display = "none";
		document.getElementById("read").innerHTML = "Show less";
		i = 0;
	}
}

read();