import { useNavigation } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Text style={styles.backButtonText}>← Back</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  backButton: {
    marginLeft: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#3D65B0',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
