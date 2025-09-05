import type { Metadata } from 'next';
import '@/shared/globals.css';
import { ThemeProvider } from '@/entities/theme';
import { cva } from 'class-variance-authority';

export const metadata: Metadata = {
  title: 'Weather',
  description: 'Weather app',
};

const RootStyle = cva('min-h-screen bg-background font-sans antialiased');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" style={{ colorScheme: 'light' }} suppressHydrationWarning>
      <body className={RootStyle()}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
