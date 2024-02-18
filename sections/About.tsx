import SectionTitle from "@/components/SectionTitle";
import { about } from "@/constants";

const About = () => {
  return (
    <div className="section-wrap">
      <SectionTitle title="About" />
      <p className="text text-secondary text-md">{about}</p>
    </div>
  );
};
export default About;
