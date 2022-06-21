import {
	_content,
	_items,
} from "./FooterApi.js"

export const Footer = {
	data() {
		return {
			name__: 'Footer',
			items: [],
			content: '',
		}
	},
	created() {
		this.items = _items;
		this.content = _content;
	}

}
