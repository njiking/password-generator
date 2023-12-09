document.addEventListener('DOMContentLoaded', function () {
    const copyInfo = document.getElementById('copy-info');
    const copiedInfo = document.getElementById('copied-info');
    const resultViewbox = document.getElementById('result');
    const copyBtn = document.getElementById('copy-btn');
    const slider = document.getElementById('slider');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numberCheckbox = document.getElementById('number');
    const symbolCheckbox = document.getElementById('symbol');
    const generateBtn = document.getElementById('generate');
  
    copyBtn.addEventListener('click', copyToClipboard);
    generateBtn.addEventListener('click', generatePassword);
  
    function copyToClipboard() {
      const textToCopy = resultViewbox.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        copyInfo.style.opacity = 0;
        copiedInfo.style.opacity = 1;
        setTimeout(() => {
          copiedInfo.style.opacity = 0;
          copyInfo.style.opacity = 1;
        }, 1000);
      });
    }
  
    function generatePassword() {
      const length = slider.value;
      const includeUppercase = uppercaseCheckbox.checked;
      const includeLowercase = lowercaseCheckbox.checked;
      const includeNumbers = numberCheckbox.checked;
      const includeSymbols = symbolCheckbox.checked;
  
      const result = generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
      resultViewbox.innerText = result;
    }
  
    function generateRandomPassword(length, uppercase, lowercase, numbers, symbols) {
      const charset = [];
      if (uppercase) charset.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      if (lowercase) charset.push('abcdefghijklmnopqrstuvwxyz');
      if (numbers) charset.push('0123456789');
      if (symbols) charset.push('!@#$%^&*()-_=+[]{}|;:,.<>?');
  
      if (charset.length === 0) {
        alert('Please select at least one character type.');
        return '';
      }
  
      const passwordChars = charset.join('');
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars.charAt(randomIndex);
      }
  
      return password;
    }
  });
  