import { DrupalClient } from "next-drupal"

const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL as string
const clientId = process.env.DRUPAL_CLIENT_ID as string
const clientSecret = process.env.DRUPAL_CLIENT_SECRET as string

export const drupal = new DrupalClient(baseUrl, {
        auth: {
            clientId: clientId,
            clientSecret: clientSecret
        },
    }
)