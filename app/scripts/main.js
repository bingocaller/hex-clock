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
