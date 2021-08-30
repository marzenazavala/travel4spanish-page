import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfilePage from './pages/ProfilePage';
import EightSteps from './pages/EightSteps';
import Home from './pages/Home'

export default function routeConfiguration(){
	return [
		{
			name: 'Register',
			path: '/register',
			component: props => <Register {...props}/>
		},
		{
			name: 'Login',
			path: '/login',
			component: props => <Login {...props}/>
		},
		{
			name: 'Home',
			path: '/',
			exact: true,
			component: props => <Home {...props}/>
		},
		{
			name: 'EightSteps',
			path: '/8-steps',
			component: props => <EightSteps {...props}/>
		},
		{
			name: 'ProfilePage',
			path: '/profile',
			component: props => <ProfilePage {...props}/>,
			auth: true
		}
	]
}