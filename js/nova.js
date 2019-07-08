const setTime = ()=> {
  if (time.value.toString().length === 5) {
    localStorage.setItem('time', time.value);
  }
  localStorage.setItem('showAlert', showAlert.checked);
}

document.addEventListener('DOMContentLoaded', ()=> {
  const timeInput = document.getElementById('time');
  const showAlertCheckbox = document.getElementById('showAlert');
  const saveBtn = document.getElementById('saveBtn');

  timeInput.addEventListener('keyup', (key)=> {
    if(key.keyCode === 13){
      setTime();
    }
  });

  saveBtn.addEventListener('click', setTime);

  if (localStorage.getItem('time')) {
    timeInput.value = localStorage.getItem('time');
  }
  if (localStorage.getItem('showAlert')) {
    showAlertCheckbox.checked = localStorage.getItem('showAlert') === 'true';
  }
});