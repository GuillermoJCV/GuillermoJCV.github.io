const txtEncrypt = document.getElementById('encrypted')
const txtUncrypt = document.getElementById('unencrypted')
const encryptBtn = document.getElementById('encrypt')
const unencryptBtn = document.getElementById('unencrypt')

let originalText = ''

const checkAluraValidations = (text) => {
  const arrayText = text.split('')

  arrayText.forEach((letter) => {
    const asciiCode = letter.charCodeAt(0)
    if(!(asciiCode >= 97 && asciiCode <= 122 || asciiCode === 32 || asciiCode === 10)) {
       errorDialog(errorsSection, "Lowercase and no special characters", "According to Alura specifications, the text must be lowercase")
       throw new Error("Text isn't in lowercase")
    }
  })
}

encryptBtn.addEventListener('click', () => {
  const text = txtUncrypt.value
  originalText = text

  checkAluraValidations(text)

  const encryptedText = text.replaceAll('e', 'enter')
  .replaceAll('i', 'imes')
  .replaceAll('a', 'ai')
  .replaceAll('o', 'ober')
  .replaceAll('u', 'ufat')

  txtEncrypt.value = encryptedText
  txtUncrypt.value = ''
})

unencryptBtn.addEventListener('click', () => {

  txtUncrypt.value = originalText
  txtEncrypt.value = ''
})

