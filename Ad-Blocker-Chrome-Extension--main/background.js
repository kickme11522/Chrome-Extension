chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: ["https://delivery.adrecover.com/**","https://cdn.snigelweb.com/**","https://pagead2.googlesyndication.com/**","https://securepubads.g.doubleclick.net/**","https://www.youtube.com/pagead/**","https://googleads.g.doubleclick.net/pagead/**"
  ] },
  ["blocking"]
);