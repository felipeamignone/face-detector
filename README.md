# Face Detector

Face Detector App is an app created to study Frame Processor with React Native, this app uses an plugin to facial detector and determines if it is smilling.

## Libraries Used
- [react-native-vision-camera](https://react-native-vision-camera.com/): For advanced camera functionalities.
- [react-native-vision-camera-face-detector](https://github.com/luicfrr/react-native-vision-camera-face-detector): For face detection capabilities.
- [react-navigation](https://reactnavigation.org/): For handling navigation between screens.
- [dummyjson](https://dummyjson.com/): A fake REST API for simulate login service.
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API): To fetch and manage API data.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/felipeamignone/face-detector.git
   ```
2. Navigate to the project directory:
   ```bash
   cd face-detector
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the App
1. Start the Metro bundler:
   ```bash
   npx expo start
   ```
2. Run prebuild to load plugins:
   ```bash
   npx expo prebuild
   ```
4. Run the app on an emulator or connected device:
   ```bash
   #use "--device" to run on phisical device
   npx expo run:android   # For Android
   npx expo run:ios       # For iOS
   ```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributions
Contributions are welcome! Feel free to open issues or submit pull requests for improvements.
