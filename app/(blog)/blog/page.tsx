import Image from 'next/image'
import { Post } from 'types/blog';
import { url } from 'utils/url';
import { use } from "react";
import Link from 'next/link';


const fetchPosts: () => Promise<Post[]> = async () => {
  const res = await fetch(`${url}/posts`);
  return res.json();
};

export default function Article() {
  const posts = use(fetchPosts());
  return (
    <div >
      <h1>記事一覧</h1>
      <div className="mt-8">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`/blog/${post.id}`}>
              <h2>{post.title}</h2>
              </Link>

            </div>
          );
        })}
      </div>

    </div>
  )
}
