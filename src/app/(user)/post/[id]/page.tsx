import axios from "axios"

type Comment = {
  id: number
  name: string
  email: string
  body: string
}

type Props = {
  params: { id: string }
}

export default async function PostCommentsPage({ params }: Props) {
  const postId = params.id
  const res = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  )
  const comments = res.data

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Comments for Post {postId}</h1>
      <ul>
        {comments.map((c) => (
          <li key={c.id} style={{ marginBottom: "1rem" }}>
            <p><strong>{c.name}</strong> ({c.email})</p>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
