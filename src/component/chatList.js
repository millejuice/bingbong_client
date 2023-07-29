import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import tab from '../image/tabBar.png'
import first from '../image/1st.png';
import second from '../image/2nd.png';
import third from '../image/3rd.png';
import fourth from '../image/4th.png';
import fifth from '../image/5th.png';
import sixth from '../image/6th.png';
import copy from '../image/copy.png';
import Button from '@mui/material/Button';
import messagePanel from '../image/messagePanel.png';
import profile from "../image/profile.png";
import copyCodeButton from "../image/copyCodeButton.png";
import ClipBoardAlert from "../component/clipBoardAlert.js";
const ChatList = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div >
            <img
                src={messagePanel}
                width="330px"
                height="95%"
                // style={{ marginTop: "50px" }}
            />
            <Button
                variant='contained'
                style={{
                    position: 'absolute',
                    top: 190,
                    right: 1040,
                    zIndex: 2,
                    background : '#7027CD',

                }}>
                채팅
            </Button>
            {/*<Button style={{position: "absolute", bottom:"30px", left:"130px"}}><img style={{width:"300px"}} src={copyCodeButton}/></Button>*/}
            {/*<Button onClick={() => handleCopyClipBoard('clipBoard')}style={{position: "absolute", bottom:"30px", left:"130px"}}><img style={{width:"300px"}} src={copyCodeButton}/></Button>*/}
            <ClipBoardAlert/>
        </div>);
};

export default ChatList;
