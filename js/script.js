$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active');
})

function toggle(){
    var header = document.getElementById('header');
    header.classList.toggle('active');
}
