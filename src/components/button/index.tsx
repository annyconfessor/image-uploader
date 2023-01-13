import { StyledButton } from "./styles"

type TextProps = {
  text: string;
}

const Button = ({text}: TextProps) => {
  return (
    <StyledButton>{text}</StyledButton>
  )
}

export default Button