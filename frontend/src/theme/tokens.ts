export const colors = {
  prime500: '#0bb7ae',
  prime600: '#00a099',
  prime100: '#e0f3f4',
  originGray: '#233237',
  pink: '#fc6589',
  pinkLight: '#ffe4ea',
  gray900: '#1e1f2a',
  gray800: '#2e3242',
  gray700: '#45495b',
  gray600: '#636978',
  gray500: '#838996',
  gray400: '#9ba2ae',
  gray300: '#c1c7d1',
  gray200: '#dadce0',
  gray100: '#edeef1',
  gray50: '#f7f8f9',
  white: '#ffffff',
  errorBg: '#fff4f4',
  errorText: '#f87e7e',
} as const;

export const typography = {
  size: {
    heroH2: 56,
    sectionH2: 48,
    sectionH3: 36,
    cardH3: 28,
    navH3: 16,
    body: 16,
    bodySmall: 14,
    caption: 12,
    ctaLabel: 20,
  },
  weight: {
    regular: '400' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  lineHeight: {
    heroH2: 72.8,
    sectionH2: 63.84,
    sectionH3: 50.4,
    nav: 28.8,
    body: 28.8,
    bodySmall: 18,
  },
  letterSpacing: {
    heading: 0.03,
    body: 0.48,
  },
} as const;

export const radii = {
  pill: 72,
  card: 10,
  small: 6,
  medium: 8,
} as const;

export const spacing = {
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
  64: 64,
  80: 80,
  120: 120,
  144: 144,
} as const;
