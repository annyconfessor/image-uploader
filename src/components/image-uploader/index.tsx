import { BoxImage, Text } from './styles/image-uploader'
import { mountains } from '../../assets'

const ImageUploader = () => {
  return (
    <BoxImage>
      <img src={mountains} alt="montains"/> 
      <Text>Drag and drop your image here</Text>
    </BoxImage>
  )
}

export default ImageUploader