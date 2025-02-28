//import Image from "next/image";
"use client"
import Product from "./components/Product"

import CarouselComp from './components/CarouselComp'
import MainLayout from './layouts/MainLayout'
export default function Home() {

  const products = [
    {
      id: 1,
      title: "Brown Leather Bag",
      description: "The cover theme for the DEITEL® HOW TO PROGRAM SERIES emphasizes social consciousness issues such as going green, clean energy, recycling, sustainability and more. Within the text, in addition to conventional program- ming exercises, we’ve included our Making a Difference exercise set to raise awareness of issues such as global warming, population growth, affordable healthcare, accessibility, privacy of electronic records and more. In this book, you’ll use Java to program applications that relate to these issues. We hope that what you learn in Java How to Program, 9/e will help you to make a difference.",
      url: "https://picsum.photos/id/7",
      price: 3000
    },
    {
      id: 2,
      title: "School Books",
      description: "The cover theme for the DEITEL® HOW TO PROGRAM SERIES emphasizes social consciousness issues such as going green, clean energy, recycling, sustainability and more. Within the text, in addition to conventional program- ming exercises, we’ve included our Making a Difference exercise set to raise awareness of issues such as global warming, population growth, affordable healthcare, accessibility, privacy of electronic records and more. In this book, you’ll use Java to program applications that relate to these issues. We hope that what you learn in Java How to Program, 9/e will help you to make a difference.",
      url: "https://picsum.photos/id/20",
      price: 1999
    }
  ]
  return (
    <MainLayout>
      <CarouselComp />
      <div className='max-w-[1200px] mx-auto'>
        <div className='text-2xl font-bold mt-4 md-6 px-4'>Products</div>

        <div className='grid grid-cols-5 gap-4'>
          {products.map(product => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </MainLayout>
  
   )
}
