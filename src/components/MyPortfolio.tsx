import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const MyPortfolio = () => {
  return (
    <section id="aboutMe" className="bg-[#191C26]">
      <div className="container py-24">
        <div className="flex items-center gap-2">
          <h6 className="font-bold text-green-500" data-aos="fade-right">
            Portfolio
          </h6>
          <div
            className="w-[40px] h-[2px] bg-green-600"
            data-aos="fade-right"
          ></div>
        </div>
        <h2
          className="text-white font-extrabold text-5xl my-6"
          data-aos="fade-right"
        >
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
