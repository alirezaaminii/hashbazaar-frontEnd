<!--wow js-->
new WOW().init();

wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
);
wow.init();
 <!-- end wow js -->

//side bar

$(document).ready(function () {
        $('#dashboard-tab').on('click',function () {
                $('.mainContainer main section:not(#dashboard)').fadeOut();
                $('#dashboard').css('display','block');
        });
        $('#referral-tab').on('click',function () {
                $('.mainContainer main section:not(#referral)').fadeOut();
                $('#referral').css('display','block');
        });
        $('#activity-tab').on('click',function () {
                $('.mainContainer main section:not(#activity)').fadeOut();
                $('#activity').css('display','block');
        });
        $('#setting-tab').on('click',function () {
                $('.mainContainer main section:not(#setting)').fadeOut();
                $('#setting').css('display','block');
        });
        $('#contact-tab').on('click',function () {
                $('.mainContainer main section:not(#contact)').fadeOut();
                $('#contact').css('display','block');
        });

        $('.list-group-item').on('click',function () {
                console.log('clicked');
                $('.list-group-item').removeClass('active');
                $(this).addClass('active');
        })

        if($( window ).width() < 769) {
                // $('#sideBar').css('display','none');
                $('.navbar-toggler').click(function () {
                        $('#sideBar').toggle()
                })
        }
});

// dashboard

//activity

//referral

//setting

//contact

