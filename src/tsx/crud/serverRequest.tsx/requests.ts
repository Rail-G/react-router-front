export async function getPosts(): Promise<Post[] | []> {
    await new Promise(resolve => setTimeout(resolve, 5000)); 
    const request = await fetch(import.meta.env.VITE_CRUS_POSTS_URL)
    if (!request.ok) {
        throw new Error('Get request error. Please, try again')
    }
    // const data = await request.json()
    return request.json()
}

export async function postPost(data: string): Promise<void> {
    await fetch(import.meta.env.VITE_CRUS_POSTS_URL, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({content: data})
    })
}

export async function getPost(id: number): Promise<Post> {
    const request = await fetch(`${import.meta.env.VITE_CRUS_POSTS_URL}/${id}`, {
        method: 'GET',
        body: JSON.stringify(id)
    })
    if (!request.ok) {
        throw new Error(`Get request error. Post with ID ${id} not found.`)
    }
    const data = await request.json()
    return data
}

export async function deletePost(id: number): Promise<void> {
    await fetch(`${import.meta.env.VITE_CRUS_POSTS_URL}/${id}`, {
        method: 'DELETE',
    })
}

export async function putPost(id: number, data: string) {
    await fetch(`${import.meta.env.VITE_CRUS_POSTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({content: data})
    })
}