import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../global.css';
import Navigation from './navigation/Navigation';
import AuthProvider from './providers/auth/AuthProvider';

export default function App() {
	return (
		<>
		<AuthProvider>
			<SafeAreaProvider>
				<Navigation />
			</SafeAreaProvider>
			</AuthProvider>
		</>
	);
}
