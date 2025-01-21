import ScreenContainer from "../../components/screenContainer";
import ContainedButton from "../../components/containedButton";
import Input from "../../components/input";
import useLogin from "./useLogin";
import { View, Text } from "react-native";
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
    <ScreenContainer>
      <View>
        <Text>Exemplo login:</Text>
        <Text>username: emilys</Text>
        <Text>password: emilyspass</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          onChange={handleChangeUsername}
          value={formState.username}
          placeholder="Nome de usuário"
        />
        <Input
          onChange={handleChangePassword}
          value={formState.password}
          placeholder="Senha"
          secureTextEntry
        />
      </View>
      <ContainedButton onPress={handleLogin} width={200} startIcon="face">
        ENTRAR
      </ContainedButton>
    </ScreenContainer>
  );
}
