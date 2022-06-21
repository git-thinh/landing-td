import {
	_title,
	_description,
	_content,
} from "./ContactUsApi.js"

export const ContactUs = {
	data() {
		return {
			name__: 'ContactUs',
			content: '',
			title: '',
			description: '',
		}
	},
	created() {
		this.content = _content;
		this.description = _description;
		this.title = _title;
	}

}
