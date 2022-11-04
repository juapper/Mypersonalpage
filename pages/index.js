import NextLink from 'next/link'
import { Container, Box, Heading, Image,useColorModeValue, Button} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const Page = () => {
    return(
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            ¡Hola, Soy un Desarrollador Full-Stack !
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Juan Pablo Perez
                    </Heading>
                    <p>Creador Digital ( Desarrollador / Diseñador web )</p>

                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{ md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={4} borderStyle="solid" height="100px" mxWidth="100px" display="inline-block" borderRadius="full" mx src="/images/pablo.jpeg" alt="Profile Image"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-tittle">
                    Trabajo
                </Heading>
                <Paragraph>Juan Pablo es un desarrollador fullstack en Medellín que es apasionado por construir productos digitales y/o innovadores.  Él tiene una gran habilidad para aprender de forma autónoma, diseñar diferentes productos digitales y resolver problemas que se encuentren en el camino </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title" mt={2}
                >
                    Bio
                </Heading>
                <BioSection>
                <BioYear>2001</BioYear>
                    Nació en Medellín, Colombia.
                </BioSection>
                <BioSection>
                <BioYear>2021</BioYear>
                Estudios en Platzi y en la Universidad Eafit en áreas de la tecnología, ha realizado trabajos como freelancer.
                </BioSection>
                <BioSection>
                <BioYear>2022</BioYear>
                Trabaja como frontend developer.
                </BioSection>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title" mt={5}>
                    I ❤️
                    </Heading>
                    <Paragraph>
                        Aprender nuevas cosas, Ajedrez, Inteligencia artificial. 
                    </Paragraph>
                </Section>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page

