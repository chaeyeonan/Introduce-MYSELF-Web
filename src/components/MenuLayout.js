import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 20px;
  border: none;
  background: #ffffff;
  color: #808080;
  cursor: pointer;
  &:focus {
   color: #808080;
  }
`

const MenuLayout =()=> {
  return (
    <div style={{textAlign:'center'}}>
        <div style={{fontSize:'25px', padding:'35px'}}>
          chaeyeon
        </div>
        <div>
          <Link to="/">
            <StyledButton>Home</StyledButton>
          </Link>
          <Link to="/profile">
            <StyledButton>Profile</StyledButton>
          </Link>
          <Link to="/Work">
            <StyledButton>Work</StyledButton>
          </Link>
          <Link to="/Contact">
            <StyledButton>Contact</StyledButton>
          </Link>
        </div>
    </div>
  );
}

export default MenuLayout;