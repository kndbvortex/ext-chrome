chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "redirect") {
    let url = window.location.href;
    let f_url = "https://freedium.cfd/";
    sendResponse({ message: "Redirecting ...." });
    if (!url.includes(f_url)) {
      window.location = f_url + url;
    }
  }
});
