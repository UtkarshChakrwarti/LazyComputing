function tidyHtml(html) {
      var html = html.trim().replace(/>[^<]+</gm, function ($1) {
          return '>' + $1.substr(1, $1.length - 2).trim() + '<';
      }).replace(/>\s+</gm, '><');
      var containerElement = document.createElement('div');
      containerElement.innerHTML = html;
      var result = containerElement.innerHTML;
      var findLevel = function (child, parent) {
          var level = 0;
          while (child != parent) {
              child = child.parentNode;
              level++;
          }
          return level;
      }
      Array.prototype.slice.call(containerElement.getElementsByTagName('*')).forEach(function (element) {
          var tabs = new Array(findLevel(element, containerElement) - 1).join('	'),
              tabs2 = (element.parentNode.lastChild == element) ? ('\n' + tabs.substring(0, tabs.length - 1)) : '',
              containerElement = document.createElement('div');
          containerElement.appendChild(element.cloneNode(true));
          result = result.replace(containerElement.innerHTML, '\n' + tabs + containerElement.innerHTML + tabs2);
      });
      return result;
  }