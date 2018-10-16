var style = {
  "computer-science": "#a61e4d",
  "arts": "#e67700",
  "counts-to-major": "#087f5b",
  "counts-to-minor": "#0b7285",
  "math": "#5f3dc4",
  "psych/phil/hist": "#862e9c",
  "required": "#c92a2a",
  "sciences": "#5c940d",
}
var abbr = {
  "computer-science": "cs",
  "arts": "arts",
  "counts-to-major": "major",
  "counts-to-minor": "minor",
  "math": "math",
  "psych/phil/hist": "pph",
  "required": "req",
  "sciences": "sci",
}

var article = document.getElementsByClassName ('markdown-body') [0]
var text = article.innerHTML
Object.keys (style).forEach (function (key, i) {
  text = text.replace (new RegExp (key, "g"),
    "<span style='color: white; background-color: " + style [key] + "'>&nbsp;" + abbr [key] + "&nbsp;</span>")
})
article.innerHTML = text
