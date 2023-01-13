import Button from '../button'
import ImageUploader from '../image-uploader'

import { StyledCard, Wrapper, Text } from './styles'

const Card = () => {
  return (
    <StyledCard>
      <ImageUploader/>
      <Text>Or</Text>
      <Wrapper>
        <Button/>
      </Wrapper>
    </StyledCard>
  )
}

export default Card