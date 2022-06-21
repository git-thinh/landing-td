function getItems() {
	return [{
			"type": "text",
			"placeholder": "Name",
			"showLabel":"d-none",
			"label":false,
			"nameClassInput": "p-1 w-100"
		},
		{
			"type": "text",
			"placeholder": "Email",
			"showLabel":"d-none",
			"label":false,
			"nameClassInput": "p-1 w-100"
		},
		{
			"type": "checkbox",
			"placeholder": "",
			"showLabel":"d-inline-block",
			"label": "reCAPTCHA",
			"nameClassInput": ""
		},
		{
			"type": "submit",
			"placeholder": false,
			"showLabel":"d-none",
			"label":false,
			"nameClassInput": "bg-black text-white w-100"
		}
	]
}
const _items = getItems();


const _title = `Subscribe to get latest updates. Stay tuned!`

export {
	_title,
	_items
};
