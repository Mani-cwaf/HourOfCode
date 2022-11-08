function websiteVisits(response) {
	document.getElementById("visits").textContent = response.value;
}

document.onreadystatechange = () => {
	if (document.readyState == "complete") {
		setTimeout(() => {
			document.querySelector("body").dataset.ease = "true";
			document.querySelector("body").style.opacity = "1";
		}, 750);

		var lockedindex;

		function ClearContent() {
			Array.from(document.getElementsByClassName("contents")).forEach((item) => {
				item.style.opacity = "0";
				item.style.visibility = "hidden";
			});
		}
		function ClearLocks() {
			Array.from(document.getElementsByClassName("tab")).forEach((item) => {
				item.dataset.locked = false;
			});
		}
		ClearContent();
		ClearLocks();

		Array.from(document.getElementsByClassName("tab")).forEach((item, index) => {
			item.onmousedown = () => {
				if (lockedindex == index) {
					if (document.getElementById("tabs").dataset.locked == "true") {
						ClearLocks()
						document.getElementsByClassName("contents")[index].style.opacity = "0";
						document.getElementsByClassName("contents")[index].style.visibility = "hidden";
						document.getElementById("tabs").dataset.locked = false;
					} else {
						console.log("KKHDAF");
						ClearLocks();
						document.getElementsByClassName("contents")[index].style.visibility = "visible";
						document.getElementsByClassName("contents")[index].style.opacity = "1";
						document.getElementById("tabs").dataset.locked = true;
						item.dataset.locked = true;
					}
				} else {
					ClearContent();
					ClearLocks();
					document.getElementsByClassName("contents")[index].style.visibility = "visible";
					document.getElementsByClassName("contents")[index].style.opacity = "1";
					document.getElementById("tabs").dataset.locked = true;
					item.dataset.locked = true;
				}
				lockedindex = index;
			};
		});
	} else {
		document.querySelector("body").dataset.ease = "false";
		document.querySelector("body").style.opacity = "0";
	}
};