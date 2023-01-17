import Button from '../button'
import { StyledTextBox, Wrapper, Box } from './styles'

const TextBox = () => {
  return(
    <>
      <Wrapper>
        <StyledTextBox/>
        <Box>
          <Button id='copy-link'>Copy Link</Button>
        </Box>
      </Wrapper>
    </>
  )
}

export default TextBox