import { GrouthBar, StyledProgressBar, Wrapper } from './styles'

const ProgressBar = () => {
  return(
    <Wrapper>
      <StyledProgressBar className='progress-bar'/>
      <GrouthBar className='grouth-bar' width={30}/>
    </Wrapper>
  )
}

export default ProgressBar