function setActive(index) {
    const navigations = document.querySelectorAll('.navigation');

    navigations.forEach((nav, idx) => {
        if (idx === index) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
}

function animateWelcomeText() {
    const exprttText = document.getElementById('exprtt');
    const welcomeText = document.getElementById('welcomeText');
    const exprtt = exprttText.innerHTML;
    const welcome = welcomeText.innerHTML;
    welcomeText.innerHTML = '';
    exprttText.innerHTML = '';

    // EXRP metnini ekleme
    for (let i = 0; i < exprtt.length; i++) {
        setTimeout(() => {
            exprttText.innerHTML += exprtt[i];
        }, 100 * i); // Her harf iĂ§in 100ms aralÄ±kla ekleme yap
    }

    // EXRP metni bitince HoÅŸgeldin metnini ekleme
    setTimeout(() => {
        for (let i = 0; i < welcome.length; i++) {
            setTimeout(() => {
                welcomeText.innerHTML += welcome[i];
            }, 100 * i); // Her harf iĂ§in 100ms aralÄ±kla ekleme yap
        }
    }, 100 * exprtt.length); // EXRP metninin uzunluÄŸu kadar sonra baÅŸla
}
$(document).on('wheel', function(event) {
    if (event.originalEvent.deltaY > 0) {
        console.log('AÅŸaÄŸÄ± kaydÄ±rÄ±ldÄ±:', event.originalEvent.deltaY);
    } else {
        console.log('YukarÄ± kaydÄ±rÄ±ldÄ±:', event.originalEvent.deltaY);
    }
});

// Sayfa yĂ¼klendiÄŸinde animasyonlarÄ± baÅŸlat
$(document).ready(function() {
    animateWelcomeText();
});

$(document).ready(function() {
    // Intersection Observer ile `level` div'inin ekran iĂ§ine gĂ¶rĂ¼ndĂ¼ÄŸĂ¼nĂ¼ kontrol etmek
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // %50 ekran iĂ§inde gĂ¶rĂ¼nĂ¼yor olmalÄ±
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                console.log('`level` div ekran iĂ§inde gĂ¶rĂ¼ndĂ¼!');
                // Animasyonu baÅŸlat
                entry.target.style.animationPlayState = 'running';
            } else {
                console.log('`level` div ekran dÄ±ÅŸÄ±na Ă§Ä±ktÄ±!');

            }
        });
    }, options);

    var levelElement = document.querySelector('.level');
    if (levelElement) {
        // BaÅŸlangÄ±Ă§ta animasyonu durdur
        levelElement.style.animationPlayState = 'paused';
        observer.observe(levelElement);
    }




    $('#xanaxButton').click(function() {
        var imageUrl = $(this).attr('data-image');
        $('#modalImage').attr('src', imageUrl);
        $('#myModal').css('display', 'block');
    });

    // Kapatma dĂ¼ÄŸmesi tÄ±klama olayÄ±
    $('.close').click(function() {
        $('#myModal').css('display', 'none');
        $('#myModall').css('display', 'none');

    });

    $(window).click(function(event) {
        if (event.target.id === 'myModal') {
            $('#myModal').css('display', 'none');
        }
    });








    $('#dutbutton').click(function() {
        var imageUrl = $(this).attr('data-image');
        $('#modalImage').attr('src', imageUrl);
        $('#myModal').css('display', 'block');
    });

    $('#edizButton').click(function() {
        var imageUrl = $(this).attr('data-image');
        $('#modalImage').attr('src', imageUrl);
        $('#myModal').css('display', 'block');
    });

    $('#nahutabbutton').click(function() {
        var imageUrl = $(this).attr('data-image');
        $('#modalImage').attr('src', imageUrl); // Modal iĂ§indeki img src'sini ayarla
        $('#myModal').css('display', 'block'); // ModalÄ± gĂ¶rĂ¼nĂ¼r yap
    });

    $('#aw3rquebb').click(function() {
        var imageUrl = $(this).attr('data-image');
        $('#modalImage').attr('src', imageUrl); // Modal iĂ§indeki img src'sini ayarla
        $('#myModal').css('display', 'block'); // ModalÄ± gĂ¶rĂ¼nĂ¼r yap
    });

    $('#aw3rquebb').click(function() {
        var imageUrl = $(this).attr('data-image');
        $('#modalImage').attr('src', imageUrl); // Modal iĂ§indeki img src'sini ayarla
        $('#myModal').css('display', 'block'); // ModalÄ± gĂ¶rĂ¼nĂ¼r yap
    });


    $("#kural").click(function() {
        $("#kuralModal").css("display", "block");
    });

    $("#politika").click(function() {
        $("#politikaModal").css("display", "block");
    });

    $("#sart").click(function() {
        $("#sartModal").css("display", "block");
    });

    // Close butonlarÄ±na tÄ±klanÄ±ldÄ±ÄŸÄ±nda modallarÄ± kapatÄ±n
    $(".close").click(function() {
        $(this).closest(".modal").css("display", "none");
        $(this).closest(".modall").css("display", "none");


    });

    // Modalin dÄ±ÅŸÄ±na tÄ±klanÄ±ldÄ±ÄŸÄ±nda modallarÄ± kapatÄ±n
    $(window).click(function(event) {
        if ($(event.target).hasClass("modal")) {
            $(event.target).css("display", "none");
        }
        if ($(event.target).hasClass("modall")) {
            $(event.target).css("display", "none");
        }
    });


  $('#myButton').click(function() {
        // Belirtilen URL'yi aĂ§alÄ±m
        window.location.href = 'fivem://connect/q7glpz';
    });


});




document.querySelector('.header-class').style.overflowY = 'hidden';



document.getElementById("start").onclick = function() {
    window.location.href = "https://www.example.com"; // YĂ¶nlendirmek istediÄŸiniz URL
};


function scrollToThrepage() {
    var threpageDiv = document.querySelector('.threpage');

    if (threpageDiv) {
        // Element mevcut ise, gĂ¶rĂ¼nĂ¼r alan iĂ§ine kaydÄ±r
        threpageDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function scrollToFourPage() {
    var fourpageDiv = document.querySelector('.fourpage');

    if (fourpageDiv) {
        // Element mevcut ise, gĂ¶rĂ¼nĂ¼r alan iĂ§ine kaydÄ±r
        fourpageDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}



function scrollToampage() {
    var ampage = document.querySelector('.sixpage');

    if (ampage) {
        ampage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}



function scrollilet() {
    var illet = document.querySelector('.sevenpage');

    if (illet) {
        illet.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
