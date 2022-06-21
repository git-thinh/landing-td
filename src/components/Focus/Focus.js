import {
	_title,
	_description,
	_items,
} from "./FocusApi.js"

export const Focus = {
	data() {
		return {
			name__: 'Focus',
			items: [],
			title: '',
			description: '',
		}
	},
	created() {
		this.items = _items;
		this.description = _description;
		this.title = _title;
	}

}
