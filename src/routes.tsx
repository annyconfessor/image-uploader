import ProgressScreen from "./screens/ProgressScreen";
import SuccessfullyScreen from "./screens/SuccessfullyScreen";
import UploadScreen from "./screens/UploadScreen";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1000px;
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
        <Route path="/successfull" element={<SuccessfullyScreen />}/>
      </Routes>
    </Router>
  );
}

export default App;
