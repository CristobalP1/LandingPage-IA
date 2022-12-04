(function () {

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonAfter = document.querySelector('#after');
    const buttonBefore = document.querySelector('#before');
    let value

    buttonAfter.addEventListener('click',()=>{
        changePosition(1);
    })

    buttonBefore.addEventListener('click',()=>{
        changePosition(-1)
    })

    const changePosition = (add) => {
        console.log(add);
    }
})();