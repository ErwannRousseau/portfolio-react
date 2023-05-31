import './Work.scss';
import { useEffect, useRef } from 'react';

import data from 'src/data/data';
import GitHub from 'src/assets/github.png';

import iconPlay from 'src/assets/icons/play-video-icon.png';
import SVGstack from 'src/assets/icons/SVGstack';

function Work() {
  const works = data.projects;

  const rotate = (id, remove = false) => {
    const projects = document.querySelectorAll('.Project-card-inner');

    projects.forEach((project) => {
      if (remove) {
        project.classList.remove('Project-card-inner--rotate');
      }
      else if (project.id === `project-${id}`) {
        project.classList.add('Project-card-inner--rotate');
      }
    });
  };

  // Ajoute un écouteur d'événement de clic sur le document
  document.addEventListener('click', (event) => {
    // Vérifie si l'élément cliqué est un enfant de '.Project-card-inner'
    const isProject = event.target.closest('.Project-card-inner');

    // Si l'élément cliqué est un projet, récupère son ID et active la rotation
    if (isProject) {
      const projectId = isProject.id;
      rotate(projectId);
    }
    else {
      rotate(null, true);
    }
  });

  return (
    <section name="work" className="Work">
      <div className="Work-container">
        <div className="Work-header">
          <h2 className="Work-header-title">Projets</h2>
          <p className="Work-header-subtitle">// Découvrez quelques-uns de mes projects récents</p>
        </div>
        <div className="Project">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-10 md:space-y-0">
            {/* boucle sur les projets */}
            {works.map((project) => (
              <article key={project.id} className="Project-card-container max-w-sm shadow-lg transform md:hover:scale-105 transition duration-500">
                <div id={`project-${project.id}`} className="Project-card-inner bg-white px-3 py-3 rounded-xl">
                  <div className="Project-card-body flex flex-col justify-between">
                    <div>

                      <img className="w-full rounded shadow-[0px_2px_14px_rgba(0,0,0,0.2)] " src={project.image} alt="project" />
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
                          rotate(null, true); // supprimer la classe de rotation de tous les projets
                          rotate(project.id); // ajoute la classe de rotation au projet cliqué
                        }}
                        className="mt-4 text-xl w-full text-white bg-[#ec407a] py-2 rounded-xl shadow-lg"
                        type="button"
                      >
                        Voir le projet
                      </button>
                    </div>
                  </div>
                  <div className="Project-card-body Project-card-back">
                    <Video url={project.video} />
                    <a
                      className="Project-github-link "
                      href={project.link}
                      target="blank"
                    >
                      <div className="Project-github">
                        <img className="Project-github-logo" src={GitHub} alt="logo GitHub" />
                      </div>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
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
    }
    else {
      video.pause();
    }

    // Permet au click de lancer la video en plein ecran
    ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'].forEach((fullscreenMethod) => {
      if (video[fullscreenMethod]) {
        video[fullscreenMethod]();
      }
    });
  };

  useEffect(() => {
    const video = videoRef.current;

    // Quand on quitte le plein écran la video se met en pause
    const exitFullScreen = () => {
      if (
        !document.fullscreenElement
        && !document.mozFullScreenElement
        && !document.webkitFullscreenElement
        && !document.msFullscreenElement
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
    <div className="Video-container">
      <video
        ref={videoRef}
        src={url}
        controls={false}
        className="Video"
      />
      <button type="button" className="play-button" onClick={togglePlay}>
        <img src={iconPlay} alt="icon-play" />
      </button>
    </div>
  );
}
