$(function(){
  function buildHtml(message){
    var image = ""
    if(message.image.url) {
      image = `<img src="${message.image.url}">`;
    }
      var html = `<div class='main-massages__massage'>
                    <div class='main-massages__massage--name'>
                      ${message.user_name}
                    </div>
                    <div class='main-massages__massage--date'>
                      ${message.created_at}
                    </div>
                    <div class='main-massages__massage--text'>
                      ${message.content}
                    </div>
                    ${image}
                  </div>`
    return html
  };
  var url =  location.href;
  setInterval(function(){
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json'
    })
    .done(function(messages){
      var htmlMessagesCount = $('.main-massages__massage').length
      var jsonMessagesCount = messages.length
      console.log(htmlMessagesCount)
      console.log(jsonMessagesCount)
      console.log(messages)
      if(jsonMessagesCount !== htmlMessagesCount){
        var diffrence = jsonMessagesCount - htmlMessagesCount
        console.log(diffrence)
        for (var i=diffrence; i>0; i--){
          console.log(i)
          var takeOutIndex = jsonMessagesCount - i;
          console.log(takeOutIndex);
          var message = messages[takeOutIndex];
          console.log(message)
          var html = buildHtml(message);
          var height = ($('.main-massages').get(0).scrollHeight);
          $('.main-massages').append(html)
          $('.main-massages').animate({scrollTop: height})
       }
      }
    });
  },5000);
});
