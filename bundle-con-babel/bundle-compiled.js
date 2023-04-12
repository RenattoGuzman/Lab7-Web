"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.object.get-prototype-of.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement) {
    _inherits(e, _HTMLElement);
    var _super = _createSuper(e);
    function e() {
      var _this;
      _classCallCheck(this, e);
      _this = _super.call(this), _this.innerHTML = '        <header>\n            <a target= "_blank" href="index.html">Inicio</a>\n            <a target= "_blank" href="populares.html">Libros populares</a>\n            <a target= "_blank" href="nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n        </header>\n        \n        \n<h1>Destino en el espacio</h1>\n\n\nProgreso de la historia: <br>\n<progress value = "2" max ="3"> </progress>\n\n<h2>La huída</h2>\n<p>\n    \n    Scott dejándose llevar por su susto decide huir. Corre hacia la cabina de control para tomar control del volante y activa <br>\n    el modo de piloto automático pero cambia el rumbo hacia la tierra. Empieza a sudar, sus pensamientos no son claros, parece que le está dando <br>\n    un ataque de pánico asi que se después de fijar el ritmo, sin nada más que hacer más que esperar a que los aliens no tengan tecnología tan avanzada <br>\n    como para alcanzarlo, se dirige hacia el dormitorio para ver a sus compañeros y les dice: "perdonen chicos, les he fallado" \n    <br> cuando de repente los ojos de Scott lentamente se cierran y cae al suelo desmayado... \n    <br><br>\n    Scott abre sus ojos, y se encuentra... confundido\n\n    <br>\n\n    <br>\n    <br>\n    <h2>¿Continúa la historia?</h2>\n    \n\n\n\n</p>\n<ul>\n    <li><a href="nave.html">Parte 3</a></li>\n    \n\n</ul>\n        ';
      return _this;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-huir", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement2) {
    _inherits(e, _HTMLElement2);
    var _super2 = _createSuper(e);
    function e() {
      var _this2;
      _classCallCheck(this, e);
      _this2 = _super2.call(this), _this2.innerHTML = '\n      \n          <header>\n              Inicio\n              <a target= "_blank" href="populares.html">Libros populares</a>\n              <a target= "_blank" href="nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n          </header>\n          <br><br>\n          <h1>Librería Los Álamos</h1>\n           \n          <img src="images/LOGOalamo.png" width = "100" alt="oops" class = "slide-in-left">\n          <br><br>\n      \n          <h2> Destino en el espacio </h2>\n          <br> <p>Descubre el comienzo de nuestra nueva historia <br> interactiva totalmente GRATIS</p> \n          <a target= "_blank" href="inicio-historia.html">Comienza aquí</a>\n          <br><br>\n          <h2> Comentario </h2>\n          <details>\n              <summary>Comentario</summary><br>\n              <p>El aprendizaje de UX Design ofrece muchos beneficios valiosos y habilidades útiles para los profesionales <br>\n                  de la tecnología. Estas habilidades incluyen la capacidad de comprender las necesidades y deseos de los<br> \n                  usuarios, la capacidad de crear soluciones intuitivas y fáciles de usar para los usuarios, y la capacidad<br> \n                  de trabajar en equipo con otros profesionales para crear productos tecnológicos innovadores. Además, el UX<br>\n                  Design también es un campo en rápido crecimiento, lo que significa que hay muchas oportunidades de carrera <br>\n                  disponibles para aquellos que tienen las habilidades y conocimientos adecuados.\n                  <br><br>\n                  Al proveerle a las personas una mejor experiencia de usuario también se le mejora ligeramente su calidad de <br>\n                  vida, y ligado a esto, si el usuario se siente cómodo usando el programa, se sentirá más dispuesto a gastar <br>\n                  dinero sin sentirse mal, lo que le lleva a la empresa a ganar más dinero y a que un desarrollador como uno <br>\n                  pueda tener un mejor salario si sabe estos principios de UX.\n              </p>\n            </details>\n      ';
      return _this2;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-index", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement3) {
    _inherits(e, _HTMLElement3);
    var _super3 = _createSuper(e);
    function e() {
      var _this3;
      _classCallCheck(this, e);
      _this3 = _super3.call(this), _this3.innerHTML = '\n        \n        <header>\n            <a target= "_blank" href="index.html">Inicio</a>\n            <a target= "_blank" href="populares.html">Libros populares</a>\n            <a target= "_blank" href="nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n        </header>\n    \n\n\n<h1>Destino en el espacio</h1>\n\n\n\nProgreso de la historia: <br>\n<progress value = "1" max ="3"> </progress>\n\n<p>\n    \n    Scott Wilson es un piloto prodigio de la NASA, entrenado desde los 7 años para que sea el líder <br>\n    de su tripulación en el momento del lanzamiento. <br>\n    <br>\n    Ahora tiene 21 años y ha llegado el momento que había esperado durante toda su vida. La tierra <br>\n    necesita su ayuda para recolectar información de exoplanetas en otro sistema solar junto con la ayuda<br>\n    de su tripulación conformada por Benjamin Turner y Jackson Baker, un astrónomo especialista en exoplanetas y <br>\n    el otro el mejor ingeniero mecánico que pudieron haber tenido, si algo se dañara, Jackson podría arreglarlo. <br>\n    <br>\n    Luego del lanzamiento Scott sintió como si hubieran pasado solamente horas, esto por la criogenización a la que <br>\n    fueron sometidos para que no sintieran lo longitud del viaje.  Él era el único despierto, su tripulación seguía dormida <br>\n    y no había nada que él pudiera hacer ya que los sistemas estan automatizados y no tiene apertura manual. \n    <br>\n    Después de una semana estando solo sin que sus compañeros se despierten empieza a entrar en desesperación ya que <br>\n    lo que estaba sucediendo no estaba dentro del plan y no lo habían entrenado para esto. Él era la mejor persona para seguir órdenes <br>\n    y para darlas, pero estando solo, no había nadie que le diera órdenes, ni tampoco a quién darselas. <br>\n    <br>\n    Mientras Scott se encontraba a media crisis existencial, siento como su nave comienza a sacudir, la turbulencia no es común en el <br>\n    espacio, por lo que esto lo extrañó demasiado, al ver por la ventana logra ver lo que parece ser un pedazo de piedra con orificios<br>\n    luminozos azules. Esta piedra no es similar al de un asteroide, sino que es en su mayoría liso sin bordes, y además tiene unos grandes engravados<br>\n    en la nave como si de un templo maya se refieriera. \n\n    <br>\n    Scott se asusta y no sabe qué hacer, otra cosa que no está dentro de sus planes y tiene que pensar rápido, es de vida o muerte.<br>\n\n    <br>\n    <br>\n    <h2>¿Qué haces?</h2>\n    \n\n\n\n</p>\n<ul>\n    <li><a href="huir.html">Intentar huir</a></li>\n    <li><a href="valentia.html">Armarte de valor y hacer el primer contacto extraterrestre</a></li>\n\n</ul>\n        ';
      return _this3;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-inicio", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement4) {
    _inherits(e, _HTMLElement4);
    var _super4 = _createSuper(e);
    function e() {
      var _this4;
      _classCallCheck(this, e);
      _this4 = _super4.call(this), _this4.innerHTML = '    <header>\n        <a target= "_blank" href="index.html">Inicio</a>\n        <a target= "_blank" href="populares.html">Libros populares</a>\n        <a target= "_blank" href="nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n    </header>\n        \n        \n<h1>Destino en el espacio</h1>\n\n<p>Presiona play para reproducir música de fondo:</p>\n\n<audio controls>\n<source src="images/EmergencyLaunch.mp3" type="audio/mpeg">\nYour browser does not support the audio element.\n</audio>\n\n<br>\n<br>\n\n\n<p>\nProgreso de la historia: <br>\n<progress value = "3" max ="3"> </progress>\n\n<h2>En la nave</h2>\n\nScott despierta con un dolor muy fuerte en la cabeza, está muy confundido por el ambiente en el que se encuentra. Aunque <br>\npor un poco de intuición logra comprender dónde está, no está en su nave y no existe lugar en el planeta Tierra que sea <br> \nremotamente similar al lugar en el que estaba, por lo que, estaba en una nave alienígena, ESTABA EN UNA NAVE ALIENÍGENA. <br>\nOtro factor muy importante que le ayudó a comprender que estaba en la nave alien era el hecho de que tenía un estilo de <br> \nmascarilla con algún tipo de tecnología desconocida y estaba amarrado a una silla parecida a la de Darth Vader episodio 3. \n<br><br> \nDe repente empieza a escuchar la voz de una mujer, era una voz que se le hacía muy conocida y al oírla entró en llanto, <br> \nera la voz de su madre que decía: \n<br><br>\n    - "Hola Scott, bienvenido a nuestro hogar, sabemos por qué estás aquí y nosotros queremos lo mismo que ustedes, <br> \n    pero tendremos que trabajar juntos antes de que lleguen los Undranos" \n<br><br>\nA Scott estaba desconcertado por el mensaje que acababa de oír por dos razones. Primero, un alienigena le acaba de hablar <br> \nen un español perfecto y parece no haber barrera de idioma y segundo, no hay nadie en el cuarto, nadie, solo está él pero la <br>\nvoz que acaba de escuchar la escuchó como si estuviera alguien cerca, talvez incluso MUY CERCA. ¿Será que habrían logrado hackear <br> \na su cerebro para hacerle entender su mensaje? Scott se encontraba a punto de encontrar la respuesta a su pregunta cuando siente <br>\nun temblor aún más fuerte que el anterior.  -"Parece que ya vinieron los Undranos"...\n\n\n\n<h2>¿Deseas saber qué pasa al final?</h2>\n   \n\nCompra el libro se estrenará el 18 de febrero solamente en Librería Los Álamos\n\n\n</p>\n\n        ';
      return _this4;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-nave", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement5) {
    _inherits(e, _HTMLElement5);
    var _super5 = _createSuper(e);
    function e() {
      var _this5;
      _classCallCheck(this, e);
      _this5 = _super5.call(this), _this5.innerHTML = '\n        <header>\n            <a target= "_blank" href="index.html">Inicio</a>\n            <a target= "_blank" href="populares.html">Libros populares</a>\n            Nuevos Lanzamientos\n        </header>\n    \n    \n        <h1>Nuevos Lanzamientos</h1>\n    \n        <ul>\n            <li>\n                <a href="libros/beloved-detalle.html">Beloved</a> \n            </li>\n            <li>\n                <a href="libros/ficciones-detalle.html">Ficciones</a> \n            </li>\n            <li>\n                <a href="libros/loveinthetimeofcholera-detalle.html">Amor En Los Tiempos del Cólera</a> \n            </li>\n            <li>\n                <a href="libros/ramayana-detalle.html">Ramayana</a> \n            </li>\n            <li>\n                <a href="libros/thecastle-detalle.html">The Castle</a> \n            </li>\n            <li>\n                <a href="libros/thefatalist-detalles.html">The Fatalist</a> \n            </li>\n            <li>\n                <a href="libros/warandpeace-detalle.html">War And Peace</a> \n            </li>\n        </ul>\n        ';
      return _this5;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-nuevos", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement6) {
    _inherits(e, _HTMLElement6);
    var _super6 = _createSuper(e);
    function e() {
      var _this6;
      _classCallCheck(this, e);
      _this6 = _super6.call(this), _this6.innerHTML = '\n        <header>\n            <a target= "_blank" href="index.html">Inicio</a>\n            Libros populares\n            <a target= "_blank" href="nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n        </header>\n        <h1>Populares</h1>\n    \n        <ol>\n            <li>\n                <details>\n                    <summary>Beloved</summary>\n                    <a href="libros/beloved-detalle.html">Link al libro</a> \n                  </details>\n                \n            </li>\n            <li>\n                <details>\n                    <summary>Ficciones</summary>\n                    <a href="libros/ficciones-detalle.html">Ficciones</a> \n                  </details>\n                \n            </li>\n            <li>\n                <details>\n                    <summary>Amor En Los Tiempos del Cólera</summary>\n                    <a href="libros/loveinthetimeofcholera-detalle.html">Amor En Los Tiempos del Cólera</a> \n                  </details>\n                \n            </li>\n            <li>\n                <details>\n                    <summary>Ramayana</summary>\n                    <a href="libros/ramayana-detalle.html">Ramayana</a> \n                  </details>\n                \n            </li>\n            <li>\n                <details>\n                    <summary>The Castle</summary>\n                    <a href="libros/thecastle-detalle.html">Link al libro</a> \n                  </details>\n            </li>\n            <li>\n                <details>\n                    <summary>The Fatalist</summary>\n                    <a href="libros/thefatalist-detalles.html">Link al libro</a> \n                  </details>\n            </li>\n            <li>\n                <details>\n                    <summary>War and Peace</summary>\n                    <a href="libros/warandpeace-detalle.html">Link al libro</a> \n                  </details>\n            </li>\n        </ol>\n        ';
      return _this6;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-populares", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement7) {
    _inherits(e, _HTMLElement7);
    var _super7 = _createSuper(e);
    function e() {
      var _this7;
      _classCallCheck(this, e);
      _this7 = _super7.call(this), _this7.innerHTML = '\n        <header>\n            <a target= "_blank" href="index.html">Inicio</a>\n            <a target= "_blank" href="populares.html">Libros populares</a>\n            <a target= "_blank" href="nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n        </header>\n        \n        \n    <h1>Destino en el espacio</h1>\n\n        <p>Presiona play para reproducir música de fondo:</p>\n\n        <audio controls>\n        <source src="images/MakingWater.mp3" type="audio/mpeg">\n        Your browser does not support the audio element.\n        </audio>\n        \n        <br>\n        <br>\n        Progreso de la historia: <br>\n        <progress value = "2" max ="3"> </progress>\n\n        <h2>El valiente astronauta</h2>\n\n        <p>\n\n            El astronauta se arma de coraje para intentar crear el primer contacto con los alienígenas por lo que <br> \n            empieza a hacer lo que mejor sabe, seguir protocolos. Para salir a hacer una caminata espacial, se deben <br> \n            seguir unos protocolos muy rigurosos, los cuales Scott se sabe de memoria, y lo ha practicado cientos de veces <br>\n            en la Tierra, debido a esto, tiene mucha experiencia y lo puede hacer sin ningún problema en muy poco tiempo <br>\n            y en cuestión de 5 minutos ya estaba afuera. \n            <br>\n            Una vez afuera Scott se volvió a realizar muchas preguntas y poco a poco se fue sintiendo menos seguro en su decisión. \n                <br> - "Ok, estoy en el espacio, sin protección, con una nave espacial entera de una especie que no conozco ¿y no <br> \n                tengo nada que darle? ¿Qué tipo de seres creerán que somos? Honestamente se me olvidó que la primera impresión es lo <br>\n                que más cuenta, pero qué importa, ya estoy aquí. ¿Será que pueden verme? ¿Sabrán que estoy afuera intentando <br> \n                comunicarme con ellos?"\n                \n                "Creo que estoy perdiendo mi ti..eeem..p..ooo" -Dice Scott mientras queda dormido.\n\n        </p>\n\n\n\n        <h2>¿Continúa la historia?</h2>\n\n        <ul>\n            <li><a href="nave.html">Parte 3</a></li>\n            \n\n        </ul>\n\n        ';
      return _this7;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-valentia", e);
});
