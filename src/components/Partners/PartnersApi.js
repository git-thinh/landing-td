function getItems() {
	return {
		"partnertTop": [
			"fa-brands fa-python",
			"fa-brands fa-sass",
			"fa-brands fa-vuejs",
			"fa-brands fa-js",
			"fa-brands fa-java",
			"fa-brands fa-php"
		],
		"partnertBottom": [{
				"icon": "bi bi-alarm",
				"value": 50,
				"title": "Finished Products"
			},
			{
				"icon": "fa-solid fa-trophy",
				"value": 70,
				"title": "Regular Customers"
			},
			{
				"icon": "fa-solid fa-wine-glass",
				"value": 48,
				"title": "Deployed Projects"
			},
			{
				"icon": "fa-solid fa-flask",
				"value": 5,
				"title": "Ongoing Projects"
			}
		]
	}
}
const _items = getItems()


const _title = `Our Loyal Customers`

export {
	_title,
	_items
};
