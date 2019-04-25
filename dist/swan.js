(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function render(vnode, container) {
    if (typeof vnode === 'string') {
      var textNode = document.createTextNode(vnode);
      return container.appendChild(textNode);
    }
    var dom = document.createElement(vnode.tag);
    if (vnode.attrs) {
      Object.keys(vnode.attrs).forEach(function (key) {
        var value = vnode.attrs[key];
        setAttribute(dom, key, value);
      });
    }
    vnode.children.forEach(function (child) {
      return render(child, dom);
    });
    return container.appendChild(dom);
  }
  function setAttribute(dom, name, value) {
    if (name === 'className') name = 'class';
    if (/on\w+/.test(name)) {
      name = name.toLowerCase();
      dom[name] = value || '';
    } else if (name === 'style') {
      if (!value || typeof value === 'string') {
        dom.style.cssText = value || '';
      } else if (value && _typeof(value) === 'object') {
        for (var _name in value) {
          dom.style[_name] = typeof value[_name] === 'number' ? value[_name] + 'px' : value[_name];
        }
      }
    } else {
      if (name in dom) {
        dom[name] = value || '';
      }
      if (value) {
        dom.setAttribute(name, value);
      } else {
        dom.removeAttribute(name);
      }
    }
  }

  var element = h("div", null, "hello", h("span", {
    onClick: function onClick() {}
  }, "world!"));
  render(element, document.getElementById('container'));

}));
