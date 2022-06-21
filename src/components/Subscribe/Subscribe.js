import {
	_title,
	_items,
} from "./SubscribeApi.js"

export const Subscribe = {
	data() {
		return {
			name__: 'Subscribe',
			items: [],
			title: '',
		}
	},
	created() {
		this.items = _items;
		this.title = _title;
	}

}
