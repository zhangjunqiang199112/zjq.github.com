/**
 * Created by Administrator on 2017/4/23 0023.
 */
//header
    $('.header ul li').on('mouseenter',function(){
        $('.header ul li').removeClass('active');
        $(this).addClass('active');
        $('.content div').removeClass('active');
        $('.content div').eq($(this).index()).addClass('active');
    });




