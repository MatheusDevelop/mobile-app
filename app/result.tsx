import { useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AlertIcon from '@/components/icons/AlertIcon';

type RootStackParamList = {
  result: { photoUri: string };
};

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'result'>;

export default function Result() {
  const route = useRoute<ResultScreenRouteProp>();
  const { photoUri } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Dish Image */}
      <Image source={{ uri: photoUri }} style={styles.image} />

      {/* Gluten Warning */}
      <View style={styles.alertContainer}>
        <AlertIcon />
        <Text style={styles.alertText}>Possible ingredients with gluten</Text>
      </View>

      {/* Dish Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>Pasta Dish</Text>
        <Text style={styles.description}>
          A pasta dish with shrimp, cherry tomatoes, and basil leaves, possibly with a pesto sauce
          or similar.
        </Text>

        {/* Ingredients */}
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.ingredientList}>
          <Text style={styles.ingredient}>
            • Pasta <Text style={styles.warningText}>⚠️ May contain gluten</Text>
          </Text>
          <Text style={styles.ingredient}>• Shrimp</Text>
          <Text style={styles.ingredient}>• Basil</Text>
          <Text style={styles.ingredient}>• +2 more ingredients</Text>
        </View>

        {/* "View All" Button */}
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* AI Recommendation */}
      <View style={styles.recommendationContainer}>
        <Text style={styles.recommendationTitle}>AI Recommendation</Text>
        <Text style={styles.recommendationText}>
          For those with gluten intolerance, the possibility of consumption depends on the type of
          pasta used. Common pasta is made from wheat, which contains gluten.
        </Text>
        {/* Link to AI */}
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatText}>Talk with AI Master Chef →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 16,
  },
  alertContainer: {
    backgroundColor: '#D14343',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    marginBottom: 16,
  },
  alertText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 10,
    textAlign: 'center',
  },
  descriptionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ingredientList: {
    marginBottom: 16,
  },
  ingredient: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 4,
  },
  warningText: {
    color: '#D14343',
  },
  viewAllButton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewAllText: {
    color: '#3D65B0',
    fontWeight: 'bold',
  },
  recommendationContainer: {
    backgroundColor: '#E8F0FE',
    padding: 16,
    borderRadius: 10,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3D65B0',
  },
  recommendationText: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 16,
  },
  chatButton: {
    alignItems: 'center',
  },
  chatText: {
    color: '#3D65B0',
    fontWeight: 'bold',
  },
});
