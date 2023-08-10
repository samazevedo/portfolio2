'use client'
import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import HamburgerMenu from './Hamburger'

export const Header = () => {
  return (
    <Box as='header' position='fixed' w='100%' style={{ backdropFilter: 'blur(1rem)' }} zIndex={1}>
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        flexWrap='wrap'
        alignContent='center'
        justifyContent='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Navbar />
        </Stack>
        <Box>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <HamburgerMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
