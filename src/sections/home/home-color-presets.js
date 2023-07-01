import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
// components
import { primaryPresets } from 'src/theme/options/presets';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import { MotionViewport, varFade } from 'src/components/animate';
import Grid from "@mui/material/Unstable_Grid2";
import Lightbox, {useLightBox} from "../../components/lightbox";

// ----------------------------------------------------------------------



const images = [
    {
        src: "/assets/images/home/a_1.png",
        title: "Paso 1",
        description: "Edwin Ortega \n Senior Software Engineer"
    },
    {
        src: "/assets/images/home/a_2.png",
        title: "Paso 2",
        description: "Edwin Ortega \n Senior Software Engineer"
    },
    {
        src: "/assets/images/home/a_3.png",
        title: "Paso 3",
        description: "Edwin Ortega \n Senior Software Engineer"
    },
    {
        src: "/assets/images/home/a_4.png",
        title: "Paso 4",
        description: "Edwin Ortega \n Senior Software Engineer"
    },
];

const slides = [
    ...images,
];
export default function HomeColorPresets() {

    const lightbox = useLightBox(slides);
  const settings = useSettingsContext();

  const options = primaryPresets.map((color) => ({
    name: color.name,
    value: color.main,
  }));

  const renderDescription = (
    <Stack spacing={3} sx={{ textAlign: 'center' }}>
      <m.div variants={varFade().inDown}>
        <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          PERFIL
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography variant="h2"> 💵 APROBADOR </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography sx={{ color: 'text.secondary' }}>
          Cartera - Maria Augusta
        </Typography>
      </m.div>
    </Stack>
  );

  const renderContent = (

      <>



          <Grid xs={12} md={8}>


              <Grid xs={12} md={9}>
                  <Box
                      gap={1}
                      display="grid"
                      gridTemplateColumns={{
                          xs: 'repeat(2, 1fr)',
                          sm: 'repeat(3, 1fr)',
                          md: 'repeat(4, 1fr)',
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


      </>
  );

  const renderOptions = (
    <m.div variants={varFade().inDown}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          my: 5,
          width: 100,
          height: 88,
          mx: 'auto',
          position: 'relative',
        }}
      >
        {options.map((color, index) => {
          const { name, value } = color;

          const selected = settings.themeColorPresets === name;

          return (
            <CardActionArea
              key={name}
              onClick={() => settings.onUpdate('themeColorPresets', name)}
              sx={{
                width: 24,
                height: 24,
                bgcolor: value,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                position: 'absolute',
                color: 'common.white',
                ...(index === 0 && { bottom: 0 }),
                ...(index === 1 && { left: 19 }),
                ...(index === 2 && { right: 19 }),
                ...(index === 3 && { top: 0, left: 0 }),
                ...(index === 4 && { top: 0 }),
                ...(index === 5 && { top: 0, right: 0 }),
              }}
            >
              {selected && <Iconify icon="eva:color-picker-fill" width={16} />}
            </CardActionArea>
          );
        })}
      </Stack>
    </m.div>
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        position: 'relative',
        py: { xs: 10, md: 15 },
      }}
    >
      {renderDescription}

      {/* {renderOptions} */}

      {renderContent}
    </Container>
  );
}
