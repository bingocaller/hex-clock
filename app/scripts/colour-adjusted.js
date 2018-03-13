// Get RGB channels from a date
function RGBFromDate(date) {
  return [
    255 - (date.getHours() / 24 * 255),
    255 - (date.getMinutes() / 60 * 255),
    255 - (date.getSeconds() / 60 * 255),
  ].map(Math.round)
}

// Get color luminance as a float from RGB channels
function colorLuminance(red, green, blue) {
  return ((0.299 * red) + (0.587 * green) + (0.114 * blue)) / 256;
}

// Get font color from RGB channels from background
function colorFromRGB(red, green, blue) {
  return colorLuminance(red, green, blue) > 0.7 ? 'rgba(0,0,0, .8)' : 'rgba(255,255,255, .8)';
}

// Get formatted date
function dateToContent(date) {
  return date.toTimeString().replace(/.*(\d{2}):(\d{2}):(\d{2}).*/, '$1$2$3');
}

function colorClock() {
  const date = new Date();
  const channels = RGBFromDate(date);

  const clock = document.querySelector('.clock');
  const bg = document.querySelector('.background');

  bg.style.backgroundColor = `rgb(${channels.join(',')})`;
  clock.style.color = colorFromRGB.apply(this, channels);
  clock.textContent = dateToContent(date);
}

window.setInterval(colorClock, 1000);
colorClock();
