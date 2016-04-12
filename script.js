/**
 * Created by НАФТУСЯ on 12.04.2016.
 */
$(function($) {
    //TABS

    var $tab = $('li');

    $tab.on('click', function() {
        $(this).addClass('active').siblings().removeClass()
            .closest('div.wrapper').find('div.article').removeClass('active').eq($(this).index()).addClass('active');
    })
});


//  FORM

var $input = $('input');
$input.each(function(){
    var msg = $(this).attr("title");
    $(this).removeAttr("title");
    var tooltip = $("<p></p>").text(msg).addClass("tooltip");
    $(this).after(tooltip);
});

$input.on('mouseover', function() {
    $(this).siblings('.tooltip').addClass('show');
});
$input.on('mouseout', function() {
    $(this).siblings('.tooltip').removeClass('show');
});


$('.help').on('click', function(){
    $('.tooltip').addClass('show').css({
        transition: '0.5s'

    });
});


$('.help').on('mouseover', function(){
    $('.help').css({
        background: '#f7b883',
        color: 'white'
    });
});
$('.help').on('mouseout', function(){
    $('.help').css({
        background: '#efefef',
        color: '#72675a'
    });
});
