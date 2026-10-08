const nodes = document.querySelectorAll('.flow-node');
const panels = document.querySelectorAll('.tab-panel');

nodes.forEach((node) => {
  node.addEventListener('click', () => {
    const target = node.dataset.target;

    nodes.forEach((btn) => btn.classList.toggle('active', btn === node));

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === target);
    });
  });
});
