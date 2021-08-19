$(document).ready(function () {
  populate();
  function populate() {
    let r,
      x = 0;
    let cards = "";

    console.log(r);
    for (let i = 0; i < 10; i++) {
      r = (Date.now() + i).toString(); //Math.random(1000);
      console.log(r);
      r = r.replace(r.substring(0, 7), "");
      cards +=
        '<div class="card"><img class="img" src="http://picsum.photos/seed/' +
        r +
        '/500/500" alt="A nice photo">' +
        '<p class="card__msg">Copy link</p>' +
        "</div>";
    }

    $(".content").html(cards);
  }

  $(".img").click(function () {
    /*$("#alert").html(
      "Img url: " +
        $(this).attr("src") +
        "   " +
        '<span id="alertExit" onclick="' +
        $(".alert").css("opacity", "0") +
        '"><i  class="fas fa-door-open"></i></span>'
    );*/
    var sel = $(this).attr("src");
    var dummy = document.createElement("input");

    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = sel;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    $(this).siblings(".card__msg").html("Copied!");
    var me = $(this);
    let t = setTimeout(function () {
      me.siblings(".card__msg").html("Copy link");
    }, 1650);
  });
});
