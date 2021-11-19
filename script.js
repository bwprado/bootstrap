class Bootstrap extends HTMLElement {
	constructor() {
		super()
	}

  connectedCallback() {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://cdn.jsdelivr.net/gh/bwprado/bootstrap@latest/script.js'

    head.appendChild(script)
  }
}

customElements.define('bootstrap-test', Bootstrap)
