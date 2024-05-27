import GithubIcon from "@public/assets/icons/GithubIcon.svg";
import YoutubeIcon from "@public/assets/icons/YoutubeIcon.svg";
import * as Styled from "./style";

function Footer() {
  return (
    <Styled.Container>
      <Styled.Description>Contact: twkim326@ubcn.co.kr</Styled.Description>
      <Styled.Description>©2024 twkim.</Styled.Description>
      <Styled.IconContainer>
        <GithubIcon />
        <YoutubeIcon />
      </Styled.IconContainer>
    </Styled.Container>
  );
}

export default Footer;
