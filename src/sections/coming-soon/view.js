'use client';

import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
// hooks
import { useCountdownDate } from 'src/hooks/use-countdown';
// _mock
import { _socials } from 'src/_mock';
// assets
import { ComingSoonIllustration } from 'src/assets/illustrations';
// components
import Iconify from 'src/components/iconify';
import Link from "next/link";


// ----------------------------------------------------------------------

export default function ComingSoonView() {
  const { days, hours, minutes, seconds } = useCountdownDate(new Date('07/03/2023 10:00'));

  return (
    <>
      <Typography variant="h3" paragraph>
          ¡Muy pronto!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
          ¡Actualmente estamos trabajando duro en esta página!
      </Typography>

      <ComingSoonIllustration sx={{ my: 10, height: 240 }} />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
        sx={{ typography: 'h2' }}
      >
        <TimeBlock label="Días" value={days} />

        <TimeBlock label="Horas" value={hours} />

        <TimeBlock label="Minutos" value={minutes} />

        <TimeBlock label="Segundos" value={seconds} />
      </Stack>

      <Link href="/" passHref>
              <Button variant="contained" size="large" >
                Presentación
              </Button>
      </Link>

    </>
  );
}

// ----------------------------------------------------------------------

function TimeBlock({ label, value }) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}

TimeBlock.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
