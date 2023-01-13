import Button from '../button'
import { StyledTextBox, Wrapper, Box } from './styles'

const TextBox = () => {
  return(
    <>
      <Wrapper>
        <StyledTextBox/>
        <Box>
          <Button text="Copy Link"/>
        </Box>
      </Wrapper>
    </>
  )
}

export default TextBox