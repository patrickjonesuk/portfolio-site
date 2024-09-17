import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    inlineSpacing: '2rem',
    textSpacing: '.5rem',

    spacing: {
      text: '.5rem',
      inline: '2rem',
      width: 'clamp(5vw, 10rem, 20vw)',
      height: '5rem',
      card: 'clamp(2.5vw, 5rem, 10vw);',
    },
    home: {
      padding: {
        width: '10rem',
        height: '5rem',
      },
    },
    surfaceAccentColour: '{slate.700}',
    textAccentColour: '{lime.600}',
    borderRadius: '10px',
    colorScheme: {
      dark: {
        backgroundColour: '{slate.800}',
        surfaceSecondary: '{gray.900}',
      },
      light: {
        backgroundColour: '{indigo.50}',
        surfaceSecondary: '{slate.200}',
      },
    },
  },
  components: {
    card: {
      colorScheme: {
        dark: {
          root: {
            background: '{surface.secondary}',
          },
        },
        light: {
          root: {
            background: '{surface.secondary}',
          },
        },
      },
      border: {
        radius: '{border.radius}',
      },
    },
    menubar: {
      background: '{surfaceAccentColour}',
      borderRadius: '{border.radius}',
      colorScheme: {
        light: {
          item: {
            color: '{surface.200}',
          },
        },
        dark: {
          item: {
            color: '{navigation.item.color}',
          },
        },
      },
    },
    divider: {
      colorScheme: {
        dark: {
          border: {
            color: '{zinc.700}',
          },
        },
        light: {
          border: {
            color: '{zinc.400}',
          },
        },
      },
    },
  },
});

export default MyPreset;
