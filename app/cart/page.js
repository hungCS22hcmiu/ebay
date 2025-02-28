"use client"
import MainLayout from "../layouts/MainLayout"
import SimilarProduct from "../components/SimilarProduct"
import CartItem from "../components/CartItem"
export default function Cart(){
    const product = 
        {
          id: 1,
          title: "Brown Leather Bag",
          description: "The cover theme for the DEITEL® HOW TO PROGRAM SERIES emphasizes social consciousness issues such as going green, clean energy, recycling, sustainability and more. Within the text, in addition to conventional program- ming exercises, we’ve included our Making a Difference exercise set to raise awareness of issues such as global warming, population growth, affordable healthcare, accessibility, privacy of electronic records and more. In this book, you’ll use Java to program applications that relate to these issues. We hope that what you learn in Java How to Program, 9/e will help you to make a difference.?",
          url: "https://picsum.photos/id/7",
          price: 3000
        }
    return(
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                    <div className="text-2xl font-bold my-4">Shopping Cart</div>
                    <div className="relative flex items-baseline justify-between gap-2">
                        <div className="w-[65%]">
                            <CartItem key={product.id} product={product}></CartItem>

                        </div>

                        <div id="goToCheckout" className="md:w-[33%] absolute top-0 right-0 m-2">
                            <div className="bg-white p-4 border">
                                <button className="flex items-center bg-green-600 w-full text-white hover:bg-green-700 font-semibold p-3 rounded-full mt-4">
                                    Go to checkout
                                </button>
                                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                                    <div>Items (3)</div>
                                    <div>$12.97</div>
                                </div>

                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <div>Shipping: </div>
                                    <div>Free</div>
                                </div>

                                <div className="border-b border-gray-300"></div>
                                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                                    <div>Subtotal</div>
                                    <div>$26.97</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <SimilarProduct></SimilarProduct>
            </MainLayout>
        </>
    )
}