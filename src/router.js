import index from './views/index.vue'
import about from './views/about.vue'
import contact from './views/contact.vue'

export default {
	routes: [
		{
			path: '/index',
			component: index
		},
		{
			path: '/about',
			component: about
		},
		{
			path: '/contact',
			component: contact
		}
	]
}