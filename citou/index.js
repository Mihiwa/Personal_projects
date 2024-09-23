function copyingToClipboard(content, copyBtn) {
  navigator.clipboard.writeText(content.innerText).then(() => {
    copyBtn.innerHTML = `<img src="images/check.svg" alt=""/>`;
    setTimeout(function() {
      copyBtn.innerHTML = `<label for="">Copy to clipboard</label>
            <img src="images/copy.svg" alt="">`;
    }, 2000);
  }).catch(err => {
    alert('Could not copy the command: ', err);
  });
}

const command = document.getElementById('executable');
const copyBtn = document.getElementById('copy-btn');

copyBtn.addEventListener('click', function() {
  copyingToClipboard(command, copyBtn);
});
