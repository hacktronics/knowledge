const imgs = document.getElementsByClassName("blocks");
for (let i = 0; i < imgs.length; i++) {
  let h = imgs[i].height;
  h = h * 0.5;
  imgs[i].height = h;
}
