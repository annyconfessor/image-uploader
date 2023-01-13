import React from 'react'
import { mountains } from '../../assets'

import { Figure } from './imageStyles'

const Image = () => {
  return (
    <Figure>
      <img src={mountains} alt='mountainsimage'/>
    </Figure>
  )
}

export default Image