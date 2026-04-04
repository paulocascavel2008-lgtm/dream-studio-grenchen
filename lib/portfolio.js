const generateImages = (folder, max = 50) => {
  return Array.from({ length: max }, (_, i) => {
    const index = i + 1;
    return `/portfolio/${folder}/${folder}${index}.jpg`;
  });
};

export const portfolioData = {
  studio: generateImages("studio"),
  outdoor: generateImages("outdoor"),
  wedding: generateImages("wedding"),
  baptism: generateImages("baptism"),
  landscape: generateImages("landscape"),
  family: generateImages("family"),
};
