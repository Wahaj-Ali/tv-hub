import './style.css';
import Shows from './modules/displayShows.js';

const series = new Shows();
series.displayShows();

const showDetails = async (id) => {
  const baseApi = 'https://api.tvmaze.com/shows/';
  const list = await fetch(`${baseApi}${id}`).then((response) => response.json());
  return list;
}
const createPopUpDetails = (details) => {
  const showModal = document.createElement('div');
  showModal.className = 'pop-up';
  showModal.innerHTML = `
  <div class="pop-head">
  <h2 class = "showheading">${details.name}</h2>
  <button type="button" class="cancel seeButtons">
           ×
         </button>
  </div>
  
  <div class="popup-top-section">
  <div class= 'modal-image'>
  <img src="${details.image.medium}"; alt="cover image" id="modal-cover"/>
  </div>
  <div class= "modal-head">
      <div class = "summary">${details.summary}</div>
      <div><span class="titles">Genre: </span> ${details.genres}</div>
      <div><span class="titles">OfficialSite: </span> <a href="${details.officialSite}" target="_blank">OfficialSite</a></div>
      <div><span class="titles">Type: </span> ${details.type}</div>
      <div><span class="titles">Rating: </span> ${details.rating.average}</div>
  </div>

<textarea id="story" name="story"
          rows="2" cols="77">
Comment...
</textarea>

  </div>
`;
  return showModal;
};
const displayPoUp = async (id) => {
  const popupModal = document.querySelector('.window-popup');
  popupModal.innerHTML = '';
  const movieDetail = await showDetails(id);
  popupModal.append(createPopUpDetails(movieDetail));
  // popupModal.style.display = 'flex';
};

export const addCommentPopupEvent = () => {
  const commentBtns = document.querySelectorAll('.btn');
  commentBtns.forEach((btn) => btn.addEventListener('click', (e) => {
      e.preventDefault();
      displayPoUp(btn.id);
  }));
};
// Removes the Popup on click close button and Navigate to see live and see source on click
windowPopup.addEventListener('click', (e) => {
  const buttonClass = e.target.classList.contains('seeButtons');
    windowPopup.classList.remove('pop-body');
});