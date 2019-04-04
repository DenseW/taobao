import VueRouter from 'vue-router'
import ohome from '../component/nav/home.vue'
import obuy from '../component/nav/buy.vue'
import olist from '../component/nav/list.vue'
import omy from '../component/nav/my.vue'
import omore from '../component/nav/more.vue'
import osearch from '../component/nav/search.vue'
import oindex from '../component/index.vue'
import ocategroy from '../component/categroy/categroy.vue'

export default new VueRouter({
	routes:[
		{
			path:'/index',
			component:oindex,
			children:[
				{
					path:'/home',
					component:ohome
				},
				{
					path:'/buy',
					component:obuy
				},
				{
					path:'/list',
					component:olist
				},
				{
					path:'/my',
					component:omy
				}
			]
		},
		{
			path:'/search',
			component:osearch
		},
		{
			path:'/more',
			component:omore
		},
		{
			path:'/categroy',
			component:ocategroy
		},
		{
			path:'/*',
			redirect:'/home'
			
		}
	]
})