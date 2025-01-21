import React from "react";
import { View } from "react-native";
import ThemedLink from "../../components/themedLink";
import ThemedText from "../../components/themedText";
import ThemedScreenContainer from "../../components/themedScreenContainer";

export default function HomeScreen() {
  return (
    <ThemedScreenContainer>
      <ThemedText variant="title">Bem vindo ao Face Detector</ThemedText>
      <ThemedText>
        Face Detector é um aplicativo inovador que utiliza tecnologias avançadas
        para detecção facial em tempo real. Combinando as melhores bibliotecas
        de câmera e algoritmos modernos, o aplicativo oferece uma experiência
        robusta e eficiente. Ideal para desenvolvedores, pesquisadores ou
        entusiastas que desejam explorar o potencial da visão computacional.
      </ThemedText>
      <ThemedText variant="subtitle">Bibliotecas utilizadas:</ThemedText>

      <View>
        <ThemedLink
          title="react-native-vision-camera"
          url="https://react-native-vision-camera.com/"
        />

        <ThemedLink
          title="react-native-vision-camera-face-detector"
          url="https://github.com/luicfrr/react-native-vision-camera-face-detector"
        />

        <ThemedLink
          title="react-navigation"
          url="https://reactnavigation.org/"
        />

        <ThemedLink title="fake rest api" url="https://dummyjson.com/" />

        <ThemedLink
          title="fetch api"
          url="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
        />
      </View>
    </ThemedScreenContainer>
  );
}
