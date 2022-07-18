"use strict";

(function () {

	window.onload = function () {

		console.log(`main : was here`);

		const links = document.getElementsByTagName("a");
		Array.from(links).forEach(link => link.onclick = ev => ev.preventDefault());
	};

})();