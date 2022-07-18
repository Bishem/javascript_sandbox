"use strict";

(function () {
	
	const view = document.getElementById("view");

	routing(document.getElementById("exercice-1"), "pages/exercice1.html", view);
	routing(document.getElementById("exercice-2"), "pages/exercice2.html", view);
	routing(document.getElementById("exercice-3"), "pages/exercice3.html", view);
})();

function routing(route, source, view) {
	
	route.onclick = function () {
		view.setAttribute("src", source);
	};
}
