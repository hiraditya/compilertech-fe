import React, { useState } from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import Modal from "./shared/Modal";
import { Button } from "./shared/Button";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  WIDESCREEN_BREAKPOINT,
} from "../styles/GlobalStyle";

type Props = {
  onClick: () => void;
  theme: string;
};

const Header: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allLinks = [
    { id: "about", desc: "about" },
    { id: "interests", desc: "topics of interests" },
    { id: "tracks", desc: "tracks" },
    { id: "organizer", desc: "organizer" },
    { id: "submissions-and-review", desc: "Submissions & Review" },
    { id: "benefits", desc: "benefits of conference" },
    { id: "sponsors", desc: "sponsor us" },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavBar>
        <div>
          <Logo className="logo">COMPILER</Logo>
        </div>
        <NavLinks isOpen={isOpen}>
          <Links>
            {allLinks.map((link, index) => (
              <a key={index} onClick={handleToggle} href={`#${link.id}`}>
                {link.desc}
              </a>
            ))}
            <StyledButton onClick={toggleModal}>GET IN TOUCH</StyledButton>
          </Links>
        </NavLinks>
        <Action isOpen={isOpen}>
          <StyledButton onClick={toggleModal}>GET IN TOUCH</StyledButton>
          <ThemeToggle theme={props.theme} toggleTheme={props.onClick} />
        </Action>
        <Hamburger isOpen={isOpen} onClick={handleToggle}>
          <span />
          <span />
          <span />
        </Hamburger>
      </NavBar>
      {isModalOpen && (
        <Modal
          title="Get in touch"
          description="Have something to say ? Don't hesistate to get in touch with us."
          onClose={toggleModal}
        />
      )}
    </>
  );
};

const StyledButton = styled(Button)`
  color: white !important;
`;
const Action = styled.div<{ isOpen: boolean }>`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: left 0.5s ease-in-out;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    width: auto;
    button {
      width: auto;
      margin-right: 1rem;
    }
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    left: ${({ isOpen }) => (isOpen ? "2%" : "69%")};
    position: absolute;
    button {
      display: none;
    }
  }
`;
const Links = styled.div`
  display: none;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
`;
const Logo = styled.span`
  letter-spacing: 2px;
  color: ${({ theme }) => theme.primary};
`;

const NavBar = styled.section`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.body};
  padding: 1rem 11.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-size: 2rem;
  height: auto;
  z-index: 1;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 1rem 4rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-between;
    padding: 1rem;
  }
  @media (min-width: ${WIDESCREEN_BREAKPOINT}) {
    padding-left: calc(44% - 420px);
    padding-right: calc(44% - 420px);
  }
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  width: 15%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    margin: 0 1rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.body};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.3s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};

    a {
      margin: 1rem 0;
      font-size: 1.75rem;
    }
  }
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;
  span {
    height: 4px;
    width: 25px;
    background: ${({ theme }) => theme.text};
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.3s linear;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;

    // Animate hamburger to close icon
    span:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(7px, 5px)" : "rotate(0)"};
    }
    span:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    span:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(6px, -5px)" : "rotate(0)"};
    }
  }
`;

export default Header;
