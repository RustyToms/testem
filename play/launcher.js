var spawn = require('child_process').spawn

var browsers = [
    ["IE", "C:\\Program Files\\Internet Explorer\\iexplore.exe"],
    ["Chrome", "C:\\Users\\airportyh\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe", ["--start-maximized"]],
    ["Firefox", "C:\\Program Files\\Mozilla Firefox\\firefox.exe"],
    ["Safari", "C:\\Program Files\\Safari\\safari.exe"]
]

var left = browsers.slice(0)
var url = "http://tobyho.com"
function launchOne(){
    var browser = left.shift()
    if (!browser) return
    var name = browser[0]
    var exe = browser[1]
    var args = (browser[2] || []).concat(url)
    console.log("Launching " + name)
    var p = spawn(exe, args)
    setTimeout(function(){
        p.kill("SIGTERM")
        setTimeout(launchOne, 1000)
    }, 5000)
}
launchOne()

