import { CardComponent } from "../../CardComponent/CardComponent";
import styles from "./AdsSection.module.scss";

const adsList = [
  {
    id: 0,
    url: "https://images.hellodayclothing.com/2022/12/rick-and-morty-you-gotta-get-schwifty-shirt-shirt-600x450.jpg",
    title: "Choose youre style",
    description: "Be original, Get Schwifty!",
    link:'https://hellodayclothing.com/product/rick-and-morty-you-gotta-get-schwifty-shirt/',
  },
  {
    id: 1,
    url: "https://www.snowsurf.com/media/Snowboard_2015/img/drake_2015_force_board__prop_1000x604.jpg",
    title: "50% off Snowboards!",
    description: "We're the best in selling you stuff!",
    link:'https://www.lorisport.com/virtuemart/colonna2/snowboards/snowboard/drake-snowboard-force-159-detail.html',
  },
];

let adsObject;

export function AdsSection() {
  if (adsList.length === 0) {
    adsObject = "No Content Found";
  } else {
    adsObject = adsList.map((element) => {
      return (
        <CardComponent className={styles.cardComponent}
          key={element.id}
          url={element.url}
          title={element.title}
          description={element.description}
          link = {element.link}
        ></CardComponent>
      );
    });
  }

  return <div className={styles.adsSectionContainer}>
    <h1>Sponsorized</h1>
    {adsObject}
    </div>;
}
