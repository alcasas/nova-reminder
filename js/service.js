let novaTab = {};

const reminder = () => {
  if(localStorage.getItem('showAlert') && localStorage.getItem('showAlert') === 'true'){
    alert('Remember to fill your nova.');
  }
  //create a tab and activate
  chrome.tabs.create({
    selected: true,
    active: true,
    url: 'https://nova.itexico.com'
  }, (tab) => {
    novaTab = tab;
  });
}

const setDefaultTime = () => {
  if (!localStorage.getItem('time')) {
    localStorage.setItem('time', '16:50');
  }
}

const checkHour = ()=> {
  const date = new Date();
  const hours = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours();
  const minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes();
  const timeStr = hours + ':' + minutes;

  if (localStorage.getItem('time') && localStorage.getItem('time') === timeStr) {
    reminder();
  }
}

const init = ()=> {
  setDefaultTime();
  checkHour();
  setInterval(checkHour, 60 * 1000);
  // get chrome nova tab and inject js code
  chrome.tabs.onUpdated.addListener((tabId, changes)=> {
    if (tabId === novaTab.id && changes.url && changes.url.indexOf('nova.itexico.com') !== -1) {
      chrome.tabs.executeScript(novaTab.id, { file: 'js/nova-inject.js' });
    }
  });
}

init();
