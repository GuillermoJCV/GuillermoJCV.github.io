const txtEncrypt = document.getElementById('encrypted')
const txtUncrypt = document.getElementById('unencrypted')
const encryptBtn = document.getElementById('encrypt')
const unencryptBtn = document.getElementById('unencrypt')

encryptBtn.addEventListener('click', () => {
  const text = txtUncrypt.value //toma el texto del texto no encriptado
  let encrypt = text.toLowerCase().split('') //separa el texto en partes

  encrypt.forEach((letter, index) => {
    if (letter === 'e') encrypt[index] = 'enter'
    if (letter === 'i') encrypt[index] = 'imes'
    if (letter === 'a') encrypt[index] = 'ai'
    if (letter === 'o') encrypt[index] = 'ober'
    if (letter === 'u') encrypt[index] = 'ufat'
  }) //encripta
  txtEncrypt.value = encrypt.join('') //lo une y lo pone dentro del otro textarea
  txtUncrypt.value = ''
})

unencryptBtn.addEventListener('click', () => {
  const text = txtEncrypt.value //toma el texto del texto encriptado

  const unencryptedText = text.replaceAll('enter', 'e')
  .replaceAll('imes', 'i')
  .replaceAll('ai', 'a')
  .replaceAll('ober', 'o')
  .replaceAll('ufat', 'u') //desencripta

  txtUncrypt.value = unencryptedText
  txtEncrypt.value = ''
})

