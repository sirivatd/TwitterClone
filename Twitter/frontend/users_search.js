const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor ($el){
    this.$el = $el;
    this.$input = this.$el.find(".name-search");
    this.$users = this.$el.find('.users');
    this.handleInput();
  }

  handleInput(){
    function showUsers (res) {
     console.log(`${res}`);
    }
     this.$input.on("input", e => {
       //insert $(e.target).val() into search
      APIUtil.searchUsers($(e.target).val(), function (res) {
        console.log(res);
      });
     });
  }
}

module.exports = UsersSearch;
