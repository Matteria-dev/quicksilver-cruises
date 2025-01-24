'use client'
import React from 'react'

interface RichTextProps
{
    content: {
        root: {
            children: any[]
        }
    }
}

export function RichText({ content }: RichTextProps)
{
    if (!content?.root?.children) return null

    const renderNode = (node: any, index: number) =>
    {
        switch (node.type) {
            case 'heading':
                const HeadingTag = node.tag as keyof JSX.IntrinsicElements
                return (
                    <HeadingTag key={`heading-${node.id || index}`} className="mt-6 mb-4 text-blue-500 dark:text-grey-200">
                        {node.children.map((child: any, i: number) => renderNode(child, i))}
                    </HeadingTag>
                )

            case 'paragraph':
                return (
                    <p key={`p-${node.id || index}`} className="mb-4 text-blue-500 dark:text-grey-200">
                        {node.children.map((child: any, i: number) => renderNode(child, i))}
                    </p>
                )

            case 'text':
                let className = ''
                if (node.format === 2) className = 'italic'
                if (node.format === 1) className = 'font-bold'
                return (
                    <span key={`text-${index}`} className={className}>
                        {node.text}
                    </span>
                )

            case 'block':
                if (node.fields.blockType === 'mediaBlock') {
                    return (
                        <div key={`media-${node.fields.id || index}`} className="my-8">
                            <img
                                src={`https://qsg-news.vercel.app${node.fields.media.url}`}
                                alt={node.fields.media.alt}
                                className="w-full rounded-lg"
                            />
                            {node.fields.media.caption && (
                                <div className="mt-2 text-sm text-blue-500">
                                    {node.fields.media.caption.root.children.map((child: any, i: number) =>
                                        renderNode(child, i)
                                    )}
                                </div>
                            )}
                        </div>
                    )
                }
                if (node.fields.blockType === 'banner') {
                    return (
                        <div
                            key={`banner-${node.fields.id || index}`}
                            className={`my-8 p-4 rounded-lg ${node.fields.style === 'info' ? 'bg-blue-100' : 'bg-grey-200'
                                }`}
                        >
                            {node.fields.content.root.children.map((child: any, i: number) =>
                                renderNode(child, i)
                            )}
                        </div>
                    )
                }
                return null

            default:
                return null
        }
    }

    return (
        <div>
            {content.root.children.map((node, index) => renderNode(node, index))}
        </div>
    )
}