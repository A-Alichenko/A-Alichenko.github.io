$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
    window.history.pushState("8",null,' ')
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}
$(window).on('popstate', function () {
    PopUpHide();
});