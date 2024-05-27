import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackRoutesType } from '../../routes/stack.routes';
import { ButtonReturn } from '../../components/ReturnButton';
import { AlignRightSimple } from 'phosphor-react-native';

interface Opcao {
	name: string;
}

const opcoes = [
	{ name: 'Conta' },
	{ name: 'Economia de dados' },
	{ name: 'Idiomas' },
	{ name: 'Reprodução' },
	{ name: 'Conteúdo explícito' },
	{ name: 'Dispositivos' },
	{ name: 'Carro' },
	{ name: 'Redes sociais' },
	{ name: 'Assistentes de voz e aplicativos' }
];


export const Header = () => {

	const { top } = useSafeAreaInsets();

	const paddingTop = top + 10;

	return (
		<View style={[styles.header, { paddingTop }]}>
			<ButtonReturn />
			<Text style={styles.textHeader}>Configurar</Text>
			<View style={{ width: 60 }} />
		</View>
	);
};

const RenderList = () => {
	const RightRow = '>';
	const renderItem = ({ item }: { item: Opcao }) => (
		<View style={styles.itemContainer}>
			<Text style={styles.textOpcoes}>{item.name}</Text>
			<Text style={{ color: '#b1b1b1', fontSize: 26, textAlign: 'center', textAlignVertical: 'center' }}>{RightRow}</Text>
		</View>
	);

	return (
		<FlatList
			ListHeaderComponent={<ProfileCard />}
			data={opcoes}
			renderItem={renderItem}
			keyExtractor={item => item.name}
		/>
	);
};

const ProfileCard = () => {

	const RightRow = '>';
	const { navigate } = useNavigation<NavigationProp<StackRoutesType>>();

	return (
		<TouchableOpacity style={styles.profileContainer} onPress={() => navigate('profile')}>
			<View style={styles.userData}>
				<Image
					width={60}
					height={60}
					borderRadius={50}
					source={{ uri: 'https://lh3.googleusercontent.com/a-/ALV-UjX5BYtNP50SMpBIAu6oTi7TxBFZqOwztqrnff_sWoiWB8nq5kqp=s32-c' }}
				/>
				<View style={{ gap: 5 }}>
					<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }} >Gabriel POO</Text>
					<Text style={{ color: '#b1b1b1', fontSize: 14, fontWeight: 'bold', }}>Ver perfil</Text>
				</View>
			</View>
			<Text style={{ color: '#b1b1b1', fontSize: 36, textAlign: 'center', textAlignVertical: 'center' }}>{RightRow}</Text>

		</TouchableOpacity>
	);
}

export function Settings() {
	return (
		<View style={styles.background}>
			<Header />
			<RenderList />
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#111',
		flex: 1,
	},
	scrollArea: {
		paddingHorizontal: 16,
		paddingVertical: 30,
		gap: 30,
	},
	header: {
		paddingVertical: 15,
		paddingHorizontal: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#232323',
	},
	textHeader: {
		color: 'white',
		fontSize: 16,
		textAlign: 'center',
		alignSelf: 'center',
	},
	profileContainer: {
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	userData: {
		flexDirection: 'row',
		gap: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemContainer: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingVertical: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textOpcoes: {
		fontSize: 16,
		color: '#b1b1b1',
	}
});
