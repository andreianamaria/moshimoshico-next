import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: {
    default: "Next.js for Drupal",
    template: "%s | Next.js for Drupal",
  },
  description: "A Next.js site powered by a Drupal backend.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
                                     // Layouts must accept a children prop.
                                     // This will be populated with nested layouts or pages
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
      <html lang="en">
      <body>
      <div className="max-w-screen-md px-6 mx-auto">
        <main className="container py-10 mx-auto">{children}</main>
      </div>
      </body>
      </html>
  )
}