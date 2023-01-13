import images from '../../assets'

import { Figure } from './styles'

type IconProps = {
  name: keyof typeof images
  altname: string
}

const Icon = ({name, altname}: IconProps) => {
  return (
    <Figure>
      <img src={images[name]} alt={altname}/>
    </Figure>
  )
}

export default Icon