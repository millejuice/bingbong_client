import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { queryChattingRoom } from '../apiCall/query';
// import AlertDialog from './alert';

const MyBox = ({ parentId }) => {
  const [parentName, setParentName] = React.useState('');

  // const getChattingRoom = async () => {
  //   await queryChattingRoom(parentId).then((response) =>
  //     setParentName((curr) => response.parent.name),
  //   );
  // };
  // React.useEffect(() => {
  //   getChattingRoom();
  // }, []);

  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        width: '597px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column-reverse', // Reverse the flex direction to stick TextField to the bottom
        alignItems: 'center',
      }}
    >
      <TextField
        label="메세지를 입력하세요"
        variant="outlined"
        sx={{ marginBottom: '20px', width: '300px' }}
      />
      {/* <AlertDialog  parentName={parentName}/> */}
    </Box>
  );
};

export default MyBox;
