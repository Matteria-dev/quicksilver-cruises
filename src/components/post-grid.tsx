'use client'
import React, { useEffect, useState } from 'react'

interface Category {
  id: string
  title: string
  slug: string
}

interface Post {
  id: string
  title: string
  slug: string
  heroImage?: {
    url: string
    alt: string
  }
  meta?: {
    description?: string
  }
  publishedAt: string
  categories?: Category[]
}

interface PostsResponse {
  docs: Post[]
  totalDocs: number
  totalPages: number
  page: number
}

const PostsGrid: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

    useEffect(() =>
    {
        const fetchPosts = async () =>
        {
            try {
                setLoading(true)
                setError(null)

                const whereQuery = {
                    _status: { equals: 'published' },
                    categories: {
                        exists: true,
                        not: { equals: null },
                        elemMatch: {
                            slug: { equals: 'quicksilver-cruises' }
                        }
                    }
                }

                const params = new URLSearchParams({
                    depth: '1',
                    limit: '12',
                    where: JSON.stringify(whereQuery)
                })

                const response = await fetch(`/api/posts?${params.toString()}`)

                if (!response.ok) {
                    throw new Error('Failed to fetch posts')
                }

                const data: PostsResponse = await response.json()
                const filteredPosts = data.docs.filter(post =>
                    post.categories?.some(cat => cat.slug === 'quicksilver-cruises')
                )
                setPosts(filteredPosts)
            } catch (err) {
                console.error('Error:', err)
                setError(err instanceof Error ? err.message : 'An error occurred')
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) {
        return (
            <div className="w-full h-64 flex items-center justify-center">
                <p className="text-lg text-blue-500 dark:text-grey-200">Loading posts...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full h-64 flex items-center justify-center">
                <p className="text-red-500">Error: {error}</p>
            </div>
        )
    }

    if (!posts || posts.length === 0) {
        return (
            <div className="w-full h-64 flex items-center justify-center">
                <p className="text-lg">No Quicksilver Cruises posts found</p>
            </div>
        )
    }

    return (
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
                <article key={post.id} className="flex flex-col">
                    <div className="relative w-full">
                        <img
                            alt={post.heroImage?.alt || post.title}
                            src={`https://qsg-news.vercel.app${post.heroImage?.url}`}
                            className="aspect-[16/9] w-full rounded-2xl text-blue-500 dark:text-grey-200 bg-grey-200 dark:bg-dark-300 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-grey-200/10 dark:ring-dark-100/50" />
                    </div>
                    <div className="flex flex-col h-full">
                        <div className="mt-4 flex items-center gap-x-4 text-xs">
                            <time dateTime={post.publishedAt} className="text-blue-400 dark:text-grey-200">
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </time>
                            {post.categories?.map((category) => (
                                <span
                                    key={category.id}
                                    className="relative z-10 rounded-full px-3 py-1.5 font-medium text-blue-400 dark:text-grey-200"
                                >
                                    {category.title}
                                </span>
                            ))}
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-blue-300 group-hover:text-gray-600">
                            <a href={`/posts/${post.slug}`} className="hover:underline">
                                <span className="absolute inset-0" />
                                {post.title}
                            </a>
                        </h3>
                        <p className="mt-3 text-sm text-blue-500 dark:text-grey-200">
                            {post.meta?.description}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default PostsGrid