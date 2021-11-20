class Bootstrap extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const head = document.querySelector('head')
		const script = document.createElement('script')
		const link = document.createElement('link')
		const scriptBody = document.createElement('script')
		const body = document.querySelector('body')
		const div = document.createElement('div')

		div.innerHTML = `
    <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
    `
		script.type = 'text/javascript'
		script.src =
			'https://cdn.jsdelivr.net/gh/bwprado/bootstrap@latest/script.js'

		scriptBody.type = 'text/javascript'
		scriptBody.src =
			'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
		scriptBody.crossorigin = 'anonymous'
		scriptBody.integrity =
			'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'

		link.innerHTML = `
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
		`

		head.appendChild(link)
		head.appendChild(script)
		body.appendChild(scriptBody)
		this.appendChild(div)
	}
}

customElements.define('bootstrap-test', Bootstrap)
