

// Todo: take video id from params as slug, do a fetch query and use the response to stream video

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <h1>My Video: {params.slug}</h1>
        </div>
    )
  }