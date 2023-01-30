//dynamic routing
import { useRouter } from "next/router";
import Image from "next/image";
import cover2 from "../../Assets/background_img/cover4.jpg";
import Form from "./form/Form";
import Comments from "./Comments/Comments";
import { useEffect, useState } from "react";

const SingleArticle = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { articleid } = router.query;
  console.log("clicked article id", articleid);

  //single article api
  useEffect(() => {
    setLoading(true);
    fetch(`https://backend.flagedu.com/api/article/single/${articleid}`)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setData(result?.success);
      });
  }, [articleid]);
  return (
    <div>
      {loading ? (
        <h1 className="text-teal-700 forn-bold text-center">
          Page is Loading Please Wait
        </h1>
      ) : (
        <div className="mt-4">
          {/* Top Section */}
          <div>
            <img
              src={`https://backend.flagedu.com/${data?.thumbnail_image}`}
              alt="Picture of the author"
              className="w-full rounded"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />

            <div className="mt-8 px-4 mb-6">
              <p className="font-bold text-[16px] underline">{data?.title}</p>
              {/* <span className="text-teal-800 text-[25px] mb-2">{`Apple honors eight developers with annual Apple Design Awards`}</span> */}
              <p
                className="font-sans mt-5"
                dangerouslySetInnerHTML={{
                  __html: data?.description,
                }}
              ></p>
            </div>
          </div>
          {/* new section */}
          <div className="mt-8 px-4 mb-6">
            <div className="flex justify-end mt-3">
              <Image
                src={cover2}
                alt="Picture of the author"
                width={800}
                blurDataURL="data:..."
                className="rounded"
                // placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <span className="text-teal-800 text-[25px]">{`Apple Design Award Winners: Apps`}</span>
            <p className="font-sans mt-5">
              Apple today named eight app and game developers receiving an Apple
              Design Award, each one selected for being thoughtful and creative.
              Apple Design Award winners bring distinctive new ideas to life and
              demonstrate deep mastery of Apple technology. The apps spring up
              from developers large and small, in every part of the world, and
              provide users with new ways of working, creating, and playing.
              “Every year, app and game developers demonstrate exceptional
              craftsmanship and we’re honoring the best of the best,” said Ron
              Okamoto, Apple’s vice president of Worldwide Developer Relations.
              “Receiving an Apple Design Award is a special and laudable
              accomplishment. Past honorees have made some of the most
              noteworthy apps and games of all time. Through their vision,
              determination, and exacting standards, the winning developers
              inspire not only their peers in the Apple developer community, but
              all of us at Apple, too.”
            </p>
          </div>
          {/* Post Comment Section */}
          <div className="mt-8 px-4 mb-6 ">
            <p className="text-[25px] font-bold">Post a comment</p>
            <p className="text-[12px] text-gray-500">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div>
              <Form></Form>
            </div>
            {/* Show Comments */}
            <Comments></Comments>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleArticle;
