export default async function PostPage({params}: {params: {id: string}}) {
    const {id} = await params;
    return (
        <main className="text-center mt-10">
            <h1>Post {id}</h1>
            <p>Todo: display post</p>
        </main>
    )
}