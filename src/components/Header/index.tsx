import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";
import { HeaderContainer, NewsContainer } from "./styles";

interface HeaderProps {
  white?: boolean;
  glass?: boolean;
}

export default function Header({ glass, white }: HeaderProps) {
  const currentLocation = location.pathname;

  return (
    <>
      {currentLocation === "/" && (
        <NewsContainer>
          <p>
            Aproveite a promoção <i>Rainbow</i> durante todo o mês de setembro!{" "}
            <Link href="/promotion/rainbow-september">
              Clique aqui e saiba mais
            </Link>
            .
          </p>
        </NewsContainer>
      )}

      <HeaderContainer white={white}>
        <nav>
          <Link href="/">
            <a className="logo">
              <img src="../../logos/logo2.png" alt="Toca Aí logo" />
              <span>Toca aí</span>
            </a>
          </Link>
          <ul className="navbar">
            <Link href="/">
              <a>Início</a>
            </Link>
            <Link href="/">
              <a>Planos</a>
            </Link>
            <Link href="/">
              <a>Entrar na sua conta</a>
            </Link>
            <Link href="/your-vibe">
              <a className="vibe">Descubra sua vibe</a>
            </Link>
            {currentLocation != "/explore" && (
              <Link href="/explore">
                <MagnifyingGlass weight="bold" />
              </Link>
            )}
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
}
