(function(doc, win) {
      var docEl = doc.documentElement,
          //orientationchange事件判断是否进行横屏、竖屏却换
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',   
          recalc = function() {
              var clientWidth = docEl.clientWidth;
              if (!clientWidth) return;
              docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
          };
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
      //document对象：代表给定浏览器窗口中的 HTML 文档。 window对象：表示浏览器中打开的窗口
  })(document, window);
  