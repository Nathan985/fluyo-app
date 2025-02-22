/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				rightModalOpen: {
					from: { opacity: 0, transform: "translateX(2000px)" },
					to: { opacity: 1, transform: "translateX(0)" },
				},
				overlayShow: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				centerModalOpen: {
					from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
					to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
				},
				slideDownAndFade: {
					from: { opacity: 0, transform: "translateY(-2px)" },
					to: { opacity: 1, transform: "translateY(0)" },
				},
				slideLeftAndFade: {
					from: { opacity: 0, transform: "translateX(2px)" },
					to: { opacity: 1, transform: "translateX(0)" },
				},
				slideUpAndFade: {
					from: { opacity: 0, transform: "translateY(2px)" },
					to: { opacity: 1, transform: "translateY(0)" },
				},
				slideRightAndFade: {
					from: { opacity: 0, transform: "translateX(-2px)" },
					to: { opacity: 1, transform: "translateX(0)" },
				},
				slideDown: {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				slideUp: {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"right-modal-open": "rightModalOpen 600ms ease-in-out",
				"overlay-show": "overlayShow 300ms ease-in-out",
				"center-modal-open": "centerModalOpen 150ms ease-in-out",
				"slide-down-and-fade":
					"slideDownAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-left-and-fade":
					"slideLeftAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-up-and-fade":
					"slideUpAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-right-and-fade":
					"slideRightAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-down": "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
				"slide-up": "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("tailwind-scrollbar"),
		require("tailwindcss-animate"),
	]
}
