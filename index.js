document.onreadystatechange = () => {
	if (document.readyState == "complete") {
		setTimeout(() => {
			document.querySelector("body").dataset.ease = "true";
			document.querySelector("body").style.opacity = "1";
		}, 750);

		var lockedindex;
    var locked = false;

		function ClearContent() {
			Array.from(document.getElementsByClassName("contents")).forEach((item) => {
				item.style.opacity = "0";
				item.style.visibility = "hidden";
			});
		}
		ClearContent();

		Array.from(document.getElementsByClassName("tab")).forEach((item, index) => {
			item.onmousedown = () => {
        if (lockedindex == index){
          if (locked) {
            document.getElementsByClassName("contents")[index].style.opacity = "0";
            document.getElementsByClassName("contents")[index].style.visibility = "hidden";
            locked = false;
          } else {
            document.getElementsByClassName("contents")[index].style.visibility = "visible";
            document.getElementsByClassName("contents")[index].style.opacity = "1";
            locked = true;
          }
        } else {
          ClearContent();
          document.getElementsByClassName("contents")[index].style.visibility = "visible";
          document.getElementsByClassName("contents")[index].style.opacity = "1";
          locked = true;
        }
        lockedindex = index;
			};
		});
	} else {
		document.querySelector("body").dataset.ease = "false";
		document.querySelector("body").style.opacity = "0";
	}
};