import React, { useState, useRef, useEffect } from 'react';
import { useTheme, Container, Grid, Fab } from '@mui/material';
import Sidebar from '../component/sidebar.js';
import { useParams } from 'react-router-dom';
import ChatList from '../component/chatList.js';
import Box from '@mui/material/Box';
import ChatRoom from '../component/chatRoom.js';
import WaldenPage from './waldenPage.js';
import Profile from '../component/profile.js';
import AddIcon from '@mui/icons-material/Add';
import SockJS from 'sockjs-client';
import StompJS from 'stompjs';

const Chat = () => {
  const theme = useTheme();
  const { id } = useParams();
  const client = useRef();
  const messagesEndRef = useRef(null);

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const sock = new SockJS('http://localhost:8080/stomp/chat');
    client.current = StompJS.over(sock);
    waitForConnection(client, stompConnect);
    return () => stompDisconnect();
  }, []);

  const stompConnect = () => {
    try {
      client.current.connect({}, () => {
        client.current.subscribe(`/sub/session/${1}`, (chat) => {
          // const newMessage = JSON.parse(chat.body);
          // setMessageList([...messageList, newMessage]);
          // messages = messages.push(newMessage);
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

  const startCall = () => {
    client.current.send(
      '/pub/session',
      {},
      JSON.stringify({
        chatRoomId: 1,
        type: 'start',
      }),
    );
  };
  const endCall = () => {
    client.current.send(
      '/pub/session',
      {},
      JSON.stringify({
        chatRoomId: 1,
        type: 'end',
      }),
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor:"#F6F6FE"
      }}
    >
      <Sidebar />
      <ChatList />
      <ChatRoom
        messageList={messageList}
        setMessageList={setMessageList}
        startCall={startCall}
        endCall={endCall}
        messagesEndRef={messagesEndRef}
      />
      {/* <WaldenPage sx={{ width: "100%" }} /> */}
      <Profile />
      {/* <AlertDialog parentName="" /> */}
    </Box>
  );
};

export default Chat;
