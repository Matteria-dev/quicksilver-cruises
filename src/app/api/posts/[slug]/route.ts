import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug
  
  try {
    const queryParams = new URLSearchParams({
      depth: '2', // Increased depth for nested content
      where: JSON.stringify({
        and: [
          { slug: { equals: slug } },
          { _status: { equals: 'published' } }
        ]
      })
    })

    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL
    if (!cmsUrl) {
      throw new Error('CMS URL not configured')
    }

    const response = await fetch(
      `${cmsUrl}/api/posts?${queryParams}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store' // Disable cache for debugging
      }
    )

    if (!response.ok) {
      throw new Error(`CMS responded with status: ${response.status}`)
    }

    const data = await response.json()
    const post = data.docs?.[0]

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch post', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}