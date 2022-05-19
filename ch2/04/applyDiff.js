const isNodeChanged = (vNode, rNode) => {
  // node 속성 갯수를 비교
  // 노드 속성 갯수가 같으면 return false
  console.log(vNode, rNode);
  const attrVnode = vNode.attributes;
  const attrRnode = rNode.attributes;

  if (attrVnode.length !== attrRnode.length) return true;

  // 노드 값 비교
  const differentAttribute = Array.from(attrVnode).find((attribute) => {
    const { name } = attribute;
    const vNodeAttrVal = vNode.getAttribute(name);
    const rNodeAttrVal = rNode.getAttribute(name);

    return vNodeAttrVal !== rNodeAttrVal;
  });

  if (differentAttribute) return true;

  // 노드의 자식이 없고 노드 텍스트가 변경이 되었는지 비교
  if (vNode.childNodes.length === 0 && rNode.childNodes.length === 0 && vNode.textContent !== rNode.textContent) {
    return true;
  }

  return false;
};

const applyDiff = (parentNode, realNode, virtualNode) => {
  // 가상돔이 없으면 realNode를 삭제 한다
  if (realNode && !virtualNode) {
    realNode.remove();
    return;
  }

  // 가상노드가 있으면 parentNode에 추가한다
  if (!realNode && virtualNode) {
    parentNode.appendChild(virtualNode);
    return;
  }

  // 각 노드의 속성들을 비교한다.
  console.log('node', virtualNode, realNode);
  if (isNodeChanged(virtualNode, realNode)) {
    realNode.replaceWith(virtualNode);
    return;
  }

  // 노드의 자식들을 비교 한다.
  const realNodeChildren = Array.from(realNode.children);
  const virtualChildren = Array.from(virtualNode.children);

  const max = Math.max(realNodeChildren.length, virtualChildren.length);

  for (let i = 0; i < max; i += 1) {
    applyDiff(realNode, realNodeChildren[i], virtualChildren[i]);
  }
};

export default applyDiff;
