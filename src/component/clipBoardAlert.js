import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { reflectAnalytics } from '../apiCall/postCall';
import copyCodeButton from "../image/copyCodeButton.png";

export default function ClipBoardAlert({ parentName }) {
    const [open, setOpen] = React.useState(false);

    const handleCopyClipBoard = (text) => {
        try {
            navigator.clipboard.writeText(text).then((r) => setOpen(true));
        } catch (error) {
            alert('클립보드 복사에 실패하였습니다.');
        }
    };

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseConfirm = () => {
      setOpen(false);
    };

    return (
      <div>
            <Button onClick={() => handleCopyClipBoard('clipBoard')}><img src={copyCodeButton} style={{position: "absolute", bottom:"80px", left:"15px", width:"300px"}}/></Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            { "클립보드에 복사 되었습니다." }
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>확인</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}