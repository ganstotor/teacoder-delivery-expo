import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomMenu from 'components/ui/layout/bottom-menu/BottomMemu';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import PrivateNavigator from './PrivateNavigator';
import { TypeRootStackParamList } from './navigation.types';
import { routes } from './routes';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation: React.FC = () => {
	const { user } = useAuth();

	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	);

	console.log(currentRoute);
	

	const navRef = useNavigationContainerRef();

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		);

		return () => {
			navRef.removeListener('state', listener);
		};
	}, []);

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigator />
			</NavigationContainer>
			{user && currentRoute && (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
			)}
		</>
	);
};

export default Navigation;
