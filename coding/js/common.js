/*session*/
var ses_name = sessionStorage.getItem("ses_name");
var ses_id = sessionStorage.getItem("ses_id");
var ses_dorm = sessionStorage.getItem("ses_dorm");
var ses_pw = sessionStorage.getItem("ses_pw");
var ses_gender = sessionStorage.getItem("ses_gender");
var ses_check = sessionStorage.getItem("ses_check");
var ses_address = sessionStorage.getItem("ses_address");
var ses_sort = sessionStorage.getItem("ses_sort");
var ses_born = sessionStorage.getItem("ses_born");
var ses_spell = sessionStorage.getItem("ses_spell");

console.log(ses_name + " / " + ses_id + " / " + ses_dorm + " / " + ses_pw); //login
console.log(ses_gender + " / " + ses_check + " / " + ses_address + " / " + ses_sort + " / " + ses_born); //join


/*spell hidden*/
if(ses_dorm == null){
    $("#spell").css("visibility","hidden");
}else{
    $("#spell").css("visibility","visible");
}

/*dormitory separate*/
if(ses_name != null && ses_id != null && ses_dorm != null && ses_pw != null){
    if(!$("body").hasClass("board") && !$("body").hasClass("book_board") && !$("body").hasClass("messenger")){
        dorm_separate(ses_dorm);
    }
    //common
    $("#dorm_1").css("background-image", "url(../img/sly_sec6_img.png)");
    $("#dorm_2").css("background-image", "url(../img/grf_sec6_img.png)");
    $("#dorm_3").css("background-image", "url(../img/rav_sec6_img.png)");
    $("#dorm_4").css("background-image", "url(../img/huf_sec6_img.png)");
    $(".pg3_1, .pg3_2 img").removeClass("gray");
}


function dorm_separate(s){
    var dormurl;
    var replaceurl;
    var finalurl;

    switch (s){
        case "gry":
            dormurl = "gryffindor";
        break;
        case "rav":
            dormurl = "ravenclaw";
        break;
        case "huf":
            dormurl = "hufflepuff";
        break;
        case "sly":
            dormurl = "slytherin";
        break;
    }

    var geturl = $(".sec1").css("background-image");
    replaceurl = geturl.replace("gry",dormurl).replace("rav",dormurl).replace("huf",dormurl).replace("sly",dormurl);
    console.log(geturl);

    if($("body").hasClass("main")){
        finalurl = replaceurl.replace("school","main").replace("study","main").replace("library","main").replace("map","main");
        console.log("main if");
    }else if($("body").hasClass("school")){
        finalurl = replaceurl.replace("main","school").replace("study","school").replace("library","school").replace("map","school");
        console.log("school if");
    }else if($("body").hasClass("study")){
        finalurl = replaceurl.replace("main","study").replace("school","study").replace("library","study").replace("map","study");
        console.log("study if");
    }else if($("body").hasClass("library")){
        finalurl = replaceurl.replace("main","library").replace("school","library").replace("study","library").replace("map","library");
        console.log("library if");
    }
    else if($("body").hasClass("map")){
        finalurl = replaceurl.replace("main","map").replace("school","map").replace("study","map").replace("library","map");
        console.log("map if");
    }
    console.log("finalurl : "+ finalurl);
    $(".sec1").css("background-image",finalurl);

    switch (s) {
        case "gry":
            /*main*/
            $(".bg_up, .bg_down, .sec3").css("background-color", "#6b5555");
            $(".sec5").css("background-color", "#bcaeae");
            $(".sec5_bg").css("background-image", "url(../img/gryffindor/sec5_bg.png)");
            $(".pg3_bg").css("background-color", "#bcaeae");
            $(".pg3_1").css("background-image", "url(../img/gif/grf1.gif)");
            $(".pg3_2 img").attr("src", "../img/gif/grf2.gif");
            $(".sec3 li").css("color", "#BCAEAE");
            $("#spell").css("visibility","visible");
            // $(".main .sec1").css("background-image", "url(" +  + ")");

            /*school*/
            // $(".school .sec1").css("background-image", "url(../img/gryffindor/school_sec1.jpg)");
            $(".school .arr_container").css("background-color","#bcaeae");
            $(".school .contents_right").css("background-color","rgba(188,174,174,0.25)");
            $(".school .news .new").css("background-color","#6b5555");
            $(".school .fullbanner").css("background-image", "url(../img/gryffindor/school_banner.jpg)");
            $(".school .pg4_bg").css("background-color","rgba(188,174,174,0.25)");
            $(".school .sec3").css("background-image", "url(../img/gryffindor/sec3_bg.jpg)");

            /*study*/
            // $(".study .sec1").css("background-image", "url(../img/gryffindor/study_sec1.jpg)");
            $(".study .sec2").css("background-color","#6b5555");
            $(".study .contents_right").css("background-color","rgba(188, 174, 174, 0.25)");
            $(".study .option_wrap #opt_line2").css("background-color","#bcaeae");
            $(".study #snitch").css("background-image", "url(../img/gryffindor/golden_snitch.jpg)");
            $(".study .contents_right .sec3_sub span p").css("color","#6b5555");
            $(".study .seat_active div").css("background-color","#6b5555 !important");
            $(".study .prof_seat").css("background-color","rgba(188, 174, 174, 0.25)").css("color","#6B5555");
            $(".study .fullbanner").css("background-image", "url(../img/gryffindor/study_banner.jpg)");
            $(".study #herb").css("background-color","#F1EDED");
            $(".study #flight").css("background-color","#BCAEAE");
            $(".study #potion").css("background-color","#E5DBDB");
            $(".study #stargaze").css("background-color","#BEA8A8");
            $(".study #jump").css("background-color","#6B5555");
            $(".study #transform").css("background-color","#D9C2C2");

            /*library*/
            // $(".library .sec1").css("background-image", "url(../img/gryffindor/lib_sec1.png)");
            $(".library .sec2, .library .arr_container, .library .pg4_bg").css("background-color","rgba(188, 174, 174, 0.25)");
            $(".library #youmay").attr("src", "../img/gryffindor/youmay.png");
            $(".library .book_open").css("background-color","#6B5555");
            $(".library .fullbanner").css("background-image", "url(../img/gryffindor/library_banner.png)");

            /*map*/
            // $(".map .sec1").css("background-image", "url(../img/gryffindor/map_sec1.jpg)");
            $(".map .left_text p").css("color", "#6B5555");
            $(".map .contents_right").css("background-color","rgba(188,174,174,0.2)");
            $(".map .contents_right").css("background-image", "url(../img/gryffindor/gry_marauders.svg)");
            break;

        case "rav":
            /*main*/
            $(".bg_up, .bg_down, .sec3").css("background-color", "#515665");
            $(".sec5").css("background-color", "#aeb2bc");
            $(".sec5_bg").css("background-image", "url(../img/ravenclaw/sec5_bg.png)");
            $(".pg3_bg").css("background-color", "#aeb2bc");
            $(".pg3_1").css("background-image", "url(../img/gif/rav1.gif)");
            $(".pg3_2 img").attr("src", "../img/gif/rav2.gif");
            $(".sec3 li").css("color", "#AEB2BC");
            // $(".main .sec1").css("background-image", "url(../img/ravenclaw/main_sec1.jpg)");

            /*school*/
            // $(".school .sec1").css("background-image", "url(../img/ravenclaw/school_sec1.jpg)");
            $(".school .arr_container").css("background-color","#aeb2bc");
            $(".school .contents_right").css("background-color","rgba(174,178,188,0.25)");
            $(".school .news .new").css("background-color","#515665");
            $(".school .fullbanner").css("background-image", "url(../img/ravenclaw/school_banner.jpg)");
            $(".school .pg4_bg").css("background-color","rgba(174,178,188,0.25)");
            $(".school .sec3").css("background-image", "url(../img/ravenclaw/sec3_bg.jpg)");

            /*study*/
            // $(".study .sec1").css("background-image", "url(../img/ravenclaw/study_sec1.jpg)");
            $(".study .sec2").css("background-color","#515665");
            $(".study .contents_right").css("background-color","rgba(174, 178, 188, 0.25)");
            $(".study .option_wrap #opt_line2").css("background-color","#AEB2BC");
            $(".study #snitch").css("background-image", "url(../img/ravenclaw/golden_snitch.jpg)");
            $(".study .contents_right .sec3_sub span p").css("color","#515665");
            $(".study .seat_active div").css("background-color","#515665 !important");
            $(".study .prof_seat").css("background-color","rgba(174, 178, 188, 0.25)").css("color","#515665");
            $(".study .fullbanner").css("background-image", "url(../img/ravenclaw/study_banner.jpg)");
            $(".study #herb").css("background-color","#ECEDEF");
            $(".study #flight").css("background-color","#AEB2BC");
            $(".study #potion").css("background-color","#DEE2EA");
            $(".study #stargaze").css("background-color","#98A0B8");
            $(".study #jump").css("background-color","#515665");
            $(".study #transform").css("background-color","#BAC0D3");

            /*library*/
            // $(".library .sec1").css("background-image", "url(../img/ravenclaw/lib_sec1.png)");
            $(".library .sec2, .library .arr_container, .library .pg4_bg").css("background-color","rgba(174, 178, 188, 0.25)");
            $(".library #youmay").attr("src", "../img/ravenclaw/youmay.png");
            $(".library .book_open").css("background-color","#515665");
            $(".library .fullbanner").css("background-image", "url(../img/ravenclaw/library_banner.png)");

            /*map*/
            // $(".map .sec1").css("background-image", "url(../img/ravenclaw/map_sec1.jpg)");
            $(".map .left_text p").css("color", "#515665");
            $(".map .contents_right").css("background-image", "url(../img/ravenclaw/rav_marauders.svg)");
            $(".map .contents_right").css("background-color", "rgba(174,178,188,0.2)");
        break;

        case "huf":
            /*main*/
            $(".bg_up, .bg_down, .sec3").css("background-color", "#635d56");
            $(".sec5").css("background-color", "#bcb7ae");
            $(".sec5_bg").css("background-image", "url(../img/hufflepuff/sec5_bg.png)");
            $(".pg3_bg").css("background-color", "#bcb7ae");
            $(".pg3_1").css("background-image", "url(../img/gif/huf1.gif)");
            $(".pg3_2 img").attr("src", "../img/gif/huf2.gif");
            $(".sec3 li").css("color", "#BCB7AE");
            // $(".main .sec1").css("background-image", "url(../img/hufflepuff/main_sec1.jpg)");

            /*school*/
            // $(".school .sec1").css("background-image", "url(../img/hufflepuff/school_sec1.jpg)");
            $(".school .arr_container").css("background-color","#bcb7ae");
            $(".school .contents_right").css("background-color","rgba(188,183,174,0.25)");
            $(".school .news .new").css("background-color","#635d56");
            $(".school .fullbanner").css("background-image", "url(../img/hufflepuff/school_banner.jpg)");
            $(".school .pg4_bg").css("background-color","rgba(188,183,174,0.25)");
            $(".school .sec3").css("background-image", "url(../img/hufflepuff/sec3_bg.jpg)");

            /*study*/
            // $(".study .sec1").css("background-image", "url(../img/hufflepuff/study_sec1.jpg)");
            $(".study .sec2").css("background-color","#635D56");
            $(".study .contents_right").css("background-color","rgba(188, 183, 174, 0.25)");
            $(".study .option_wrap #opt_line2").css("background-color","#BCB7AE");
            $(".study #snitch").css("background-image", "url(../img/hufflepuff/golden_snitch.jpg)");
            $(".study .contents_right .sec3_sub span p").css("color","#635D56");
            $(".study .seat_active div").css("background-color","#635D56 !important");
            $(".study .prof_seat").css("background-color","rgba(188, 183, 174, 0.25)").css("color","#635D56");
            $(".study .fullbanner").css("background-image", "url(../img/hufflepuff/study_banner.jpg)");
            $(".study #herb").css("background-color","#F2F0EC");
            $(".study #flight").css("background-color","#BCB7AE");
            $(".study #potion").css("background-color","#DEDCD7");
            $(".study #stargaze").css("background-color","#9D948A");
            $(".study #jump").css("background-color","#635D56");
            $(".study #transform").css("background-color","#BCB6AE");

            /*library*/
            // $(".library .sec1").css("background-image", "url(../img/hufflepuff/lib_sec1.png)");
            $(".library .sec2, .library .arr_container, .library .pg4_bg").css("background-color","rgba(188, 183, 174, 0.25)");
            $(".library #youmay").attr("src", "../img/hufflepuff/youmay.png");
            $(".library .book_open").css("background-color","#635D56");
            $(".library .fullbanner").css("background-image", "url(../img/hufflepuff/library_banner.png)");

            /*map*/
            // $(".map .sec1").css("background-image", "url(../img/hufflepuff/map_sec1.jpg)");
            $(".map .left_text p").css("color", "#635d56");
            $(".map .contents_right").css("background-image", "url(../img/hufflepuff/huf_marauders.svg)");
            $(".map .contents_right").css("background-color", "rgba(188,183,174,0.2)");
        break;

        case "sly":
            /*main*/
            $(".bg_up, .bg_down, .sec3").css("background-color", "#5f5f54");
            $(".sec5").css("background-color", "#BCBCAE");
            $(".sec5_bg").css("background-image", "url(../img/slytherin/sec5_bg.png)");
            $(".pg3_bg").css("background-color", "#BCBCAE");
            $(".pg3_1").css("background-image", "url(../img/gif/sly1.gif)");
            $(".pg3_2 img").attr("src", "../img/gif/sly2.gif");
            $(".sec3 li").css("color", "#BCBCAE");
            // $(".main .sec1").css("background-image", "url(../img/slytherin/main_sec1.jpg)");

            /*school*/
            // $(".school .sec1").css("background-image", "url(../img/slytherin/school_sec1.jpg)");
            $(".school .arr_container").css("background-color","#bcbcae");
            $(".school .contents_right").css("background-color","rgba(188,188,174,0.25)");
            $(".school .news .new").css("background-color","#5f5f54");
            $(".school .fullbanner").css("background-image", "url(../img/slytherin/school_banner.jpg)");
            $(".school .pg4_bg").css("background-color","rgba(188,188,174,0.25)");
            $(".school .sec3").css("background-image", "url(../img/slytherin/sec3_bg.jpg)");

            /*study*/
            // $(".study .sec1").css("background-image", "url(../img/slytherin/study_sec1.jpg)");
            $(".study .sec2").css("background-color","#5F5F54");
            $(".study .contents_right").css("background-color","rgba(188, 188, 174, 0.25)");
            $(".study .option_wrap #opt_line2").css("background-color","#BCBCAE");
            $(".study #snitch").css("background-image", "url(../img/slytherin/golden_snitch.jpg)");
            $(".study .contents_right .sec3_sub span p").css("color","#5F5F54");
            $(".study .seat_active div").css("background-color","#5F5F54 !important");
            $(".study .prof_seat").css("background-color","rgba(188, 188, 174, 0.25)").css("color","#5F5F54");
            $(".study .fullbanner").css("background-image", "url(../img/slytherin/study_banner.jpg)");
            $(".study #herb").css("background-color","#EEEEEB");
            $(".study #flight").css("background-color","#C6C6BA");
            $(".study #potion").css("background-color","#E1E1DA");
            $(".study #stargaze").css("background-color","#AAAA93");
            $(".study #jump").css("background-color","#5F5F54");
            $(".study #transform").css("background-color","#CECEB6");

            /*library*/
            // $(".library .sec1").css("background-image", "url(../img/slytherin/lib_sec1.png)");
            $(".library .sec2, .library .arr_container, .library .pg4_bg").css("background-color","rgba(188, 188, 174, 0.25)");
            $(".library #youmay").attr("src", "../img/slytherin/youmay.png");
            $(".library .book_open").css("background-color","#5F5F54");
            $(".library .fullbanner").css("background-image", "url(../img/slytherin/library_banner.png)");

            /*map*/
            // $(".map .sec1").css("background-image", "url(../img/slytherin/map_sec1.jpg)");
            $(".map .left_text p").css("color", "#5f5f54");
            $(".map .contents_right").css("background-image", "url(../img/slytherin/sly_marauders.svg)");
            $(".map .contents_right").css("background-color", "rgba(188,188,174,0.2)");
        break;
    }
}



/*nav sub*/
$(".nav_wrapper li").click(function(){
    $(".nav_wrapper li, .nav_sub li").removeClass("colored");
    $(".nav_sub").css("display","none");

    var nav_text = $(this).text();
    $(this).addClass("colored");
    $("#login").addClass("colored");
    $(this).css("opacity","1");
    $(".nav_main li").not(".colored, .nav_sub li").animate({opacity: "0.3"},600);

    switch(nav_text){
        case "학교소개":
            $(".school").css("display","block");
            $(".school li").addClass("colored");
            $(".school li:nth-child(1)").css("animation","up 0.7s forwards");
            $(".school li:nth-child(2)").css("animation","up 0.7s 0.3s forwards");
            $(".school li:nth-child(3)").css("animation","up 0.7s 0.6s forwards");
            break;

        case "수강신청":
            $(".study").css("display","block");
            $(".study li").addClass("colored");
            $(".study li:nth-child(1)").css("animation","up 0.7s forwards");
            $(".study li:nth-child(2)").css("animation","up 0.7s 0.3s forwards");
            $(".study li:nth-child(3)").css("animation","up 0.7s 0.6s forwards");
            break;

        case "도서관":
            $(".library").css("display","block");
            $(".library li").addClass("colored");
            $(".library li:nth-child(1)").css("animation","up 0.7s forwards");
            $(".library li:nth-child(2)").css("animation","up 0.7s 0.3s forwards");
            $(".library li:nth-child(3)").css("animation","up 0.7s 0.6s forwards");
            break;

        case "오시는길":
            //
            break;
    }
});



/*nav input typing*/
$(".nav_input input").keyup(function(){
    var input_text = $(this).val();
    //console.log(input_text);
    $(".nav_input input").css("color","#777");
    if(input_text != ""){
        $(".nav_input i").attr("class","las la-times");
    }else{
        $(".nav_input i").attr("class","las la-angle-right");
    }
});



var click_text;
var result_text;

$(".nav_spell span").click(function(){
    click_text = $(this).text();
    result_text = click_text.substring(1);
    $(".nav_input input").val(result_text);
    $(".nav_input i").attr("class","las la-times");
    spell_check(result_text);
});

$(".nav_input").keydown(function(key){
    if(key.keyCode == 13){
        result_text = $(".nav_input input").val();
        spell_check(result_text);
    }
});

$(".nav_input i").click(function(){
    if($(".nav_input i").hasClass("la-times")){
        $(".nav_input input").css("color","#777");
        $(".nav_input input").val("");
        $(".nav_input i").attr("class","las la-angle-right");
    }
});



/*spell*/
function spell_check(t){
    if(ses_dorm != null){
        if(t == "녹스"){
            sessionStorage.setItem("ses_spell", t); // 녹스 여부 확인해서 sec1 이미지 경로 분리

            /*main*/
            $(".nav_input input").css("color","#777");
            $(".bg_up, .bg_down, .sec3").css("background-color","#333");
            $(".sec5").css("background-color","#ccc");
            $(".sec5_bg").css("background-image","url(../img/muggle/sec5_img.png)");
            $(".pg3_bg").css("background-color","#d8d8d8");
            $(".sec3 li").css("color","#777");
            $(".pg3_1, .pg3_2 img").addClass("gray");
            $(".nav_input input").val("'" + t + "'" + " 주문이 적용되었습니다");
            $("#dorm_1").css("background-image", "url(../img/muggle/sly_sec6_img.png)");
            $("#dorm_2").css("background-image", "url(../img/muggle/grf_sec6_img.png)");
            $("#dorm_3").css("background-image", "url(../img/muggle/rav_sec6_img.png)");
            $("#dorm_4").css("background-image", "url(../img/muggle/huf_sec6_img.png)");
            $(".main .sec1").css("background-image","url(../img/muggle/main_sec1.jpg)");

            /*school*/
            dorm_separate(t);
            $(".school .sec1").addClass("gray");
            $(".school .arr_container").css("background-color","#aaa");
            $(".school .contents_right").css("background-color","rgba(245,245,245,1)");
            $(".school .news .new").css("background-color","#777");
            $(".school .fullbanner").css("background-image", "url(../img/muggle/school_banner.png)");
            $(".school .pg4_bg").css("background-color","rgba(245,245,245,1)");
            $(".school .sec3").addClass("gray");
            $(".school .gif_wrap .shape_rectangle").addClass("gray");

            /*study*/
            $(".study .sec1").addClass("gray");
            $(".study .sec2").css("background-color","#333");
            $(".study .left_img").addClass("gray");
            $(".study .contents_right").css("background-color","rgba(245,245,245,1)");
            $(".study .option_wrap #opt_line2").css("background-color","#777");
            $(".study #snitch").addClass("gray");
            $(".study .num_img").addClass("gray");
            $(".study .contents_right .sec3_sub span p").css("color","#333");
            $(".study .seat_active div").css("background-color","#333 !important");
            $(".study .fullbanner").css("background-image", "url(../img/muggle/study_banner.jpg)");
            $(".study #herb").css("background-color","#f5f5f5");
            $(".study #flight").css("background-color","#c0c0c0");
            $(".study #potion").css("background-color","#d8d8d8");
            $(".study #stargaze").css("background-color","#aaa");
            $(".study #jump").css("background-color","#333");
            $(".study #transform").css("background-color","#888");
            $(".study .gif_wrap .shape_rectangle").addClass("gray");

            /*library*/
            $(".library .sec1").addClass("gray");
            $(".library .sec2, .library .arr_container, .library .pg4_bg").css("background-color","rgba(119, 119, 119, 0.25)");
            $(".library #youmay").attr("src", "../img/muggle/youmay.png");
            $(".library .book_open").css("background-color","#333");
            $(".library .fullbanner").css("background-image", "url(../img/muggle/library_banner.png)");
            $(".library .sec2 img, .library .book img, .library .gif_wrap .shape_rectangle").addClass("gray");

            /*map*/
            $(".map .sec1, .map .contents_right").addClass("gray");
            $(".map .left_text p").css("color", "#333");
            $(".map .contents_right").css("background-color","rgba(245,245,245,1)");


            //close
            setTimeout(function(){
                $("body").css("overflow-y", "");
                $(".nav_spell").css("display", "none");
                $(".nav_bg").css("animation", "non_navbg 0.6s forwards");
                setTimeout(function () {
                    $(".nav_bg").css("visibility", "hidden");
                    $(".nav_input input").val("");
                },600);
            },1400);
        }else if(t == "루모스"){
            dorm_separate(ses_dorm);
            $(".nav_input input").css("color","#777");
            $(".nav_input input").val("'" + t + "'" + " 주문이 적용되었습니다");
            $(".pg3_1, .pg3_2 img").removeClass("gray");
            $("#dorm_1").css("background-image", "url(../img/sly_sec6_img.png)");
            $("#dorm_2").css("background-image", "url(../img/grf_sec6_img.png)");
            $("#dorm_3").css("background-image", "url(../img/rav_sec6_img.png)");
            $("#dorm_4").css("background-image", "url(../img/huf_sec6_img.png)");
            //close
            setTimeout(function(){
                $("body").css("overflow-y", "");
                $(".nav_spell").css("display", "none");
                $(".nav_bg").css("animation", "non_navbg 0.6s forwards");
                setTimeout(function () {
                    $(".nav_bg").css("visibility", "hidden");
                    $(".nav_input input").val("");
                },600);
            },1400);
        }else{
            $(".nav_input input").val("주문을 외웠지만 아무 반응도 일어나지 않았습니다");
            $(".nav_input input").css("color","#BF2625");
            $(".nav_input span").css("display","none");
            $("#spell_result").css("display","inline-block");
        }
    }else{
        $(".nav_input input").val("주문을 외웠지만 아무 반응도 일어나지 않았습니다");
        $(".nav_input input").css("color","#BF2625");
        $(".nav_input span").css("display","none");
        $("#spell_result").css("display","inline-block");
    }
}


/*messenger icon blink effect*/
if($(".ft_container2 img").attr("src") == "../img/icon_owl_active.png"){
    setInterval(function(){
        $(".ft_container2 img").fadeOut(500).fadeIn(1000);
    }, 50);
}



/*menu icon hover*/
$(".header_menu").hover(function(){
    $("#menu1").css("left","calc(100% - 13px)");
    $("#menu3").css("right", "calc(100% - 13px)");
}, function(){
    $("#menu1").css("left","0%");
    $("#menu3").css("right", "0%");
});


/*menu icon click(nav)*/
$(".header_menu").click(function(){
    //var rightValue = (parseInt($(".nav_wrapper").css("right")) - (navWidth)) + "px";
    $(".nav_wrapper").animate({right: 0},600);
});


/*spell icon click*/
$("#spell").click(function(){
    $(".nav_spell").css("display","block");
    $(".nav_bg").css("visibility","visible");
    $(".nav_bg").css("animation","navbg 0.7s forwards");
    $("body").css("overflow-y","hidden");

    $(".nav_spell span").css("display","inline-block");
    $(".nav_input").css("display","block");
    $(".nav_input").css("animation","up 0.7s 0.5s forwards");
    $(".nav_spell span:nth-last-child(4)").css("animation","up 0.7s 1s forwards");
    $(".nav_spell span:nth-last-child(3)").css("animation","up 0.7s 1.3s forwards");
    $(".nav_spell span:nth-last-child(2)").css("animation","up 0.7s 1.6s forwards");
    $(".nav_spell span:last-child").css("animation","up 0.7s 1.9s forwards");
});

$(".nav_bg").click(function() {
    $("body").css("overflow-y", "");
    $(".nav_spell").css("display", "none");
    $(".nav_bg").css("animation", "non_navbg 0.6s forwards");
    setTimeout(function () {
        $(".nav_bg").css("visibility", "hidden");
    },600);
});


/*nav sub close*/
$("#nav_close").click(function(){
    $(".nav_wrapper").animate({right: "-50%"},600);
});



/*logo click (top button)*/
$("footer img:nth-child(2)").click(function(){
    $("html").stop().animate({scrollTop : 0}, 300);
});



/*home*/
$("#header img:nth-child(1)").click(function(){
    $(location).attr("href","../html/main.html");
});



/*alert close*/
$(".alert_container img").click(function(){
    $(".alert_container, .alert_bg").css("display","none");
    $("body").css("overflow-y","");
});



$(".sec1").mousemove(function () {
    $("#mybgm")[0].play();
});


/*logout*/
function logout(){
    sessionStorage.clear();
    document.location.href="./main.html";
}



/*menu separate*/
$(".nav_main li").not(".study .nav_main li").not(".library .nav_main li").click(function(){
    var nav_parent = $(this).parent("ul").attr("class");
    var nav_this = $(this).text();
    // console.log(nav_this);

    if(ses_id == null){
        if($(this).attr("id") == "login"){
            document.location.href="./login.html";
        }else{
            $(".alert_container span").text("입장 불가");
            $(".alert_content img").attr("src","../img/alert_x.png");
            $(".alert_container p").html("해당 페이지에 입장하기 해서는 먼저 로그인하셔야 합니다.");
            $(".alert_bg").css("display","block");
            $(".alert_container").css("display","block");
            $("body").css("overflow-y","hidden");
        }
    }else{
        var this_text = $(this).text();
        if(nav_parent.indexOf("school") != -1){
            window.location.href="./school.html?submenu=" + this_text;
        }else if(nav_parent.indexOf("study") != -1){
            window.location.href="./study.html?submenu=" + this_text;
        }else if(nav_parent.indexOf("library") != -1) {
            window.location.href = "./library.html?submenu=" + this_text;
        }else if(nav_this == "오시는 길"){
            window.location.href = "./map.html";
        }else if($(this).attr("id") == "login"){
            $(".alert_container span").text("입장 불가");
            $(".alert_content img").attr("src","../img/alert_x.png");
            $(".alert_container p").html("해당 페이지에 입장하기 해서는 먼저 &nbsp;" +
                "<a id='alert_a' onclick='logout()' style='color: #4D65A7; font-family: square_r; font-weight: 600'>로그아웃</a> &nbsp;하셔야 합니다.");
            $(".alert_bg").css("display","block");
            $(".alert_container").css("display","block");
            $("body").css("overflow-y","hidden");
        }
    }
});


$(".school .nav_map").click(function(){ // 오시는길
    if(ses_id != null){
        document.location.href="./map.html";
    }
});



function login_open() {
    current_page = "login";
    $(".join_form .log_input input").val("");
    $(".join_form .log_input input:radio[name='gender'], .join_form .log_input input:checkbox[name='logcheck'], .join_form .log_input input:radio[name='born']")
        .removeAttr("checked");
    $(".join_form .log_line_active").css("width","0%");
    $(".join_form").animate({left: "0%"}, 500, "easeInCubic");
    $(".log_sec2").css("animation", "log_right 0.6s forwards");

    $(".login_form .log_btn span, .join_form .log_btn span").text("회원가입은 이곳으로");
    $(".login_form").animate({left: "0%"}, 500, "easeInCubic");
    setTimeout(function () {
        $(".join_form").css("display", "none");
        $(".login_form").css("display", "block");

        if (logPw == null || logPw == null || logPw == null || logPw == null) { //alert를 default로 돌려놓기
            $(".alert_content img").attr("src", "../img/alert_x.png");
            $(".alert_container span").text("입장 불가");
            $("#alert_close").css("display", "block");
            $(".alert_container i").css("display", "none");
            $(".alert_container p").text("비밀번호가 맞지 않습니다");
        }else{
            access_granted(current_page);
        }
    }, 400);
}


$(".pw_anticon").hover(function(){
    $(".pw_anticon").attr("src","../img/anticon_hover.svg");
}, function(){
    $(".pw_anticon").attr("src","../img/anticon.svg");
});

$("#gry_ant").click(function(){
    var gry_input = $(this).siblings("input");
    var gry_context = '뚱뚱한 여인이 속삭입니다.'+' "정답은 [캐풋 드레이코니스]야."';
    gry_input.attr("placeholder",gry_context);
});

$("#rav_ant").click(function(){
    var rav_input = $("#rav_answer");
    // console.log(rav_input);
    var rav_context = 'A. 루나 러브굿의 쪽지 : '+'[원에는 시작점이 없다]';
    rav_input.attr("placeholder",rav_context);
});

var huf_interval;
$("#huf_ant").click(function(){
    var huf_input = $("#huf_six");
    huf_interval = setInterval(function(){
        $("#huf_six").fadeOut(400).fadeIn(500);
    }, 50);
});

$("#sly_ant").click(function(){
    var sly_input = $(this).siblings("input");
    var sly_context = '말포이가 소리칩니다. '+' "넌 [순수혈통]도 아니면서 왜 여기 있어?"';
    sly_input.attr("placeholder",sly_context);
});