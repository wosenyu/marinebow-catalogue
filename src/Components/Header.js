
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Box, Flex, Link } from "@chakra-ui/react";
function Header() {
    return (
        <header>

            {/* <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />

                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}

            <Flex justifyContent="center" alignItems="center" py={4} bg="gray.200">
                <Box mr={4}>
                    {/* Replace the logo below with your own logo */}
                    <img src="/path/to/logo.png" alt="Logo" height={40} />
                </Box>
                <Link mx={4} fontWeight="bold" fontSize="lg" color="blue.600" href="#">Link 1</Link>
                <Link mx={4} fontWeight="bold" fontSize="lg" color="blue.600" href="#">Link 2</Link>
                <Link mx={4} fontWeight="bold" fontSize="lg" color="blue.600" href="#">Link 3</Link>
            </Flex>


        </header>
    )
}
export default Header