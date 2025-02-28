"use client"

import MainLayout from "../layouts/MainLayout"
import CheckoutItem from "../components/CheckoutItem"
export default function Checkout(){
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
                <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
                    <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>
                    <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
                        <div className="w-[65%]">
                            <div className="bg-white rounded-lg p-4 border">
                                <div className="text-xl font-semibold mb-2">Shipping Details</div>
                                
                                <div>
                                    <ul className="text-sm mt-2">
                                        <li>Name: Le Hung</li>
                                        <li>Address: District 7</li>
                                        <li>ZipCode: 1213</li>
                                        <li>City: Ho Chi Minh</li>
                                        <li>Country: Viet Nam</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="Items" className="bg-white rounded-lg mt-4">
                                <CheckoutItem key={product.id} product={product}></CheckoutItem>
                            </div>
                        </div>

                        <div id="PlaceOrder" className="relative -top-[6px] w-[35%] border rounded-lg">
                            <div className="p-4">
                                <div className="flex items-baseline justify-between text-sm mb-1">
                                    <div>Items: (3)</div>
                                    <div>$12.99</div>
                                </div>
                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <div>Shipping:</div>
                                    <div>Free</div>
                                </div>
                                <div className="border-t"></div>
                                <div className="flex items-center justify-between my-4">
                                    <div className="font-semibold">Order Total</div>
                                    <div className="text-2xl font-semibold">
                                        $12.99
                                    </div>
                                </div>
                                <form>
                                    <div className="border border-gray-500 p-2 rounded-sm" id="card-element"/>
                                    <p
                                        id="card-error"
                                        role="alter"
                                        className="text-red-700 text-center font-semibold relative top-2"></p>
                                    <button
                                        type="submit"
                                        className="mt-4 bg-green-600 hover:bg-violet-500 text-lg w-full text-white font-semibold p-3 rounded-full">
                                        Confirm and Pay
                                    </button>
                                </form>
                            </div>
                            <div className="flex items-center p-4 justify-center gap-2 border-t">
                                <img width={50} src="/images/logo.svg"></img>
                                <div className="font-light mb-2 mt-2">MONEY BACK GUARANTEE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}