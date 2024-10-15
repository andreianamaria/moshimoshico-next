import {ArticleTeaser} from "@/app/ui/article/ArticleTeaser";
import {drupal} from "@/app/lib/drupal";
import type { Metadata } from "next"
import type { DrupalNode } from "next-drupal"

export const metadata: Metadata = {
  description: "A Next.js site powered by a Drupal backend.",
}

export default async function Home() {
  const nodes = await drupal.getResourceCollection<DrupalNode[]>(
      "node--article",
      {
        params: {
          include: "field_image,uid,field_image.field_media_image"
        },
      }
  )
    console.log(nodes);
  return (
      <>
        <h1 className="mb-10 text-6xl font-black">Latest Articles.</h1>
        {nodes?.length ? (
            nodes.map((node) => (
                <div key={node.id}>
                  <ArticleTeaser node={node} />
                  <hr className="my-20" />
                </div>
            ))
        ) : (
            <p className="py-4">No nodes found</p>
        )}
      </>
  )
}