import {m} from 'framer-motion';
// @mui
import {alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import {MotionViewport, varFade} from 'src/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
    {
        icon: ' /assets/icons/home/ic_development.svg',
        title: 'Adopción de tecnologías actuales',
        description: 'Los CRM suelen utilizar tecnologías modernas y actualizadas en su desarrollo, lo que garantiza un sistema robusto, escalable y compatible con otras aplicaciones y plataformas.',
    },
    {
        icon: ' /assets/icons/home/ic_make_brand.svg',
        title: 'Administración eficiente de las interacciones con los clientes:',
        description: 'Un CRM permite gestionar y analizar las interacciones de órdenes de compra y clientes de manera centralizada y organizada.',
    },
    {
        icon: ' /assets/icons/home/ic_design.svg',
        title: 'Optimización de la rentabilidad: ',
        description:
            'Al tener un control y seguimiento preciso de las interacciones con los clientes, un CRM ayuda a identificar oportunidades de ventas adicionales y a maximizar la rentabilidad.',
    },
    {
        icon: ' /assets/icons/home/ic_design.svg',
        title: 'Incremento de las ventas a nuevos clientes:',
        description: 'Mediante la gestión efectiva de los datos de clientes potenciales y el seguimiento de las oportunidades de venta, un CRM ayuda a aumentar las ventas a nuevos clientes.',
    },
    {
        icon: ' /assets/icons/home/ic_design.svg',
        title: 'Integración con sistemas de facturación:',
        description:
            'Al complementarse con el sistema de facturación, como en tu caso, el CRM permite una mayor eficiencia en el proceso de facturación y seguimiento de pagos.',
    },
    {
        icon: ' /assets/icons/home/ic_make_brand.svg',
        title: 'Análisis y reportes avanzados:',
        description: 'Los sistemas CRM suelen ofrecer capacidades de análisis y generación de informes, lo que proporciona información valiosa para la toma de decisiones basadas en datos.',
    },
    {
        icon: ' /assets/icons/home/ic_design.svg',
        title: 'Automatización de tareas y procesos:',
        description: 'Un CRM permite automatizar diversas tareas y procesos relacionados con la gestión de clientes, lo que ahorra tiempo y reduce errores.',
    },
    {
        icon: ' /assets/icons/home/ic_development.svg',
        title: 'Mejor colaboración y comunicación interna:',
        description: ' Al contar con un sistema centralizado de gestión de clientes, el CRM facilita la colaboración y la comunicación entre los diferentes departamentos de la empresa.',
    },
    {
        icon: ' /assets/icons/home/ic_make_brand.svg',
        title: 'Personalización y segmentación de la comunicación',
        description: 'Un CRM proporciona información detallada sobre los clientes, lo que permite personalizar y segmentar la comunicación para ofrecer una experiencia más relevante y personalizada.',
    },
    {
        icon: ' /assets/icons/home/ic_make_brand.svg',
        title: 'Fidelización de clientes::',
        description: 'Al tener un conocimiento profundo de los clientes y sus necesidades, un CRM ayuda a desarrollar estrategias de fidelización efectivas, mejorando la retención de clientes.',
    },
];

// ----------------------------------------------------------------------

export default function HomeMinimal() {
    return (
        <Container
            component={MotionViewport}

        >
            <Stack
                spacing={3}
                sx={{
                    textAlign: 'center',
                    mb: {xs: 5, md: 10},
                }}
            >
                <m.div variants={varFade().inUp}>
                    <Typography component="div" variant="overline" sx={{color: 'text.disabled'}}>
                        nuestra plataforma
                    </Typography>
                </m.div>

                <m.div variants={varFade().inDown}>
                    <Typography variant="h2">
                        CRM Lidenar <br/> ¿Beneficios?
                    </Typography>
                </m.div>
            </Stack>

            <Box
                gap={{xs: 3, lg: 10}}
                display="grid"
                alignItems="center"
                gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    md: 'repeat(3, 1fr)',
                }}
            >
                {CARDS.map((card, index) => (
                    <m.div variants={varFade().inUp} key={card.title}>
                        <Card
                            sx={{
                                textAlign: 'center',
                                boxShadow: {md: 'none'},
                                bgcolor: 'background.default',
                                p: (theme) => theme.spacing(10, 5),
                                ...(index === 1 && {
                                    boxShadow: (theme) => ({
                                        md: `-40px 40px 80px ${
                                            theme.palette.mode === 'light'
                                                ? alpha(theme.palette.grey[500], 0.16)
                                                : alpha(theme.palette.common.black, 0.4)
                                        }`,
                                    }),
                                }),
                            }}
                        >
                            <Box
                                component="img"
                                src={card.icon}
                                alt={card.title}
                                sx={{mx: 'auto', width: 48, height: 48}}
                            />

                            <Typography variant="h5" sx={{mt: 8, mb: 2}}>
                                {card.title}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}}>{card.description}</Typography>
                        </Card>
                    </m.div>
                ))}
            </Box>
        </Container>
    );
}
