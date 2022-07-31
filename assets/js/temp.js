const writeReviewModal = document.getElementById('writeReviewModal');
const writeReviewBtn = document.getElementById('writeReviewBtn');
const closeWriteReviewModalBtn = document.getElementsByClassName('write-review__close-btn')[0];

writeReviewBtn.onclick = function () {
  writeReviewModal.style.display = 'block';
};

closeWriteReviewModalBtn.onclick = function () {
  writeReviewModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == writeReviewModal) {
    writeReviewModal.style.display = 'none';
  }
};
