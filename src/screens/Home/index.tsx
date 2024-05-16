import { Bell, ClockCountdown, Gear } from 'phosphor-react-native';
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecentSong } from '../../components/RecentSong';
import { Section } from '../../components/Section';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackRoutesType } from '../../routes/stack.routes';

const Recentes: {
  banner?: string;
  name: string;
}[] = [
    {
      name: 'Músicas Curtidas',
      banner: 'data:image/jpeg;base64,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'
    },
    { name: 'Só foi um lance' },
    { name: 'a noite chega' },
    { name: 'No Repeat' },
    { name: 'Meu amigo é gente boa pena que ele fuma pod' },
    { name: 'Odisseia' }
  ]

const Musicas: {
  banner?: string;
  name: string;
  artist: string;
}[] = [
    {
      artist: 'Limyboy',
      name: 'Pó de fada'
    }, {
      artist: 'Foster the People',
      name: 'Imagination'
    }, {
      artist: 'Maps',
      name: 'Maroon 5'
    }, {
      artist: 'G.A, Ryu, The Runner, MC Koringa, Bvga Beatz, Supernova Ent',
      name: 'a noite chega'
    },
  ]

const Header = () => {
  const { navigate } = useNavigation<NavigationProp<StackRoutesType>>();

  return (
    <View style={styles.header}>
      <Text style={[styles.text, styles.title]}>Boa tarde</Text>

      <View style={{ flexDirection: 'row', gap: 20 }}>
        <TouchableOpacity activeOpacity={0.6}>
          <Bell color='white' size={28} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <ClockCountdown color='white' size={28} mirrored />
        </TouchableOpacity>
        <Pressable onPress={() => navigate('settings')}>
          <Gear color='white'  />
        </Pressable>
      </View>
    </View>
  )
}

export function Home() {return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollArea}>
        <Header />

        <View style={styles.recent}>
          {Recentes.map((song, index) => <RecentSong key={index} {...song} />)}
        </View>

        <Section
          title='Seus mixes mais ouvidos'
          data={Musicas}
        />
        <Section
          title='Tocadas recentemente'
          data={Musicas}
        />
        <Section
          title='100% você'
          data={Musicas}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#111',
    flex: 1
  },
  scrollArea: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    gap: 30
  },
  text: {
    color: '#fff',
    fontSize: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  header: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  recent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  }
});