import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Image src={"/profile_pic.JPG"} width={293} height={500} />
    </>
  );
}
