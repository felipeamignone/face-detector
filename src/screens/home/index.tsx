import React from "react";
import { View, Text, Image, Linking } from "react-native";
import { styles } from "./styles";

export default function HomeScreen() {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/200" }} // Replace with app logo or relevant image
        style={styles.logo}
      />
      <Text style={styles.title}>Bem vindo ao Face Detector</Text>
      <Text style={styles.description}>
        Face Detector é um aplicativo inovador que utiliza tecnologias avançadas
        para detecção facial em tempo real. Combinando as melhores bibliotecas
        de câmera e algoritmos modernos, o aplicativo oferece uma experiência
        robusta e eficiente. Ideal para desenvolvedores, pesquisadores ou
        entusiastas que desejam explorar o potencial da visão computacional.
      </Text>
      <Text style={styles.subheading}>Bibliotecas utilizadas:</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>
          •{" "}
          <Text
            style={styles.link}
            onPress={() =>
              handleLinkPress("https://react-native-vision-camera.com/")
            }
          >
            react-native-vision-camera
          </Text>
        </Text>
        <Text style={styles.listItem}>
          •{" "}
          <Text
            style={styles.link}
            onPress={() =>
              handleLinkPress(
                "https://github.com/luicfrr/react-native-vision-camera-face-detector"
              )
            }
          >
            react-native-vision-camera-face-detector
          </Text>
        </Text>
        <Text style={styles.listItem}>
          •{" "}
          <Text
            style={styles.link}
            onPress={() => handleLinkPress("https://reactnavigation.org/")}
          >
            react-navigation
          </Text>
        </Text>
        <Text style={styles.listItem}>
          •{" "}
          <Text
            style={styles.link}
            onPress={() => handleLinkPress("https://dummyjson.com/")}
          >
            fake rest api
          </Text>
        </Text>
        <Text style={styles.listItem}>
          •{" "}
          <Text
            style={styles.link}
            onPress={() =>
              handleLinkPress(
                "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
              )
            }
          >
            fetch api
          </Text>
        </Text>
      </View>
    </View>
  );
}
