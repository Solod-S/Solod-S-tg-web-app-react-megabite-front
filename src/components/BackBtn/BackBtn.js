import { scrollToTop } from "../../utils";
import { BackIcon, Link } from "./BackBtn.styled";

function BackBtn({ location }) {
  return (
    <Link to={location} className="MenuItemPage-link" onClick={scrollToTop}>
      <BackIcon />
      Назад до меню
    </Link>
  );
}

export default BackBtn;
