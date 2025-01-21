import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    formContainer: {
        width: width * 0.6,
    }
});