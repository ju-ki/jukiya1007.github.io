$(function () {
    $(".top-header").fadeIn(2000);
})


$(function () {
    $(".home-button").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 400);
    });

    $(".profile-button").click(function () {
        let position = $(".profile").position().top;
        $("body, html").animate({
            scrollTop: position
        }, 400, "linear");
    });

    $(".skill-button").click(function () {
        let position = $(".skill").position().top;
        $("body, html").animate({
            scrollTop: position
        }, 400, "linear");
    });

    $(".blog-button").click(function () {
        let position = $(".blog").position().top;
        $("body, html").animate({
            scrollTop: position
        }, 400, "linear");
    });

    $(".contact-button").click(function () {
        let position = $(".contact").position().top;
        $("body, html").animate({
            scrollTop: position
        }, 400, "linear");
    });
});


$(function () {
    $(".twitter-icon").on("mouseover", function () {
        $(".twitter-icon").find("i").css({
            "color": "blue"
        })
    });

    $(".twitter-icon").on("mouseout", function () {
        $(".twitter-icon").find("i").css({
            "color": ""
        })
    });

    $(".github-icon").on("mouseover", function () {
        $(".github-icon").find("i").css({
            "color": "blue"
        })
    });

    $(".github-icon").on("mouseout", function () {
        $(".github-icon").find("i").css({
            "color": ""
        })
    })
})