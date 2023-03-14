import { SuggestedSection } from "./SuggestedSection/SuggestedSection";
import { LinkList } from "./LinkList/LinkList";
import styles from "./LeftContent.module.scss";

export function LeftContent() {
  
  return (
    <div className={styles.leftContainer}>
      <LinkList to="/profile"></LinkList>
      <hr />
      <SuggestedSection></SuggestedSection>
    </div>
  );
}
