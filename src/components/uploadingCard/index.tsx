import ProgressBar from '../progressBar'
import { StyledUploadingCard, Text, Wrapper } from './styles'

const UploadingCard = () => {
  return(
    <StyledUploadingCard>
      <Wrapper>
        <Text>Uploading...</Text>
        <ProgressBar/>
      </Wrapper>
    </StyledUploadingCard>
  )
}

export default UploadingCard