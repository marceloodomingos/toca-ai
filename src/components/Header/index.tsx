import Link from "next/link";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <header>
        <Link href="/">
          <a className="logo">
            <img src="../../images/hi-emoji.gif" alt="" />
            <span>Toca ai</span>
          </a>
        </Link>
        <ul className="navbar">
          <Link href="/">
            <a>Início</a>
          </Link>
          <Link href="/">
            <a>Sobre nós</a>
          </Link>
          <Link href="/">
            <a>Planos</a>
          </Link>
          <Link href="/">
            <a>Entrar na sua conta</a>
          </Link>
          <Link href="/">
            <a>Descubra sua vibe</a>
          </Link>
        </ul>
      </header>
    </HeaderContainer>
  );
}
