// background.js

chrome.runtime.onInstalled.addListener(() => {
  console.log('Eklenti yüklendi');
});

// İzinlerin sağlanmasını işlerken kullanılabilir
chrome.permissions.onAdded.addListener(() => {
  console.log('İzinler güncellendi');
});

// Ekran görüntüsü alma işlemi tamamlandığında tetiklenir
chrome.action.onClicked.addListener(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const screenshotUrl = await chrome.tabs.captureVisibleTab(tab.id);
  console.log('Ekran görüntüsü alındı:', screenshotUrl);
});
