const form = document.querySelector('form');
const passwordContainer = document.querySelector('#password-container');
const copyBtn = document.querySelector('#copy-btn');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  //  user input for pass length
  const length = document.querySelector('#length').value;

  // Generate pass
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Display pass
  passwordContainer.textContent = password;

  // Show copy btn
  copyBtn.classList.remove('hidden');
});

copyBtn.addEventListener('click', function(event) {
  // Create a temporary input element to copy the pass to the clipboard
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('value', passwordContainer.textContent);
  document.body.appendChild(input);

  // Copy the pass
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);

  // Change btn to copied
  copyBtn.textContent = 'Copied!';

  // Change button to "Copy to Clipboard" after 2 seconds
  setTimeout(function() {
    copyBtn.textContent = 'Copy to Clipboard';
  }, 2000);
});
 
var typed = new Typed('#hello-text', {
	strings: ['Hello there!',' Welcome to Random Password Generator'],
   
	typeSpeed: 80,
	backSpeed: 0,
	loop: false,
});

