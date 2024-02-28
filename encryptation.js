const txtEncrypt = document.getElementById('encrypted')
const txtUncrypt = document.getElementById('unencrypted')
const encryptBtn = document.getElementById('encrypt')
const unencryptBtn = document.getElementById('unencrypt')

const encriptations = {
  "e" : "enter",
  "i" : "imes",
  "a" : "ai",
  "o" : "ober",
  "u" : "ufat"
}
const keys = Object.keys(encriptations)
const values = Object.values(encriptations)

let originalText = ''

const checkAluraValidations = (text) => {
  console.log(text)
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

  let indexes = []

  const textArray = text.split('')
  checkAluraValidations(text)

  textArray.forEach((letter, index) => {
    if(keys.includes(letter)) {
      indexes.push(index)
    }
  })

  indexes.forEach(index => {
    textArray[index] = encriptations[textArray[index]]
  })

  const encryptedText = textArray.join('')

  txtEncrypt.value = encryptedText
  txtUncrypt.value = ''

})

unencryptBtn.addEventListener('click', () => {
  const text = txtEncrypt.value
  checkAluraValidations(text)
  
  txtUncrypt.value = text.replaceAll(values[4], keys[4])
  .replaceAll(values[3], keys[3])
  .replaceAll(values[2], keys[2])
  .replaceAll(values[1], keys[1])
  .replaceAll(values[0], keys[0])
  
  txtEncrypt.value = ''
})

