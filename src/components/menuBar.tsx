import React from 'react';
import {FiHome} from "react-icons/fi";
import {CiCalendarDate} from "react-icons/ci";
import {BiStats} from "react-icons/bi";
import {IoSettingsOutline} from "react-icons/io5";
import styled from "styled-components";

export function MenuBar() {
    return (
        <Container>
            <div>🔴</div>
            <div style={{fontSize: 20}}>YEEESAN</div>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 0 28px;
  background-color: #FBF7F4;
`

const MenuBox = styled.div`
  height: 240px;
`

const Nav = styled.a`
  width: 34px;
  height: 34px;
`

export default MenuBar;