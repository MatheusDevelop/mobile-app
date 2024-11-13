import { BlurView } from "expo-blur";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useNavigation } from "expo-router"; // Usando o hook de navegação do Expo Router
import { useRef, useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";

import ArrowCTARight from "@/components/icons/ArrowCTARight";
import ThrashIcon from "@/components/icons/ThrashIcon";
export default function Camera() {
  const [facing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [dots, setDots] = useState<string>("");
  const cameraRef = useRef<any>(null);
  const navigation = useNavigation<any>(); // Hook de navegação

  useEffect(() => {
    let interval: any;
    if (isAnalyzing) {
      // Animação dos pontos em "Analisando..."
      interval = setInterval(() => {
        setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
      }, 500);
    } else {
      setDots("");
    }
    return () => clearInterval(interval);
  }, [isAnalyzing]);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function takePicture() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri); // Armazena o URI da foto no estado
    }
  }

  function analyzePhoto() {
    setIsAnalyzing(true);
    // Simulação de análise de foto
    setTimeout(() => {
      setIsAnalyzing(false);
      console.log("Análise concluída da foto:", photoUri);
      // Navega para a página de resultado após a análise
      navigation.navigate("result", { photoUri }); // Passe o URI da foto para a próxima página se necessário
    }, 5000); // Simula um tempo de análise de 5 segundos
  }

  function deletePhoto() {
    setPhotoUri(null); // Limpa o URI da foto, voltando à visualização da câmera
  }

  return (
    <View style={styles.container}>
      {photoUri ? (
        <View style={styles.capturedContainer}>
          <Image source={{ uri: photoUri }} style={styles.capturedImage} />
          {isAnalyzing && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#fff" />
              <Text style={styles.loadingText}>Analyzing{dots}</Text>
            </View>
          )}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={deletePhoto} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
              <ThrashIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={analyzePhoto}
              style={styles.analyzeButton}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>Analyze</Text>
                <Text style={styles.buttonTextBold}>Photo</Text>
                <ArrowCTARight />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <BlurView
              intensity={80}
              tint="light"
              style={{ overflow: "hidden", borderRadius: 64 }}
            >
              <TouchableOpacity
                onPress={takePicture}
                style={[
                  {
                    backgroundColor: "#fff",
                    padding: 10,
                    borderRadius: 5,
                  },
                  styles.button,
                ]}
              >
                <View style={styles.insideButton} />
              </TouchableOpacity>
            </BlurView>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "flex-end",
    justifyContent: "center",
    margin: 64,
  },
  button: {
    height: 64,
    width: 64,
    borderRadius: 64,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FFF",
    alignItems: "center",
  },
  insideButton: {
    height: 55,
    width: 55,
    borderRadius: 55,
    borderWidth: 4,
    backgroundColor: "#fff",
    borderColor: "transparent",
  },
  capturedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  capturedImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  loadingOverlay: {
    position: "absolute",
    top: "45%",
    alignSelf: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: "#fff",
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
  },
  buttonRow: {
    marginTop: 20,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  analyzeButton: {
    backgroundColor: "#3D65B0",
    width: 200,
    padding: 15,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    width: 100,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "#fff",
    marginRight: 5,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 8,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Montserrat",
    fontSize: 8,
    color: "#fff",
  },
  buttonTextBold: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 8,
    color: "#fff",
    marginLeft: 2,
    marginRight: 10,
  },
});
