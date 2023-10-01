import Image from "next/image";
import image from '@/assets/images.jpg';

export const metadata = {
  title: 'Home',
  description: 'next app',
}

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home page</h1>
      <Image src={image} alt='image' placeholder="blur" />
    </main>
  )
}

export default HomePage;
