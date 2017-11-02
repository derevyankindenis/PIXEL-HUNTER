export const resize = (frame, image) => {
  let ratio = [frame.width / image.width, frame.height / image.height];
  ratio = Math.min(ratio[0], ratio[1]);
  return {width: image.width * ratio, height: image.height * ratio};
};

export const resizeImage = (frame, image) => {
  const size = resize({width: frame.clientWidth, height: frame.clientHeight}, image);
  image.width = size.width;
  image.height = size.height;
};

export const resizeImages = (frames, images) => {
  images.forEach((image, index) => {
    image.addEventListener(`load`, () => {
      resizeImage(frames[index], image);
    });
  });
};
