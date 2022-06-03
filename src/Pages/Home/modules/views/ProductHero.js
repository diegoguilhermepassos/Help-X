import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import imga from "../../../../Assets/HelpXLogo.PNG"

const backgroundImage = imga;

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Seu aplicativo seguro!
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Peça ajuda agora!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup"
        sx={{ minWidth: 200 }}
      >
        Registre-se
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Seja rápido!
      </Typography>
    </ProductHeroLayout>
  );
}