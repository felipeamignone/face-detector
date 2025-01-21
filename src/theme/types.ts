export type TextVariant = "title" | "subtitle" | "description" | "link";
export type ButtonVariant = "contained" | "outlined" | "text";
export type InputVariant = 'text' | 'number' | 'password';

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    link: string;
  };
  textVariants: Record<
    TextVariant,
    {
      fontSize: number;
      fontWeight?: "bold" | "normal";
      color: string;
      textDecorationLine?: "underline" | "none";
    }
  >;
  buttonVariants: Record<
    ButtonVariant,
    {
      backgroundColor: string;
      borderColor?: string;
      borderWidth?: number;
      borderRadius?: number;
      textColor: string;
      fontSize: number;
    }
  >;
  inputVariants: Record<InputVariant, {
    borderColor: string;
    backgroundColor: string;
    borderWidth: number;
    fontSize: number;
    placeholderTextColor: string;
  }>;
  spacing: {
    small: number;
    medium: number;
    large: number;
  };
}
