import React from 'react';
import {Button, Modal, Box, TextField, DialogActions} from '@mui/material'
import { DropzoneArea } from "mui-file-dropzone";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 650,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '10px',
  p: 4,
  color: 'success.main'
};

export default function TestModalWindow(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen} color="success">Добавить новость</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <TextField
              color="success"
              id="modal-modal-title" 
              label="Заголовок новости" 
              fullWidth
              variant="outlined"
            />
            <TextField
              sx={{ mt: 2 , mb: 2 }}
              id="modal-modal-description"
              label="Текст новости"
              fullWidth
              multiline
              rows={10}
              color="success"
              
            />
            <DropzoneArea
                    acceptedFiles={['application/pdf', 'image/jpeg', 'image/png']}
                    dropzoneText={"Для загрузки перетащите файл сюда"}
                    maxFileSize={5000000000000}
                    color="success"
                />
            <DialogActions>
              <Button onClick={handleClose} color="success">Отменить</Button>
              <Button onClick={handleClose} color="success">Добавить</Button>
            </DialogActions>
        </Box>
      </Modal>
    </div>
  )
}






































  /*
  return (
    <Container>
      <Button onClick={handleOpen}>Open modal</Button>
      
          <Dialog 
              open={open} 
              onClose={handleClose}
          >
            <DialogTitle>Добавление новости</DialogTitle>
            <DialogContent sx={{width: "400px", height: "600px"}}>
            <Box
              component="form"
              sx={{'& .MuiTextField-root': { m: 1, width: '90%' },}}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField id="outlined-basic" label="Заголовок новости" variant="outlined" />
                <TextField
                  id="outlined-multiline-static"
                  label="Текст новости"
                  multiline
                  rows={10}
                  
                />
              </div>
            </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Отменить</Button>
              <Button onClick={handleClose}>Добавить</Button>
            </DialogActions>
          </Dialog>
    </Container>
    
  )
}
*/

/*
<DropzoneArea
                    acceptedFiles={['application/pdf', 'image/jpeg', 'image/png']}
                    dropzoneText={"Drag and drop an image file here or click to add a file"}
                    maxFileSize={50000}
                />
*/