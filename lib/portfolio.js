const generateImages = (folder, max = 100) => {
  return Array.from({ length: max }, (_, i) => `/portfolio/${folder}/${folder}${i + 1}.jpg`);
};

export const portfolioData = {
  studio: generateImages("studio"),
  outdoor: generateImages("outdoor"),
  wedding: generateImages("wedding"),
  baptism: generateImages("baptism"),
  landscape: generateImages("landscape"),
  family: generateImages("family"),
};
