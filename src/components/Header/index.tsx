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
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Descubra sua vibe</a>
          </li>
        </ul>
      </header>
    </HeaderContainer>
  );
}
