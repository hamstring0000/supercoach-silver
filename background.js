chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        file: 'getName.js'
      }, results => chrome.tabs.create({'url': chrome.extension.getURL("https://www.footywire.com/afl/footy/pu-" + results[0][2] + "--" + results[0][0] + "-" + results[0][1]), 'active': true}));
    //var newURL = "http://google.com";
    //var firstName = document.querySelector('.vm-PlayerProfileCardComponent-firstName').innerText;
    //var lastName = document.getElementsByClassName("vm-PlayerProfileCardComponent-lastName");
    
    //console.log(firstName);

   //chrome.tabs.create({'url': chrome.extension.getURL("http://google.com/" + results[0][0] + results[0][1]), 'active': true});

    
});