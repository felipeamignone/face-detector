import { TextInput } from "react-native";
import { styles } from "./styles";

interface InputProps {
  onChange: (text: string) => void;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({ onChange, value, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={"#BCBCBC"}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
