export const resize = (frame, image) => {
  if ((frame.width === image.width && frame.height >= image.height) || (frame.height === image.height && frame.width >= image.width)) {
    return image;
  }

  const newSize = {
    width: 0,
    height: 0
  };

  const ratio = image.width / image.height;

  if (Math.abs(frame.width - image.width) > Math.abs(frame.height - image.height)) {
    newSize.width = frame.width;
    newSize.height = newSize.width / ratio;
  } else {
    newSize.height = frame.height;
    newSize.width = newSize.height * ratio;
  }

  return newSize;
};
