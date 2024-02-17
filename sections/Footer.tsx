import IconLink from "@/components/IconLink";
import { SocialMediaLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="section-wrap w-full">
      <hr className="border-secondary my-3 opacity-25" />
      <div className="w-full p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-secondary block text-sm font-extralight sm:text-center">
            © 2024 Jerry Huang
          </span>
          <ul className="mb-6 flex flex-wrap items-center gap-3 sm:mb-0">
            {SocialMediaLinks.map((link) => (
              <li key={link.name}>
                <IconLink name={link.name} icon={link.icon} to={link.to} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
