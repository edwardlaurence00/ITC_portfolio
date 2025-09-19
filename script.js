const modal = document.getElementById('img-modal');
const modalImg = document.getElementById('modal-img');
document.querySelectorAll('.gallery-img').forEach(img => {
    img.onclick = function() {
        modal.classList.add('show');
        modalImg.src = this.src;
    }
});
document.querySelectorAll('.info-image').forEach(img => {
    img.onclick = function() {
        modal.classList.add('show');
        modalImg.src = this.src;
    }
});
document.querySelectorAll('.profile-image').forEach(img => {
    img.onclick = function() {
        modal.classList.add('show');
        modalImg.src = this.src;
    }
});
document.querySelectorAll('.resume-image').forEach(img => {
    img.onclick = function() {
        modal.classList.add('show');
        modalImg.src = this.src;
    }
});
modal.onclick = function() {
    modal.classList.remove('show');
    modalImg.src = '';
};

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied: " + text);
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}