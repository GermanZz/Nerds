var writeUsBtn = document.querySelector('.write-us-btn');
var closeButton = document.querySelector('.modal-close');
var modalWindow = document.querySelector('.modal-write-us');

writeUsBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    modalWindow.classList.add('modal-show');
});

closeButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalWindow.classList.remove('modal-show');
});

window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
        evt.preventDefault();
        if(modalWindow.classList.contains("modal-show")){
            modalWindow.classList.remove("modal-show");
        }
    }
});