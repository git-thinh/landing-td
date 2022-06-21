import {
	_title,
} from "./ParallaxApi.js"

export const Parallax = {
	data() {
		return {
			name__: 'Parallax',
			title: '',
		}
	},
	created() {
		this.title = _title;
	}

}
