import Head from "next/head";
import Container from "../../components/Container";
import SVGSeparator from "../../components/SVGSeparator";
import { getAllPosts } from "../../lib/markdownAPI";
import AppCard from "../../components/cards/AppCard";
import LinkButton from "../../components/buttons/LinkButton";
import AppIcon from "../../components/AppIcon";
import ScrollReveal from "../../components/ScrollReveal";
import Lottie from "../../components/Lottie";
import * as ContentLottie from "../../lib/lottie/content-lottie.json";

const Blogs = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog Posts | HeBuildsWebsites</title>
        <meta
          name="description"
          content="These free resources are the best places to start learning JavaScript"></meta>
      </Head>
      <main>
        <header className="bg-body-color-light-secondary dark:bg-body-color-dark-secondary pt-44 pb-32 lg:pb-14 relative">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px] gap-10">
              <div className="grid content-center order-2 lg:order-1">
                <div className="pr-5 grid content-center gap-8">
                  <h1>Blog</h1>
                  <h4 className="font-normal leading-relaxed">
                    Keep up with my latest ramblings on all things dev-related.
                  </h4>
                </div>
              </div>
              <div className="z-10 relative grid place-content-center order-1">
                <ScrollReveal bounce>
                  <div className="max-w-[200px] lg:max-w-none">
                    <Lottie
                      animationData={ContentLottie}
                      width="300px"
                      loop
                      speed={0.5}
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </Container>
          <SVGSeparator
            type="tilt"
            classNames="bottom tiltDownLeft"
            customHeight="100px"
          />
        </header>
        <section id="blogGrid" className="py-12">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <AppCard
                  key={post.slug}
                  heading={post.title}
                  headingLink={`/blog/${post.slug}`}
                  body={post.excerpt}
                  bgImg={post.featuredImg}
                  btns={
                    <LinkButton origin="internal" link={`/blog/${post.slug}`}>
                      Read
                      <AppIcon icon="eyes" classNames="w-4 fill-white" />
                    </LinkButton>
                  }></AppCard>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const posts = await getAllPosts(["title", "excerpt", "featuredImg", "slug"]);
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
