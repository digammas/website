var viewer = document.getElementById("viewer");
var url = viewer.getAttribute("url");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var md = this.responseText;
    var converter = new showdown.Converter();
    var html = converter.makeHtml(md);
    viewer.innerHTML = html;
  }
};
xhttp.open("GET", url, true);
xhttp.send();

