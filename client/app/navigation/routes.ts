import Home from 'components/screens/home/Home';

import { IRoute } from './navigation.types';
import Search from 'components/screens/search/Search';
import Profile from 'components/screens/profile/Profile';
import Favorites from 'components/screens/favorites/Favorites';
import Explorer from 'components/screens/explorer/Explorer';

export const routes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
  	{
		name: 'Favorites',
		component: Favorites
	},
  	{
		name: 'Search',
		component: Search
	},
  	{
		name: 'Explorer',
		component: Explorer
	},
  	{
		name: 'Profile',
		component: Profile
	}
];
