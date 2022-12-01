import applyDiff from './applyDiff.js';

const DEFAULT_COLOR = 'black';

const createDomElement = (color) => {
  const div = document.createElement('div');

  div.textContent = 'Hello World!';
  div.style.color = color;
  return div;
};

export default class HelloWorld extends HTMLElement {
  static get observedAttributes() {
    return ['color'];
  }

  get color() {
    return this.getAttribute('color') || DEFAULT_COLOR;
  }

  set color(value) {
    this.setAttribute('color', value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(this);
    if (!this.hasChildNodes()) return;

    applyDiff(this, this.firstElementChild, createDomElement(newValue));
  }

  // 사용자 정의요소의 라이프 사이클 매서드 중 하나
  // 구성요소가 dom에 연결될 때 호출된다.
  // componentDidMount와 메우 유사
  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.appendChild(createDomElement(this.color));
    });
  }
}
