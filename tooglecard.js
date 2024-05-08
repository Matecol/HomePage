function toggleCard(card) {
    const cardBody = card.querySelector('.card__body');
    const partialText = cardBody.querySelector('.partial-text');
    const fullText = cardBody.querySelector('.full-text');
    
    if (partialText.style.display === 'none') {
      partialText.style.display = 'block';
      fullText.style.display = 'none';
      console.log("teste")
    } else {
      partialText.style.display = 'none';
      fullText.style.display = 'block';
      console.log("teste3")

    }
  }