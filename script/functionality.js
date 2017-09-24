var count_euro = 0, count_gbp = 0, count_usd = 0, count_cad = 0;
var count_euro_div_up = 0, count_euro_div_down = 0,
    count_gbp_div_up = 0, count_gbp_div_down = 0,
    count_cad_div_up = 0, count_cad_div_down = 0,
    count_usd_div_up = 0, count_usd_div_down = 0;
var click_counter = 0, clicker = 0;

// var goodButton = '<button id="good" class="good">Verh</button>', badButton = '<button id="bad">Vniz</button>';
var good = 0, bad = 0;
var i = 0, j = 4;
var divs = 0;

$("#reset_arrows").click( function () {
    location.reload();
});

function up_button() {
    $(document).on('click', '#up', function(e){
        $('.Main').append(goodButton);
        good++;
        $('#good').attr('id', i);
        i++;
        if(good === 3) {
            $('#up').hide();
        }
        control_value_good();
    });
}

up_button();


function down_button() {
    $(document).on('click', '#down', function(e){
        $('.Main').append(badButton);
        bad++;
        $('#bad').attr('id', j);
        j++;
        if(bad === 3) {
            $('#down').hide();
        }
        control_bad_value();
    });
}

down_button();

// $(document).click( function () {
//     if(count_euro == 3) {
//         $("#button_up_eur").hide();
//         $("#button_down_eur").hide();
//     }
//
//     if(count_euro_div_up == 3) {
//         $("#eur").addClass("money_up");
//     } else if(count_euro_div_down == 3) {
//         $("#eur").addClass("money_down");
//     }
//
//     if(count_gbp == 3) {
//         $("#button_up_gbp").hide();
//         $("#button_down_gbp").hide();
//     }
//
//     if(count_gbp_div_up == 3) {
//         $("#gbp").addClass("money_up");
//     } else if(count_gbp_div_down == 3) {
//         $("#gbp").addClass("money_down");
//     }
//
//     if(count_usd == 3) {
//         $("#button_up_usd").hide();
//         $("#button_down_usd").hide();
//     }
//
//     if(count_usd_div_up == 3) {
//         $("#usd").addClass("money_up");
//     } else if(count_usd_div_down == 3) {
//         $("#usd").addClass("money_down");
//     }
//
//     if(count_cad == 3) {
//         $("#button_up_cad").hide();
//         $("#button_down_cad").hide();
//     }
//
//     if(count_cad_div_up == 3) {
//         $("#cad").addClass("money_up");
//     } else if(count_cad_div_down == 3) {
//         $("#cad").addClass("money_down");
//     }

//----------------------------------------------------------------------------------------------------------------------

    // $(".arrow-up_eur").click(function () {
    //     $(this).replaceWith("<div class='arrow-down_eur'></div>");
    //     count_euro_div_up --;
    //     count_euro_div_down ++;
    //     console.clear();
    //     console.log("Euro divs " + count_euro);
    //     console.log("Euro div up " + count_euro_div_up);
    //     console.log("Euro div down " + count_euro_div_down);
    // });



// });
//

//
// $("#button_up_eur").click( function () {
//     var $arrow_up_eur = $( "<div class='arrow-up_eur'></div>" );
//     $(".euro").append($arrow_up_eur);
//     count_euro += 1;
//     count_euro_div_up += 1;
//     console.clear();
//     console.log("Euro Divs" + count_euro);
//     console.log("Euro divs up " + count_euro_div_up);
//     console.log("Euro div down: " + count_euro_div_down);
// });
//
// $("#button_down_eur").click( function () {
//     var $arrow_down_eur = $( "<div class='arrow-down_eur'></div>" );
//     $(".euro").append($arrow_down_eur);
//     count_euro += 1;
//     count_euro_div_down += 1;
//     console.clear();
//     console.log("Euro divs " + count_euro);
//     console.log("Euro divs down " + count_euro_div_down);
//     console.log("Euro divs up: " + count_euro_div_up);
// });
//
// $("#button_up_gbp").click( function () {
//     var $arrow_up_gbp = $( "<div class='arrow-up_gbp'></div>" );
//     $(".pound").append($arrow_up_gbp);
//     count_gbp += 1;
//     count_gbp_div_up += 1;
// });
//
// $("#button_down_gbp").click( function () {
//     var $arrow_down_gbp = $( "<div class='arrow-down_gbp'></div>" );
//     $(".pound").append($arrow_down_gbp);
//     count_gbp += 1;
//     count_gbp_div_down += 1;
// });
//
// $("#button_up_usd").click( function () {
//     var $arrow_up_usd = $( "<div class='arrow-up_usd'></div>" );
//     $(".dollar").append($arrow_up_usd);
//     count_usd += 1;
//     count_usd_div_up += 1;
// });
//
// $("#button_down_usd").click( function () {
//     var $arrow_down_usd = $( "<div class='arrow-down_usd'></div>" );
//     $(".dollar").append($arrow_down_usd);
//     count_usd += 1;
//     count_usd_div_down += 1;
// });
//
// $("#button_up_cad").click( function () {
//     var $arrow_up_cad = $( "<div class='arrow-up_cad'></div>" );
//     $(".canada").append($arrow_up_cad);
//     count_cad += 1;
//     count_cad_div_up += 1;
// });
//
// $("#button_down_cad").click( function () {
//     var $arrow_down_cad = $( "<div class='arrow-down_cad'></div>" );
//     $(".canada").append($arrow_down_cad);
//     count_cad += 1;
//     count_cad_div_down += 1;
// });