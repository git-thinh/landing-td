import {
	_title,
	_items,
} from "./PartnersApi.js"

export const Partners = {
	data() {
		return {
			name__: 'Partners',
			top: [],
			bottom:[],
			title: '',
		}
	},
	created() {
		this.top = _items.partnertTop;
		this.bottom = _items.partnertBottom;
		this.title = _title;
	},
}
