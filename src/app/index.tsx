import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
};

// Generate 42 sample products
const products: Product[] = Array.from({ length: 42 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: Math.floor(15 + Math.random() * 120),
  stock: Math.floor(5 + Math.random() * 45),
  image: `https://picsum.photos/id/${100 + index}/280/280`,
}));

export default function Index() {
  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name} numberOfLines={2}>
        {item.name}
      </Text>
      {/* Price bar */}
      <View style={styles.priceBar}>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <Text style={styles.stock}>
        {item.stock} units in stock
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.header}>🛒 E-Commerce Store</Text>
      <Text style={styles.subheader}>42 Products • Shop Now</Text>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={6}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 4,
    color: '#1e2937',
  },
  subheader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#64748b',
    marginBottom: 16,
  },
  listContent: {
    padding: 8,
    paddingBottom: 40,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
    paddingBottom: 12,
  },
  image: {
    width: '100%',
    height: 110,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 4,
    height: 40,
  },
  priceBar: {
    backgroundColor: '#22c55e',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    marginTop: 6,
  },
  price: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  stock: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 8,
  },
});