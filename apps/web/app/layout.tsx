import { Geist, Geist_Mono } from 'next/font/google';

import '@workspace/ui/globals.css';
// import "@/app/globals.css"
import { Providers } from '@/components/providers';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import Footer from '@/components/footer';

const fontSans = Geist({
	subsets: ['latin'],
	variable: '--font-sans',
});

const fontMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
});

export const metadata: Metadata = {
	title: 'Supametrics: Privacy-First Web Analytics',
	description:
		'Take control of your website data with Supametrics, an open-source analytics platform. A lightweight and privacy-friendly alternative to Google Analytics, designed for self-hosting and complete data ownership.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
