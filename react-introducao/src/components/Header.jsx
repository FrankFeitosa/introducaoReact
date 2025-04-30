import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

// Feito pela aula online do módulo CSS em React
const HeaderContainer = styled.header`
background-color: blueviolet;
color: white;
padding: 0 60px;
display: flex;
align-items: center;
justify-content: space-between;
font-family: Arial, Helvetica, sans-serif;
text-align: center;
& h1{
    color: #FFFFFF;
}
& nav ul{
    display: flex;
    gap: 36px;
    list-style: none;
    & li a{
        color: #FFFFFF80;
        text-decoration: none;
        font-size: 18px;
        &:hover, &.active{
            color: #FFFFFF;
        }
    }
}
`;

// Feito pela instrução do livro CSS em React
// const Nav = styled.nav`
// display:flex;
// justify-content: center;
// gap: 20px;
// `;
// const StyledLink = styled(NavLink)`
// color: rgba(255,255,255,0.8);
// text-decoration: none;

// &:hover,
// &.active {
// color: white;
// text-decoration: underline
// }
// `;
{/* <Nav>
    <StyledLink to={"/"} exactactiveClassName="active">Home</StyledLink>
    <StyledLink to={"/products"} activeClassName="active">Produtos</StyledLink>
</Nav> */}

const Header = () => {
    return (
        <HeaderContainer>
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/products"}>Produtos</NavLink>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    );
};
export default Header;
