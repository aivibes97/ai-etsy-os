import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { niche } = await request.json();

    // Basic validation
    if (!niche || niche.trim() === '') {
      return NextResponse.json(
        { error: 'Niche is required' },
        { status: 400 }
      );
    }

    // Mock data - simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock response based on niche
    const mockProducts = [
      `Digital Planner for ${niche} - Printable PDF`,
      `${niche} Business Template Bundle`,
      `Social Media Content Calendar for ${niche}`,
      `Etsy SEO Guide for ${niche} Sellers`,
      `Digital Wall Art Collection: ${niche} Theme`,
      `Printable Wedding Invitation Template Set`,
      `Canva Template Bundle for ${niche} Business`,
      `Digital Product Mockup Bundle`,
      `Instagram Story Templates for ${niche}`,
      `Printable Quote Cards: ${niche} Inspiration`
    ];

    return NextResponse.json({ products: mockProducts });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
