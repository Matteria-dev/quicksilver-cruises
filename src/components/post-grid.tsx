'use client'

import React, { useEffect, useState } from 'react'

interface Author {
  id: string
  name: string
}

interface Category {
  id: string
  title: string
}

interface Post {
  id: string
  title: string
  slug: string
  heroImage?: {
    url: string
  }
  meta?: {
    description?: string
  }
  publishedAt: string
  categories?: Category[]
  populatedAuthors?: Author[]
}

interface PostsResponse {
  docs: Post[]
  totalDocs: number
  totalPages: number
  page: number
}

interface PostsGridProps {
  categorySlug?: string
}

const PostsGrid: React.FC<PostsGridProps> = ({ categorySlug }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)

        const params = new URLSearchParams({
          depth: '1',
          limit: '12',
          where: JSON.stringify({
            _status: {
              equals: 'published'
            }
          }),
          fields: JSON.stringify({
            title: true,
            slug: true,
            heroImage: {
              url: true
            },
            meta: {
              description: true
            },
            publishedAt: true,
            categories: {
              id: true,
              title: true
            },
            populatedAuthors: {
              id: true,
              name: true
            }
          })
        })

        if (categorySlug) {
          params.append('where', JSON.stringify({
            'categories.slug': {
              equals: categorySlug
            }
          }))
        }

        const baseUrl = process.env.NEXT_PUBLIC_CMS_URL || ''
        const response = await fetch(
          `${baseUrl}/api/posts?${params.toString()}`,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: PostsResponse = await response.json()
        
        console.log('API Response:', data)

        if (data && Array.isArray(data.docs)) {
          setPosts(data.docs)
        } else {
          throw new Error('Invalid response format')
        }
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [categorySlug])

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <p className="text-lg">Loading posts...</p>
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
        <p className="text-lg">No posts found</p>
      </div>
    )
  }

  return (
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post.id} className="flex flex-col items-start justify-between">
          <div className="relative w-full">
            <img
              alt={post.title}
              src={post.heroImage?.url || '/placeholder-image.jpg'}
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="max-w-xl">
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              <time dateTime={post.publishedAt} className="text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString()}
              </time>
              {post.categories?.map((category) => (
                <span
                  key={category.id}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {category.title}
                </span>
              ))}
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                <a href={`/posts/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm text-gray-600">
                {post.meta?.description}
              </p>
            </div>
            {post.populatedAuthors && post.populatedAuthors.length > 0 && (
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt={post.populatedAuthors[0]?.name || ''}
                  src="/placeholder-avatar.jpg"
                  className="h-10 w-10 rounded-full bg-gray-100"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    {post.populatedAuthors[0]?.name}
                  </p>
                  <p className="text-gray-600">Author</p>
                </div>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

export default PostsGrid