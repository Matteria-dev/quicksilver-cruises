import { notFound } from 'next/navigation'

interface Post
{
    id: string
    title: string
    slug: string
    content: any // Update this type based on your content structure
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
        const params = new URLSearchParams({
            depth: '1',
            where: JSON.stringify({
                slug: { equals: slug },
                _status: { equals: 'published' }
            })
        })

        const response = await fetch(
            `https://qsg-news.vercel.app/api/posts?${params}`,
            { next: { revalidate: 10 } }
        )

        if (!response.ok) {
            throw new Error(`Failed to fetch post: ${response.statusText}`)
        }

        const data = await response.json()
        return data.docs?.[0] || null
    } catch (error) {
        console.error('Error fetching post:', error)
        return null
    }
}

export default async function PostPage({
    params
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
        <article className="max-w-4xl mx-auto px-4 py-12">
            {/* Hero Image */}
            {post.heroImage?.url && (
                <div className="relative w-full">

                    <img
                        alt={post.heroImage?.alt || post.title}
                        src={`https://qsg-news.vercel.app${post.heroImage?.url}`}
                        className="aspect-[16/9] w-full rounded-2xl text-blue-500 dark:text-grey-200 bg-grey-200 dark:bg-dark-300 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-grey-200/10 dark:ring-dark-100/50" />
                </div>
            )}

            {/* Header */}
            <header className="mb-8 mt-8">
                <h1 className="text-4xl font-bold mb-4 text-blue-300 dark:text-blue-200">{post.title}</h1>

                <div className="flex items-center gap-4 text-sm text-blue-400 dark:text-grey-200">
                    <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString()}
                    </time>

                    {post.categories?.map((category) => (
                        <span
                            key={category.id}
                            className="rounded-full bg-gray-100 px-3 py-1"
                        >
                            {category.title}
                        </span>
                    ))}
                </div>

                {post.populatedAuthors?.[0] && (
                    <div className="flex items-center gap-3 mt-4">
                        <img
                            src="/placeholder-avatar.jpg"
                            alt={post.populatedAuthors[0].name}
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="font-medium">{post.populatedAuthors[0].name}</p>
                            <p className="text-sm text-gray-600">Author</p>
                        </div>
                    </div>
                )}
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
                {/* You'll need to implement a proper rich text renderer here */}
                {post.content}
            </div>
        </article>
    )
}
