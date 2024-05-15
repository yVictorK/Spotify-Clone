import { Bell, ClockCountdown, Gear } from 'phosphor-react-native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecentSong } from '../../components/RecentSong';

export function Home() {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollArea}>
          <View style={styles.header}>
            <Text style={[styles.text, styles.title]}>Boa tarde</Text>

            <View style={{ flexDirection: 'row', gap: 20 }}>
              <TouchableOpacity
                activeOpacity={0.6}
                children={(
                  <Bell color='white' size={28} />
                )}
              />
              <TouchableOpacity
                activeOpacity={0.6}
                children={(
                  <ClockCountdown color='white' size={28} />
                )}
              />
              <TouchableOpacity
                activeOpacity={0.6}
                children={(
                  <Gear color='white' size={28} />
                )}
              />
            </View>
          </View>

          <View style={styles.recent}>
            <RecentSong />
            <RecentSong name='Só foi um lance' />
            <RecentSong name='a noite chega' />
            <RecentSong name='Ritmada da Laura' />
            <RecentSong name='Meu amigo é gente boa pena que ele fuma pod' />
            <RecentSong name='Odisseia' />
          </View>

          {/*  */}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#111',
    flex: 1
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
  scrollArea: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 20
  },
  recent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  }
});