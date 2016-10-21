function refreshData() {
  var d = new Date();

  var h = ('0' + d.getHours()).slice(-2);
  var m = ('0' + d.getMinutes()).slice(-2);
  var s = ('0' + d.getSeconds()).slice(-2);

  var color = h + m + s;

  document.getElementById('background').style.backgroundColor = '#' + color;
  document.getElementById('clock').textContent = color;
}

window.setInterval(refreshData, 1000);
refreshData(); // execute function
