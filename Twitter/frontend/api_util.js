const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'JSON'
    });
  },

  unfollowUser: id => {
    console.log(`Attempting to unfollow ${id}`);
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'JSON'
    });
  },

  sayMyName: () => {
    console.log("We are in the utility");
  }
};

module.exports = APIUtil;
