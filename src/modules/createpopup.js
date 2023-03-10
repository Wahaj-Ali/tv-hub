/* eslint-disable */
import { renderComment, generateComment } from "./rendercomment.js";
import commentsCounter from "./commentscounter.js";

export const createPopUpDetails = (details) => {
  /* eslint-enable */

  const showModal = document.createElement('div');
  showModal.className = 'pop-up';
  showModal.innerHTML = `
    
  <div>
    <button type="button" class="cancel">
             ×
    </button>
  </div>
    
    <div class="popup-top-section">
    <div class= 'modal-image'>
    <img src="${details.image.medium}"; alt="cover image" id="modal-cover"/>
   </div>

   <div class="pop-head">
    <h2 class = "showheading">${details.name}</h2>
    
    </div>
   
    <div class= "modal-head">
        <div class = "summary"><p id="sumTxt">Summary:</p>  ${details.summary}</div>
        <a class = "yt-link" id="${details.id === 69 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/-WYdUaK54fU" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 28276 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/ndl1W4ltcmg" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 38963 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/aOC8E8z_ifw" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 37781 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/BqqShroJH44" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 13 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/IgVyroQjZbE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 20263 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/Ej24W8gcmXQ" target="_blank"> <i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 32938 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_HgC1TN8FVk" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 83 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/_jgYEYERYFQ" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 15299 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/M1bhOaLV4FU" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 19809 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/zfexbFwCBnE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 42827 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/Z6pdYkqeT7A" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>  
        <a class = "yt-link" id="${details.id === 54887 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/embed/QRy3eAKzYGc" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> 
        <a class = "yt-link" id="${details.id === 171 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=cjJLEYMzpjc" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> 
        <a class = "yt-link" id="${details.id === 171 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=cjJLEYMzpjc" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a> 
        <a class = "yt-link" id="${details.id === 4 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=2yrviapP5uY" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 81 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=KPLWWIOCOOQ" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 44751 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=SJPJPUpNvDw" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 435 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=70Y32si4yb8" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 33352 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=x8UAUAuKNcU" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 28152 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=PJpsRF-TJAE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 21845 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=fYlZDTru55g" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 44242 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=ZkftnbMA2Hs&list=PLd4nhnkLAsvybAabQKnEHww9-AZZTFk1s" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 80 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=X0lRjbrH-L8" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        <a class = "yt-link" id="${details.id === 63084 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=o6dto51ZZEE" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>     
        <a class = "yt-link" id="${details.id === 1 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=f_Y5YeYrqUk" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>        
        <a class = "yt-link" id="${details.id === 32158 ? 'showframe' : 'hideframe'}" href="https://www.youtube.com/watch?v=_h3NFrBsJAM" target="_blank"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
        
        <div><span class="titles">Genre: </span> ${details.genres}</div>
        <div><span class="titles">OfficialSite: </span> <a href="${details.officialSite}" target="_blank">OfficialSite</a></div>

        <div><span class="titles">ID: </span> ${details.id}</div>
        <div><span class="titles">IMDb Rating: </span> ${details.rating.average}</div>
    </div>
    
    <div class="comment-container">

    <p class="comments">Comments(<span class="comments-ctr"></span>)</p>
    
    <form class="form" action="">
    <input type="text" class="name" id="user" placeholder="Enter Your Name" required>
    <input id="comment" cols = 30 rows = 5 placeholder="Add your Comment" required></input>
    <button type="submit" class="submit-btn" id="${details.id}">Add Comment</button>
    </form>

    <div class="con-comm">
    </div>
  </div>
    </div>
  `;
  return showModal;
};

export const addComment = async () => {
  const counter = commentsCounter();
  const commentForm = document.querySelector('.form');
  const formSubmitBtn = document.querySelector('.submit-btn');
  const commentSection = document.querySelector('.con-comm');
  document.querySelector('.comments-ctr').innerHTML = counter;
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = commentForm.elements[0];
    const comment = commentForm.elements[1];
    if (!(name === '' || comment === '')) {
      await renderComment(formSubmitBtn.id, name.value, comment.value);
      const commentslist = await generateComment(formSubmitBtn.id);
      commentSection.innerHTML = '';
      commentSection.append(commentslist);
      const counter = commentsCounter();
      document.querySelector('.comments-ctr').innerHTML = counter;
      commentForm.reset();
    }
  });
};
