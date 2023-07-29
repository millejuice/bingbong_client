import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import styles from './mainMessage.module.css';
import axios from 'axios';
import { MessageLeft, MessageRight } from './message';

import { Button, TextField, Paper } from '@mui/material';

import SockJS from 'sockjs-client';
import StompJS from 'stompjs';
import { TextInput } from './textInput';

import { useCallback } from 'react';
import stylesInput from './textInput.module.css';
// import AlertDialog from './alert';
// const roomToken = 'qqqq';
// const user = {
//   id: 1,
//   name: 'Luke',
// };
// const chatRoomId = 1;
// let messages = [];

// const urlStr = window.location.href;
// const url = new URL(urlStr);
// const urlParams = url.searchParams;

// const classRoomI = urlParams.get('classRoomId');
// const roomToke = urlParams.get('roomToken');
// const userI = urlParams.get('userId');
// const userNam = urlParams.get('userName');
// const chatRoomI = urlParams.get('chatRoomId');

let messages = [];
const MyBox = ({
  messageList,
  setMessageList,
  startCall,
  endCall,
  messagesEndRef,
  roomToken,
  classRoomId,
  userId,
  userName,
  chatRoomId,
}) => {
  const client = useRef();
  const [init, setInit] = useState(false);
  const [msg, setMsg] = useState('');
  // const [classRoomId, setClassRoomId] = useState(classRoomI);
  // const [roomToken, setRoomToken] = useState(roomToke);
  // const [userId, setUserId] = useState(userI);
  // const [userName, setUserName] = useState(userNam);
  // const [chatRoomId, setChatRoomId] = useState(chatRoomI);

  const getMessages = async () => {
    await axios.get(`http://localhost:8080/api/messages/${chatRoomId}`).then((res) => {
      // setMessageList(res.data);
      messages = res.data;
    });
    if (!init) {
      messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
      setInit(true);
    }
  };

  useEffect(() => {
    getMessages();
  }, [messageList]);

  // useEffect(() => {
  //   if (init) {
  //     messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
  //   }
  // }, [init]);

  useEffect(() => {
    const sock = new SockJS('http://localhost:8080/stomp/chat');
    client.current = StompJS.over(sock);
    waitForConnection(client, stompConnect);
    return () => stompDisconnect();
  }, []);

  const stompConnect = () => {
    try {
      client.current.connect({}, () => {
        client.current.subscribe(`/sub/chat/${roomToken}`, (chat) => {
          const newMessage = JSON.parse(chat.body);
          // setMessageList([...messageList, newMessage]);
          messages = messages.push(newMessage);
          window.location.reload();
          messagesEndRef.current.scrollIntoView({ behavior: 'auto' });

          // messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
          // window.location.reload();
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const stompDisconnect = () => {
    try {
      client.current.disconnect(() => {
        client.current.unsubscribe('sub-0');
      });
    } catch (error) {
      console.log(error);
    }
  };
  function waitForConnection(client, callback) {
    setTimeout(
      function () {
        // 연결되었을 때 콜백함수 실행
        if (client.current.ws.readyState === 0) {
          callback();
          // 연결이 안 되었으면 재호출
        } else {
          waitForConnection(client, callback);
        }
      },
      1, // 밀리초 간격으로 실행
    );
  }

  const sendCall = (message) => {
    client.current.send(
      '/pub/chat',
      {},
      JSON.stringify({
        message: message,
        roomToken: roomToken,
        senderId: userId,
        type: 'message',
      }),
    );
  };

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
      <Paper style={{ width: '597px', height: 'calc(90.3vh )' }} zdepth={1}>
        <Paper className={styles.messagesBody}>
          {/* 여기를 백엔드와 연결해서 구현해야 함 */}
          {/* 
						if message가 상대방한테서 온 거면 
						그 메시지 정보를 <MessageLeft> 컴포넌트에 props로 넘겨준다
						if message가 내가 상대에게 보낸 거면
						그 메시지 정보를 <MessageRight> 컴포넌트에 props로 넘겨준다
					*/}

          {messages.map((m) =>
            m.member.id == userId ? (
              <MessageRight
                key={m.id}
                message={m.message}
                timestamp={m.sendAt}
                photoURL="/img/profile_default.png"
                displayName={userName}
                avatarDisp={true}
              />
            ) : (
              <>
                {m.member.id === 77 ? (
                  <>
                    <MessageLeft
                      key={m.id}
                      message={m.message}
                      timestamp={m.sendAt}
                      photoURL="./worden.png"
                      displayName={m.member.name}
                      avatarDisp={true}
                      worden={true}
                    />
                  </>
                ) : (
                  <>
                    <MessageLeft
                      key={m.id}
                      message={m.message}
                      timestamp={m.sendAt}
                      photoURL="/img/profile_default.png"
                      displayName={m.member.name}
                      avatarDisp={true}
                      worden={false}
                    />
                  </>
                )}
              </>
            ),
          )}
          <div ref={messagesEndRef}></div>
        </Paper>

        <TextInput 
          style={{ 
            width: '500px', 
            backgroundColor: '#eee', 
            paddingBottom: '20px', 
            borderRadius: '5px' 
          }} 
        onClick={sendCall}></TextInput>
      </Paper>
      <Box>
        {/* <Button
          sx={{ height: '57px', width: '298.5px' }}
          onClick={() => startCall()}
          color="success"
          variant="outlined"
        >
          상담시작
        </Button> */}
        {/* <Button
          sx={{ height: '57px', width: '298.5px' }}
          onClick={() => endCall()}
          color="error"
          variant="outlined"
        >
          상담종료
        </Button> */}
            
      </Box>
      <Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',  // The parent box takes up full width
  }}
>
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',  // The middle box also takes up full width
      fontSize: '23.80px',
      fontFamily: 'Pretendard',
      fontWeight: 600,
      lineHeight: '29.75px',
      wordWrap: 'break-word',
    }}
  >
    문현숙
  </Box>
  <Button
    sx={{ height: '45px', width: '25px', marginRight: '10px', marginBottom: '10px'}}
    onClick={() => endCall()}
    color="error"
    variant="outlined"
  >
    종료
  </Button>
</Box>


    </Box>
  );
};

export default MyBox;

// const [message, setMessage] = useState('');
// const [chatLog, setChatLog] = useState([]);
// const messagesEndRef = useRef(null);

// useEffect(() => {
//   const sock = new SockJS('http://localhost:8080/stomp/chat');
//   client.current = StompJS.over(sock);
//   waitForConnection(client, stompConnect);
//   return () => stompDisconnect();
// }, []);

// GET
// async function getAllMessages() {
//   try {
//     const response = await axios.get(`http://localhost:8080/chat/message/${roomId}`);
//     setMessages(response.data);
//   } catch (e) {
//     console.log(e);
//   }
// }
