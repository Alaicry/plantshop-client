import React from "react";
import Container from "./Container";
import Logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { headerLinkRoutes } from "../utils/constants/routes";

const Header: React.FC = () => {
	return (
		<header className="header">
			<Container customClassName="header__container header__container--flex">
				<Link className="logo" to="/">
					<img className="logo__image" src={Logo} alt="logo" />
				</Link>
				<nav className="nav">
					<ul className="menu">
						{headerLinkRoutes.map((route) => (
							<li className="menu__item" key={route.name}>
								<NavLink
									className={({ isActive }) =>
										isActive ? "menu__link menu__link--active" : "menu__link"
									}
									to={route.path}
								>
									{route.name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
