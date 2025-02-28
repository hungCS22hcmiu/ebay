"use client"

import { BiLoader } from "react-icons/bi"
import ProductComp from "./Product"

export default function SimilarProduct(){
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
    return(
        <>
           <div>
                <div className="border-b py-1 max-w-[1200] mx-auto"></div>
                <div className="max-w-[1200] mx-auto">
                    <div className="font-bold text-2xl py-2 mt-4">Similar sponsored items</div>
                    {products.length > 0 ?
                    <div className="grid grid-cols-5 gap-4">
                        {products.map(product => (
                            <ProductComp key={product.id} product={product}/>
                        ))}
                    </div>
                    : <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center gap-4 font-semibold">
                            <BiLoader size={30} className="text-blue-400 animate-spin"></BiLoader>
                            Loading products...
                        </div>

                    </div>
                    }
                </div>
           </div>
        </>
    )
}