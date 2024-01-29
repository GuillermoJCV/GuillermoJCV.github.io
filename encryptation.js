const txtEncrypt = document.getElementById('encrypted')
const txtUncrypt = document.getElementById('unencrypted')
const encryptBtn = document.getElementById('encrypt')
const unencryptBtn = document.getElementById('unencrypt')

const checkAluraValidations = (text) => {
  const arrayText = text.split('')

  arrayText.forEach((letter) => {
    if(!(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122 || letter.charCodeAt(0) === 32)) {
       errorDialog(errorsSection, "Lowercase and no special characters", "According with alura specifications, the text must be on lowercase")
       throw new Error("Text isn't in lowercase")
    }
  })
}

encryptBtn.addEventListener('click', () => {
  const text = txtUncrypt.value //toma el texto del texto no encriptado

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
  const text = txtEncrypt.value //toma el texto del texto encriptado

  checkAluraValidations(text)

  const unencryptedText = text.replaceAll('enter', 'e')
  .replaceAll('imes', 'i')
  .replaceAll('ai', 'a')
  .replaceAll('ober', 'o')
  .replaceAll('ufat', 'u') //desencripta

  txtUncrypt.value = unencryptedText
  txtEncrypt.value = ''
})

