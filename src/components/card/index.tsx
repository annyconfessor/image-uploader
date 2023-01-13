import { ReactElement } from 'react'

import { StyledCard } from './styles'

type CardProps = {
  children: ReactElement
}

const Card = ({ children }: CardProps) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default Card