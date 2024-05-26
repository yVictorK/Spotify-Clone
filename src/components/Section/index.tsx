import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ItemProps = {
  banner?: string;
  name?: string;
  artist?: string;
}

type Props = {
  title: string;
  data: ItemProps[];
}

export const SectionItem = ({ banner, name, artist }: ItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.itemContainer}>
      <Image
        style={styles.banner}
        source={{ uri: banner ?? 'https://lh3.googleusercontent.com/a-/ALV-UjX5BYtNP50SMpBIAu6oTi7TxBFZqOwztqrnff_sWoiWB8nq5kqp=s32-c' }}
      />
      <View>
        <Text style={[styles.text, { fontWeight: 600 }]} numberOfLines={2}>
          {name?? 'Artista'}
        </Text>
        <Text style={[styles.text, styles.songDetails, { fontSize: 12 }]} numberOfLines={1}>
          {artist?? 'Playlist'}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export function Section({ title, data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>{title}</Text>

      <FlatList
        horizontal
        data={data}
        style={{ marginHorizontal: -16 }}
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <SectionItem key={index} {...item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  itemContainer: {
    width: 150,
    gap: 10
  },
  songDetails: {
    color: '#999'
  },
  banner: {
    alignSelf: 'stretch',
    aspectRatio: 1,
  },
  text: {
    color: 'white',
    fontSize: 16
  },
  title: {
    fontWeight: 600,
    fontSize: 20
  },
  list: {
    gap: 20,
    paddingHorizontal: 16,
  }
});