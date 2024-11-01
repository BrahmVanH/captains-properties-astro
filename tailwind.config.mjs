/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'rgb(var(--background))',
				foreground: 'hsl(var(--foreground))',
				overlay: 'rgba(var(--overlay))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'rgb(var(--primary))',
					foreground: 'rgb(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'rgb(var(--secondary))',
					foreground: 'rgb(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
			borderImageSlice: {
				activeNavLink: 'var(--nav-border-img-slice)',
				heading: 'var(--heading-border-img-slice)',
			},
			borderImageSrc: {
				activeNavLink: 'var(--nav-border-img-src)',
			},
			borderImageOutset: {
				activeNavLink: 'var(--nav-border-img-outset)',
				heading: 'var(--heading-border-img-outset)',
			},
			borderImageRepeat: {
				activeNavLink: 'var(--nav-border-img-repeat)',
				heading: 'var(--heading-border-img-repeat)',
			},
			borderImageSource: {
				headingX: 'var(--heading-border-img-src-horizontal)',
				headingY: 'var(--heading-border-img-src-vertical)',
			},
			borderWidth: {
				headingLeft: 'var(--heading-border-width-left)',
				headingBottom: 'var(--heading-border-width-bottom)',
				card: 'vard(--card-border-width)',
			},
			borderStyle: {
				heading: 'var(--heading-border-style)',
				card: 'var(--card-border-style)',
			},
			borderColor: {
				heading: 'transparent',
			},
			borderRadius: {
				lg: 'var(--radius)',
				sm: 'var(--radius-mobile)',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.active-nav-link': {
					borderImageSlice: theme('borderImageSlice.activeNavLink'),
					borderImageSource: theme('borderImageSrc.activeNavLink'),
					borderImageOutset: theme('borderImageOutset.activeNavLink'),
					borderImageRepeat: theme('borderImageRepeat.activeNavLink'),
				},
				'.heading-border-left': {
					borderWidth: theme('borderWidth.headingLeft'),
					borderImageSource: theme('borderImageSource.headingY'),
					borderColor: theme('borderColor.heading'),
					borderStyle: theme('borderStyle.heading'),
					borderImageSlice: theme('borderImageSlice.heading'),
					borderImageOutset: theme('borderImageOutset.heading'),
					borderImageRepeat: theme('borderImageRepeat.heading'),
				},
				'.heading-border-bottom': {
					borderWidth: theme('borderWidth.headingBottom'),
					borderImageSource: theme('borderImageSource.headingX'),
					borderColor: theme('borderColor.heading'),
					borderStyle: theme('borderStyle.heading'),
					borderImageSlice: theme('borderImageSlice.heading'),
					borderImageOutset: theme('borderImageOutset.heading'),
					borderImageRepeat: theme('borderImageRepeat.heading'),
				},
				'.card': {
					borderWidth: theme('borderWidth.card'),
					borderStyle: theme('borderStyle.card'),
					borderColor: theme('colors.card-border'),
					innerBorderRadius: 'calc(var(--radius) - var(--card-border-width))',
				},
			});
		}),
	],
};
