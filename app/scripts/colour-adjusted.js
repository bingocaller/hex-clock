// Get RGB channels from a date
const RGBFromDate = (date) => ([
    (255 / (date.getHours() * 24)),
    (255 / (date.getMinutes() * 60)),
    (255 / (date.getSeconds() * 60))
  ].map(Math.round)
);

// Get color luminance as a float from RGB channels
const colorLuminance = (red, green, blue) => (
  ((0.299 * red) + (0.587 * green) + (0.114 * blue)) / 256
);

// Get font color from RGB channels from background
const colorFromRGB = (red, green, blue) => (
  colorLuminance(red, green, blue) > 0.7 ? 'rgba(0,0,0, .8)' : 'rgba(255,255,255, .8)'
);

// Get formatted date
const dateToContent = (date) => (
  date.toTimeString().replace(/.*(\d{2}):(\d{2}):(\d{2}).*/, '$1$2$3')
);

const colorClock = () => {
  const date = new Date();
  const channels = RGBFromDate(date);

  const clock = document.getElementById('clock');
  const bg = document.getElementById('background');

  bg.style.backgroundColor = `rgb(${channels.join(',')})`;
  clock.style.color = colorFromRGB.apply(this, channels);
  clock.textContent = dateToContent(date);
}

window.setInterval(colorClock, 1000);
colorClock();
