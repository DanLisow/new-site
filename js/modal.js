$(document).ready(function(){
    $('.menu-body__button button').on('click', function(){
        var hh = "<b>test</b>";
        swal({
            title: "" + "Сборный навес 5х6 " + "", 
            html: true,
            text: "Testno  sporocilo za objekt " + hh + "",  
            confirmButtonText: "V redu", 
            content: {
                element: 'p',
                attributes: {
                    innerHTML: 'adkasjdjask'
                }
            },
            content:{
                element: 'input',
                attributes: {
                    placeholder: 'Ваше имя'
                }
            },
            content:{
                element: 'input',
                attributes: {
                    placeholder: 'Ваш номер телефона'
                }
            }
        });
    });
});