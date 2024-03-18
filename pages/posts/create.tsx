import Image from "next/image";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const onDrop = (acceptedFiles: (Blob | MediaSource)[]) => {
    setImage(URL.createObjectURL(acceptedFiles[0]));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to submit the form data
    console.log({ title, content, image });
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      <form
        className="bg-white p-6 rounded-lg shadow-md min-w-[50%] w-full md:w-[70%] lg:w-[50%]"
        onSubmit={handleSubmit}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Create Blog Post</h2>
          <p className="text-gray-500">Enter your blog details here. Click save when you're done.</p>
        </div>

        <label htmlFor="title" className="block mb-2">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 block w-full mb-4"
        />

        <label htmlFor="date" className="block mb-2">Date</label>
        <input
          id="date"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 block w-full mb-4"
        />

        <label htmlFor="slug" className="block mb-2">Slug</label>
        <input
          id="slug"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 block w-full mb-4"
        />

        <div {...getRootProps()} className="mb-4">
          <input {...getInputProps()} />
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-auto mb-2 rounded-lg"
            />
          ) : (
            <div className="border border-dashed border-gray-400 p-12 text-center space-y-4 rounded">
              <Image
                src={"/assets/Icon.png"}
                alt="logo"
                width="30"
                height="30"
                className="m-auto"
              />
              <p className="text-center text-gray-500">
                Please upload images in 100x100 pixels size, in either PNG or JPEG format.
              </p>
              <button className="capitalize bg-[#012B55] text-white py-2 px-4 rounded-lg ">
                Browse Files
              </button>
            </div>
          )}
        </div>

        <label htmlFor="content" className="block mb-2">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 block w-full mb-4"
        ></textarea>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#012B55] text-white py-2 px-4 rounded-lg "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
