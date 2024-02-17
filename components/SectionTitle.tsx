type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className="mb-5 pt-28 text-2xl font-normal" id={title.toLowerCase()}>
      {title}
    </h2>
  );
};
export default SectionTitle;
