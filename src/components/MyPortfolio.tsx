import ProjectCard from './ProjectCard';

const MyPortfolio = () => {
  const projects: {
    imageSrc: string;
    projectTitle: string;
    techUsed: string;
    liveLink: string;
    clientLink: string;
    serverLink: string;
  }[] = [
    {
      imageSrc: '/kinun_ss.png',
      projectTitle: 'Kinun | Ecommerce Website',
      techUsed: 'React, Tailwind, Node, Express, MongoDB',
      liveLink: 'https://kinun-2563f.web.app/',
      clientLink: 'https://github.com/NabinIslam/kinun-react-ecommerce-client',
      serverLink: 'https://github.com/NabinIslam/kinun-react-ecommerce-server',
    },
    {
      imageSrc: '/blogify_ss.png',
      projectTitle: 'Blogify | Blog Website',
      techUsed: 'Next.js, Tailwind, Node, Express, MongoDB',
      liveLink: 'https://blogify-blog.vercel.app/',
      clientLink: 'https://github.com/NabinIslam/Blogify-blog-app-Next.js',
      serverLink: 'https://github.com/NabinIslam/blogify-blog-app-server',
    },
  ];

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
