import AddBlogForm from "@/components/module/dashbord/blog/AddBlogForm";

const CreateBlog = () => {
  return (
    <div className="w-full justify-center items-center mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white text-center leading-tight">
        Create Blog
      </h1>

      <AddBlogForm />
    </div>
  );
};

export default CreateBlog;
