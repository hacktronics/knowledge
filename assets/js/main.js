window.addEventListener("load", () => {
  var imgs = document.images;
  var len = imgs.length;

  [].forEach.call(imgs, function(img) {
    if(img.complete)
      resizeImage(img);
    else
      img.addEventListener('load', () => resizeImage(img), false);
  });

  function resizeImage(img) {
    let h = img.height;
    h = h * 0.5;
    img.height = h;
  }
});