export default function Header({ time }) {
  const mainMessage = 'Ne Kadar Güçlüsün'
  let messageToShow

  switch (true) {
    case time >= 30:
      messageToShow = 'Gitmiş.'
      break
    case time >= 25:
      messageToShow = 'Hala ölü.'
      break
    case time >= 17:
      messageToShow = 'Ölü.'
      break
    case time >= 13:
      messageToShow = 'Yapamam.'
      break
    case time >= 12:
      messageToShow = 'Çok güçlü. '
      break
    case time >= 11:
      messageToShow = 'AMANIN. AMANIN.'
      break
    case time >= 10:
      messageToShow = 'AMANIN.'
      break
    case time >= 8:
      messageToShow = 'Muhteşem!'
      break
    case time >= 6:
      messageToShow = 'Vay canına!'
      break
    case time >= 4:
      messageToShow = 'Oh'
      break
    case time >= 2:
      messageToShow = 'Esnedim.'
      break
    case time > 0:
      messageToShow = 'Güçsüz.'
      break
    default:
      messageToShow = mainMessage + '?'
  }

  return <h1>{messageToShow}</h1>
}
