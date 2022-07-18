"use strict";

(function () {
	
	const view = document.getElementById("view");
	
	const links = {
		exo1: document.getElementById("exercice-1"),
		exo2: document.getElementById("exercice-2"),
		exo3: document.getElementById("exercice-3")
	};
	
	links.exo1.onclick = function () {
		view.setAttribute("src", "pages/exercice1.html");
	};
	
	links.exo2.onclick = function () {
		view.setAttribute("src", "pages/exercice2.html");
	};
	
	links.exo3.onclick = function () {
		view.setAttribute("src", "pages/exercice3.html");
	};
	
})();