stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute'
stats.domElement.style.bottom = '10px'
stats.domElement.style.left = '10px'

document.body.appendChild(stats.domElement);

update = function() {
  stats.begin();
  stats.end();
  requestAnimationFrame(update);
};
requestAnimationFrame(update);