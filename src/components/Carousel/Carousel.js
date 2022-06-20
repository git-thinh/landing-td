import {
	_title,
	_description,
	_content,
	_items,
} from "./CarouselApi.js"

export const Carousel = {
	data() {
		return {
			name__: 'Carousel',
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
