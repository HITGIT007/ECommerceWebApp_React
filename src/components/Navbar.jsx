import React from 'react'

//First install material UI
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core';


//First install styled components using npm add styled-components
import styled from 'styled-components'
import { mobile } from "../responsive";

//Styled Component
const Container = styled.div`
    height: 60px;
    background-color: #F0E68C;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    align-items: center;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    border: 1px solid #F0E68C;
    display: flex;
    align-items: center;
    padding:5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.div`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`//End of flex Box

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>  <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                          <Search style={{color:"gray", fontSize: 16}}/>
                    </SearchContainer>

                </Left>
                <Center><Logo>PPazon</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
            
        </Container>
    )
}

export default Navbar
