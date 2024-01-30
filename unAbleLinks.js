const homeAnchore = document.getElementById('home')
const projectsAnchore = document.getElementById('projects')

const errorsSection = document.getElementById('errorsLog')

function errorDialog(element, summariceMessage, errorMessage) {
	const errorElement = document.createElement('span')
	const summarice = document.createElement('h2')
	const description = document.createElement('p')

	const summariceTxt = document.createTextNode(summariceMessage)
	const descriptionTxt = document.createTextNode(errorMessage)
	summarice.appendChild(summariceTxt)
	description.appendChild(descriptionTxt)

	errorElement.appendChild(summarice)
	errorElement.appendChild(description)

	errorElement.classList.add('errorMessage')

	element.appendChild(errorElement)
}

homeAnchore.addEventListener('click', () => {
	errorDialog(errorsSection, "Home isn't available yet", "The link to home page was created just for design purposes")
})

projectsAnchore.addEventListener('click', () => {
	errorDialog(errorsSection, "Projects page isn't available yet", "The link to projects page was created just for design purposes")
})

errorsSection.addEventListener('animationend', (e) => {
	setTimeout(() => {
		e.target.remove()
	}, 5000)
})