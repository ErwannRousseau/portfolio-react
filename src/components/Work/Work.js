import './Work.scss';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import data from 'src/data/data';
import GitHub from 'src/assets/github.png';

import iconPlay from 'src/assets/icons/play-video-icon.png';
import SVGstack from 'src/assets/icons/SVGstack';
import { fadeIn, staggerContainer } from '../../utils/motion';
import TypingText from '../../utils/CustomText';

function Work() {
  const works = data.projects;

  const [activeProject, setActiveProject] = useState(null);

  // Ajoute un écouteur d'événement de clic sur le document
  document.addEventListener('click', (event) => {
    // Vérifie si l'élément cliqué est un enfant de '.Project-card'
    const isProject = event.target.closest('.Project-card');

    // Si l'élément n'est pas une carte on setActiveProject à null
    if (!isProject) {
      setActiveProject(null);
    }
  });

  return (
    <section name="work" className="w-full min-h-[100dvh] text-[#ccd6f6] mb-20 px-6 md:pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-[1000px] flex flex-col justify-center items-center mx-auto my-0"
      >
        <motion.h2
          variants={fadeIn('down', 'tween', 0, 1)}
          className="self-baseline text-4xl leading-10 font-bold inline border-b-4 border-b-[#ec407a] border-solid"
        >
          Projets
        </motion.h2>
        <TypingText subtitle="// Découvrez quelques-uns de mes projets récents" textStyles="py-4 self-baseline" />

        <div className="text-black max-w-[1000px] flex flex-col items-center gap-8 mx-auto max-[800px]:mt-5 my-0 pt-10 ">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-10 md:space-y-0">
            {works.map((project, index) => (
              <motion.article
                variants={fadeIn('up', 'tween', index * 0.3 + 1.5, 1)}
                key={project.id}
                className="shadow-[0px_4px_14px_rgba(0,0,0,0.4)] hover:scale-105 perspective-800 max-w-sm  transform md:hover:scale-105 transition duration-500"
              >
                <div
                  className={`Project-card transform-style-preserve relative h-full transition-transform duration-[0.5s] bg-white px-3 py-3 rounded-xl ${
                    activeProject === project.id ? 'rotateY-180' : ''
                  }`}
                >
                  <div className="h-full rounded-lg inset-0 backface-hidden flex flex-col justify-between">
                    <div>
                      <img
                        className="w-full rounded shadow-[0px_2px_14px_rgba(0,0,0,0.2)] "
                        src={project.image}
                        alt="project"
                      />
                      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{project.title}</h1>
                      <p className="my-4">{project.description}</p>
                    </div>
                    <div>
                      <div className="flex space-x-1 items-center">
                        <SVGstack />
                        <p>{project.stack}</p>
                      </div>
                      <button
                        onClick={() => {
                          setActiveProject(project.id);
                        }}
                        className="mt-4 text-xl w-full text-white bg-[#ec407a] py-2 rounded-xl shadow-lg"
                        type="button"
                      >
                        Voir le projet
                      </button>
                    </div>
                  </div>
                  <div className="h-full rounded-lg inset-0 backface-hidden absolute flex flex-col justify-around gap-2 p-4 lg:gap-4 rotateY-180 ">
                    <Video url={project.video} />
                    <a href={project.link} target="blank">
                      <div className="bg-[linear-gradient(-20deg,#2b2b2b_0%,#434343_100%)] px-0 py-2 rounded-[0.6rem] flex items-center justify-center h-[175px] shadow-[0px_4px_14px_rgba(0,0,0,0.4)] active:translate-x-px active:translate-y-0.5">
                        <img className="h-[90%]" src={GitHub} alt="logo GitHub" />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Work;

function Video({ url }) {
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    // Permet au click de lancer la video en plein ecran
    ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'].forEach(
      (fullscreenMethod) => {
        if (video[fullscreenMethod]) {
          video[fullscreenMethod]();
        }
      }
    );
  };

  useEffect(() => {
    const video = videoRef.current;

    // Quand on quitte le plein écran la video se met en pause
    const exitFullScreen = () => {
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        video.pause();
      }
    };

    ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'].forEach((event) => {
      document.addEventListener(event, exitFullScreen);
    });

    return () => {
      ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'].forEach((event) => {
        document.removeEventListener(event, exitFullScreen);
      });
    };
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={url}
        controls={false}
        className="block shadow-[0px_4px_14px_rgba(0,0,0,0.4)] rounded-[0.6rem]"
      />
      <button
        type="button"
        className="absolute w-10 -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
        onClick={togglePlay}
      >
        <img src={iconPlay} alt="icon-play" className="active:translate-x-px active:translate-y-0.5" />
      </button>
    </div>
  );
}
