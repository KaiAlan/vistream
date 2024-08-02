

export default function Page({ params }: { params: { id: string } }) {

    // toto: take video id from param, do a query to fetch its stat

    
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <h1>My Video: {params.id}</h1>
        </div>
    )
  }