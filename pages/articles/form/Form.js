import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [reply, setReply] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // Perform login
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-x-6 mt-6">
        <div>
          <label className="mb-2 font-sans font-semibold">Your Name</label>
          <div>
            <input
              className=" bg-slate-200 border border-slate-400 w-full h-12 rounded px-2"
              type="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="mb-2 font-sans font-semibold">Your Website</label>
          <div>
            <input
              className=" bg-slate-200 border border-slate-400 w-full h-12 rounded px-2"
              type="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="mb-2 font-sans font-semibold">Your Email</label>
          <div>
            <input
              className=" bg-slate-200 border border-slate-400 w-full  h-12 rounded px-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* leave a reply */}
      <div className="mt-6">
        <label className="mb-2 font-sans font-semibold">Leave a Reply</label>
        <div>
          <input
            className=" bg-slate-200 border border-slate-400 w-full h-28 rounded px-2"
            type="email"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
        </div>
      </div>
      <button
        className="bg-sky-700 rounded px-6 py-4 text-white font-sans mt-5"
        type="submit"
      >
        Post Comment
      </button>
    </form>
  );
};

export default Form;
