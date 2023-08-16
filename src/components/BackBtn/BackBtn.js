import { BackIcon, Link } from "./BackBtn.styled";

function BackBtn({ location }) {
  return (
    <Link to={location} className="MenuItemPage-link">
      <BackIcon />
      Назад до меню
    </Link>
  );
}

export default BackBtn;
