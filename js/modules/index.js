"use strict";

(function () {
	
	const view = document.getElementById("view");

	const exo1= document.getElementById("exercice-1");
	const exo2= document.getElementById("exercice-2");
	const exo3= document.getElementById("exercice-3");

	routing(exo1, "pages/exercice1.html", view);
	routing(exo2, "pages/exercice2.html", view);
	routing(exo3, "pages/exercice3.html", view);

	removeLinksDefaultBehavior();
})();

function removeLinksDefaultBehavior() {
	const links = document.getElementsByTagName("a");
	Array.from(links).forEach(link => link.onclick = ev => ev.preventDefault());
}

function routing(route, source, view) {
	route.onclick = function () {
		view.setAttribute("src", source)
	}
}
