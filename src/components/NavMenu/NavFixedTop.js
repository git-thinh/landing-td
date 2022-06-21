import {
	_logo,
	_items,
} from "./NavFixedTopApi.js"

export const NavFixedTop = {
	data() {
		return {
			name__: 'NavFixedTopApi',
			items: [],
			logo: "",
			activeKey:0
		}
	},
	created() {
		this.items = _items;
		this.logo = _logo;
			document.body.style.paddingTop = '80px';
	},
	methods: {
		selectNav: function(id) {
			this.activeKey = id;
		}
	}

}
