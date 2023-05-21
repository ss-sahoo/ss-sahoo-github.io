import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title ,linkurl,linkout}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <div className="flex m-2 gap-2">
          <button
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold  
            
              hover:bg-blue hover:text-white transition duration-500"
          >
            <a href={linkurl}>View code</a>
          </button>
          <button className="bg-deep-blue text-yellow hover:text-red transition duration-500  flex items-center justify-center px-10 font-playfair">
            <a href={linkout}>View output</a>
          </button>
        </div>
      </div>
      <img
        height={"400px"}
        width={"400px"}
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
        style={{ height: "100%" }}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10"></p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Netflix-clone"
            linkurl="https://github.com/ss-sahoo/Netflix-clone"
            linkout="https://netflix-build-cc39e.web.app"
          />

          <Project
            title="Gym-website"
            linkurl="https://github.com/ss-sahoo/fitness-gym-react-template"
            linkout="https://ss-sahoo.github.io/fitness-gym-react-template/"
          />

          {/* ROW 2 */}
          <Project
            title="Dashboard"
            linkurl="https://github.com/ss-sahoo/Board"
            linkout="https://deluxe-chimera-60f69c.netlify.app/"
          />
          <Project
            title="creative-webpage"
            linkurl="https://github.com/ss-sahoo/Creative-web"
            linkout="https://ss-sahoo.github.io/Creative-web/"
          />
          <Project
            title="stop-watch"
            linkurl="https://github.com/ss-sahoo/Stop-watch"
            linkout="https://ss-sahoo.github.io/Stop-watch/"
          />

          {/* ROW 3 */}
          <Project
            title="food-ordering"
            linkurl="https://github.com/ss-sahoo/food-factory"
          />
          <Project
            title="Robo-page"
            linkurl="https://github.com/ss-sahoo/igitrobo"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
