import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand />
                    <Nav className="me-auto">
                        <Nav.Link href="/home">home</Nav.Link>
                        <Nav.Link href="/setting">setting</Nav.Link>
                        <Nav.Link href="/feature">feature</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

type Props = {
    children: React.ReactNode
}

const layout: React.FC<Props> = ({children}) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>
    )
}

export default layout