import React from 'react'

//First install material UI
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core';


//First install styled components using npm add styled-components
import styled from 'styled-components'

//Styled Component
const Container = styled.div`
    height: 60px;
    background-color: #F0E68C;
`
const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex:1;
    display: flex;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    align-items: center;
`

const SearchContainer = styled.div`
    border: 1px solid #F0E68C;
    display: flex;
    align-items: center;
    padding:5px;
`
const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.div`
    font-weight: bold;
`

const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
`//End of flex Box

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
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
                <Center><Logo>PPashion</Logo></Center>
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
