import { Avatar } from '@mui/material';
import styles from './message.module.css';
import Worden from './worden.png';

export const MessageLeft = (props) => {
  const message = props.message ? props.message : 'no message';
  const timestamp = props.timestamp ? props.timestamp : '';
  const photoURL = props.photoURL ? props.photoURL : 'dummy.js';
  const displayName = props.displayName ? props.displayName : '名無しさん';

  return (
    <>
      {props.worden ? (
        <>
          <div className={styles.messageRow}>
            <Avatar alt={displayName} className={styles.orange} src={Worden}></Avatar>
            <div>
              <div className={styles.displayName}>{displayName}</div>
              <div className={styles.messageBlue}>
                <div>
                  <p className={styles.messageContent}>{message}</p>
                </div>
                <div className={styles.messageTimeStampRight}>{timestamp}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.messageRow}>
            <Avatar alt={displayName} className={styles.orange} src={photoURL}></Avatar>
            <div>
              <div className={styles.displayName}>{displayName}</div>
              <div className={styles.messageBlue}>
                <div>
                  <p className={styles.messageContent}>{message}</p>
                </div>
                <div className={styles.messageTimeStampRight}>{timestamp}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export const MessageRight = (props) => {
  const message = props.message ? props.message : 'no message';
  const timestamp = props.timestamp ? props.timestamp : '';
  return (
    <div className={styles.messageRowRight}>
      <div className={styles.messageOrange}>
        <p className={styles.messageContent}>{message}</p>
        <div className={styles.messageTimeStampRight}>{timestamp}</div>
      </div>
    </div>
  );
};
