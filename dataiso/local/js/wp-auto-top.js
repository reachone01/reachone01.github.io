function xiay(){
window.scrollBy(0,window.innerHeight-80);
}
function shangy(){
window.scrollBy(0,-window.innerHeight+80);
}

jQuery(document).ready(function($) {
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body");
    $("#shang").mouseover(function() {
        up()
    }).mouseout(function() {
        clearTimeout(fq)
    }).click(function() {
        $body.animate({
            scrollTop: 0
        },
        400)
    });
    $("#xia").mouseover(function() {
        dn()
    }).mouseout(function() {
        clearTimeout(fq)
    }).click(function() {
        $body.animate({
            scrollTop: $(document).height()
        },
        400)
    });
    $("#comt").click(function() {
        $body.animate({
            scrollTop: $("#comments").offset().top
        },
        400)
    });
});
function up() {
    $wd = $(window);
    $wd.scrollTop($wd.scrollTop() - 1);
    fq = setTimeout("up()", 50)
};
function dn() {
    $wd = $(window);
    $wd.scrollTop($wd.scrollTop() + 1);
    fq = setTimeout("dn()", 50)
}; 