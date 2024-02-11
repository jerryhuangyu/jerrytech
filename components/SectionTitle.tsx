type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="mb-5 text-2xl font-normal">{title}</h2>;
};
export default SectionTitle;
