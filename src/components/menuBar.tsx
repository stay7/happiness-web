import React from 'react';
import {FiHome} from "react-icons/fi";
import {CiCalendarDate} from "react-icons/ci";
import {BiStats} from "react-icons/bi";
import {IoSettingsOutline} from "react-icons/io5";
import styled from "styled-components";

export function MenuBar() {
    return (
        <Container>
            <MenuBox>
                <Nav href="/home"><FiHome size={24}/></Nav>
                <Nav href="/record"><CiCalendarDate size={24}/></Nav>
                <Nav href="/stat"><BiStats size={24}/></Nav>
                <Nav href="/setting"><IoSettingsOutline size={24}/></Nav>
            </MenuBox>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 66px;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
`

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 240px;
`

const Nav = styled.a`
  width: 34px;
  height: 34px;
`

export default MenuBar;