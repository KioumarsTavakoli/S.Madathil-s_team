document.addEventListener("DOMContentLoaded", () => {
    const words = ["Data", "Machine Learning", "Oral sciences"];
    const colors = ["#0c9799", "#ffaa00", "#ff006f"];
    const slidingText = document.querySelector(".sliding-text");
    
    let index = 0;

    setInterval(() => {
        index = (index + 1) % words.length;
        slidingText.innerHTML = words[index];
        slidingText.style.color = colors[index];
    }, 2000); // Change every 2 seconds
    
    const hoverContainers = document.querySelectorAll('.jelly,.cohs');

    hoverContainers.forEach(hoverContainer => {
        hoverContainer.addEventListener('mousemove', (e) => {
            const rect = hoverContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            hoverContainer.style.setProperty('--mouse-x', `${x}px`);
            hoverContainer.style.setProperty('--mouse-y', `${y}px`);
            
        });

    });
});

$(".imges img").on("click",function(){
    $(".member-detail").fadeIn()
    var id = $(this).attr("id")
    $(".member-detail ."+ id).removeClass("disactive")
    $("#close").data("current-id", id);  
    $(".member-detail").data("current-id", id); 

})
$(".profile #close").on("click",function(){
    var id = $(this).data("current-id");
    $(".member-detail").fadeOut()
    setTimeout(() => {
        $(".member-detail ."+ id).addClass("disactive")
    }, 1000);

})
$(".member-detail").on("click", function(e) {
    if (e.target === this) {
        var id = $(this).data("current-id");
        $(".member-detail").fadeOut()
        setTimeout(() => {
            $(".member-detail ."+ id).addClass("disactive")
        }, 1000);
    }})
    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop();
        $('.clipped').css('background-position-y', (-10-(scrollPosition * 0.5)) + 'px');
    });
    $(document).ready(function() {
        // Append custom cursor element to the body
        $('body').append('<div class="custom-cursor"><div class="cursor-text"><p>More info</p></div></div>');
        var $customCursor = $('.custom-cursor');

        // Track mouse movement to update the position of the custom cursor
        $(document).mousemove(function(e) {
            $customCursor.css({
                left: e.pageX - 40 + 'px', // Adjust the position to center the cursor
                top: e.pageY - 60 + 'px'  // Adjust the position to center the cursor
            });
        });

        // Show custom cursor on hover and scale it up
        $('.team-member img').hover(function() {
            $customCursor.fadeIn(150);
        }, function() {
            $customCursor.fadeOut(150);
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
       
    });
    