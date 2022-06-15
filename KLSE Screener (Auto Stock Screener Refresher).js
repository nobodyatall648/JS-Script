//auto click the screen button in KLSE Screener (Stock Screener) within the time interval
//https://www.klsescreener.com/v2/
javascript: setInterval(function auto() {
    console.log('[*] Auto Screener Start.');
    $('#submit').click();
    return auto
}(), 10000);
