import { BoxImage, Text } from './styles/image-uploader'
import images from '../../assets'

type ImageUploaderProps = {
  name: keyof typeof images
}

const ImageUploader = ({name}: ImageUploaderProps) => {
  return (
    <BoxImage>
      <img src={images[name]} alt="montains"/> 
      <Text>Drag and drop your image here</Text>
    </BoxImage>
  )
}

export default ImageUploader