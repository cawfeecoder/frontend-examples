(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react-dom', 'kotlin-react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react-dom'), require('kotlin-react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-dce-example_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-dce-example_main'.");
    }
    if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-dce-example_main'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'kotlin-dce-example_main'.");
    }
    if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-dce-example_main'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'kotlin-dce-example_main'.");
    }
    root['kotlin-dce-example_main'] = factory(typeof this['kotlin-dce-example_main'] === 'undefined' ? {} : this['kotlin-dce-example_main'], kotlin, this['kotlin-react-dom'], this['kotlin-react']);
  }
}(this, function (_, Kotlin, $module$kotlin_react_dom, $module$kotlin_react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_8bz2yq$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_react.react.RComponent;
  var getKClass = Kotlin.getKClass;
  Welcome.prototype = Object.create(RComponent.prototype);
  Welcome.prototype.constructor = Welcome;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  function main$lambda($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda(null));
    welcome($receiver_0, 'Mary');
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  function main(args) {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function WelcomeProps() {
  }
  WelcomeProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WelcomeProps',
    interfaces: []
  };
  function Welcome(props) {
    RComponent_init(props, this);
  }
  Welcome.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('Hello, ' + this.props.name);
    $receiver.child_2usv9w$($receiver_0.create());
  };
  Welcome.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Welcome',
    interfaces: [RComponent]
  };
  function welcome$lambda(closure$name) {
    return function ($receiver) {
      $receiver.attrs.name = closure$name;
      return Unit;
    };
  }
  function welcome($receiver, name) {
    if (name === void 0)
      name = 'John';
    return $receiver.child_bzgiuu$(getKClass(Welcome), welcome$lambda(name));
  }
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  _.main_kand9s$ = main;
  _.WelcomeProps = WelcomeProps;
  _.Welcome = Welcome;
  _.welcome_hw0qe1$ = welcome;
  main([]);
  Kotlin.defineModule('kotlin-dce-example_main', _);
  return _;
}));
