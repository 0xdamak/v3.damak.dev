import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../button";
import { slideVariants, cardVariants, getStatusColor } from "./utils";
import { Star } from "../../../public/svg/icons";
import Image from "next/image";
import classes from "./project-card.module.scss";

export function ProjectCard({
  project,
  index = 0,
  hoveredProject,
  onMouseEnter,
  onMouseLeave,
  variant = "work",
}) {
  const isHovered = hoveredProject === project.id;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const hasMultipleImages = project.images && project.images.length > 1;

  function nextImage(e) {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setIsImageLoading(true);
    setDirection(1);
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  }

  function prevImage(e) {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setIsImageLoading(true);
    setDirection(-1);
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  }

  function goToImage(imageIndex, e) {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setIsImageLoading(true);
    setDirection(imageIndex > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(imageIndex);
  }

  function toggleAutoPlay(e) {
    e.stopPropagation();
    setIsAutoPlaying((prev) => !prev);
  }

  function handleImageLoad() {
    setIsImageLoading(false);
  }

  useEffect(() => {
    if (!hasMultipleImages || !isAutoPlaying) return;

    const autoPlayInterval = setInterval(() => {
      setIsImageLoading(true);
      setDirection(1);
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(autoPlayInterval);
  }, [
    currentImageIndex,
    hasMultipleImages,
    isAutoPlaying,
    project.images.length,
  ]);

  return (
    <motion.div
      className={`${classes.projectCard} ${classes[variant]} ${
        project.featured ? classes.featured : ""
      }`}
      variants={cardVariants({ index })}
      initial="initial"
      animate="animate"
      onMouseEnter={() => onMouseEnter?.(project.id)}
      onMouseLeave={() => onMouseLeave?.(null)}
    >
      <div className={classes.projectImage}>
        <AnimatePresence mode="wait">
          {isImageLoading && (
            <motion.div
              className={classes.imageLoader}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={classes.spinner}>
                <div className={classes.spinnerRing}></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImageIndex}
            className={classes.imageWrapper}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "tween",
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              width={800}
              height={600}
              className={classes.image}
              onLoadingComplete={handleImageLoad}
            />
          </motion.div>
        </AnimatePresence>

        {hasMultipleImages && (
          <>
            <button
              className={`${classes.carouselButton} ${classes.prevButton}`}
              onClick={prevImage}
              aria-label="Previous image"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              className={`${classes.carouselButton} ${classes.nextButton}`}
              onClick={nextImage}
              aria-label="Next image"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <button
              className={`${classes.carouselButton} ${classes.playPauseButton}`}
              onClick={toggleAutoPlay}
              aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
            >
              {isAutoPlaying ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <div className={classes.carouselDots}>
              {project.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  className={`${classes.dot} ${
                    imgIndex === currentImageIndex ? classes.activeDot : ""
                  }`}
                  onClick={(e) => goToImage(imgIndex, e)}
                  aria-label={`Go to image ${imgIndex + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className={classes.imageOverlay}>
          <div className={classes.projectActions}>
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </motion.a>
            )}
          </div>
        </div>

        {variant === "playground" && project.status && (
          <div className={classes.projectBadges}>
            {project.status && (
              <div
                className={classes.statusBadge}
                style={{
                  backgroundColor: getStatusColor(project.status),
                }}
              >
                {project.status}
              </div>
            )}
          </div>
        )}

        {project.featured && (
          <p className={classes.featuredBadge}>
            <Star /> Featured
          </p>
        )}
      </div>

      <div className={classes.projectContent}>
        {variant === "work" && (
          <div className={classes.projectHeader}>
            <h3 className={classes.projectTitle}>{project.title}</h3>
            <div className={classes.projectMeta}>
              {project.year && (
                <h2 className={classes.projectYear}>{project.year}</h2>
              )}
              {project.duration && (
                <p className={classes.projectDuration}>{project.duration}</p>
              )}
            </div>
          </div>
        )}

        {variant === "playground" && (
          <h3 className={classes.projectTitle}>{project.title}</h3>
        )}

        <p className={classes.projectDescription}>{project.description}</p>

        {variant === "work" && project.client && (
          <div className={classes.projectClient}>
            <strong>Client:</strong> {project.client}
          </div>
        )}

        <div className={classes.projectTechnologies}>
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className={classes.techTag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <div className={classes.hoverParticles}>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={classes.particle}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
