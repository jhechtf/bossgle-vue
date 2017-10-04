import $ from 'jquery';
const dictionaryKey = '?key=79a767f2-355d-43f6-8ed0-b5bfb2110e8e';
const apiBase = 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/';


const state = {
  points:0,
  board:[],
  current:[],
  used_words:[],
  time:180 //seconds
}

const mutations = {
  add_letter_to_board (state,letter) {
    state.board.push(letter);
  },
  add_letter_to_current(state,letter){
    state.current.push(letter);
  },
  reset_board (state) {
    state.points = 0;
    state.board = [];
    state.current = [];
    state.used_words = [];
    state.time = 180
  },
  decrement_time(state){
    --state.time;
  },
  add_used_words(state,word){
    state.used_words.push(word);
  },
  clear_current(state){
    state.current = [];
  }
}

const actions={
  check_word(store,{letter, tile}){
    //Figure this out this.$http.get(/*stuff here*/);
    //Check dictionary API here
    var str = store.state.current.join('')+letter;
    if(str.length >=3 && store.state.used_words.indexOf(str) == -1){
      $.get(apiBase+encodeURIComponent(str)+dictionaryKey,{
        repsonseType:'document'
      }).then(function(data){
        var root = data.getElementsByTagName('entry')[0];
        if(root!= undefined)
          store.commit('add_used_words', str),
          store.commit('clear_current'),
          tile.chosen=false;
        else
          store.commit('add_letter_to_current', letter);
      },console.error);
    }else{
      store.commit('add_letter_to_current', letter);
    }

  }
}

export default {
  state,
  mutations,
  actions
}
