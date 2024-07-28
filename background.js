// // Create a context menu item
// chrome.contextMenus.create({
//     id: "openExtension",
//     title: "Open Your Extension",
//     contexts: ["tab"]
//   });
  
//   // Add a listener for when the menu item is clicked
//   chrome.contextMenus.onClicked.addListener(function(info, tab) {
//     if (info.menuItemId === "openExtension") {
//       // Open your extension when the menu item is clicked
//       chrome.tabs.create({ url: "your_extension_page.html" });
//     }
//   });
  