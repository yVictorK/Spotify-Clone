import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  banner?: string;
  name?: string;
}

export function RecentSong({ banner, name }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image
        style={styles.banner}
        source={{ uri: banner ?? 'https://lh3.googleusercontent.com/a-/ALV-UjX5BYtNP50SMpBIAu6oTi7TxBFZqOwztqrnff_sWoiWB8nq5kqp=s32-c' }}
      />
      <Text style={styles.name} numberOfLines={2}>
        {name ?? 'Músicas Curtidas'}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    paddingRight: 8,
    overflow: 'hidden',
    backgroundColor: '#4447',
    flexDirection: 'row',
    flexBasis: '40%',
    flexGrow: 1,
    height: 60,
    gap: 8,
  },
  banner: {
    alignSelf: 'stretch',
    aspectRatio: 1,
  },
  name: {
    flex: 1,
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
  }
});