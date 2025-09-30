import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth";

const CreationPage = async() => {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <div>
      <h1>This is CreationPage component</h1>
    </div>
  );
};

export default CreationPage;