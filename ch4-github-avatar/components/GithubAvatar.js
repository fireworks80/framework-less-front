const ERROR_IMAGE = './error.webp';
const LOADING_IMAGE = './loading.webp';

const getGitHubAvatalUrl = async (user) => {
  if (!user) return;

  const url = `https://api.github.com/users/${user}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data.avatar_url;
};

export default class GitHubAvatar extends HTMLElement {
  constructor() {
    console.log('constructor');
    super();
    this.url = LOADING_IMAGE;
  }

  get user() {
    return this.getAttribute('user');
  }

  set user(value) {
    this.setAttribute('user', value);
  }

  render() {
    console.log('render');
    window.requestAnimationFrame(() => {
      this.innerHTML = '';
      const img = document.createElement('img');
      img.src = this.url;
      this.appendChild(img);
    });
  }
  async loadNewAvatar() {
    const { user } = this;

    if (!user) return;

    try {
      this.url = await getGitHubAvatalUrl(user);
    } catch (e) {
      this.url = ERROR_IMAGE;
    }

    this.render();
  }

  connectedCallback() {
    console.log('connected');
    this.render();
    this.loadNewAvatar();
  }
}
