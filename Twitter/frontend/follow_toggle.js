const APIUtil = require("./api_util.js");


class FollowToggle {
  constructor ($el, i){
    //this.$el.removeProp("disabled");
    this.$el = $el;
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on("click", e => {
      this.handleClick(e);
    });

  }

  render (){
    console.log(this.$el.text);
    if (this.followState === "following" || this.followState === "unfollowing") {

      this.$el.text("Please Wait");
      this.$el.prop("disabled", "true");
    } else if (this.followState === "followed") {
      this.$el.text('UNFOLLOW!');
      this.$el.removeProp("disabled");
    } else {
      this.$el.text('FOLLOW!');
      this.$el.removeProp("disabled");
    }

    console.log("attempting to render");
  }

  toggle() {
    if (this.followState === "following") {
      this.followState = "followed";
    } else {
      this.followState = "unfollowed";
    }
    // this.render();
  }

  handleClick(e) {
    e.preventDefault();
    // const utility = new APIUtil();
    let methString = "";
    if(this.followState === "followed") {
      // methString = "DELETE";
      this.followState = "unfollowing";
      this.render();

      APIUtil.unfollowUser(this.userId)
        .then((res) => {
        console.log();
        this.toggle();
        this.render();
      });
    } else if (this.followState === "unfollowed") {
      // methString = "POST";
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId).then((res) => {
        this.toggle();
        this.render();
      });
    }

     console.log(`user id: ${this.$el.data("user-id")} follow-state: ${this.followState}`);

  }
}

module.exports = FollowToggle;
