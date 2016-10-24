if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}

function refreshData() {
  const d = new Date();

  const
    h = `0${d.getHours()}`.slice(-2),
    m = `0${d.getMinutes()}`.slice(-2),
    s = `0${d.getSeconds()}`.slice(-2);

  const color = h + m + s;

  document.getElementById('background').style.backgroundColor = `#${color}`;
  document.getElementById('clock').textContent = color;
}

window.setInterval(refreshData, 1000);
refreshData(); // execute function
