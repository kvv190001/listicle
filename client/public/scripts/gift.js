const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
  
    const response = await fetch('/gifts')
    const data = await response.json()
  
    const giftContent = document.getElementById('gift-content')
  
    let gift
  
    gift = data.find(gift => gift.id === requestedID)
  
    if (gift) {
      document.getElementById('image').src = gift.image
      document.getElementById('name').textContent = gift.name
      document.getElementById('number').textContent = 'Number: ' + gift.number
      document.getElementById('position').textContent = 'Position: ' + gift.position
      document.title = `UnEarthed - ${gift.name}`
    }
    else {
      const message = document.createElement('h2')
      message.textContent = 'No Gifts Available 😞'
      giftContent.appendChild(message)   
    }
  }
  
  renderGift()