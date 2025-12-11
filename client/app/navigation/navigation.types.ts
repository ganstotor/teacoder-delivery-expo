export type TypeRootStackParamList = {
	Home: undefined
	Auth: undefined
	Favorites: undefined
	Search: undefined
	Explorer: undefined
	Profile: undefined
};

export interface IRoute {
	name: keyof TypeRootStackParamList;
	component: React.ComponentType<any>;
}
