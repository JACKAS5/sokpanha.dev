import aboutIllustration from "../../assets/about-illustration.svg";


export default function AboutIllustration() {
  return (
    <div className="flex-1">
      <img
        src={aboutIllustration}
        alt="About Illustration"
        className="w-full max-w-sm mx-auto animate-fadeIn"
      />
    </div>
  );
}