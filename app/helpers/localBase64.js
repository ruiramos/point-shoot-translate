module.exports = function(img){
  var maxSize = 400,
      imgWidth,
      imgHeight,
      canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');

  imgWidth = maxSize;
  imgHeight = img.height * imgWidth / img.width;
  canvas.width = imgWidth;
  canvas.height = imgHeight;

  // Copy the image contents to the canvas
  ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
  var dataURL = canvas.toDataURL();

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
};