"use strict";

(function () {

	const subject = document.getElementById("subject");

	window.onload = function () {
		
		subject.setAttribute("hidden", true);
		const response = window.prompt("Voulez-vous voir le contenu de cette page(O/n) ?", "O").toUpperCase();
		if (response === "O") subject.removeAttribute("hidden");

	};

})();