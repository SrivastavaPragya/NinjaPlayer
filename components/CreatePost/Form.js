import React, { useEffect, useState } from "react";
import Data from "../../shared/Data";
import { useSession } from "next-auth/react";
import app from "./../../shared/FirebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

function Form() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState();
  const { data: session } = useSession();
  const db = getFirestore(app);
  const storage = getStorage(app);

  useEffect(() => {
    if (session) {
      setInputs((values) => ({
        ...values,
        userName: session.user?.name,
        userImage: session.user?.image,
        email: session.user?.email,
      }));
    }
  }, [session]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await savePost(inputs);  // Save the post with the current data
      console.log('Post saved successfully!');
      alert('Post saved successfully!');
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post.');
    }
  };
  

  const savePost = async (postData) => {
    try {
      await setDoc(doc(db, "posts", Date.now().toString()), postData);
      console.log('Post saved successfully!');
      alert('Post saved successfully!');
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Failed to save post.');
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <textarea
          name="desc"
          required
          onChange={handleChange}
          placeholder="Write Description here"
          className="w-full mb-4 outline-blue-400 border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Zip"
          name="zip"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <select
          name="game"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        >
          <option value="" disabled selected>Select Game</option>
          {Data.GameList.map((item) => (
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>
       
        <button
          type="submit"
          className="bg-blue-500 w-full p-1 rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
