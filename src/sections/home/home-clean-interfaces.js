import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';
import Grid from "@mui/material/Unstable_Grid2";
import Lightbox, {useLightBox} from "../../components/lightbox";
import {useResponsive} from "../../hooks/use-responsive";

// ----------------------------------------------------------------------


const images = [
    {
        src: "/assets/images/home/b_1.png",
        title: "Paso 1",
        description: "Edwin Ortega \n Senior Software Engineer"
    },
    {
        src: "/assets/images/home/b_2.png",
        title: "Paso 2",
        description: "Edwin Ortega \n Senior Software Engineer"
    },
    {
        src: "/assets/images/home/b_3.png",
        title: "Paso 3",
        description: "Edwin Ortega \n Senior Software Engineer"
    },
];

const slides = [
    ...images,
];

export default function HomeCleanInterfaces() {

    const lightbox = useLightBox(slides);

    const mdUp = useResponsive('up', 'md');

    const renderBtn = (

        <Image disabledEffect alt="rocket" src="/assets/illustrations/characters/animal.svg"/>

    );


    const renderDescription = (
        <Stack
            sx={{
                textAlign: {
                    xs: 'center',
                    md: 'left',
                },
            }}
        >
            <m.div variants={varFade().inDown}>
                <Typography variant="overline" component="div" sx={{color: 'common.black'}}>
                    PERFIL
                </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
                <Typography

                    variant="h2"
                    sx={{
                        mt: 3,
                        mb: {md: 5},
                        color: 'common.black',
                    }}
                >
                    BODEGA
                </Typography>
            </m.div>

            {mdUp && <m.div variants={varFade().inDown}> {renderBtn} </m.div>}
        </Stack>
    );



  return (
      <Container
          component={MotionViewport}
          sx={{
              py: {xs: 10, md: 15},
          }}
      >
          <Grid container alignItems="center" justifyContent="space-between" spacing={{xs: 5, md: 0}}>
              <Grid xs={12} md={4}>
                  {renderDescription}
              </Grid>

              <Grid xs={12} md={8}>


                  <Grid xs={12} md={9}>
                      <Box
                          gap={1}
                          display="grid"
                          gridTemplateColumns={{
                              xs: 'repeat(2, 1fr)',
                              sm: 'repeat(2, 1fr)',
                              md: 'repeat(2, 1fr)',
                          }}
                      >
                          {slides.map((slide) => {
                              const thumbnail = slide.src;

                              return (
                                  <Image
                                      key={thumbnail}
                                      alt={thumbnail}
                                      src={thumbnail}
                                      ratio="1/1"
                                      onClick={() => lightbox.onOpen(`${thumbnail}`)}
                                      sx={{
                                          borderRadius: 1,
                                          cursor: 'pointer',
                                      }}
                                  />
                              );
                          })}
                      </Box>
                  </Grid>


                  <Lightbox
                      open={lightbox.open}
                      close={lightbox.onClose}
                      slides={slides}
                      index={lightbox.selected}

                  />

              </Grid>

              {!mdUp && (
                  <Grid xs={12} sx={{textAlign: 'center'}}>
                      {renderBtn}
                  </Grid>
              )}
          </Grid>
      </Container>
  );
}
