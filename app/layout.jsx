import { Poppins } from 'next/font/google';
import Header from './componets/Header';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Jottax WDS',
  description: 'Web development repos about tutorials and courses',
  keywords:
    'Typescript, reactjs, nodejs, nextjs, npm',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
          <main className='container'>{children}</main>
      </body>
    </html>
  );
}
