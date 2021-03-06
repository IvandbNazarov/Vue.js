import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue'

export const routes = [
	{
		path: '', component: Home, name: 'home', components: {
			default: Home,
			'header-top': Header
	} },
	{ path: '/user', component: User, children: [
		{path: '', component: UserStart},	
		{path: ':id', component: UserDetail},	
		{path: ':id/edit', component: UserEdit, name: 'userEdit'}	
	] }
];