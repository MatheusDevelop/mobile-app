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
        <View style={styles.alertIconAndText}>
        <AlertIcon />
        <Text style={styles.alertText}>
          Possible ingredients with gluten
        </Text>
        </View>
        
        
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
          <Text style={styles.moreIngredient}>• +2 more ingredients</Text>
        </View>

        {/* "View All" Button */}
        <View style={styles.containerButton}>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
        </View>
        
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
          <Text style={styles.chatText}>Talk with <Text style={styles.aiText}>AI Master Chef →</Text></Text> 
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
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 16,
  },
  alertContainer: {
    width: '100%',
    backgroundColor: '#D85555',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    marginBottom: 16,
  },
  alertIconAndText :{
    flexDirection: 'row',
    width: '100%', 
   alignItems: 'center',
   justifyContent: 'center',
  },
  alertText: {
    width: '60%',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 0,
    textAlign: 'center',
  },
  descriptionContainer: {
    padding: 16,
    marginBottom: 16,
    shadowColor: '#2c2c2c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 30,
    color: '#3f3f3f',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 16,
    fontWeight: 400,
  },
  sectionTitle: {
    color: '3f3f3f',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  ingredientList: {
    marginBottom: 16,
  },
  ingredient: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 12,
    fontWeight: 400,
  },
  moreIngredient: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 12,
    fontWeight: 600,
  },
  warningText: {
    color: '#D14343',
    fontSize: 11,
  },
  containerButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewAllButton: {
    width: '40%',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewAllText: {
    color: '#333333',
    fontWeight: 'bold',
  },
  recommendationContainer: {
    height: '25%',
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
    padding: 16,
    borderRadius: 10,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  recommendationText: {
    width: '95%',
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 16,
  }, 
  chatButton: {
    alignItems: 'flex-start',
  },
  chatText: {
    color: '#fff',
    fontWeight: '500',
  },
  aiText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
