import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ButtonReturn } from "../../components/ReturnButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Header = () => {

    const { top } = useSafeAreaInsets();

    const paddingTop = top + 10;


    return (
        <View style={[styles.header, { paddingTop }]}>
            <ButtonReturn />
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', textAlignVertical: 'center', width: 60, fontWeight: 'bold' }} >...</Text>
        </View>
    );
};

export function Profile() {
    const RightRow = '>';
    return (
        <View style={styles.background}>
            <ScrollView style={styles.scrollArea}>
                <Header />
                <View style={styles.userData}>
                    <Image
                        width={120}
                        height={120}
                        borderRadius={100}
                        source={{ uri: 'https://lh3.googleusercontent.com/a-/ALV-UjX5BYtNP50SMpBIAu6oTi7TxBFZqOwztqrnff_sWoiWB8nq5kqp=s32-c' }}
                    />
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }} >Gabriel POO</Text>
                    <TouchableOpacity style={{ backgroundColor: '#948c8c73', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15 }}>
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', }}>Ver perfil</Text>
                    </TouchableOpacity>
                    <View style={styles.followsContainer}>
                        <View>
                            <Text style={styles.textFollow}>1M</Text>
                            <Text style={styles.textFollow}>SEGUIDORES</Text>
                        </View>
                        <View>
                            <Text style={styles.textFollow}>1</Text>
                            <Text style={styles.textFollow}>SEGUINDO</Text>
                        </View>
                    </View>
                    <View style={styles.playlistContainer}>
                        <Text style={{ textAlign: 'left', color: 'white', fontWeight: 'bold', fontSize: 18 }} >Playlists</Text>
                        <View style={styles.playlistCard}>
                            <Image
                                width={60}
                                height={60}
                                source={{ uri: 'https://lh3.googleusercontent.com/a-/ALV-UjX5BYtNP50SMpBIAu6oTi7TxBFZqOwztqrnff_sWoiWB8nq5kqp=s32-c' }}
                            />
                            <Text style={styles.textPlaylist}>0 curtidas</Text>
                            <Text style={{ color: '#b1b1b1', fontSize: 36, textAlign: 'center', textAlignVertical: 'center' }}>{RightRow}</Text>

                        </View>
                        <View style={styles.playlistCard}>
                            <Image
                                width={60}
                                height={60}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzm_-TkTKqSycvBr8tRyZpV3vkVCVK-_bq7hw8GIGaw&s' }}
                            />
                            <Text style={styles.textPlaylist}>0 curtidas</Text>
                            <Text style={{ color: '#b1b1b1', fontSize: 36, textAlign: 'center', textAlignVertical: 'center' }}>{RightRow}</Text>

                        </View>
                        <View style={styles.playlistCard}>
                            <Image
                                width={60}
                                height={60}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPXML_zsNccPvud3gu4rxYrGTuVxDaOUZHJ63NsITFQ&s' }}
                            />
                            <Text style={styles.textPlaylist}>0 curtidas</Text>
                            <Text style={{ color: '#b1b1b1', fontSize: 36, textAlign: 'center', textAlignVertical: 'center' }}>{RightRow}</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.textFollow}>Visualizar todas as playlists</Text>
                            <Text style={{ color: '#b1b1b1', fontSize: 36, textAlign: 'center', textAlignVertical: 'center' }}>{RightRow}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View >
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#111',
        flex: 1,
    },
    scrollArea: {
        paddingHorizontal: 16,
        paddingBottom: 30,
        gap: 30,
    },
    header: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textHeader: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        alignSelf: 'center',
    },
    userData: {
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    followsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    textFollow: {
        color: '#b1b1b1',
        fontSize: 14,
        textAlign: 'center'
    },
    playlistContainer: {
        width: '100%',
        gap: 15,
        paddingHorizontal: 16,
        paddingVertical: 20,

    },
    playlistCard: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textPlaylist: {
        textAlignVertical: 'bottom',
        color: '#b1b1b1',
        marginLeft: -20,
    }
});

