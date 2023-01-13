import SuccessfullyScreen from "./screens/SuccessfullyScreen";
import UploadScreen from "./screens/UploadScreen";

import { Background } from './styledApp'

function App() {
  return (
    <Background>
      <UploadScreen/>
      <SuccessfullyScreen/>
    </Background>
  );
}

export default App;
