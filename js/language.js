
/* var langs = ['ar', 'en']; */
var current_lang_index = localStorage.getItem('lang') ?? 'en';
/* var current_lang = langs[current_lang_index]; */

window.change_lang = function (language) {
    localStorage.setItem('lang', language);
    current_lang_index = localStorage.getItem('lang') ?? 'ar';
    /* console.log(current_lang_index) */
    /* current_lang = langs[current_lang_index]; */
    location.reload();
    setTimeout(function () {
        translate();
    }, 1000);
}

function translate() {
    $("[data-translate]").each(function () {
        var key = $(this).data('translate');
        console.log('trans', current_lang_index)
        $(this).text(dictionary[key][current_lang_index] || "N/A");
    });
    if (current_lang_index === 'ar') {
        $("#anchor-language").text("العربية");
    } else if (current_lang_index === 'en') {
        $("#anchor-language").text("English");
    }
}

translate();