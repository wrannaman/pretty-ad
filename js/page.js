(function() {
  var svgshape = document.getElementById( 'notification-shape' ),
    s = Snap( svgshape.querySelector( 'svg' ) ),
    path = s.select( 'path' ),
    pathConfig = {
      from : path.attr( 'd' ),
      to : svgshape.getAttribute( 'data-path-to' )
    },
    bttn = document.getElementById( 'notification-trigger' );

  // make sure..
  bttn.disabled = false;

  bttn.addEventListener( 'click', function() {
    // simulate loading (for demo purposes only)
    classie.add( bttn, 'active' );
    setTimeout( function() {

      path.animate( { 'path' : pathConfig.to }, 300, mina.easeinout );

      classie.remove( bttn, 'active' );

      // create the notification
      var notification = new NotificationFx({
        wrapper : svgshape,
        message : '<p><img src="http://cdn.adnxs.com/p/f5/81/7c/45/f5817c45874a2f62b4c4f4742fe10ddc.png"></p>',
        layout : 'other',
        effect : 'cornerexpand',
        type : 'warn', // notice, warning or error
        onClose : function() {
          bttn.disabled = false;
          setTimeout(function() {
            path.animate( { 'path' : pathConfig.from }, 300, mina.easeinout );
          }, 200 );
        }
      });

      // show the notification
      notification.show();

    }, 1200 );
    // disable the button (for demo purposes only)
    this.disabled = true;
  } );
})();

window.onload = function() {
  setTimeout(function() {
    l = document.getElementById("notification-trigger");
    l.click();
  },1000);
}
