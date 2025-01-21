import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Notifier, Easing, NotifierComponents } from "react-native-notifier";
import { RootStackParamList } from "../../navigation/navigators";
import loginService from "../../services/loginService";

const useLogin = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleFormState = (key: keyof typeof formState, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const handleLogin = async () => {
    try {
      const response = await loginService.postLogin(formState);

      if (response) {
        Notifier.showNotification({
          description: "Login efetuado com sucesso!",
          showEasing: Easing.bounce,
          hideOnPress: true,
        });
        navigation.navigate("Tabs");
        return;
      }
    } catch (error) {
      Notifier.showNotification({
        description: "Usuário ou senha inválidos",
        duration: 0,
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: "error",
        },
      });
    }
  };

  return {
    formState,
    handleFormState,
    handleLogin,
  };
};

export default useLogin;
