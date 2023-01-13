import Card from '../../components/card'
import Icon from '../../components/icon'
import Image from '../../components/image'
import TextBox from '../../components/TextBox'
import { Text, Wrapper } from './styles'

const SuccessfullyScreen = () => {
  return(
    <Card>
      <>
        <Wrapper>
          <Icon name="check" altname="check"/>
          <Text>Uploaded Sucessfully!</Text>
          <Image name="babyYoda" altname="babyYoda" />
          <TextBox/>
        </Wrapper>
      </>
    </Card>
  )
}

export default SuccessfullyScreen