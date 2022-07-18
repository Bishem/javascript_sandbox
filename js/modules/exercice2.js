"use strict";

import { addElement, removeLinksDefaultBehavior } from "../utils/functions.js";

(function () {

	const nav = addElement("header", document.body, "", {
		id: "topics",
		class: "flex center align"
	});

	const view = addElement("main", document.body, "", {
		id: "view",
		class: "flex column align"
	});

	const topics = {
		competences: wrapInTopic(nav, "btn-skills"),
		experience: wrapInTopic(nav, "btn-experience"),
		formation: wrapInTopic(nav, "btn-training")
	}
	
	addLink(topics.competences, "Compétences");
	addLink(topics.experience, "Expérience");
	addLink(topics.formation, "Formation");

	Object.keys(topics).forEach(function (key) { linkTopicToView(topics[key], view); });

	removeLinksDefaultBehavior();
})();

function wrapInTopic(parent, identifier) {
	return addElement("div", parent, "", { id: identifier, class: "topic" });
}

function addLink(parent, content) {
	return addElement("a", parent, content, { href:"" });
}

function linkTopicToView(topic, view) {
	
	topic.onclick = function () {

		const articles = view.children;

		let duplicate;

		Object.keys(articles).forEach(key => {

			const article = articles[key];
			const title = article.firstChild;

			if(topic.textContent === title.textContent) {
				duplicate = article;
			}
		})

		if(!duplicate) wrapInArticle(topic, view);
	};
}

function wrapInArticle(topic, view) {

	const article = addElement("div", view, "", { class: "article flex column align" });

	addElement("h1", article, topic.textContent);
	addElement("p", article, "Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non<br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non <br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non <br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?");
}
