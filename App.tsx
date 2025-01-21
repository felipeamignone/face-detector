import React from "react";
import AppNavigator from "./src/navigation/navigators";
import { NotifierWrapper } from "react-native-notifier";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView>
      <NotifierWrapper>
        <AppNavigator />
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}
