import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '../Button/Button';
import {Icon} from "semantic-ui-react";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: `70%`,
    height: `70%`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalChildren: {
      marginTop: `5rem`,
  }
}));

export default function SimpleModal({children} : any) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="medium" bgColor="#9370db" text="create" onclick={handleOpen}/>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="close-btn" onClick={handleClose} style={{cursor: "pointer"}}>
              <Icon name="close" size="big"/>
          </div>
          <div className={classes.modalChildren}>
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
}
      