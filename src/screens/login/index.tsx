import { View } from "react-native";
import useLogin from "./useLogin";

import ThemedScreenContainer from "../../components/themedScreenContainer";
import ThemedButton from "../../components/themedButton";
import ThemedInput from "../../components/themedInput";
import ThemedText from "../../components/themedText";

import { styles } from "./styles";

export default function LoginScreen() {
  const { formState, handleFormState, handleLogin } = useLogin();

  const handleChangeUsername = (text: string) => {
    handleFormState("username", text);
  };

  const handleChangePassword = (text: string) => {
    handleFormState("password", text);
  };

  return (
    <ThemedScreenContainer>
      <View>
        <ThemedText>Exemplo login:</ThemedText>
        <ThemedText>username: emilys</ThemedText>
        <ThemedText>password: emilyspass</ThemedText>
      </View>
      <View style={styles.formContainer}>
        <ThemedInput
          onChangeText={handleChangeUsername}
          value={formState.username}
          placeholder="Nome de usuário"
        />
        <ThemedInput
          onChangeText={handleChangePassword}
          value={formState.password}
          placeholder="Senha"
          variant="password"
        />
      </View>
      <ThemedButton
        variant="outlined"
        title="Entrar"
        onPress={handleLogin}
        icon="face"
      />
    </ThemedScreenContainer>
  );
}
