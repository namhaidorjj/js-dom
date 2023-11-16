function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  function updateNumbers() {
    document.getElementById('num1').value = getRandomNumber();
    document.getElementById('num2').value = getRandomNumber();
    document.getElementById('sum').value = '';
  }
  function checkSum() {
    var num1 = parseInt(document.getElementById('num1').value, );
    var num2 = parseInt(document.getElementById('num2').value, );
    var sumInput = parseInt(document.getElementById('sum').value, );

    if (isNaN(sumInput)) {
      alert('Шинэчлэх towchiig darj hariultaa oruulna uu!');
    } else {
      var sum = num1 + num2;
      if (sumInput === sum) {
        alert('Зөв байна');
      } else {
        alert('Буруу байна');
      }
    }
  }
  