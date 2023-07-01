import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import Image from 'src/components/image';
import { useSettingsContext } from 'src/components/settings';
import { MotionViewport, varFade } from 'src/components/animate';
import HomeLookingFor from "./home-looking-for";

// ----------------------------------------------------------------------

export default function HomeDeleteApp() {
  const settings = useSettingsContext();


    const renderDescription = (
        <Stack alignItems="center" spacing={2}>
            <m.div variants={varFade().inUp}>
                <Typography component="div" variant="h5" sx={{ color: 'primary.main' }}>
                   UN ANTES
                </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
                <Typography variant="h4" sx={{ color: 'common.white' }}>
                    CRM HT BUSINESS V1
                </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
                {/* <Typography sx={{ color: 'grey.500' }}> */}
                {/*     Un tema oscuro que se siente más agradable a la vista. */}
                {/* </Typography> */}
            </m.div>

            {/* <m.div variants={varFade().inUp}> */}
            {/*   <Switch */}
            {/*     checked={settings.themeMode === 'dark'} */}
            {/*     onClick={() => */}
            {/*       settings.onUpdate('themeMode', settings.themeMode === 'light' ? 'dark' : 'light') */}
            {/*     } */}
            {/*   /> */}
            {/* </m.div> */}
        </Stack>
    );

    const renderImg = (
        <m.div variants={varFade().inUp}>
            <Image
                alt="darkmode"
                src="/assets/images/home/crm_v1_a1.png"
                sx={{
                    borderRadius: 2,
                    my: { xs: 5, md: 10 },
                    boxShadow: (theme) => `-40px 40px 80px ${alpha(theme.palette.common.black, 0.24)}`,
                }}
            />
            <Image
                alt="darkmode"
                src="/assets/images/home/crm_v1_a2.png"
                sx={{
                    borderRadius: 2,
                    my: { xs: 5, md: 10 },
                    boxShadow: (theme) => `-40px 40px 80px ${alpha(theme.palette.common.black, 0.24)}`,
                }}
            />
        </m.div>
    );



  const renderDescriptionV2 = (
    <Stack alignItems="center" spacing={3}>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="h5" sx={{ color: 'primary.main' }}>
            UN DESPUÉS
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h4" sx={{ color: 'common.white' }}>
            CRM HT BUSINESS V2
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        {/* <Typography sx={{ color: 'grey.500' }}> */}
        {/*     Un tema oscuro que se siente más agradable a la vista. */}
        {/* </Typography> */}
      </m.div>

      {/* <m.div variants={varFade().inUp}> */}
      {/*   <Switch */}
      {/*     checked={settings.themeMode === 'dark'} */}
      {/*     onClick={() => */}
      {/*       settings.onUpdate('themeMode', settings.themeMode === 'light' ? 'dark' : 'light') */}
      {/*     } */}
      {/*   /> */}
      {/* </m.div> */}
    </Stack>
  );

  const renderImgV2 = (
    <m.div variants={varFade().inUp}>
      <Image
        alt="darkmode"
        src="/assets/images/home/darkmode.webp"
        sx={{
          borderRadius: 2,
          my: { xs: 5, md: 10 },
          boxShadow: (theme) => `-40px 40px 80px ${alpha(theme.palette.common.black, 0.24)}`,
        }}
      />
    </m.div>
  );

  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: 'grey.900',
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 20 },
      }}
    >


        <Container component={MotionViewport}>
            {renderDescription}

            {renderImg}
        </Container>
      <Container component={MotionViewport}>
        {renderDescriptionV2}

        {renderImgV2}
      </Container>


    </Box>
  );
}
