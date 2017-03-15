var data = {
	"Mortal Kombat": {
		"Sub-Zero": {},
		"Scorpion": {},
		"Noob Sybot": {}
	},
	"Marvel Universe": {
		"Fantastic Four": {
			"Mr. Fantastic": {},
			"Invisible Woman": {},
			"Human Torch": {},
			"The Thing": {}
		},
		"Spider-Man": {},
		"Avengers": {
			"Captain America":{},
			"Thor":{},
			"Iron-Man":{}
		},
		"X-Men": {
			"POCOMAXA":{},
			"mujik v kolyaske":{},
			"Magneto":{},
			"other guys":{}
		}
	},
	"DC Universe": {
		"Justice League": {
			"SuperMan": {},
			"Batman": {},
			"Wonder Woman": {}
		},
		"Supervillain": {
			"Lex Luthor": {},
			"The Joker": {},
			"Ra's al Ghul": {}
		}
	}
};

var content = document.querySelector('#content');

function createTree (htmlContainer, jsonData) {
	var domContent = '';
	if (jsonData) {
		domContent += '<ul class="item-list">';
		for (var key in jsonData) {
			domContent += "<li>" + key + (jsonData[key] ? "<ul>": "");
			for (var key1 in jsonData[key]) {
				domContent += "<li>" + key1 + (jsonData[key][key1] ? "<ul>": "");
				for (var key2 in jsonData[key][key1]) {
					domContent +=  "<li>" + key2 + "</li>";
				}
				domContent += (jsonData[key][key1] ? "</ul>": "") + "</li>";
			}
			domContent += (jsonData[key] ? "</ul>": "") + "</li>";

		}
		domContent += '</ul>';
		htmlContainer.innerHTML += domContent;
	}

}

createTree(content, data);