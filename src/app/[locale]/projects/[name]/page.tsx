type ProjectDetailsProps = {
  params: { name: string };
};

const ProjectDetails = ({ params }: ProjectDetailsProps) => {
  return <div>Details of project: {params.name}</div>;
};
export default ProjectDetails;
