import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Search() {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollArea}>

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
});