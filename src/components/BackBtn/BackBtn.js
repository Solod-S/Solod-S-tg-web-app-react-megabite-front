import { BackIcon, Link } from "./BackBtn.styled";
import { scrollToTop } from "../../utils";
function BackBtn({ location }) {
  return (
    <Link to={location} className="MenuItemPage-link" onClick={scrollToTop}>
      <BackIcon />
      Назад до меню
    </Link>
  );
}

export default BackBtn;
