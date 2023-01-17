import { StyledButton } from "./styles"

type TextProps = {
  children: string;
  id?: string;
}

const Button = ({children, id}: TextProps) => {
  return (
    <StyledButton id={id}>{children}</StyledButton>
  )
}

export default Button
