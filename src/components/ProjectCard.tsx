import Image from 'next/image';

type projectCardProps = {
  project: {
    imageSrc: string;
    projectTitle: string;
    techUsed: string;
    liveLink: string;
    clientLink: string;
    serverLink: string;
  };
};

const ProjectCard = ({ project }: projectCardProps) => {
  return (
    <div
      className="max-w-sm rounded-xl overflow-hidden  border-gray-700 border shadow-2xl"
      data-aos="fade-right"
    >
      <Image
        className="w-full h-auto"
        src={project.imageSrc}
        height={500}
        width={900}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-300">
          {project.projectTitle}
        </div>
        <p className="text-gray-400 text-base">
          <span className="font-extrabold">Tech used:</span> {project.techUsed}
        </p>
      </div>
      <div className="px-6 py-2">
        <a
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:bg-slate-800 hover:text-white duration-200 border"
          href={project.liveLink}
          target="_blank"
        >
          Live
        </a>
        <a
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:bg-slate-800 hover:text-white duration-200 border"
          href={project.clientLink}
          target="_blank"
        >
          Client
        </a>
        {project.serverLink != '' && (
          <a
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:bg-slate-800 hover:text-white duration-200 border"
            href={project.serverLink}
            target="_blank"
          >
            Server
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
