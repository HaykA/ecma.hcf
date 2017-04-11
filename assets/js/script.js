/**
 * Created by Hayk on 25/03/2017.
 */

var changeTheme = function (e) {
    var id = $(this).attr('id');
    if(id == 'dark') {
        $('head').append($('<link>').attr({
            id: "dark-theme",
            rel: "stylesheet",
            type: "text/css",
            href: "assets/frameworks/hcf/haykscompactframework-theme-dark_3.0.1-a.css"
        }));
    } else {
        var themeId = "#dark-theme";
        $(themeId).remove();
    }
};

var init = function () {
    $('[name=theme]').on('change', changeTheme);
};

$(document).ready(init);