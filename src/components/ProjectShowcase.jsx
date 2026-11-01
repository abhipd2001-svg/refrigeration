import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import { projectMedia } from '../data/media';

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (projectMedia.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % projectMedia.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  if (!projectMedia.length) return null;

  const activeMedia = projectMedia[activeIndex];
  const showPrevious = () => setActiveIndex((activeIndex - 1 + projectMedia.length) % projectMedia.length);
  const showNext = () => setActiveIndex((activeIndex + 1) % projectMedia.length);

  return (
    <section id="projects" className="section-block showcase-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <span className="eyebrow">Our Work</span>
            <h2 id="projects-title">See How We Work</h2>
          </div>
          <p>Add your latest AC, cold room, BMC, dairy, and industrial work photos or videos from Cloudinary here.</p>
        </div>

        <div className="showcase-frame">
          <div className="showcase-media">
            {activeMedia.type === 'video' ? (
              <video key={activeMedia.url} src={activeMedia.url} poster={activeMedia.poster} controls autoPlay muted loop playsInline />
            ) : (
              <img key={activeMedia.url} src={activeMedia.url} alt={activeMedia.title} />
            )}
            <span className="showcase-type">
              {activeMedia.type === 'video' && <FaPlay aria-hidden="true" />}
              {activeMedia.type === 'video' ? 'Video' : 'Work photo'}
            </span>
          </div>

          <div className="showcase-details">
            <span className="showcase-category">{activeMedia.category}</span>
            <h3>{activeMedia.title}</h3>
            <div className="showcase-controls">
              <button type="button" className="icon-button" onClick={showPrevious} aria-label="Show previous work">
                <FaChevronLeft aria-hidden="true" />
              </button>
              <div className="showcase-dots" aria-label="Choose work">
                {projectMedia.map((media, index) => (
                  <button
                    key={`${media.url}-${index}-dot`}
                    type="button"
                    className={`showcase-dot${index === activeIndex ? ' is-active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show work ${index + 1}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  />
                ))}
              </div>
              <button type="button" className="icon-button" onClick={showNext} aria-label="Show next work">
                <FaChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;