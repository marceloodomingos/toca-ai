import Link from "next/link";
import { FooterContainer } from "./styles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <Link href="/">
        <a className="logo">
          <img src="../../images/hi-emoji.gif" alt="" />
        </a>
      </Link>
      <p>
        {year} © <b>Toca aí</b>. Todos os direitos reservados.
      </p>
    </FooterContainer>
  );
}
