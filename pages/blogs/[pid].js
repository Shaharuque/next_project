//dynamic routing
import { useRouter } from "next/router";

const SingleBlog = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(pid);

  return <p>Blog: {pid}</p>;
};

export default SingleBlog;
