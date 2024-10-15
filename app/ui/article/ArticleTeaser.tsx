import Image from "next/image"
import { absoluteUrl, formatDate } from "@/app/lib/utils"
import type { DrupalNode } from "next-drupal"

interface ArticleTeaserProps {
    node: DrupalNode
}

export function ArticleTeaser({ node, ...props }: ArticleTeaserProps) {
    return (
        <article {...props}>
            <div className="mb-4 text-gray-600">
                {node.uid?.display_name ? (
                    <span>
            Posted by{" "}
                        <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
                ) : null}
                <span> - {formatDate(node.created)}</span>
            </div>
            {node.field_image && (
                <figure className="my-4">
                    <Image
                        src={absoluteUrl(node.field_image.field_media_image.uri.url)}
                        width={768}
                        height={480}
                        alt={node.field_image.field_media_image.resourceIdObjMeta.alt}
                    />
                </figure>
            )}
        </article>
    )
}