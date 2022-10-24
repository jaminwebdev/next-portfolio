/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Image from "next/image";
import ErrorPage from "next/error";
import {
  getPostBySlug,
  getAllPosts,
  markdownToHtml,
} from "../../lib/markdownAPI";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import SVGSeparator from "../../components/SVGSeparator";
import AppIcon from "../../components/AppIcon";

const components = {};

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
          <article className="mb-32 blogWrapper">
            <Head>
              <title>{post.title}</title>
            </Head>

            <header className="bg-body-color-light-secondary dark:bg-body-color-dark-secondary pt-32 pb-24 lg:pb-20 relative">
              <div className="max-w-[940px] mx-auto px-5">
                <div className="grid grid-cols- min-h-[350px] gap-10">
                  <div className="grid content-center">
                    <div className="pr-5 grid content-center gap-8">
                      <h1>{post.title}</h1>
                      <div className="blogMeta grid gap-6 lg:grid-flow-col auto-cols-max">
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/jamin_headshot.jpg"
                            alt="Headshot of Jamin Roberts"
                            className="rounded-full w-8"
                          />
                          <p>Jamin Roberts</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <AppIcon
                            icon="calendar"
                            classNames="w-5 fill-primary-dark dark:fill-white"
                          />
                          <p>
                            {new Date(post.date).toLocaleString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <AppIcon
                            icon="tag"
                            classNames="w-5 stroke-primary-dark dark:stroke-white"
                          />
                          <p className="flex gap-2">
                            {post.tags.map((tag, index) => (
                              <span key={tag}>
                                {tag}
                                {index < post.tags.length - 1 ? "," : null}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SVGSeparator
                type="waves"
                classNames="bottom"
                customHeight="100px"
              />
            </header>
            <section className="max-w-[940px] mx-auto px-5 blogBody">
              <div className="relative w-full h-[300px] lg:h-[450px] mb-8 -mt-[75px] lg:-mt-[125px]">
                <Image
                  src={post.featuredImg}
                  width={900}
                  layout="fill"
                  alt={`${post.title} featured image`}
                />
              </div>
              <div id="contentWrapper" className="px-0 lg:px-5 grid gap-6">
                <MDXRemote {...post.content} components={components} />
              </div>
            </section>
          </article>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "featuredImg",
    "metaDescription",
    "tags",
  ]);
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
