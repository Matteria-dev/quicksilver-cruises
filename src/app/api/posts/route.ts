import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    // Get the search params from the request URL
    const { searchParams } = new URL(request.url)
    
    // Construct the CMS API URL
    const apiUrl = `https://qsg-news.vercel.app/api/posts?${searchParams.toString()}`
    
    console.log('Fetching from:', apiUrl) // Debug log
    
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 10 } // Cache for 10 seconds
    })

    if (!response.ok) {
      throw new Error(`CMS responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
    
  } catch (error) {
    console.error('Proxy error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts from CMS' },
      { status: 500 }
    )
  }
}