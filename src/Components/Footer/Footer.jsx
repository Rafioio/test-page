
import { FooterContainer,LogoContainer, Logo} from "./Styles";
import logo from "../../Assets/Logo/logo.svg";

export default function Footer() {
    return (
        <FooterContainer>
            <LogoContainer>
                          <Logo src={logo} alt="Logo" />
                  </LogoContainer>
        </FooterContainer>
    );
}