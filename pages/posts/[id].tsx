import Head from "next/head";
import Layout from "../../components/Layout";
import { IPost, PostId } from "../../lib/posts";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.css";

interface PostProps {
  postData: IPost;
}

export default function Post({ postData }: PostProps) {
  return (
    <Layout home={false}>
      <>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            {/* {postData.id} */}
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </article>
      </>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: PostId) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
