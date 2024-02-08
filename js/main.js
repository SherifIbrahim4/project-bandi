let btnScroll = document.querySelector('.btn5');

let wscroll = $('#features').offset().top;
$(window).scroll(()=>{
    let wnavbar = $(window).scrollTop();

    if(wnavbar > wscroll - 120)
    {
        $('.navbar').css('backgroundColor' , 'rgb(25, 40, 63, 0.6)')
        $('.navbar').css('padding-left' , '70px')
        $('.navbar').css('padding-right' , '70px')
        $('.btn5').css('display' , 'block')
    }
    else
    {
        $('.navbar').css('backgroundColor' , 'transparent')
        $('.navbar').css('padding-left' , '0px')
        $('.navbar').css('padding-right' , '0px')
        $('.btn5').css('display' , 'none')
    }
})
btnScroll.addEventListener('click' , function(){
    scroll({
        top:0,
        behavior:"smooth"
    })
})

$("a[href^='#']").click((e) => {
    let whref = $(e.target).attr('href');
    let fscroll = $(whref).offset().top;
    $('html body').animate({scrollTop:fscroll})
})
$(document).ready( () => {
    $('#loading .loader').fadeOut( 1000 , () => {
        $('#loading').fadeOut(1000 , () => {
            $('body').css('overflow-y','auto')
        })
    })
})

