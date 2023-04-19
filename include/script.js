<script>
$( document ).ready(function() {
  var psyteachr = ' <a href="https://institutodatascience.org/"><img src="images/logos/idsa.png" style="height: 45px; color: white;" alt="Instituto Data Science Argentina" /></a>';

  $("footer div.row div:eq(1) p").html(
    psyteachr
  );

  // open rdrr links externally
  $("a[href^='https://rdrr.io']").click(function(){
    window.open(this.href);
    return false;
  });

  // visible second sidebar in mobile
  function move_sidebar() {
    var w = window.innerWidth;
    if (w < 992) {
      $("#toc").appendTo($("#main-nav"));
    } else {
      $("#toc").appendTo($("div.sidebar-chapter"));
    }
  }
  move_sidebar();
  window.onresize = move_sidebar;
});
</script>
