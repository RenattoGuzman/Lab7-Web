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
      _this = _super.call(this), _this.innerHTML = '\n        <progress value = "2" max ="3"> </progress> \n    \n        <header>\n            <a href="../index.html">Inicio</a>\n            <a href="../populares.html">Libros populares</a>\n            <a href="../nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n        </header>\n        <h1>Beloved</h1>\n    \n        <figure>\n            <img src="../images/Beloved.jpg" alt="" class="slide-in-left">\n            <figcaption>Autor: Toni Morrison</figcaption>\n        </figure>\n    \n        <p>Beloved is a 1987 novel by American novelist <span>Toni Morrison</span>. Set in the period after the American Civil War, the novel tells the story of a dysfunctional family of formerly enslaved people whose Cincinnati home is haunted by a malevolent spirit. The narrative of Beloved derives from the life of Margaret Garner, an enslaved person in the slave state of Kentucky who escaped and fled to the free state of Ohio in 1856.\n        </p>\n    \n        <p>Garner was subject to capture under the Fugitive Slave Act of 1850, and when U.S. marshals broke into the cabin where she and her husband had barricaded themselves, she was attempting to kill her children—and had already killed her youngest daughter—in hopes of sparing them from being returned to slavery. Morrison\'s main inspiration for the novel was an account of the event titled "A Visit to the Slave Mother who Killed Her Child" in an 1856 newspaper article initially published in the American Baptist and reproduced in The Black Book, an anthology of texts of Black history and culture that Morrison had edited in 1974.[1]\n        </p>\n    \n        <p>The novel won the Pulitzer Prize for Fiction a year after its publication, and was a finalist for the 1987 National Book Award.[2][3] A survey of writers and literary critics compiled by The New York Times ranked it as the best work of American fiction from 1981 to 2006.[4] It was adapted as a 1998 movie of the same name, starring Oprah Winfrey.\n        </p>\n    \n        <footer>\n            <a href="../index.html">Regresar a Inicio</a>\n        </footer>\n     ';
      return _this;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-beloved", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement2) {
    _inherits(e, _HTMLElement2);
    var _super2 = _createSuper(e);
    function e() {
      var _this2;
      _classCallCheck(this, e);
      _this2 = _super2.call(this), _this2.innerHTML = '\n\n        <progress value = "2" max ="3"> </progress> \n    \n        <header>\n            <a href="../index.html">Inicio</a>\n            <a href="../populares.html">Libros populares</a>\n            <a href="../nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n        </header>\n        <h1>Ficciones</h1>\n    \n        <figure>\n            <img src="../images/Ficciones.jpg" alt="" class="slide-in-left">\n            <figcaption>Autor: Jorge Luis Borges</figcaption>\n        </figure>\n    \n        <p>Ficciones is a collection of short stories by Argentine writer and poet Jorge Luis Borges, originally written and published in Spanish between 1941 and 1956. Thirteen stories from Ficciones were first published by New Directions in the English-language anthology Labyrinths (1962). In the same year, Grove Press published the entirety of the book in English using the same title as in the original language. "The Approach to Al-Mu\'tasim" originally appeared published in A History of Eternity (Historia de la eternidad) (1936). Ficciones became Borges\'s most famous book and made him known worldwide.</p>\n    \n        <p>The book is dedicated to writer Esther Zemborain de Torres Duggan, a friend and collaborator of Borges\'s.\n        </p>\n    \n    \n        <footer>\n            <a href="../index.html">Regresar a Inicio</a>\n        </footer>\n         ';
      return _this2;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-ficcion", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement3) {
    _inherits(e, _HTMLElement3);
    var _super3 = _createSuper(e);
    function e() {
      var _this3;
      _classCallCheck(this, e);
      _this3 = _super3.call(this), _this3.innerHTML = '\n        <progress value = "2" max ="3"> </progress> \n    \n        <header>\n            <a href="../index.html">Inicio</a>\n            <a href="../populares.html">Libros populares</a>\n            <a href="../nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n        </header>\n        <h1>Amor En Los Tiempos del Cólera</h1>\n    \n        <figure>\n            <img src="../images/LoveInTheTimeOfCholera.jpg" alt="" class="slide-in-left">\n            <figcaption>Autor: Gabriel García Márquez</figcaption>\n        </figure>\n    \n        <p>The main characters of the novel are Florentino Ariza and Fermina Daza. Florentino and Fermina fall in love in their youth. A secret relationship blossoms between the two with the help of Fermina\'s Aunt Escolástica. They exchange love letters. But once Fermina\'s father, Lorenzo Daza, finds out about the two, he forces his daughter to stop seeing Florentino immediately. When she refuses, he and his daughter move in with his deceased wife\'s family in another city. Regardless of the distance, Fermina and Florentino continue to communicate via telegraph. Upon her return, Fermina realizes that her relationship with Florentino was nothing but a dream since they are practically strangers; she breaks off her engagement to Florentino and returns all his letters.\n        </p>\n    \n        <p>A young and accomplished national hero, Dr. Juvenal Urbino, meets Fermina and begins to court her. Despite her initial dislike of Urbino, Fermina gives in to her father\'s persuasion and the security and wealth Urbino offers, and they wed. Urbino is a physician devoted to science, modernity, and "order and progress". He is committed to the eradication of cholera and to the promotion of public works. He is a rational man whose life is organized precisely and who greatly values his importance and reputation in society. He is a herald of progress and modernization.\n        </p>\n    \n        <p>Even after Fermina\'s engagement and marriage, Florentino swore to stay faithful and wait for her; but his promiscuity gets the better of him and he has hundreds of affairs. Even with all the women he is with, he makes sure that Fermina will never find out. Meanwhile, Fermina and Urbino grow old together, going through happy years and unhappy ones and experiencing all the reality of marriage. Urbino proves in the end not to have been an entirely faithful husband, confessing one affair to Fermina many years into their marriage. Though the novel seems to suggest that Urbino\'s love for Fermina was never as spiritually chaste as Florentino\'s was, it also complicates Florentino\'s devotion by cataloging his many trysts as well as a few potentially genuine loves.\n        </p>\n    \n        <p>As an elderly man, Urbino attempts to get his pet parrot out of his mango tree, only to fall off the ladder he was standing on and die. After the funeral Florentino proclaims his love for Fermina once again and tells her he has stayed faithful to her all these years. Hesitant at first because she is only recently widowed, and finding his advances untoward, Fermina comes to recognize Florentino\'s wisdom and maturity, eventually gives him a second chance, and their love is allowed to blossom during their old age. They go on a steamship cruise up the river together.</p>\n    \n        <footer>\n            <a href="../index.html">Regresar a Inicio</a>\n        </footer>\n     ';
      return _this3;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-love", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement4) {
    _inherits(e, _HTMLElement4);
    var _super4 = _createSuper(e);
    function e() {
      var _this4;
      _classCallCheck(this, e);
      _this4 = _super4.call(this), _this4.innerHTML = '\n        <progress value = "2" max ="3"> </progress> \n    \n        <header>\n            <a href="../index.html">Inicio</a>\n            <a href="../populares.html">Libros populares</a>\n            <a href="../nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n        </header>\n        <h1>Ramayana</h1>\n    \n        <figure>\n            <img src="../images/Ramayana.jpg" alt="" class="slide-in-left">\n            <figcaption>Autor: Valmiki</figcaption>\n        </figure>\n    \n        <p>The Rāmāyana (/rɑːˈmɑːjənə/;[1][2] Sanskrit: रामायणम्,[3] IAST: Rāmāyaṇam) is a Sanskrit epic composed over a period of nearly a millennium, with scholars\' estimates for the earliest stage of the text ranging from the 8th to 4th centuries BCE,[4] and later stages extending up to the 3rd century CE.[5] Ramayana is one of the two important epics of Hinduism, the other being the Mahābhārata.[6]\n            <br><br>\n            The epic, traditionally ascribed to the Maharishi Valmiki, narrates the life of Sita, the Princess of Janakpur, and Rama, a legendary prince of Ayodhya city in the kingdom of Kosala. The epic follows his fourteen-year exile to the forest urged by his father King Dasharatha, on the request of Rama\'s stepmother Kaikeyi; his travels across forests in the Indian subcontinent with his wife Sita and brother Lakshmana, the kidnapping of Sita by Ravana – the king of Lanka, that resulted in war; and Rama\'s eventual return to Ayodhya to be crowned king amidst jubilation and celebration.\n        </p>\n    \n        <p>The Ramayana is one of the largest ancient epics in world literature. It consists of nearly 24,000 verses (mostly set in the Shloka/Anustubh meter), divided into seven Khanda (parts) the first and the seventh being later additions.[7] It belongs to the genre of Itihasa, narratives of past events (purāvṛtta), interspersed with teachings on the goals of human life.\n            <br><br>\n            There are many versions of Ramayana in Indian languages, besides Buddhist, Sikh and Jain adaptations. There are also Cambodian (Reamker), Indonesian, Filipino, Thai (Ramakien), Lao, Burmese and Malay versions of the tale.[note 1]\n            <br><br>\n            The Ramayana was an important influence on later Sanskrit poetry and the Hindu life and culture, and its main characters were fundamental to the cultural consciousness of a number of South-East Asian nations, both Hindu and Buddhist. Its most important moral influence was the importance of virtue, in the life of a citizen and in the ideals of the formation of a state (from Sanskrit: रामराज्य, IAST: Ramarajya - a utopian state where Rama is king) or of a functioning society.\n        </p>\n    \n    \n        <footer>\n            <a href="../index.html">Regresar a Inicio</a>\n        </footer>\n     ';
      return _this4;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-ramayana", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement5) {
    _inherits(e, _HTMLElement5);
    var _super5 = _createSuper(e);
    function e() {
      var _this5;
      _classCallCheck(this, e);
      _this5 = _super5.call(this), _this5.innerHTML = '\n        <progress value = "2" max ="3"> </progress> \n    \n        <header>\n            <a href="../index.html">Inicio</a>\n            <a href="../populares.html">Libros populares</a>\n            <a href="../nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n        </header>\n        <h1>The Castle</h1>\n    \n        <figure>\n            <img src="../images/TheCastle.jpg" alt="" class="slide-in-left">\n            <figcaption>Autor: Franz Kafka</figcaption>\n        </figure>\n    \n        <p>The Castle (German: Das Schloss, also spelled Das Schloß [das ˈʃlɔs]) is the last novel by Franz Kafka. In it a protagonist known only as "K." arrives in a village and struggles to gain access to the mysterious authorities who govern it from a castle supposedly owned by Count Westwest.\n    \n            Kafka died before he could finish the work and the novel was posthumously published against his wishes. Dark and at times surreal, The Castle is often understood to be about alienation, unresponsive bureaucracy, the frustration of trying to conduct business with non-transparent, seemingly arbitrary controlling systems, and the futile pursuit of an unobtainable goal.\n        </p>\n    \n        <footer>\n            <a href="../index.html">Regresar a Inicio</a>\n        </footer>\n     ';
      return _this5;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("the-castle", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement6) {
    _inherits(e, _HTMLElement6);
    var _super6 = _createSuper(e);
    function e() {
      var _this6;
      _classCallCheck(this, e);
      _this6 = _super6.call(this), _this6.innerHTML = ' \n        <progress value = "2" max ="3"> </progress> \n    \n        <header>\n            <a href="../index.html">Inicio</a>\n            <a href="../populares.html">Libros populares</a>\n            <a href="../nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n        </header>\n        <h1>The Fatalist</h1>\n    \n        <figure>\n            <img src="../images/TheFatalist.jpg" alt="" class="slide-in-left">\n            <figcaption>Autor: Denis Diderot</figcaption>\n        </figure>\n    \n    \n        <p>The main subject of the book is the relationship between the valet Jacques and his master, who is never named. The two are traveling to a destination the narrator leaves vague, and to dispel the boredom of the journey Jacques is compelled by his master to recount the story of his loves. However, Jacques\'s story is continually interrupted by other characters and various comic mishaps. Other characters in the book tell their own stories and they, too, are continually interrupted. There is even a "reader" who periodically interrupts the narrator with questions, objections, and demands for more information or detail. The tales told are usually humorous, with romance or sex as their subject matter, and feature complex characters indulging in deception.\n            <br><br>\n            Jacques\'s key philosophy is that everything that happens to us down here, whether for good or for evil, has been written up above ("tout ce qui nous arrive de bien et de mal ici-bas était écrit là-haut"), on a "great scroll" that is unrolled a little bit at a time. Yet Jacques still places value on his actions and is not a passive character. Critics such as J. Robert Loy have characterized Jacques\'s philosophy as not fatalism but determinism.[1]\n        </p>\n    \n        <p>The book is full of contradictory characters and other dualities. One story tells of two men in the army who are so much alike that, though they are the best of friends, they cannot stop dueling and wounding each other. Another concerns Father Hudson, an intelligent and effective reformer of the church who is privately the most debauched character in the book. Even Jacques and his master transcend their apparent roles, as Jacques proves, in his insolence, that his master cannot live without him, and therefore it is Jacques who is the master and the master who is the servant.\n            <br><br>\n            The story of Jacques\'s loves is lifted directly from Tristram Shandy, which Diderot makes no secret of, as the narrator at the end announces the insertion of an entire passage from Tristram Shandy into the story. Throughout the work, the narrator refers derisively to sentimental novels and calls attention to the ways in which events develop more realistically in his book. At other times, the narrator tires of the tedium of narration altogether and obliges the reader to supply certain trivial details.      \n        </p>\n    \n    \n        <footer>\n            <a href="../index.html">Regresar a Inicio</a>\n        </footer>\n    ';
      return _this6;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-fatal", e);
}), document.addEventListener("DOMContentLoaded", function () {
  var e = /*#__PURE__*/function (_HTMLElement7) {
    _inherits(e, _HTMLElement7);
    var _super7 = _createSuper(e);
    function e() {
      var _this7;
      _classCallCheck(this, e);
      _this7 = _super7.call(this), _this7.innerHTML = '\n\n        <progress value = "2" max ="3"> </progress> \n    \n        <header>\n            <a href="../index.html">Inicio</a>\n            <a href="../populares.html">Libros populares</a>\n            <a href="../nuevos-lanzamientos.html">Nuevos Lanzamientos</a>\n        </header>\n        <h1>War and Peace</h1>\n    \n        <figure>\n            <img src="../images/WarAndPeace.jpg" alt="" class="slide-in-left">\n            <figcaption>Autor: Leo Tolstoy</figcaption>\n        </figure>\n    \n        <p>War and Peace (Russian: Война и мир, romanized: Voyna i mir; pre-reform Russian: Война и миръ; [vɐjˈna i ˈmʲir]) is a literary work by the Russian author Leo Tolstoy that mixes fictional narrative with chapters on history and philosophy. It was first published serially, then published in its entirety in 1869. It is regarded as Tolstoy\'s finest literary achievement and remains an internationally praised classic of world literature.[1][2][3]\n            <br><br>\n            The novel chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society through the stories of five Russian aristocratic families. Portions of an earlier version, titled The Year 1805,[4] were serialized in The Russian Messenger from 1865 to 1867 before the novel was published in its entirety in 1869.[5]\n            <br><br>\n            Tolstoy said that the best Russian literature does not conform to standards and hence hesitated to classify War and Peace, saying it is "not a novel, even less is it a poem, and still less a historical chronicle". Large sections, especially the later chapters, are philosophical discussions rather than narrative.[6] He regarded Anna Karenina as his first true novel.\n        </p>\n    \n        <footer>\n            <a href="../index.html">Regresar a Inicio</a>\n        </footer>\n     ';
      return _this7;
    }
    return _createClass(e);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define("mi-war", e);
});
