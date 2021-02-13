let t = parseFloat(document.getElementById("temp").textContent);
let w = parseFloat(document.getElementById("windSpeed").textContent);

function windChill(temp, windSpeed) {
  let wind = 35.74 + 0.6215 * t - 35.75 * w ** 0.16 + 0.4275 * t * w ** 0.16;

  return Math.round(wind);
}
  
  let ans = windChill(t, w);
  document.getElementById("windChill").innerHTML = ans;
