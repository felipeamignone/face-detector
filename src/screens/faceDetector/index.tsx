import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useEffect, useState, useRef } from "react";
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

export default function FaceDetectorScreen() {
  const [faces, setFaces] = useState<Face[] | null>(null);
  const faceDetectionOptions = useRef<FaceDetectionOptions>({
    performanceMode: "fast",
    autoScale: true,
    windowWidth: Dimensions.get("window").width,
    windowHeight: Dimensions.get("window").height,
  }).current;

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

  return (
    <View style={{ flex: 1 }}>
      {!!device ? (
        <Camera
          isActive={true}
          style={StyleSheet.absoluteFill}
          device={device}
          faceDetectionCallback={handleFacesDetection}
          faceDetectionOptions={faceDetectionOptions}
        />
      ) : (
        <Text>No Device</Text>
      )}
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
          />
        ))}
    </View>
  );
}
