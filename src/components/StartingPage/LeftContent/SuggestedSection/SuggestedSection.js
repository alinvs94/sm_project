import  { CardComponent }  from '../../CardComponent/CardComponent'
import styles from "./SuggestedSection.module.scss";

export function SuggestedSection() {
  const newsList = [
    {
      key: 1,
      url: "https://turism-bacau.ro/wp-content/uploads/2021/01/partie-300x225.jpg",
      title: "Bacau Ski Slopes Weather",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },

    {
      key: 2,
      url: "https://e1.365dm.com/23/02/768x432/skysports-alphatauri-f1-2020_6054529.jpg?20230211220644",
      title: "F1: Alpha Tauri 2023",
      description:
        "Donec facilisis, magna at blandit vulputate, metus odio bibendum quam, eget rutrum est tellus nec felis.",
    },

    {
      key: 3,
      url: "https://scontent.fias1-1.fna.fbcdn.net/v/t1.18169-9/27867546_1805731176111872_7671221085261821596_n.png?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=eGZIDz-HLb8AX8ftHFm&tn=RfANmTJ_pZ_wywN8&_nc_ht=scontent.fias1-1.fna&oh=00_AfBCJbCko1Yt_L_VlF5VhYQNIU06f5Qs39Ag99ZNYVhgEQ&oe=6411C8B4",
      title: "IT School Offers",
      description:
        "Aliquam et elementum est. Suspendisse potenti. Duis finibus erat nec scelerisque viverra. Integer sed quam.",
    },
  ];

  let newsObject;

  if (newsList.length === 0) {
    newsObject = "No Content Found";
  } else {
    newsObject = newsList.map((element) => {
      return (
        <CardComponent
         key={element.key}
          url={element.url}
          title={element.title}
          description={element.description}
        ></CardComponent>
      );
    });
  }

  return (
    <div className={styles.suggestedSectionContainer}>
      <h1>Suggested news</h1>
      <div className={styles.newsWrapper}>{newsObject}</div>
    </div>
  );
}
