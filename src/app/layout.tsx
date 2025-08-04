import type { Metadata } from 'next';
import { Bangers, Special_Elite } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollManager from '@/lib/ScrollManager';
import './globals.css';

const fontHeading = Bangers({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-family-heading',
});

const fontBody = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-family-body',
});

export const metadata: Metadata = {
  title: 'CHAITime Creator!',
  description: 'Support your favorite creators, one cup at a time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontHeading.variable} ${fontBody.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollManager />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}