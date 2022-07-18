"use strict";
export function addElement(name, parent, content, attributes) {

	const element = document.createElement(name);

	if(parent) parent.appendChild(element);
	if(attributes) Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
	
	element.innerHTML = content;

	return element;
}

export function removeLinksDefaultBehavior() {
	
	const links = document.getElementsByTagName("a");
	Array.from(links).forEach(link => link.onclick = ev => ev.preventDefault());
}