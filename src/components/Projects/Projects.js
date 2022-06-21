import {
	_title,
	_items,
} from "./ProjectsApi.js"

export const Projects = {
	data() {
		return {
			name__: 'Projects',
			items: [],
			title: '',
		}
	},
	created() {
		this.items = _items;
		this.title = _title;
	}
}
