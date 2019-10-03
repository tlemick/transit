import React from 'react'
import styled from 'styled-components';

export default class SideBar extends React.Component {
    render() {
        return (
            <SideBarWrapper>
                <p>Oh Hai</p>
            </SideBarWrapper>
        );
    }
}

const SideBarWrapper = styled.div`
  width: 400px;
  background-color: papayawhip;
`