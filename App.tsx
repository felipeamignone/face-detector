import React from "react";
import AppNavigator from "./src/navigation/navigators";
import { NotifierWrapper } from "react-native-notifier";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export default function App() {
  const { height: windowHeight } = Dimensions.get("window");
  return (
    <GestureHandlerRootView>
      <NotifierWrapper>
        <AppNavigator />
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}
