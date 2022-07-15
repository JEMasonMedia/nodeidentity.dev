import { useState, forwardRef } from 'react'
import { Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import axios from 'axios'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'inherit',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'inherit',
    },
  },
})

export default function ContactMailerButton() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState(undefined)
  const [success, setSuccess] = useState(undefined)
  const [loading, setLoading] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const inputChange = e => {
    const { id, value } = e.target
    if (id === 'email') {
      setEmail(value)
    } else if (id === 'body') {
      setBody(value)
    }
  }

  const handleSend = async () => {
    setLoading(true)
    const { data } = await axios.post('/api/contact_email', {
      from: email,
      body,
    })
    console.log(data)
    if (data.response.includes('250 OK')) {
      setSuccess('Email sent!')
      setEmail('')
      setBody('')
      setTimeout(function () {
        setSuccess(undefined)
        setError(undefined)
        setOpen(false)
      }, 2000)
    } else {
      setError(data.message)
    }
    setLoading(false)
  }

  return (
    <>
      <div>
        <Button sx={{ color: 'inherit' }} variant='outlined' onClick={handleClickOpen}>
          Contact me!
        </Button>
        <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} maxWidth='md' fullWidth>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <DialogTitle>Contact Node Identity</DialogTitle>
            {success && <Chip color='success' label={'success'} sx={{ marginRight: '1em', marginTop: '1em' }} />}
            {error && <Chip color='error' label={'success'} sx={{ marginRight: '1em', marginTop: '1em' }} />}
            {loading && <CircularProgress color='success' sx={{ marginRight: '1em', marginTop: '1em' }} />}
          </Box>
          <DialogContent>
            <Paper sx={{ backgroundColor: 'inherit', padding: '1em' }}>
              <DialogContentText>Please include your email address and a message.</DialogContentText>
              <br />
              <CssTextField autoFocus id='email' label='Email Address' type='email' fullWidth value={email} onChange={e => inputChange(e)} />
              <br />
              <br />
              <CssTextField id='body' label='Message' fullWidth multiline rows={6} value={body} onChange={e => inputChange(e)} />
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button sx={{ color: 'inherit' }} onClick={handleClose}>
              Cancel
            </Button>
            <Button sx={{ color: 'inherit' }} onClick={handleSend}>
              Send Message
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}
