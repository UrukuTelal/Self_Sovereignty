
function loadMarkdown(file) {
  fetch('../../' + file)
    .then(res => res.text())
    .then(md => {
      document.getElementById("content").innerHTML = marked.parse(md);
    });
}
window.onload = () => {
  loadMarkdown('docs/Manifesto_Summary.md');
};
