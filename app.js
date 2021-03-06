$(document).ready(function () {

    console.info("JQuery is now loaded")

    $heading = $('.card__heading');

    $('#date-code').html(getDateNow());

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }


    function setRandomColor(heading) {
        heading.css("color", getRandomColor());
    }

    function getDateNow() {
        var d= new Date();

        var month = d.getMonth()+1;
        var day = d.getDate();

        var output =  ((''+month).length<2 ? '0' : '') + month + ' | ' + ((''+day).length<2 ? '0' : '') + day + ' | ' + d.getFullYear();


        return output;
        
    }

    setInterval(function(){
        setRandomColor($heading);
    },300);


    $('.card__close').click(function(){
        $(this).parent().remove();
        alert("Whoops you broke it... better luck next time");
    });

});