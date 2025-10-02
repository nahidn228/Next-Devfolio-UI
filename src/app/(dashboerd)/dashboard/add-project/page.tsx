import AddProjectForm from "@/components/module/dashbord/project/addProjectForm";

const CreateProject = () => {
  return (
    <div className="w-full justify-center items-center mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white text-center leading-tight">
        Create Project
      </h1>

      <AddProjectForm />
    </div>
  );
};

export default CreateProject;
