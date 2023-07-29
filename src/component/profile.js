import React, {PureComponent} from 'react';
import profile from '../image/profile.png';
import {Fab, Grid, IconButton, styled} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import BarChartComponent from "../component/BarChartComponent.js";
import RadarChartComponent from "../component/radarChartComponent";
import {queryAnalytics} from "../apiCall/query.js";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function CloseIcon() {
    return null;
}

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function Item(props) {
    return null;
}

Item.propTypes = {children: PropTypes.node};
const Profile = () => {
    const [open, setOpen] = React.useState(false);

    const [toxic, setToxic] = React.useState(0.0);
    const [profanity, setProfanity] = React.useState(0.0);
    const [insult, setInsult] = React.useState(0.0);
    const [derogatory, setDerogatory] = React.useState(0.0);
    const [violent, setViolent] = React.useState(0.0);

    const getAnalytics = async () => {
        queryAnalytics("1").then((response) => {
            setToxic(response.averageReport.toxic);
            setProfanity(response.averageReport.profanity);
            setInsult(response.averageReport.insult);
            setDerogatory(response.averageReport.derogatory);
            setViolent(response.averageReport.violent);
        });
    };
    const handleClickOpen = () => {
        setOpen(true);
        getAnalytics();
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <img
                src={profile}
                width="430px"
                height="95%"
                // style={{ marginTop: "50px" }}
            />
            <Box onClick={handleClickOpen} sx={{ '& > :not(style)': { m: 1 } }} style={{position:"absolute", top:"120px", right:"30px"}}>
                <Fab style={{backgroundColor:"#7027CD", color:"#ffffff"}} variant="extended">
                    {/*<Fab color="secondary" variant="extended">*/}
                    <AddIcon />
                    분석 결과
                </Fab>
            </Box>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Worden이 분석한 <strong>문현숙 학부모님</strong>의 결과
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography>
                        당신은 건강한 언어를 통해 상대방을 존중하며 대화하는 <strong>선의의 파수꾼</strong>입니다.<br/>
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div>
                                <BarChartComponent toxic={toxic} insult={insult} profanity={profanity} derogatory={derogatory} violent={violent} />
                            </div>

                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <RadarChartComponent toxic={toxic} insult={insult} profanity={profanity} derogatory={derogatory} violent={violent}/>
                            </div>

                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        확인했어요
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>

    );
};

export default Profile;