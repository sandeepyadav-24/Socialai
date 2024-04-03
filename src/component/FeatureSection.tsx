import FeatureBox from "./FeatureBox";

const feature = [
  {
    title: "Platform-Optimized Content Creation",
    description:
      "Write freely on Avatarify and watch as your content seamlessly adapts to fit any platform, including Twitter, LinkedIn, Hashnode, and more.",
    image: "/ai.png",
  },
  {
    title: "Video Representation of Ideas",
    description:
      " Easily transform your project details into captivating videos, ready for sharing on YouTube and other video platforms.",
    image: "/case.png",
  },
  {
    title: "Remote Engagement",
    description:
      "Let your digital avatar attend meetings on your behalf, extracting key insights and action items, ensuring you stay informed and connected, regardless of your location.",
    image: "/case.png",
  },
  {
    title: "Personalized Digital Avatars",
    description:
      "Create a digital avatar that mirrors your appearance, voice, and mannerisms, enabling authentic representation and interaction online.",
    image: "/case.png",
  },
  {
    title: "Adaptive Content Conversion",
    description:
      "Automatically convert lengthy content into platform-specific formats, ensuring optimal engagement and impact across various social media platforms.",
    image: "/case.png",
  },
];
const FeatureSection = () => {
  return (
    <div className="mx-5 md:mx-20">
      <div className="text-3xl font-bold text-center">Our Platform Feature</div>
      <div className="flex md:flex-row flex-col flex-wrap  ">
        {feature.map((e, index) => {
          return (
            <FeatureBox
              title={e.title}
              description={e.description}
              key={index}
              imageLink={e.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FeatureSection;
