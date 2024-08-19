export class NavLink extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                a {
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                }
            </style>
            <a><slot></slot></a>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('a').addEventListener('click', this.onClick.bind(this));
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('a').removeEventListener('click', this.onClick.bind(this));
    }

    onClick(event) {
        event.preventDefault();
        const url = this.getAttribute('href');
        if (url) {
            this.dispatchEvent(new CustomEvent('navigate', {
                detail: { url },
                bubbles: true,
                composed: true,
            }));
        }
    }
}

// 커스텀 엘리먼트 정의
customElements.define('nav-link', NavLink);