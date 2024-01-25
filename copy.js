const uncryptedTextCopyBtn = document.getElementById('unencrypted-copy')
const encryptedTextCopyBtn = document.getElementById('encrypted-copy')

uncryptedTextCopyBtn.addEventListener('click', (e) => {
	navigator.clipboard.writeText(txtUncrypt.value)
})

encryptedTextCopyBtn.addEventListener('click', (e) => {
	navigator.clipboard.writeText(txtEncrypt.value)
})