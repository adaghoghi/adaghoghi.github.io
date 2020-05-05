(document).ready(function(){ 
            ('.sidebar-item a').each(function (index) {
                if (this.href.trim() == window.location)
                    $(this).addClass("active");
            });
            /* ===================================
            SideBar Menu On click
            ====================================== */
            var $menu_left = (".side-nav-left");
            var $toggler = ("#menu_bars");
            if (("#menu_bars").length) {
                ("#side-nav").addClass("side-nav-push");

                if (toggler.hasClass("left")) {
                    toggler.on("click", function (e) {
                        (this).toggleClass("active");

                        menu_left.toggleClass("side-nav-open");
                        e.stopPropagation();
                    });
                }
                else {
                    if (toggler.hasClass("full")) {
                        toggler.on("click", function (e) {
                            (this).toggleClass("active");
                            menu_full.toggleClass("side-nav-open");
                            e.stopPropagation();
                        });
                    }
                }
            }
        });