import { useEffect, useState, useRef, useMemo } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  Frame,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";
import {
  Face,
  Camera,
  FaceDetectionOptions,
} from "react-native-vision-camera-face-detector";
import { useIsFocused } from "@react-navigation/native";
import { useAppState } from "@react-native-community/hooks";
import ThemedScreenContainer from "../../components/themedScreenContainer";
import ThemedText from "../../components/themedText";

export default function FaceDetectorScreen() {
  const [faces, setFaces] = useState<Face[] | null>(null);
  const faceDetectionOptions = useRef<FaceDetectionOptions>({
    performanceMode: "fast",
    autoScale: true,
    windowWidth: Dimensions.get("window").width,
    windowHeight: Dimensions.get("window").height,
    classificationMode: "all",
  }).current;

  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = useMemo(
    () => isFocused && appState === "active",
    [isFocused, appState]
  );

  const device = useCameraDevice("front");
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    (async () => {
      await requestPermission();
    })();
  }, []);

  function handleFacesDetection(faces: Face[], frame: Frame) {
    if (faces.length > 0) {
      setFaces(faces);
      return;
    }
    setFaces(null);
  }

  if (!hasPermission)
    return (
      <ThemedScreenContainer>
        <ThemedText variant="title">Sem permissão</ThemedText>
      </ThemedScreenContainer>
    );
  if (!device)
    return (
      <ThemedScreenContainer>
        <ThemedText variant="title">Sem dispositivo</ThemedText>
      </ThemedScreenContainer>
    );

  return (
    <View style={{ flex: 1 }}>
      <Camera
        isActive={isActive}
        style={StyleSheet.absoluteFill}
        device={device}
        faceDetectionCallback={handleFacesDetection}
        faceDetectionOptions={faceDetectionOptions}
      />
      {faces !== null &&
        faces.map((face) => (
          <View
            key={`face-at-${face.bounds.x}-${face.bounds.y}`}
            style={{
              position: "absolute",
              top: face.bounds.y,
              left: face.bounds.x,
              width: face.bounds.width,
              height: face.bounds.height,
              borderColor: "red",
              borderWidth: 2,
            }}
          >
            {face.smilingProbability > 0.7 && (
              <Text
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "red",
                  color: "white",
                  padding: 4,
                  fontSize: 16,
                }}
              >
                Sorrindo
              </Text>
            )}
          </View>
        ))}
    </View>
  );
}
