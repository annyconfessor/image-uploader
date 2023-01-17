import Card from '../../components/card'
import Button from '../../components/button'
import ImageUploader from '../../components/image-uploader'
import { Wrapper, Text, Header, P, Label, Input } from './styles'
import { useState } from 'react'

type UploadProps = {
  props?: {
  }
}

const Upload = ({ props }: UploadProps) => {
  const [file, setFile] = useState('')

  const ChooseFile = () => {
  }

  return(
    <Card>
      <>
        <Header>Upload your image</Header>
        <P>File should be Jpeg, Png...</P>
        <ImageUploader name="mountains"/>
        <Text>Or</Text>
        <Wrapper>
          <Input type="file" id="inputFile"></Input>
          <Button id="inputFile">Choose a file</Button>
        </Wrapper>
      </>
    </Card>
  )
}

export default Upload