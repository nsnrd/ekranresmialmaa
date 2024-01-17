// content.js

// Fonksiyon, tarayıcıdaki mevcut sekmeyi yakalar ve ekran görüntüsünü alır
function takeScreenshot() {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, function (image) {
      // Ekran görüntüsü yakalandıktan sonra yapılacak işlemler buraya gelebilir
      // Örneğin, görüntüyü başka bir işleme tabi tutabilir ya da gösterebilirsiniz
      displayScreenshot(image); // Örnek bir fonksiyon, yakalanan görüntüyü gösterir
    });
  }
  
  // Örnek bir fonksiyon: Yakalanan ekran görüntüsünü gösterir
  function displayScreenshot(image) {
    // Bu örnekte sadece konsola görüntüyü yazdırıyoruz, gerçek bir uygulamada başka bir şey yapabilirsiniz
    console.log("Yakalanan ekran görüntüsü:", image);
  }
  
  // Ekran görüntüsü alma işlemini başlatmak için bir olay dinleyici ekleyelim
  chrome.browserAction.onClicked.addListener(function (tab) {
    // Eklenti düğmesine tıklandığında ekran görüntüsü alma fonksiyonunu çağır
    takeScreenshot();
  });
  