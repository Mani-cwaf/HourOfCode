document.onreadystatechange = () => {
	if (document.readyState == "complete") {
		setTimeout(() => {
			document.querySelector("body").dataset.ease = "true";
			document.querySelector("body").style.opacity = "1";
		}, 750);
	} else {
		document.querySelector("body").dataset.ease = "false";
		document.querySelector("body").style.opacity = "0";
	}
};