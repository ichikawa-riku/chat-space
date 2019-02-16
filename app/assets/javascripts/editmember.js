$(function(){
  function appendUser(id,name){
    html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user'>
              <input name='group[user_ids][]' type='hidden' value='${id}'>
              <p class='chat-group-user__name'>${name}</p>
              <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
            </div>`
    $('#chat-group-users').append(html)
  };

  $(document).on('click','.user-search-add',function(){
    var userId = $(this).attr('data-user-id');
    var userName = $(this).attr('data-user-name');
    $(this).parent().remove();
    appendUser(userId,userName);
  });

  $(document).on('click','.user-search-remove',function(){
    var userId = $(this).attr('data-user-id');
    var userName = $(this).attr('data-user-name');
    $(this).parent().remove();
  });
});
