$(".pchoosenumber").hide();
$(".purple1_1").hide();
$(".purple1_2").hide();
$(".bchoosenumber").hide();
$(".blue7prompt").hide();
$(".blue8prompt").hide();
$(".rchoosenumber").hide();
$(".red5prompt").hide();
$(".red6prompt").hide();
$(".gchoosenumber").hide();
$(".green2prompt").hide();
$(".green4prompt").hide();
$(".warning").hide();
$(".result").hide();
$(".reset").hide();
$(".first").hide();
$(".choosenumber").hide();


$(".startgame").mouseover(function() {
    $(".startgame").css("font-size", "40px");
$(".startgame").css("background", "#facdf7");
});
$(".startgame").mouseleave(function() {
    $(".startgame").css("font-size", "30px");
    $(".startgame").css("background","#edabe9");

});
$(".startgame").click(function() {
    $(".startscreen").hide();
    $(".first").show();
    $(".choosenumber").show();

});
/*first*/
$(".purple").mouseover(function() {
    $(".purple").css("background", "#dfd3f5");

});
$(".purple").mouseleave(function() {
    $(".purple").css("background", "#d1bcf5");
});

$(".purple1").mouseover(function() {
    $(".purple1").css("background", "#dfd3f5");
});
$(".purple1").mouseleave(function() {
    $(".purple1").css("background", "#d1bcf5");
});

$(".purple2").mouseover(function() {
    $(".purple2").css("background", "#dfd3f5");
});
$(".purple2").mouseleave(function() {
    $(".purple2").css("background", "#d1bcf5");
});

$(".blue").mouseover(function() {
    $(".blue").css("background", "#b6d7fc");
});
$(".blue").mouseleave(function() {
    $(".blue").css("background", "#8dbbf0");
});

$(".blue8").mouseover(function() {
    $(".blue8").css("background", "#b6d7fc");
});
$(".blue8").mouseleave(function() {
    $(".blue8").css("background", "#8dbbf0");
});

$(".blue7").mouseover(function() {
    $(".blue7").css("background", "#b6d7fc");
});
$(".blue7").mouseleave(function() {
    $(".blue7").css("background", "#8dbbf0");
});

$(".red").mouseover(function() {
    $(".red").css("background", "#fabbbb");
});
$(".red").mouseleave(function() {
    $(".red").css("background", "#ffa3a3");
});

$(".red5").mouseover(function() {
    $(".red5").css("background", "#fabbbb");
});
$(".red5").mouseleave(function() {
    $(".red5").css("background", "#ffa3a3");
});

$(".red6").mouseover(function() {
    $(".red6").css("background", "#fabbbb");
});
$(".red6").mouseleave(function() {
    $(".red6").css("background", "#ffa3a3");
});

$(".green").mouseover(function() {
    $(".green").css("background", "#d2f7d5");
});
$(".green").mouseleave(function() {
    $(".green").css("background", "#b3e3b6");
});

$(".green2").mouseover(function() {
    $(".green2").css("background", "#d2f7d5");
});
$(".green2").mouseleave(function() {
    $(".green2").css("background", "#b3e3b6");
});

$(".green4").mouseover(function() {
    $(".green4").css("background", "#d2f7d5");
});
$(".green4").mouseleave(function() {
    $(".green4").css("background", "#b3e3b6");
});

/*blue*/
$(".blue").click(function() {
    $(".bchoosenumber").show();
    $(".first").hide();
    $(".choosenumber").hide();

});

$(".blue8").click(function() {
    $(".bchoosenumber").hide();
    $(".blue8prompt").show();
});

$(".blue8submit").click(function() {

    let blueAdj = $(".blue8input").val();
    if (!blueAdj) {
        $(".warning").show();
    } else {
        $(".blue8prompt").hide();
        $(".warning").hide();
        $(".result").show();
        $(".result").text("The skies are " + blueAdj + ". The future is uncertain.");
        $(".reset").show();
    }
});

$(".blue7").click(function() {
    $(".bchoosenumber").hide();
    $(".blue7prompt").show();
});

$(".blue7submit").click(function() {

    let blueNum = $(".blue7num_input").val();
    let blueNoun = $(".blue7noun_input").val();
    if (!blueNum || !blueNoun) {
        $(".warning").show();
    } else {
        $(".warning").hide();
        $(".blue7prompt").hide();
        $(".result").show();
        $(".result").text("I see " + blueNum + " big " + blueNoun + " in your future.");
        $(".reset").show();
    }
});

/*purple*/
$(".purple").click(function() {
    $(".pchoosenumber").show();
    $(".first").hide();
    $(".choosenumber").hide();
});

$(".purple1").click(function() {
    $(".pchoosenumber").hide();
    $(".purple1_1").show();
});

$(".purple_adj_submit").click(function() {

    let purpleAdj = $(".purpleinput1").val();
    if (!purpleAdj) {
        $(".warning").show();
    } else {
        $(".purple1_1").hide();
        $(".warning").hide();
        $(".result").show();
        $(".result").text("Signs point to a very " + purpleAdj + " yes.");
        $(".reset").show();
    }
});

$(".purple2").click(function() {
    $(".pchoosenumber").hide();
    $(".purple1_2").show();
});
$(".purple_person_submit").click(function() {

    let purplePerson = $(".purpleinput2").val();
    if (!purplePerson) {
        $(".warning").show();
    } else {
        $(".purple1_2").hide();
        $(".warning").hide();
        $(".result").show();
        $(".result").text("Don't believe anything " + purplePerson + " says.");
        $(".reset").show();
    }
});

$(".red").click(function() {
    $(".rchoosenumber").show();
    $(".first").hide();
    $(".choosenumber").hide();
});

$(".red5").click(function() {
    $(".rchoosenumber").hide();
    $(".red5prompt").show();
});

$(".red5submit").click(function() {

    let red5Adj = $(".red5adj_input").val();
    let red5Noun = $(".red5noun_input").val();
    if (!red5Adj || !red5Noun) {
        $(".warning").show();
    } else {
        $(".red5prompt").hide();
        $(".warning").hide();
        $(".result").show();
        $(".result").text("Picture a/an " + red5Adj + " " + red5Noun + ". That is your answer.");
        $(".reset").show();
    }
});

$(".red6").click(function() {
    $(".rchoosenumber").hide();
    $(".red6prompt").show();
});
$(".red6submit").click(function() {

    let noun = $(".red6input").val();
    if (!noun) {
        $(".warning").show();
    } else {
        $(".red6prompt").hide();
        $(".warning").hide();
        $(".result").show();
        $(".result").text("You will find the answer in your " + noun + ".");
        $(".reset").show();
    }
});

$(".green").click(function() {
    $(".gchoosenumber").show();
    $(".first").hide();
    $(".choosenumber").hide();
});

$(".green2").click(function() {
    $(".gchoosenumber").hide();
    $(".green2prompt").show();
});

$(".green2submit").click(function() {

    let adj = $(".green2input").val();
    if (!adj) {
        $(".warning").show();
    } else {
        $(".green2prompt").hide();
        $(".warning").hide();
        $(".result").show();
        $(".result").text("Signs point to a very " + adj + " no.");
        $(".reset").show();
    }
});

$(".green4").click(function() {
    $(".gchoosenumber").hide();
    $(".green4prompt").show();
});
$(".green4submit").click(function() {
    let body = $(".green4input").val();
    if (!body) {
        $(".warning").show();
    } else {
        $(".green4prompt").hide();
        $(".warning").hide();
        $(".result").show();
        $(".result").text("What does your " + body + " tell you?");
        $(".reset").show();
    }

});

$(".reset").click(function() {
    location.reload();
});