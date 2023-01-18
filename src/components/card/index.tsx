import { ReactElement } from 'react'

import { StyledCard } from './styles'

type CardProps = {
  children: ReactElement
}

const Card = ({ children }: CardProps) => {
  return (
    <StyledCard className='card-container'>
      {children}
    </StyledCard>
  )
}

export default Card