
export function init() {
    var svgPaises = document.querySelectorAll("#paises > *");
    function removeAllOn() {
        svgPaises.forEach(function(el) {
            el.classList.remove("on");
        });
    }
    function addOnFromPais(el) {
        var paisId = el.getAttribute("id");
        if (paisId != null) {
            el.classList.add("on");
            $('#info-box').css('display','block');
            $('#info-box').html(el.getAttribute("data-info"));
        }
    }

    svgPaises.forEach(function(el) {
        el.addEventListener("mouseenter", function() {
            addOnFromPais(el);
        });
        el.addEventListener("mouseleave", function() {
            removeAllOn();
        });
        el.addEventListener("touchstart", function() {
            removeAllOn();
            addOnFromState(el);
        });
    });

    $(document).mousemove(function(e) {
        $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
        $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
    }).mouseover();

    $("path").mouseleave(function(e) {
        $('#info-box').css('display','none');
    });
    var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(ios) {
        $('a').on('click touchend', function() {
            var link = $(this).attr('href');
            window.open(link,'_blank');
            return false;
        });
    }
    console.clear()
    console.log("yow")
}