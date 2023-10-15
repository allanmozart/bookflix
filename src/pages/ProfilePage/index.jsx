import { Link } from "react-router-dom";

import { MainHeader } from "../../components/MainHeader";
import { Logo } from "../../components/Logo";
import { Profile } from "../../components/Profile";

export default function ProfilePage() {


  return (
    <>
      <MainHeader>
        <Link to="/">
          <Logo
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo"
          />
        </Link>
      </MainHeader>
      <Profile></Profile>
    </>
  );
}
