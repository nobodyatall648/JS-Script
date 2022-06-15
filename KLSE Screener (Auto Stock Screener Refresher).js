//auto click the screen button in KLSE Screener (Stock Screener) within the time interval
javascript: setInterval(function auto() {
    console.log('[*] Auto Screener Start.');
    $('#submit').click();
    return auto
}(), 10000);
