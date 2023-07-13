import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor, useDisclosure, SimpleGrid, Square, Spacer, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Flex, Center, Box
} from '@chakra-ui/react'
import { Container } from 'react-bootstrap'
import { useState } from "react";
import './header.css'
import psc from './Assets/psc.jpg'
import psc2 from './Assets/psc2.jpg'
import feey from './Assets/feey.png'
import CustomModal from './CustomModal';

function Content() {
    const [selectedCard, setSelectedCard] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const openModal = (cardIndex) => {
        setSelectedCard(cardIndex);
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    const cards = [
        {
            imageSrc: psc,
            title: "Card 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            modalContent: "Modal 1 content goes here.",
        },
        {
            imageSrc: psc2,
            title: "Card 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            modalContent: "Modal 2 content goes here.",
        },
        {
            imageSrc: "/path/to/image3.jpg",
            title: "Card 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            modalContent: "Modal 3 content goes here.",
        },
    ];

    return (
        <div>
            <Container className='container'>
                <div className='boox'>
                    <Image className='img' src={feey} alt='logo' />

                    <h1>hi</h1>
                    <p>Description: WOW!!! A plant</p>
                </div>
            </Container>

            <Flex justifyContent="center" alignItems="center" py={4}>
                <SimpleGrid columns={3} spacing={4}>
                    {cards.map((card, index) => (
                        <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Image src={card.imageSrc} alt={card.title} height={200} width="100%" objectFit="cover" />
                            <Box p={4}>
                                <Text fontWeight="bold" mb={2}>{card.title}</Text>
                                <Text>{card.description}</Text>
                                <Button mt={4} colorScheme="blue" onClick={() => openModal(index)}>Learn More</Button>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>

                <CustomModal
                    isOpen={selectedCard !== null}
                    onClose={closeModal}
                    title={selectedCard !== null ? cards[selectedCard].title : ""}
                    content={selectedCard !== null ? cards[selectedCard].modalContent : ""}
                />
            </Flex>
            {/* <Container>
                <div>

                    <Flex color='black'>
                        <Center w='450px' p='5px'>
                            <Image src={psc} alt='logo' boxSize="300px" mr={4} />
                            <div>
                                <Text>Description:<br /> hi </Text>

                                <Text>Name:bow</Text>
                            </div>
                        </Center>



                        <Center w='450px' p='5px'>
                            <Image src={psc2} alt='logo' boxSize="300px" mr={4} />
                            <div>
                                <Text>Description: hii</Text>

                                <Text>Name:bow</Text>
                            </div>
                        </Center>

                        <Center w='450px' p='5px'>
                            <Image src={psc} alt='logo' boxSize="300px" mr={4} />
                            <div>
                                <Text>Description: hii</Text>

                                <Text>Name:bow</Text>
                            </div>
                        </Center>
                    </Flex>
                </div>
            </Container> */}

            <Flex justifyContent="center" alignItems="center" py={4}>
                <SimpleGrid columns={3} spacing={4}>
                    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Image src={psc} alt="Card 3" height={200} width="100%" objectFit="cover" />
                        <Box p={4}>
                            <Text fontWeight="bold" mb={2}>Card 1</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            <Popover placement="left">
                                <PopoverTrigger>
                                    <Button>Learn More</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>Confirmation!</PopoverHeader>
                                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Box>
                    </Box>

                    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Image src={psc2} alt="Card 3" height={200} width="100%" objectFit="cover" />
                        <Box p={4}>
                            <Text fontWeight="bold" mb={2}>Card 2</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            <Popover >
                                <PopoverTrigger>
                                    <Button>Learn More</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>Confirmation!</PopoverHeader>
                                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Box>
                    </Box>

                    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Image src="/path/to/image3.jpg" alt="Card 3" height={200} width="100%" objectFit="cover" />
                        <Box p={4}>
                            <Text fontWeight="bold" mb={2}>Card 3</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            <Popover placement="right">
                                <PopoverTrigger>
                                    <Button>Learn More</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>Confirmation!</PopoverHeader>
                                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Box>
                    </Box>
                </SimpleGrid>

            </Flex>

        </div>
    )
}
export default Content