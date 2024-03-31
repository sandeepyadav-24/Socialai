import Image from "next/image";
interface prop {
  title: string;
  description: string;
  benefit: string;
  key: number;
  imageLink: string;
}
const FeatureBox = (props: prop) => {
  return (
    <div className=" mx-5 md:mx-10 my-5 bg-[#F6F6F6] rounded-md p-3 flex flex-col md:flex-row">
      <div className="md:w-3/5 px-5 py-3">
        <h1 className="font-bold text-3xl">{props.title}</h1>
        <h1>{props.description}</h1>
        <h1>{props.benefit}</h1>
      </div>
      <div className="md:w-2/5 px-24">
        <Image
          src={props.imageLink}
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};
export default FeatureBox;
