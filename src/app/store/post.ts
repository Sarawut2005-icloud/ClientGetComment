"use client"
import { create } from "zustand"
import axios from "axios"

type Post = { id: number; title: string; body: string }

type State = {
  items: Post[]
  loading: boolean
  error: string | null
  fetchData: () => Promise<void>
}

export const usePosts = create<State>((set) => ({
  items: [],
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null })
    try {
      const { data } = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      set({ items: data, loading: false })
    } catch (err: any) {
      set({ error: err.message, loading: false })
    }
  },
}))
