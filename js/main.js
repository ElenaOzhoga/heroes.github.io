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

//todo @vm: по поводу браузерных префиксов (моз вебкит и тд) в цссе - большая их часть уже не нужна
//todo @vm: посмотреть можно тут http://caniuse.com/#search=box-shadow

var content = document.querySelector('#content');

function createTree (htmlContainer, jsonData) {
	var domContent = '';
	if (jsonData) {
		//todo @vm: мне кажется будет лучше создавать элементы через криейтэлемент, вместо склейки из кусков текста
		//todo @vm: в случае склейки вероятность ошибки выше, т.к. текст всегда валиден, и хз как он отрендерится если ты забудешь закрыть какой нибудь тег

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

//todo @vm: в целом ок, но думаю такие мелкие таски (50-100 строк) лучше на кодпен выкладывать