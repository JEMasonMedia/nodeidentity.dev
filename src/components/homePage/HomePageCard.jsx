import { useId } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function ImgMediaCard({ image, title, description, links }) {
  const id = useId()
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia component='img' height='200' image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {links.map(({ text, link }, index) => (
          <Button key={`${id}-${index}`} size='small' href={link}>
            {text}
          </Button>
        ))}
      </CardActions>
    </Card>
  )
}
