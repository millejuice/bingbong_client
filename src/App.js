import './App.css';
import background from "./image/background.png"
import Chat from './page/chat';
import Login from './page/login';
import { Box } from '@mui/material';
import AlertDialog from './component/alert';

function App() {
  return (
    <Box>
      {/* <Login /> */}
      <Chat />
      <AlertDialog parentName=""/>
    </Box>
  );
}

export default App;
