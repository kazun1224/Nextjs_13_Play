import { url } from "utils/url";
import { Post } from "types/blog";

type BlogDetail = {
  params: string;
};

const fetchPost: (params: any) => Promise<Post> = async (id) => {
  const res = await fetch(`${url}/posts/${id}`, { cache: "no-store" });
  const data = res.json();
  return data;
};

export default async function Page({ params }: any) {
  const post = await fetchPost(params.id);

  return (
    <div>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </div>
  );
}
