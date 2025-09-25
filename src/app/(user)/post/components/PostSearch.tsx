"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostSearch() {
  const [id, setId] = useState("");
  const router = useRouter();
  const handleGo = () => {
    if (!id) return;
    router.push(`/post/${id}/comments`);
  };

  return (
    <div className="search-box">
      <input
        type="number"
        placeholder="Enter Post ID"
        value={id}
        onChange={e => setId(e.target.value)}
        className="input"
      />
      <button onClick={handleGo} className="btn">Go</button>
    </div>
  );
}
