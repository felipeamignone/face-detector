import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigators";

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
  const handleLogin = () => {
    navigation.navigate("Tabs");
  };

  return {
    formState,
    handleFormState,
    handleLogin,
  };
};

export default useLogin;
