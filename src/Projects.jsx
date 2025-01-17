import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';

const projects = [
  {
    title: "XTrade",
    description: "Your Ultimate Destination for Market Analysis, Live Stock Prices, Cryptocurrency Tracking, Forex Rates, and more. View and track live changes across various markets globally and stay updated with marrket overviews.",
    tags: ["React", "Node.js", "TradingView API", "Express.js"],
    github: "https://github.com/nikhiltelase/my-shopee",
    demo: "https://my-shopee-beryl.vercel.app/",
    videoEmbed: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
  },
  {
    title: "AviAI Voice Assistant",
    description: "AI-powered voice assistant with IoT integration capabilities, built using Python. Features natural language processing and home automation control.",
    tags: ["Python", "AI", "IoT", "Speech Recognition"],
    github: "https://github.com/nikhiltelase/ai-assistant",
    videoEmbed: "https://www.youtube.com/embed/fxh-XnSUl1Y?si=AtukFbyqzvN5zkDe"
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 backdrop-blur-0">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my technical projects, demonstrating my expertise in various technologies
            and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-tertiary rounded-lg overflow-hidden"
            >
              <div className="relative h-96 p-8 bg-black-200">
                {project.videoEmbed && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={project.videoEmbed}
                    title={`${project.title} YouTube Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  ></iframe>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-black-100 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.videoEmbed && (
                    <a
                      href={project.videoEmbed.replace("embed/", "watch?v=")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                    >
                      <FaYoutube /> Watch on YouTube
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
