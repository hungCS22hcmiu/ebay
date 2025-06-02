import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req, context) {
    // try {
    //     const { id } = context.params

    //     const product = await prisma.products.findFirst({
    //         where: { id: Number(id) }
    //     })
        
    //     await prisma.$disconnect();
    //     return NextResponse.json(product);
    // } catch (error) {
    //     console.log(error);
    //     await prisma.$disconnect();
    //     return new NextResponse('Something went wrong', { status: 400 });
    // }
    try {
        // Await the context.params to access its properties properly
        const { id } = await context.params; // Use await here to get params correctly
    
        const product = await prisma.products.findFirst({
          where: { id: Number(id) },
        });
    
        return new Response(JSON.stringify(product));
      } catch (error) {
        return new Response('Error fetching product', { status: 500 });
      }
}