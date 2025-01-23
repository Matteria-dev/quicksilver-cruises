import { NextRequest, NextResponse } from 'next/server'

// Define the params type but don't use it directly in the function signature
type RouteParams = {
    slug: string
}

// Use the more specific Next.js 15 route handler type
export async function GET(
    request: NextRequest,
    context: { params: Promise<RouteParams> }
): Promise<NextResponse>
{
    const { slug } = await context.params

    try {
        const queryParams = new URLSearchParams({
            depth: '2',
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
                }
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

export const runtime = 'edge'
export const dynamic = 'force-dynamic'
