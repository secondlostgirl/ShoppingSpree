const arrows = document.querySelectorAll(".arrow");
const clothesList = document.querySelectorAll(".clothes-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = clothesList[i].querySelectorAll("img").length;

    arrow.addEventListener("click", function () {
        clickCounter++;

        // Eğer 3. tıklama yapıldıysa, başa dön
        if (clickCounter === 3) {
            clickCounter = 0;
        }

        // Burada translateX ile hareket ettiriyoruz
        clothesList[i].style.transform = `translateX(${-(clickCounter * 300)}px)`;
        
        console.log(`clickCounter: ${clickCounter}, imageItem: ${imageItem}`);
    });
});
/*purple mode*/
const ball= document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.navbar,.sidebar,sidebar i,.toggle,.toggle-ball,.filter select")

    ball.addEventListener("click",function(){
        items.forEach((item)=> item.classList.toggle("active"));
})