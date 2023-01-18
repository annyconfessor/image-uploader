import { GrouthBar, StyledProgressBar, Wrapper } from './styles'

const ProgressBar = () => {
  return(
    <Wrapper>
      <StyledProgressBar className='progress-bar'/>
      <GrouthBar className='grouth-bar' width={50}/>
    </Wrapper>
  )
}

export default ProgressBar