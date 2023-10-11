import { MainHeader } from "../../components/MainHeader";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { Page, Title, Paragraph, ProfileList } from "./style";
import {
  AddProfileBtn,
  SelectProfileButton,
} from "../../components/buttons/style";

export default function ProfilePage() {
  const handleAddProfile = () =>{

  }
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
      <Page>
        {/* <div> */}
          <Title>Who's Reading?</Title>
          <ProfileList>
            <li>
              <SelectProfileButton style={{ marginRight: "10px" }} />
              <Paragraph style={{ fontSize: "14px" }}>Allan</Paragraph>
            </li>
            <li>
              <AddProfileBtn/>
              <Paragraph style={{ fontSize: "14px" }}>Add Profile</Paragraph>
            </li>
          </ProfileList>
        {/* </div> */}
      </Page>
    </>
  );
}
