import { Container, Box, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Mentanas from '../public/images/mentanas.png'
import Nuevo from '../public/images/nuevo.png'
import Amazon from '../public/images/amazon.png'

const Works = () => {
    return(
        <Layout>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Trabajos
            </Heading>
            <SimpleGrid colums={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="https://www.mentanas.com/" title="Mentanas" thumbnail={Mentanas}>                    
Pagina para Agencia de desarrollo de software ofreciendo diferentes servicios con más de 100 aplicaciones desarrolladas por el equipo de trabajo.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="https://juapper.github.io/CountDownNewYear/" title="Nuevo año" thumbnail={Nuevo}>                    

                    Extensión que cambia Nueva pestaña mostrando un contador del tiempo restante para año nuevo, ayudando a la productividad de las personas para que recuerden sus objetivos.

                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id="https://clone-36bb9.web.app/" title="Clon Amazon" thumbnail={Amazon}>                    
Clon de Amazon con autenticación de usuario con Firebase y procesamiento de pagos con Stripe.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works