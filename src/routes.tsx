import ProgressScreen from "./screens/ProgressScreen";
import SuccessfullyScreen from "./screens/SuccessfullyScreen";
import UploadScreen from "./screens/UploadScreen";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    height: 56rem;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: 45rem;
  }
`

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upload" element={<>
          <UploadContainer>
            <UploadScreen/>
            <ProgressScreen/>
          </UploadContainer>
        </>}/>
        <Route path="/success" element={<SuccessfullyScreen />}/>
      </Routes>
    </Router>
  );
}

export default App;
