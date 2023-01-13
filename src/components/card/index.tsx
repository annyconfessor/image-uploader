import Button from '../button'
import ImageUploader from '../image-uploader'

import { StyledCard, Wrapper, Text, Header, P } from './styles'

const Card = () => {
  return (
    <StyledCard>
      <Header>Upload your image</Header>
      <P>File should be Jpeg, Png...</P>
      <ImageUploader/>
      <Text>Or</Text>
      <Wrapper>
        <Button/>
      </Wrapper>
    </StyledCard>
  )
}

export default Card