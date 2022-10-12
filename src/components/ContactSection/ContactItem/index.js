import { MdPlace } from "react-icons/md";
import { ItemStyles } from "./styles.js";

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "I need text ",
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <p>{text}</p>
      </div>
    </ItemStyles>
  );
}
