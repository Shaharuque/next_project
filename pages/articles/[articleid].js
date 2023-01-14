//dynamic routing
import { useRouter } from "next/router";

const SingleArticle = () => {
  const router = useRouter();
  const { articleid } = router.query;

  return <p>Article: {articleid}</p>;
};

export default SingleArticle;
