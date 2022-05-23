const isNodeChanged = (vNode, rNode) => {
  const vAttrs = vNode.attributes;
  const rAttrs = rNode.attributes;

  if (vAttrs.length !== rAttrs.length) return true;

  const isDiffAttribute = Array.from(vAttrs).find((attr) => {
    const { name } = attr;
    const attrV = vNode.getAttribute(name);
    const attrR = rNode.getAttribute(name);

    return attrV !== attrR;
  });

  if (isDiffAttribute) return true;

  if (vNode.children.length === 0 && rNode.children.length === 0 && vNode.textContent !== rNode.textContent)
    return true;

  return false;
};

const applyDiff = (parentNode, realNode, virtualNode) => {
  if (realNode && !virtualNode) {
    realNode.remove();
    return;
  }

  if (!realNode && virtualNode) {
    parentNode.appendChild(virtualNode);
    return;
  }

  if (isNodeChanged(virtualNode, realNode)) {
    realNode.replaceWith(virtualNode);
    return;
  }

  const childNodes = Array.from(realNode.children);
  const virtualNodes = Array.from(virtualNode.children);
  const max = Math.max(childNodes.length, virtualNodes.length);

  for (let i = 0; i < max; i += 1) {
    applyDiff(realNode, childNodes[i], virtualNodes[i]);
  }
};

export default applyDiff;
