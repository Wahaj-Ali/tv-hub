import { addCommentPopupEvent } from './displaypopup.js';

class Shows {
  constructor() {
    this.API_URL = 'https://api.tvmaze.com/';
    this.shows = [];
  }

  getShows = async (showName) => {
    const Query = `search/shows?q=${showName}`;
    const list = await fetch(`${this.API_URL}${Query}`).then((response) => response.json());
    this.shows = [...list];
  }

  displayShows = async () => {
    await this.getShows('the');
    const showsList = this.shows.reduce((prev, curr) => {
      if (curr.show.image) {
        prev += `
                 <div class="shows">
                 
                   <div class="show-image">
                    <img src=${curr.show.image.medium} />
                   </div>
                   <div class="show-name">
                     <span>${curr.show.name}</span>
                     <div class="like"> 
                     <i class="fa fa-heart fa-lg" data-pos=${curr.show.id}></i> 
                    </div>
                   </div>
                   <div class="comments">
                     <button data-id="${curr.show.id}"  class="btn" id="${curr.show.id}">Comments</button>
                     <button class="btn-reservations" id="${curr.show.id}">Reservations</button>
                   </div>
             
               </div>
               `;
      }
      return prev;
    }, '');
    document.querySelector('.showslist').innerHTML = showsList;
    addCommentPopupEvent();
  }
}

export default Shows;