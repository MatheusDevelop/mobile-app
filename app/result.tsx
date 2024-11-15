import { useRoute, RouteProp } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AlertIcon from "@/components/icons/AlertIcon";
import Typography from "@/components/Typography";
import WarningIcon from "@/components/icons/WarningIcon";
import InfoIcon from "@/components/icons/InfoIcon";
import ArrowCTARight from "@/components/icons/ArrowCTARight";

type RootStackParamList = {
  result: { photoUri: string };
};

type ResultScreenRouteProp = RouteProp<RootStackParamList, "result">;

export default function Result() {
  const route = useRoute<ResultScreenRouteProp>();
  const { photoUri } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.descriptionContainer}>
        <Image source={{ uri: photoUri }} style={styles.image} />
        {/* Gluten Warning */}
        <View
          style={{
            paddingHorizontal: 15,
            paddingBottom: 15,
          }}
        >
          <View style={styles.alertContainer}>
            <View style={styles.alertIconAndText}>
              <AlertIcon />
              <Typography style={styles.alertText}>
                Possible ingredients with gluten
              </Typography>
            </View>
          </View>
          <Typography style={styles.title}>Pasta Dish</Typography>
          <Typography style={styles.description}>
            A pasta dish with shrimp, cherry tomatoes, and basil leaves,
            possibly with a pesto sauce or similar.
          </Typography>

          {/* Ingredients */}
          <Typography style={styles.sectionTitle}>Ingredients</Typography>
          <View style={styles.ingredientList}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View>
                <Typography style={styles.ingredient}>• Pasta</Typography>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 10,
                  backgroundColor: "#FFF9E5",
                  padding: 5,
                }}
              >
                <WarningIcon />
                <Typography style={styles.warningText}>
                  Pode conter: Trigo
                </Typography>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View>
                <Typography style={styles.ingredient}>
                  • Presto Sauce
                </Typography>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 10,
                  backgroundColor: "#FFF9E5",
                  padding: 5,
                }}
              >
                <WarningIcon />
                <Typography style={styles.warningText}>
                  Pode conter: Gluten
                </Typography>
              </View>
            </View>
            <Typography style={styles.ingredient}>• Shrimp</Typography>
            <Typography style={styles.ingredient}>• Basil</Typography>
            <Typography style={styles.moreIngredient}>
              +2 more ingredients
            </Typography>
          </View>

          {/* "View All" Button */}
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.viewAllButton}>
              <Typography style={styles.viewAllText}>View All</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* AI Recommendation */}
      <View style={styles.recommendationContainer}>
        <View style={{ flexDirection: "row" }}>
          <InfoIcon />

          <Typography style={styles.recommendationTitle}>
            AI Recommendation
          </Typography>
        </View>
        <Typography style={styles.recommendationText}>
          For those with gluten intolerance, the possibility of consumption
          depends on the type of pasta used. Common pasta is made from wheat,
          which contains gluten.
        </Typography>
        {/* Link to AI */}

        <TouchableOpacity style={styles.chatButton}>
          <Typography style={styles.chatText}>
            Talk with{" "}
            <Typography style={styles.aiText}>AI Master Chief</Typography>
          </Typography>
          <ArrowCTARight />
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
    width: "100%",
    height: 250,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 16,
  },
  alertContainer: {
    width: "100%",
    backgroundColor: "#D85555",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    marginBottom: 16,
    padding: 10,
  },
  alertIconAndText: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  alertText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 10,
    textAlign: "center",
  },
  descriptionContainer: {
    marginBottom: 16,
    borderRadius: 8,
    borderColor: "#dedede",
    borderWidth: 1,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 16,
    color: "#68737D",
    fontWeight: "bold",
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: "#68737D",
    lineHeight: 14,
    marginBottom: 16,
    fontWeight: 400,
  },
  sectionTitle: {
    fontSize: 12,
    color: "#68737D",
    fontWeight: "600",
  },
  ingredientList: {
    marginBottom: 16,
  },
  ingredient: {
    fontSize: 12,
    flexDirection: "row",
    alignItems: "center",
    color: "#68737D",
    fontWeight: 400,
    marginTop: 5,
  },
  moreIngredient: {
    fontSize: 12,
    color: "#68737D",
    marginTop: 10,
    fontWeight: 600,
  },
  warningText: {
    color: "#C8AD55",
    flexDirection: "row",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 8,
    marginLeft: 5,
  },
  containerButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  viewAllButton: {
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
  },
  viewAllText: {
    color: "#68737D",
    fontSize: 12,
    fontWeight: "bold",
  },
  recommendationContainer: {
    justifyContent: "center",
    backgroundColor: "#3D65B0",
    padding: 35,
    borderRadius: 10,
  },
  recommendationTitle: {
    fontSize: 12,
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: 10,
    marginLeft: 5,
    color: "#fff",
  },
  recommendationText: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 20,
  },
  chatButton: {
    flexDirection:"row",
    alignItems:'center'
  },
  chatText: {
    fontSize: 12,
    marginRight:5,
    color: "#fff",
  },
  aiText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
});
