document.getElementById('captureButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.tabs.captureVisibleTab(tab.windowId, { format: 'png' }, (screenshotUrl) => {
      // Ekran görüntüsü alındıktan sonra burada işlemler yapılabilir
      console.log('Ekran görüntüsü alındı:', screenshotUrl);
    });
  });
});
