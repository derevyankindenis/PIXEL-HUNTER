export const resize = (frame, image) => {
  let ratio = [frame.width / image.width, frame.height / image.height];
  ratio = Math.min(ratio[0], ratio[1]);
  return {width: image.width * ratio, height: image.height * ratio};
};

export const resizeImages = (frame, images) => {
  images.forEach((image) => {
    image.addEventListener(`load`, () => {
      const size = resize(frame, image);
      image.width = size.width;
      image.height = size.height;
    });
  });
};
