$( document ).ready(function() {

  $.ajax({
    url: "https://paulcaronnews.tumblr.com/api/read/xml?num=10&&type=text",
    dataType: 'jsonp'
  }).done(function(data) {
    let posts = data.posts,
    blogsHtml = `<div class="row pull-right">
                  <a href="http://snstrfreedom.tumblr.com/rss" target="_blank">RSS Feed <img src="./images/rss.png" width="48"></a>
                  </div>
                  <div style="display: inline-block;">`;
    for(let x in posts){
      blogsHtml +=
        `<div class="row well well-lg well2">
          <div class="row">
            <h1><u><a href="${posts[x]["url-with-slug"]}" target="_blank" >${posts[x]["regular-title"]}</a></u> <small>${posts[x]["date"]}</small></h1>
          </div>
          <div class="row">
            ${posts[x]["regular-body"]}
          </div>
        </div>`;
    }
    blogsHtml += `</div>
      <div class="row pull-right">
        <a href="http://snstrfreedom.tumblr.com/archive" target="_blank">For more see the archives ... <img src="./images/tumblr.png" width="23"></a>
      </div>`
    $('#blogDiv').html(blogsHtml)
  });


});
