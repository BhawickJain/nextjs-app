import Layout from "../../components/Layout";
import { IPost, PostId } from "../../lib/posts";
import { getAllPostIds, getPostData} from '../../lib/posts';

interface PostProps {
  postData: IPost
}

export default function Post({ postData }: PostProps) {
    return (
    <Layout home={false}>
      <>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <div dangerouslySetInnerHTML={{__html: postData.content}}/>
      </>
    </Layout>
)}

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