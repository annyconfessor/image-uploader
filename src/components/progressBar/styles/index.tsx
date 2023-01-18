import styled, { css } from 'styled-components'

type GrouthBarProps = {
  width: number;
}

export const StyledProgressBar = styled.div`
  background-color: #F2F2F2;
  border-radius: 8px;
  width: 22rem;
  height: 6px;
`

export const GrouthBar = styled.div`
  ${({ width }: GrouthBarProps) => css`
    border-radius: 8px;
    width: ${width}px;
    height: 6px;
    background-color: #2F80ED;
    margin-top: -6px;
  `}
`

export const Wrapper = styled.div`
  margin-top: 30px;
`