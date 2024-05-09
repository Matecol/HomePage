// function toggleCard(card) {
//   const cardBody = card.querySelector('.card__body_teste');
//   let partialText = '';
//   let fullText = '';
//   switch(cardBody.id){
//     case 'card-body1':
//       partialText = cardBody.querySelector('.partial-text');
//       fullText = cardBody.querySelector('.full-text');
//       console.log(fullText)
//       break;
//     case 'card-body2':
//       partialTextId = cardBody.querySelector('.partial-text').id;
//       fullTextId = cardBody.querySelector('.full-text').id;
//       const partialTextElement = document.querySelector(`#${partialTextId}`)
//       const fullTextElement = document.querySelector(`#${fullTextId}`)
//       handleCard(partialTextElement, fullTextElement)
//       break;
//     case 'card-body3':
//       partialText = cardBody.querySelector('.partial-text');
//       fullText = cardBody.querySelector('.full-text');
//       console.log(fullText)
//       break;
//     default: 
//       console.log("não funfou");
//   }
//   // const cardBodyId1 = document.querySelector("#card1");
//   // const cardBodyId2 = document.querySelector("#card2");
//   // const cardBodyId3 = document.querySelector("#card3");
//   // console.log(cardBodyId1);
//   // console.log(cardBodyId2);
//   // console.log(cardBodyId3);
  

//   // console.log(cardBody)



//   // if (partialText.style.display === 'none') {
//   //   partialText.style.display = 'block';
//   //   fullText.style.display = 'none';
//   // } else {
//   //   partialText.style.display = 'none';
//   //   fullText.style.display = 'block';
//   //   console.log("teste3")
//   // }
// }

// function handleCard(partialText, fullText){
//     if (partialText.style.display === 'none') {
//     partialText.style.display = 'block';
//     fullText.style.display = 'none';
//   } else {
//     partialText.style.display = 'none';
//     fullText.style.display = 'block';
//   }
// }

// Adicione um evento de clique aos cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => toggleCard(card));
});

// Função para alternar o texto parcial e completo de um card
function toggleCard(card) {
  console.log(card);
  const partialText = card.querySelector('.partial-text');
  const fullText = card.querySelector('.full-text');
  handleCard(partialText, fullText);
}

// Função para alternar a exibição do texto parcial e completo
function handleCard(partialText, fullText) {
  if (partialText.style.display === 'none' || partialText.style.display === '') {
    partialText.style.display = 'block';
    fullText.style.display = 'none';
  } else {
    partialText.style.display = 'none';
    fullText.style.display = 'block';
  }
}