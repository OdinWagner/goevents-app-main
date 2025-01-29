import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main'; 
import { Inter } from 'next/font/google';
import './globals.css';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>GoEvents-app</title>
        <meta name="description" content="Site Web d'une salle de conférence qui affiche les différents événements" />
      </Head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
