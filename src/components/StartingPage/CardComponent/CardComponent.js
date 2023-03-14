import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "./CardComponent.module.scss";


export function CardComponent({url, title, description, link}) {

   return <div className={styles.cardWrapper}>
      <Card sx={{ maxWidth: 300 }}>
      <CardActionArea href={link} target="_blank">

        <CardMedia
          component="img"
          height="140"
          image={url}
          alt="news"
        />
        
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
   </div>
};