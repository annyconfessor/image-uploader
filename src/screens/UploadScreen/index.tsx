import Card from '../../components/card'
import Button from '../../components/button'
import ImageUploader from '../../components/image-uploader'
import { Wrapper, Text, Header, P } from './styles'

const Upload = () => {
  return(
    <Card>
      <>
        <Header>Upload your image</Header>
        <P>File should be Jpeg, Png...</P>
        <ImageUploader name="mountains"/>
        <Text>Or</Text>
        <Wrapper>
          <Button text="Choose a file"/>
        </Wrapper>
      </>
    </Card>
  )
}

export default Upload