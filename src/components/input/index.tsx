import { TextInput } from "react-native";
import { styles } from "./styles";

interface InputProps {
  onChange: (text: string) => void;
  value: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ onChange, value, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={"#BCBCBC"}
    />
  );
};

export default Input;
