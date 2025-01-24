import { notFound } from 'next/navigation'
import { RichText } from '@/components/rich-text'
import { Container } from '@/components/container'

interface Post
{
    id: string
    title: string
    slug: string
    content: any
    heroImage?: {
        url: string
        alt: string
    }
    meta?: {
        description?: string
    }
    publishedAt: string
    categories?: {
        id: string
        title: string
    }[]
    populatedAuthors?: {
        id: string
        name: string
    }[]
}

async function getPost(slug: string): Promise<Post | null>
{
    try {
        const requestUrl = `https://qsg-news.vercel.app/api/posts?depth=2&where=${encodeURIComponent(
            JSON.stringify({
                and: [
                    { slug: { equals: slug } },
                    { _status: { equals: 'published' } }
                ]
            })
        )}`

        const response = await fetch(requestUrl, {
            next: { revalidate: 60 },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch post: ${response.statusText}`)
        }

        const data = await response.json()

        // Get post with exact slug match
        const matchingPost = data.docs?.find((p: Post) => p.slug === slug)

        return matchingPost || null
    } catch (error) {
        return null
    }
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>
})
{
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        notFound()
    }

    return (
        <article>
            <div className="relative">
                <Container className="relative">
                    {post.heroImage?.url && (
                        <div className="inset-0 h-[calc(30vh-5rem)] md:h-[calc(50vh-5rem)] lg:h-[calc(75vh-5rem)] w-full lg:w-[calc(100%-2rem)] max-w-[1920px] mx-auto overflow-hidden">
                            <img
                                alt={post.heroImage.alt || post.title}
                                src={`https://qsg-news.vercel.app${post.heroImage.url}`}
                                className="absolute inset-0 h-[calc(30vh-5rem)] md:h-[calc(50vh-5rem)] lg:h-[calc(75vh-5rem)] w-[calc(100%-1rem)] lg:w-[calc(100%-1rem)] ml-2 mt-3 overflow-hidden rounded-2xl md:rounded-2xl lg:rounded-3xl object-cover ring-1 ring-inset ring-grey-100 dark:ring-dark-400"
                            />
                            <div className="hidden md:block absolute bottom-2 left-7 max-w-xl lg:max-w-2xl rounded-2xl bg-grey-200/70 dark:bg-dark-400/70 p-8 backdrop-blur-md">
                                <div className="flex items-center gap-4 text-sm text-blue-400 dark:text-blue-100">
                                    <time dateTime={post.publishedAt}>
                                        {new Date(post.publishedAt).toLocaleDateString()}
                                    </time>
                                    {post.categories?.map((category) => (
                                        <span key={category.id} className="font-mono uppercase">
                                            {category.title}
                                        </span>
                                    ))}
                                </div>
                                <h1 className="mt-4 text-3xl lg:text-4xl font-medium tracking-tight text-blue-300 dark:text-blue-200">
                                    {post.title}
                                </h1>
                            </div>
                        </div>
                    )}

                    <div className="md:hidden mt-6 px-4">
                        <div className="flex items-center gap-4 text-sm text-blue-400 dark:text-blue-100">
                            <time dateTime={post.publishedAt}>
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </time>
                            {post.categories?.map((category) => (
                                <span key={category.id} className="font-mono uppercase">
                                    {category.title}
                                </span>
                            ))}
                        </div>
                        <h1 className="mt-4 text-3xl font-medium tracking-tight text-blue-300 dark:text-blue-200">
                            {post.title}
                        </h1>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <div className="prose prose-lg max-w-none">
                        <RichText content={post.content} />
                    </div>
                </div>
            </Container>
        </article>
    )
}

export const dynamic = 'force-dynamic'