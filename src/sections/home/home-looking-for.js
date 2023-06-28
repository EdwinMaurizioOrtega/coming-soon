import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  const mdUp = useResponsive('up', 'md');

  const renderBtn = (

      <Image disabledEffect alt="rocket" src="/assets/icons/logo_single.svg" />

  );

  const renderDescription = (
    <Stack
      sx={{
        textAlign: {
          xs: 'center',
          md: 'right',
        },
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
          PERFIL
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography
          variant="h2"
          sx={{
            mt: 3,
            mb: { md: 5 },
          }}
        >
          VENDEDOR
        </Typography>
      </m.div>

      {mdUp && <m.div variants={varFade().inDown}> {renderBtn} </m.div>}
    </Stack>
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 5, md: 0 }}>
        <Grid xs={12} md={4}>
          {renderDescription}
        </Grid>

        <Grid xs={12} md={5}>
          <m.div variants={varFade().inUp}>
            <Image disabledEffect alt="rocket" src="/assets/images/home/v_1.png" />
            <Image disabledEffect alt="rocket" src="/assets/images/home/v_2.png" />
            <Image disabledEffect alt="rocket" src="/assets/images/home/v_3.png" />
            <Image disabledEffect alt="rocket" src="/assets/images/home/v_4.png" />
            <Image disabledEffect alt="rocket" src="/assets/images/home/v_6.png" />
            <Image disabledEffect alt="rocket" src="/assets/images/home/v_6.png" />
            <Image disabledEffect alt="rocket" src="/assets/images/home/v_7.png" />
            <Image disabledEffect alt="rocket" src="/assets/images/home/v_8.png" />
          </m.div>
        </Grid>

        {!mdUp && (
          <Grid xs={12} sx={{ textAlign: 'center' }}>
            {renderBtn}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
