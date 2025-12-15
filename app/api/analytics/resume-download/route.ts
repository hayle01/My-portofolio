import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-12-01',
  token: process.env.SANITY_API_WRITE_TOKEN, 
  useCdn: false,
})

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const profileId = searchParams.get('id')

  if (!profileId) {
    return NextResponse.json({ error: 'Missing profile ID' }, { status: 400 })
  }

  try {
    const profile = await client.fetch(`*[_id == $id][0]{ "url": resume.asset->url }`, { id: profileId })
    
    if (!profile?.url) {
        return NextResponse.json({ error: 'Resume not found' }, { status: 404 })
    }

    await client.patch(profileId).inc({ resumeDownloads: 1 }).commit()

    return NextResponse.redirect(profile.url)

  } catch (error) {
    console.error('Error handling resume download:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
