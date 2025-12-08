import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../global.css';
import Navigation from './navigation/Navigation';

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<Navigation />
			</SafeAreaProvider>
		</>
	);
}
