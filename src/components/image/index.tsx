import images from '../../assets'

import { Figure } from './styles'

type ImageProps = {
  name: keyof typeof images
  altname: string
}

const Image = ({name, altname}: ImageProps) => {
  return (
    <Figure>
      <img src={images[name]} alt={altname}/>
    </Figure>
  )
}

export default Image