window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
});
function clickMenu() {
    
    flexjs.style.display = 'flex'
    header.style.height = '100vh'
    buttonjs.style.display = 'none'
}