"use strict";

import { addElement, hide, addLink } from "../utils/functions.js";

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
})();

function wrapInTopic(parent, identifier) {
	return addElement("div", parent, "", { id: identifier, class: "topic" });
}

function linkTopicToView(topic, view) {
	
	topic.onclick = function () {

		const articles = view.children;
		
		if (!articles.length) wrapInArticle(topic, view);

		Object.keys(articles).forEach(key => {

			const article = articles[key];
			const title = article.firstChild;

			const isVisible = article.style.visibility !== "hidden";
			const notSameTopic = topic.textContent !== title.textContent;

			if((isVisible) && (notSameTopic)) {
				hide(article);
				wrapInArticle(topic, view);
			}

		})
	};
}

function wrapInArticle(topic, view) {

	const article = addElement("article", view, "", { class: "flex column align" });

	addElement("h1", article, topic.textContent);
	addElement("p", article, "Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non<br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non <br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non <br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?");
}
