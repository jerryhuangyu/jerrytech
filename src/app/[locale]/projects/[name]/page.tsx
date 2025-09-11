type ProjectDetailsProps = {
  params: Promise<{ name: string }>;
};

const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
  const { name } = await params;
  return <div>Details of project: {name}</div>;
};
export default ProjectDetails;
