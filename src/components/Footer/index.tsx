import Link from "next/link";
import { FooterContainer } from "./styles";

interface FooterProps {
  dark?: boolean;
}

export default function Footer({ dark }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <FooterContainer dark={dark}>
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
