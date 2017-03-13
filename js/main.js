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
	if (jsonData !== undefined) {
		htmlContainer.innerHTML += '<ul class="item-list">';
		for (var key in jsonData) {
			htmlContainer.innerHTML += "<li>" + key + "</li>";
			console.log(jsonData[key]);
		}
		htmlContainer.innerHTML += '</ul>';
	}

}

createTree(content, data);