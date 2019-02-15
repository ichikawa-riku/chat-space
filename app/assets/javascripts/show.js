$(function(){
  function buildHTML (data){
    if(data.image.url === null) {
      var html = `<div class='main-massages__massage'>
                    <div class='main-massages__massage--name'>
                      ${data.user_name}
                    </div>
                    <div class='main-massages__massage--date'>
                      ${data.created_at}
                    </div>
                    <div class='main-massages__massage--text'>
                      ${data.content}
                    </div>
                  </div>`
    } else {
      var html = `<div class='main-massages__massage'>
                    <div class='main-massages__massage--name'>
                      ${data.user_name}
                    </div>
                    <div class='main-massages__massage--date'>
                      ${data.created_at}
                    </div>
                    <div class='main-massages__massage--text'>
                      ${data.content}
                    </div>
                    <img src="${data.image.url}">
                  </div>`
    }
      return html
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log('イベントが発火されました')
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      type: "post",
      url: url,
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html =buildHTML(data);
      $('.main-massages').append(html)
      $('.main-sendding__writting').val("")
      $('.main-sendding__file--input-image').val("")
    })
    .fail(function(){
      alert('error');
    });
  });
});
