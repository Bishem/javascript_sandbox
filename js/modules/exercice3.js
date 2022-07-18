"use strict";
import { empty as reset, addElement } from "../utils/functions.js";


(function () {

	const topic = document.getElementById("universities");
	const view = document.getElementById("view");

	const france = document.getElementById("france");
	const allemagne = document.getElementById("allemagne");
	const andorre = document.getElementById("andorre");

	process(france, "http://universities.hipolabs.com/search?country=France", topic, view)
	process(allemagne, "http://universities.hipolabs.com/search?country=Allemagne", topic, view)
	process(andorre, "http://universities.hipolabs.com/search?country=Andorre", topic, view)
})();

function process(country, url, topic, view) {
	fetch(url)
		.then(response => response.json())
		.then(data => console.log(data))
		.then(data => country.onclick = data.length <= 50 ? () => display(data) : () => find(data, topic, view))
		.catch(() => country.onclick = () => write("Sorry, we don't know this country", view))

}

function filter(universities, comparator) {
	return universities.filter(university => university.name.startsWith(comparator));
}

function display(universities, view) {

	reset(view);
	universities.forEach(university => addElement("article", view, university.name))
}

function write(message, view) {

	reset(view);
	addElement("article", view, message, { class: "message" });
}

function find(universities, topic, view) {

	const search = addElement("form", topic, "", { id: "search" });
	const query = addElement("input", search, "", { 
		id: "query",
		type: "search",
		name: "query",
		placeholder: "here lies knowledge"
	});

	query.addEventListener("keyup", (ev) => {

		let filtered;
		const comparator = ev.target.textContent;

		if((comparator.length >= 2) && (universities.length > 0)) filtered = filter(universities, comparator);
		
		filtered.length > 50 ? write(`There is ${universities.length} universities starting by that`, view) : display(filtered, view);
	})
}