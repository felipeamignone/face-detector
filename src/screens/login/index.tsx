import ScreenContainer from "../../components/screenContainer";
import ContainedButton from "../../components/containedButton";
import Input from "../../components/input";
import useLogin from "./useLogin";

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
      <Input
        onChange={handleChangeUsername}
        value={formState.username}
        placeholder="Nome de usuário"
      />
      <Input
        onChange={handleChangePassword}
        value={formState.password}
        placeholder="Senha"
      />
      <ContainedButton onPress={handleLogin} width={200} startIcon="face">
        ENTRAR
      </ContainedButton>
    </ScreenContainer>
  );
}
