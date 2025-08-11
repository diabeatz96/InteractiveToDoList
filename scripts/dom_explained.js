// Print all DOM element tags on the page
function printDomObjectList() {
  const allElements = Array.from(document.querySelectorAll('*'));
  const tagNames = allElements.map(el => el.tagName.toLowerCase());
  const uniqueTags = Array.from(new Set(tagNames));
  const container = document.getElementById('dom-object-list');
  container.innerHTML = `<strong>Tags on this page:</strong> <br>` + uniqueTags.join(', ');
}

printDomObjectList();
document.getElementById('dom-demo').textContent =
  'document.body.children[0].tagName: ' + document.body.children[0].tagName + '\n' +
  'document.querySelector("h1").textContent: ' + document.querySelector('h1').textContent;

// Visual DOM Tree Animation
function createDomTreeVisual() {
  const treeData = {
    tag: 'html',
    children: [
      {
        tag: 'body',
        children: [
          {
            tag: 'div',
            children: [
              { tag: 'h1', children: [] },
              { tag: 'p', children: [] }
            ]
          }
        ]
      }
    ]
  };

  function renderNode(node, depth = 0) {
    const el = document.createElement('div');
    el.className = 'dom-node';
    el.style.marginLeft = (depth * 32) + 'px';
    el.style.transition = 'all 0.5s';
    el.innerHTML = `<span class="dom-tag">&lt;${node.tag}&gt;</span>`;
    if (node.children && node.children.length) {
      node.children.forEach(child => {
        el.appendChild(renderNode(child, depth + 1));
      });
    }
    return el;
  }

  const container = document.getElementById('dom-visual');
  container.innerHTML = '<h3>DOM Tree Visualization</h3>';
  container.appendChild(renderNode(treeData));

  // Animate nodes appearing
  const nodes = container.querySelectorAll('.dom-node');
  nodes.forEach((node, i) => {
    node.style.opacity = 0;
    setTimeout(() => {
      node.style.opacity = 1;
    }, 300 * i);
  });
}

createDomTreeVisual();
