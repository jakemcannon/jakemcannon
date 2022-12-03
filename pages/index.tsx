import Image from "next/image";
import profilePic from "../public/profile_pic.JPG";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Image src={profilePic} width={293} height={500} />
    </>
  );
}
