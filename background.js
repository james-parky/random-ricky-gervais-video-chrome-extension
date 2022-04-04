chrome.browserAction.onClicked.addListener(function (activeTab) {
    fetch("./video_urls.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var randomUrl =
                data.urls[Math.floor(Math.random() * data.urls.length)];
            chrome.tabs.create({ url: randomUrl });
        });
});
