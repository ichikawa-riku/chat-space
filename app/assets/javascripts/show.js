$(function(){
  function buildHTML (data){
    var image = ""
    if(data.image.url) {
      image = `<img src="${data.image.url}">`;
    }
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
                    ${image}
                  </div>`
      return html
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
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
      var height = ($('.main-massages').get(0).scrollHeight)
      $('.main-massages').append(html)
      $('.main-massages').animate({scrollTop: height})
      $('.main-sendding__writting').val("")
      $('.main-sendding__file--input-image').val("")
    })
    .fail(function(){
      alert('error');
    });
  });
});
