import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const products = [
  import React from 'react';

const products = [
  { id: '1', name: 'Bananas', price: 2.5, unit: 'kg', image: 'https://picsum.photos/id/29/200/200' },
  { id: '2', name: 'Apples', price: 3.8, unit: 'kg', image: 'https://picsum.photos/id/30/200/200' },
  { id: '3', name: 'Whole Milk', price: 4.2, unit: '1L', image: 'https://picsum.photos/id/201/200/200' },
  { id: '4', name: 'Fresh Bread', price: 1.5, unit: 'unit', image: 'https://picsum.photos/id/201/200/200' },
  { id: '5', name: 'Eggs', price: 5.0, unit: 'dozen', image: 'https://picsum.photos/id/292/200/200' },
  { id: '6', name: 'Rice', price: 2.8, unit: 'kg', image: 'https://picsum.photos/id/312/200/200' },
  { id: '7', name: 'Avocado', price: 6.5, unit: 'kg', image: 'https://picsum.photos/id/292/200/200' },
  { id: '8', name: 'Mango', price: 4.9, unit: 'kg', image: 'https://picsum.photos/id/133/200/200' },
  { id: '9', name: 'Tomatoes', price: 3.2, unit: 'kg', image: 'https://picsum.photos/id/1080/200/200' },
  { id: '10', name: 'Carrots', price: 2.1, unit: 'kg', image: 'https://picsum.photos/id/431/200/200' },
  { id: '11', name: 'Chicken Breast', price: 12.5, unit: 'kg', image: 'https://picsum.photos/id/870/200/200' },
  { id: '12', name: 'Salmon', price: 18.9, unit: 'kg', image: 'https://picsum.photos/id/106/200/200' },
  { id: '13', name: 'Orange Juice', price: 4.5, unit: '1L', image: 'https://picsum.photos/id/292/200/200' },
  { id: '14', name: 'Yogurt', price: 3.9, unit: 'unit', image: 'https://picsum.photos/id/201/200/200' },
  { id: '15', name: 'Potatoes', price: 1.8, unit: 'kg', image: 'https://picsum.photos/id/312/200/200' },
  { id: '16', name: 'Onions', price: 2.3, unit: 'kg', image: 'https://picsum.photos/id/133/200/200' },
  { id: '17', name: 'Strawberries', price: 5.8, unit: 'kg', image: 'https://picsum.photos/id/1080/200/200' },
  { id: '18', name: 'Broccoli', price: 4.1, unit: 'kg', image: 'https://picsum.photos/id/431/200/200' },
  { id: '19', name: 'Beef', price: 15.9, unit: 'kg', image: 'https://picsum.photos/id/870/200/200' },
  { id: '20', name: 'Shrimp', price: 22.5, unit: 'kg', image: 'https://picsum.photos/id/106/200/200' },
  { id: '21', name: 'Cheese', price: 8.7, unit: 'kg', image: 'https://picsum.photos/id/292/200/200' },
  { id: '22', name: 'Butter', price: 6.2, unit: 'unit', image: 'https://picsum.photos/id/201/200/200' },
  { id: '23', name: 'Pasta', price: 3.4, unit: 'kg', image: 'https://picsum.photos/id/312/200/200' },
  { id: '24', name: 'Olive Oil', price: 11.5, unit: '500ml', image: 'https://picsum.photos/id/133/200/200' },
  { id: '25', name: 'Chocolate', price: 4.8, unit: 'unit', image: 'https://picsum.photos/id/1080/200/200' },
  { id: '26', name: 'Coffee', price: 7.9, unit: '500g', image: 'https://picsum.photos/id/431/200/200' },
  { id: '27', name: 'Cereal', price: 5.5, unit: 'unit', image: 'https://picsum.photos/id/870/200/200' },
  { id: '28', name: 'Bread Rolls', price: 2.9, unit: '6pcs', image: 'https://picsum.photos/id/106/200/200' },
  { id: '29', name: 'Spinach', price: 3.7, unit: 'kg', image: 'https://picsum.photos/id/292/200/200' },
  { id: '30', name: 'Cucumber', price: 2.4, unit: 'kg', image: 'https://picsum.photos/id/201/200/200' },
  { id: '31', name: 'Pineapple', price: 6.8, unit: 'unit', image: 'https://picsum.photos/id/312/200/200' },
  { id: '32', name: 'Watermelon', price: 8.5, unit: 'unit', image: 'https://picsum.photos/id/133/200/200' },
  { id: '33', name: 'Grapes', price: 5.2, unit: 'kg', image: 'https://picsum.photos/id/1080/200/200' },
  { id: '34', name: 'Lettuce', price: 2.8, unit: 'unit', image: 'https://picsum.photos/id/431/200/200' },
  { id: '35', name: 'Milk Chocolate', price: 4.3, unit: 'unit', image: 'https://picsum.photos/id/870/200/200' },
  { id: '36', name: 'Tuna', price: 9.9, unit: 'can', image: 'https://picsum.photos/id/106/200/200' },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      
      <div className="grid grid-cols-6 gap-4 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="aspect-square bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-3">
              <h3 className="font-semibold text-sm text-gray-800 line-clamp-2 h-10">
                {product.name}
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-lg font-bold text-green-600">
                  ${product.price}
                  <span className="text-xs font-normal text-gray-500">/{product.unit}</span>
                </p>
                <button className="bg-green-600 text-white text-xs px-4 py-1.5 rounded-lg hover:bg-green-700 transition">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
];

const categories = ['All', 'Fruits', 'Dairy', 'Bakery', 'Pantry'];

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderProduct = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>
        S/ {item.price} <Text style={styles.unit}>/{item.unit}</Text>
      </Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🛒 RoboTienda</Text>
        <Text style={styles.headerSubtitle}>AI Grocery • 24/7</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search products... (AI coming soon!)"
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#888"
      />

      {/* Categories */}
      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.category,
              selectedCategory === item && styles.categoryActive,
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === item && styles.categoryTextActive,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        style={styles.categoryList}
      />

      {/* Product Grid */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { backgroundColor: '#22c55e', padding: 20, paddingTop: 60 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  headerSubtitle: { fontSize: 16, color: '#fff', opacity: 0.9 },
  searchBar: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  categoryList: { paddingHorizontal: 15, marginBottom: 10 },
  category: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#f1f5f9',
    borderRadius: 999,
  },
  categoryActive: { backgroundColor: '#22c55e' },
  categoryText: { fontWeight: '600', color: '#334155' },
  categoryTextActive: { color: '#fff' },
  row: { justifyContent: 'space-between', paddingHorizontal: 15 },
  listContent: { paddingBottom: 30 },
  card: {
    width: (width - 45) / 2,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#22c55e' },
  unit: { fontSize: 14, fontWeight: 'normal', color: '#64748b' },
  addButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 10,
    borderRadius: 999,
    marginTop: 12,
    alignItems: 'center',
  },
  addButtonText: { color: '#fff', fontWeight: '600', fontSize: 15 },
});