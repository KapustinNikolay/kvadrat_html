/**
 * Created by vrog on 30.07.2015.
 */
$(document).on('ready', function () {

    var cityCookie = getCookie("city");
    var citySelector = $('#city-select');
    if (cityCookie) {
        citySelector.find('option[value='+cityCookie+']').attr('selected', 'selected');
        setCityByIndex(cityCookie);
    }

    new SelectFx($('#catalog')[0], {
        newTab: false,
        stickyPlaceholder: true
    });

    new SelectFx(citySelector[0], {
        newTab: false,
        stickyPlaceholder: true,
        onChange: setCityByIndex
    });
});

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function setCityByIndex(ind) {
    var cityConfig = {
        codes: {
            1: 'Краснодар',
            2: 'Ростов-на-Дону'
        },
        1: {
            phone: '+7 (861) 275-55-52',
            adrLink: 'http://kvadrat-new.local/frames/site1/contacts_krasnodar.html',
            systemName: 'Krasnodar'
        },
        2: {
            phone: '+7 (863) 209-83-46',
            adrLink: 'http://kvadrat-new.local/frames/site1/contacts_rostov.html',
            systemName: 'Rostov'
        }
    };

    var cityIndex = parseInt(ind);
    var contactsWrap = $('#contacts');
    $('header .phone').text(cityConfig[cityIndex].phone).attr('href', 'callto:'+cityConfig[cityIndex].phone);
    contactsWrap.find('> .'+cityConfig[cityIndex].systemName.toLowerCase()).prependTo(contactsWrap);
    setCookie('city', cityIndex);
}