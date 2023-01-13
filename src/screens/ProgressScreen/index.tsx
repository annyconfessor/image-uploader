import ProgressBar from '../../components/progressBar'
import { StyledUploadingCard, Text, Wrapper } from './styles'

const ProgressScreen = () => {
  return(
    <StyledUploadingCard>
      <Wrapper>
        <Text>Uploading...</Text>
        <ProgressBar/>
      </Wrapper>
    </StyledUploadingCard>
  )
}

export default ProgressScreen