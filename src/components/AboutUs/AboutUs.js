import {
	_title,
	_description,
	_content,
	_items,
} from "./AboutUsApi.js"

export const AboutUs = {
	data() {
		return {
			name__: 'AboutUs',
			items: [],
			content: '',
			title: '',
			description: '',
		}
	},
	created() {
		this.items = _items;
		this.content = _content;
		this.description = _description;
		this.title = _title;
	}

}
