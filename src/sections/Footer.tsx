import IconLink from "@/src/components/icons/IconLink"
import { SocialMediaLinks } from "@/src/constants"

const Footer = () => {
  return (
    <footer className="section-wrap w-full">
      <hr className="my-3 border-secondary dark:border-secondary-dark opacity-25" />
      <div className="w-full p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="mb-3 block text-sm font-extralight text-secondary dark:text-secondary-dark sm:mb-0 sm:text-center">
            © {new Date().getFullYear()} Huang Yu
          </span>
          <ul className="mb-6 flex flex-wrap items-center gap-3 sm:mb-0">
            {SocialMediaLinks.map(link => (
              <li key={link.name}>
                <IconLink name={link.name} icon={link.icon} to={link.to} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
