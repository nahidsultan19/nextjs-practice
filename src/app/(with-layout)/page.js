import Image from "next/image";
import image from '@/assets/images.jpg';
import Categories from "@/components/HomePage/categories";

export const metadata = {
  title: 'Home',
  description: 'next app',
};

const HomePage = () => {
  return (
    <main className="">
      <h1>Home page</h1>
      <Categories />
    </main>
  )
}

export default HomePage;
