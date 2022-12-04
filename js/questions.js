(function() {
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    
    titleQuestions.forEach(i => {
        i.addEventListener('click',()=>{
            let height = 0;
            let answer = i.nextElementSibling;
            let addPadding = i.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            i.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });

})();