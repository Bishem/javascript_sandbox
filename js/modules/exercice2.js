"use strict";

import { addElement } from "../utils/functions.js";

(function () {

	const nav = addElement("header", document.body, "", {
		id: "topics",
		class: "flex center align"
	});

	const view = addElement("main", document.body, "", {
		id: "content",
		class: "flex center wrap"
	});

	const topics = {
		competences: addElement("a", createTopic(nav), "Compétences", { id: "btn-skills" }),
		experience: addElement("a", createTopic(nav), "Expérience", { id: "btn-experience" }),
		formation: addElement("a", createTopic(nav), "Formation", { id: "btn-training" })
	}

	Object.keys(topics).forEach(key => {

		const topic = topics[key];

		topic.onClick = function () {

			addElement("h1", view, topic.innerHTML);
			addElement("p", view, `Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non<br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non <br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non <br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?`);

		};

	});

})();

function createTopic(topics) {
	return addElement("div", topics, "", { class: "topic" });
}

function linkTopicToView(topic, view) {

	topic.onClick = function () {

		addElement("h1", view, topic.innerHTML);
		addElement("p", view, `Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non<br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non <br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>Praesentium necessitatibus inventore provident esse ab, reprehenderit non <br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?<br>veniam vero ratione, fugiat deserunt temporibus porro exercitationem asperiores tempora minus ut delectus est?`);

	};

}
