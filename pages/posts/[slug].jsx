import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
  getPostBySlug,
  getAllPosts,
  markdownToHtml,
} from "../../lib/markdownAPI";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import ExampleComponent from "../../components/example-component";

const components = { ExampleComponent };

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title}</title>
            </Head>
            <div className="max-w-2xl mx-auto">
              <MDXRemote {...post.content} components={components} />
            </div>
          </article>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "content"]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
