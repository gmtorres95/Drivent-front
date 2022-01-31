import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";

import styled from "styled-components";

import {
  FaFileContract,
  FaMoneyBill,
  FaBed,
  FaCalendarWeek,
  FaCertificate,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import NavigationButton from "./NavigationButton";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";

export default function NavigationBar() {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const { setUserData } = useContext(UserContext);
  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }

  function logout() {
    setUserData("");
    localStorage.clear();
    history.push("/sign-in");
  }

  return (
    <Container>
      <div>
        <Link to={`${match.path}/subscription`}>
          <NavigationButton active={isActive(`${match.path}/subscription`)}>
            <FaFileContract />
            <span>Inscrição</span>
          </NavigationButton>
        </Link>

        <Link to={`${match.path}/payment`}>
          <NavigationButton active={isActive(`${match.path}/payment`)}>
            <FaMoneyBill />
            <span>Pagamento</span>
          </NavigationButton>
        </Link>

        <Link to={`${match.path}/hotel`}>
          <NavigationButton active={isActive(`${match.path}/hotel`)}>
            <FaBed />
            <span>Hotel</span>
          </NavigationButton>
        </Link>

        <Link to={`${match.path}/activities`}>
          <NavigationButton active={isActive(`${match.path}/activities`)}>
            <FaCalendarWeek />
            <span>Atividades</span>
          </NavigationButton>
        </Link>

        <Link to={`${match.path}/certificate`}>
          <NavigationButton active={isActive(`${match.path}/certificate`)}>
            <FaCertificate />
            <span>Certificado</span>
          </NavigationButton>
        </Link>
      </div>
      <Link to={`${match.path}/sign-in`} onClick={logout} style={{ textDecoration: "none" }}>
        <NavigationButton>
          <FiLogOut />
          <span>Logout</span>
        </NavigationButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  box-shadow: 2px 0 10px 0 rgba(0,0,0,0.1);
  width: 100px;
  flex-shrink: 0;
  justify-content: space-between;
  div {
    > a {
    text-decoration: none;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
  }
`;

