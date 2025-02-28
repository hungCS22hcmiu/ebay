"use client"

import SimilarProduct from "@/app/components/SimilarProduct"
import MainLayout from "@/app/layouts/MainLayout"

export default function Product({ params}){
    
    const product = 
        {
          id: 1,
          title: "Brown Leather Bag",
          description: "The cover theme for the DEITEL® HOW TO PROGRAM SERIES emphasizes social consciousness issues such as going green, clean energy, recycling, sustainability and more. Within the text, in addition to conventional program- ming exercises, we’ve included our Making a Difference exercise set to raise awareness of issues such as global warming, population growth, affordable healthcare, accessibility, privacy of electronic records and more. In this book, you’ll use Java to program applications that relate to these issues. We hope that what you learn in Java How to Program, 9/e will help you to make a difference.",
          url: "https://picsum.photos/id/7",
          price: 3000
        }
    return(
        <>
            <MainLayout>
                <div className="max-w-[1200] mx-auto">
                    <div className="flex px-4 py-10">
                        {product?.url 
                        ? <img className="w-[40%] rounded-lg" src={product?.url +'/280'}/> 
                        : <div className="W-[40%]"></div> }

                        <div className="px-4 w-full">
                            <div className="font-bold text-xl">{product?.title}</div>
                            <div className="text-sm text-gray-700 pt-2">Brand New - Full Warranty</div>
                            <div className="border-b py-1"></div>
                            
                            <div className="pt-3 pb-2">
                                <div className="flex items-center">
                                    Condition: <span className="font-bold text-[17px] ml-2">New</span>
                                </div>
                            </div>
                            <div className="border-b py-1"></div>

                            <div className="pt-3">
                                <div className="w-full flex items center justify-between">
                                    <div className="flex items-center">
                                        Price:
                                        {product?.price
                                        ? <div className="font-bold text-[20px] ml-2">
                                            USD ${(product?.price / 100).toFixed(2)}
                                        </div>
                                        : null}
                                    </div>
                                    <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-20 rounded-full cursor-pointer">
                                        Add To Cart
                                    </button>

                                </div>
                            </div>
                            <div className="border-b py-1"></div>

                            <div className="pt-3">
                                <div className="font-semibold pb-1">Description:</div>
                                <div className="text-sm">{product?.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <SimilarProduct></SimilarProduct>
            </MainLayout>
        </>
    )
}