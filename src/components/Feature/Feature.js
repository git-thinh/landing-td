import {
	_items,
} from "./FeatureApi.js"

export const Feature = {
	data() {
		return {
			name__: 'Feature',
			items: [],
		}
	},
	created() {
		this.items = _items;
	}

}
