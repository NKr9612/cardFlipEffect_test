const card = document.querySelector('.card');
// let i = 0;
card.addEventListener('click', ()=>{
    // if(i %2===0){
        // card.classList.remove('flippedBack')
        card.classList.toggle('flipped')
    // }
    // else{
    //     card.classList.remove('flipped')
    //     card.classList.add('flippedBack')
    // }
    // i++;
})