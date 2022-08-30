import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { HeaderContainer, NewsContainer } from "./styles";

interface HeaderProps {
  white?: boolean;
  glass?: boolean;
}

export default function Header({ glass, white }: HeaderProps) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const currentLocation = location.pathname;

  const today = new Date();
  const actualMonth = today.getMonth() + 1;

  useEffect(() => {
    const body = document.querySelector("body");

    if (toggleMenu) {
      body.classList.add("open");
    } else {
      body.classList.remove("open");
    }
  }, [toggleMenu]);

  return (
    <>
      {currentLocation === "/" && actualMonth === 9 && (
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
              <img src="../../logos/toca-ai-logo.svg" alt="Toca Aí logo" />
              <span>Toca aí</span>
            </a>
          </Link>
          <ul className={`navbar${toggleMenu ? " open" : ""}`}>
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
          <button
            className={`${toggleMenu ? "open" : ""}`}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <div>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>
      </HeaderContainer>
    </>
  );
}
