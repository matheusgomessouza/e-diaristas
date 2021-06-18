(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_components_surfaces_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/components/surfaces/Header/Header */ "./src/ui/components/surfaces/Header/Header.tsx");
/* harmony import */ var ui_components_surfaces_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/components/surfaces/Footer/Footer */ "./src/ui/components/surfaces/Footer/Footer.tsx");
/* harmony import */ var ui_styles_pages_app_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/styles/pages/_app.style */ "./src/ui/styles/pages/_app.style.tsx");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styles/globals.css */ "./src/ui/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ui_themes_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ui/themes/theme */ "./src/ui/themes/theme.ts");


var _jsxFileName = "C:\\Users\\mathe\\OneDrive\\Documents\\Projects\\e-diaristas\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "/fonts/tw-icons/css/treinaweb-icons.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "E-diaristas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
      theme: ui_themes_theme__WEBPACK_IMPORTED_MODULE_7__.default,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_styles_pages_app_style__WEBPACK_IMPORTED_MODULE_4__.AppContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_surfaces_Header_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_surfaces_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/ui/components/surfaces/Footer/Footer.style.tsx":
/*!************************************************************!*\
  !*** ./src/ui/components/surfaces/Footer/Footer.style.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterStyled": function() { return /* binding */ FooterStyled; },
/* harmony export */   "FooterContainer": function() { return /* binding */ FooterContainer; },
/* harmony export */   "FooterTitle": function() { return /* binding */ FooterTitle; },
/* harmony export */   "AppList": function() { return /* binding */ AppList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\mathe\\OneDrive\\Documents\\Projects\\e-diaristas\\src\\ui\\components\\surfaces\\Footer\\Footer.style.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const FooterStyled = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.styled)('footer')`
  background-color: ${({
  theme
}) => theme.palette.primary.main};
  color: ${({
  theme
}) => theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({
  theme
}) => theme.spacing(4)} 0;
  margin-top: auto;
`;
const FooterContainer = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({
  theme
}) => theme.spacing(2)};
  flex-wrap: wrap; //Quando não tiver mais espaço irá jogar os elementos para baixo
  ${({
  theme
}) => theme.breakpoints.down('md')} {
    gap: ${({
  theme
}) => theme.spacing(5)};
  }
`;
const FooterTitle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, _objectSpread({
  component: 'h2',
  variant: 'body2'
}, props), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 23,
  columnNumber: 3
}, undefined))`
  font-weight: bold;
`;
const AppList = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.styled)('ul')`
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: ${({
  theme
}) => theme.spacing()};

  img {
    width: 122px;
  }
`;

/***/ }),

/***/ "./src/ui/components/surfaces/Footer/Footer.tsx":
/*!******************************************************!*\
  !*** ./src/ui/components/surfaces/Footer/Footer.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.style */ "./src/ui/components/surfaces/Footer/Footer.style.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\mathe\\OneDrive\\Documents\\Projects\\e-diaristas\\src\\ui\\components\\surfaces\\Footer\\Footer.tsx";




const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer_style__WEBPACK_IMPORTED_MODULE_2__.FooterStyled, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer_style__WEBPACK_IMPORTED_MODULE_2__.FooterContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
        sx: {
          maxWidth: '400px'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer_style__WEBPACK_IMPORTED_MODULE_2__.FooterTitle, {
          children: "Quem Somos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          variant: 'body2',
          sx: {
            mt: 2
          },
          children: "E-diaristas te ajuda a encontrar um profissional perfeito para realizar a limpeza da sua casa. Garantimos os melhores profissionais no ramo com total seguran\xE7a e praticidade! S\xE3o milhares de clientes satisfeitos por todo o pa\xEDs."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer_style__WEBPACK_IMPORTED_MODULE_2__.FooterTitle, {
          children: "Baixe nossos aplicativos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer_style__WEBPACK_IMPORTED_MODULE_2__.AppList, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: '/',
              target: '_blank',
              rel: 'noopener noreferrer',
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: '/img/logos/app-store.png',
                alt: "AppStore"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: '/',
              target: '_blank',
              rel: 'noopener noreferrer',
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: '/img/logos/google-play.png',
                alt: "Google Play"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/ui/components/surfaces/Header/Header.style.tsx":
/*!************************************************************!*\
  !*** ./src/ui/components/surfaces/Header/Header.style.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderAppBar": function() { return /* binding */ HeaderAppBar; },
/* harmony export */   "HeaderLogo": function() { return /* binding */ HeaderLogo; }
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);


const HeaderAppBar = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AppBar)`
  background-color: ${({
  theme
}) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  ${({
  theme
}) => theme.breakpoints.up('md')} {
    .MuiToolbar-root {
      height: 100px;
    }
  }

  ${({
  theme
}) => theme.breakpoints.down('md')} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;
const HeaderLogo = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.styled)('img')`
  height: 25px;

  ${({
  theme
}) => theme.breakpoints.up('md')} {
      height: 47px;
  }
`;

/***/ }),

/***/ "./src/ui/components/surfaces/Header/Header.tsx":
/*!******************************************************!*\
  !*** ./src/ui/components/surfaces/Header/Header.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.style */ "./src/ui/components/surfaces/Header/Header.style.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\mathe\\OneDrive\\Documents\\Projects\\e-diaristas\\src\\ui\\components\\surfaces\\Header\\Header.tsx";




const Header = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_style__WEBPACK_IMPORTED_MODULE_2__.HeaderAppBar, {
    position: 'sticky',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_style__WEBPACK_IMPORTED_MODULE_2__.HeaderLogo, {
        src: '/img/logos/logo.svg',
        alt: 'E-diaristas'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/ui/styles/pages/_app.style.tsx":
/*!********************************************!*\
  !*** ./src/ui/styles/pages/_app.style.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContainer": function() { return /* binding */ AppContainer; }
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const AppContainer = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.styled)('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

/***/ }),

/***/ "./src/ui/themes/theme.ts":
/*!********************************!*\
  !*** ./src/ui/themes/theme.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    primary: {
      light: '#9661ff',
      main: '#6B2AEE',
      dark: '#581ECD'
    },
    secondary: {
      light: '#2bfff2',
      main: '#02E7D9',
      dark: '#1dd6cb'
    },
    text: {
      primary: '#707070',
      secondary: '#9B9B9B'
    },
    error: {
      main: '#FC3C00'
    },
    warning: {
      main: '#FCA600'
    },
    success: {
      main: '#00D34D'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F0F0F0',
      200: '#D7D9DD',
      300: '#C4C4C4',
      400: '#9B9B9B'
    }
  },
  typography: {
    fontFamily: 'Poppins'
  },
  shape: {
    borderRadius: '3px'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      },
      variants: [{
        props: {
          variant: 'contained',
          color: 'secondary'
        },
        style: {
          color: 'white'
        }
      }]
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)'
        }
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/ui/styles/globals.css":
/*!***********************************!*\
  !*** ./src/ui/styles/globals.css ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWRpYXJpc3Rhcy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9lLWRpYXJpc3Rhcy8uL3NyYy91aS9jb21wb25lbnRzL3N1cmZhY2VzL0Zvb3Rlci9Gb290ZXIuc3R5bGUudHN4Iiwid2VicGFjazovL2UtZGlhcmlzdGFzLy4vc3JjL3VpL2NvbXBvbmVudHMvc3VyZmFjZXMvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vZS1kaWFyaXN0YXMvLi9zcmMvdWkvY29tcG9uZW50cy9zdXJmYWNlcy9IZWFkZXIvSGVhZGVyLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly9lLWRpYXJpc3Rhcy8uL3NyYy91aS9jb21wb25lbnRzL3N1cmZhY2VzL0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL2UtZGlhcmlzdGFzLy4vc3JjL3VpL3N0eWxlcy9wYWdlcy9fYXBwLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly9lLWRpYXJpc3Rhcy8uL3NyYy91aS90aGVtZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vZS1kaWFyaXN0YXMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2UtZGlhcmlzdGFzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vZS1kaWFyaXN0YXMvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9lLWRpYXJpc3Rhcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZS1kaWFyaXN0YXMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwiRm9vdGVyU3R5bGVkIiwic3R5bGVkIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiZ2V0Q29udHJhc3RUZXh0Iiwic3BhY2luZyIsIkZvb3RlckNvbnRhaW5lciIsIkNvbnRhaW5lciIsImJyZWFrcG9pbnRzIiwiZG93biIsIkZvb3RlclRpdGxlIiwicHJvcHMiLCJBcHBMaXN0IiwiRm9vdGVyIiwibWF4V2lkdGgiLCJtdCIsIkhlYWRlckFwcEJhciIsIkFwcEJhciIsImJhY2tncm91bmQiLCJwYXBlciIsInVwIiwiSGVhZGVyTG9nbyIsIkhlYWRlciIsIkFwcENvbnRhaW5lciIsImNyZWF0ZVRoZW1lIiwibGlnaHQiLCJkYXJrIiwic2Vjb25kYXJ5IiwidGV4dCIsImVycm9yIiwid2FybmluZyIsInN1Y2Nlc3MiLCJncmV5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsImNvbXBvbmVudHMiLCJNdWlCdXR0b24iLCJzdHlsZU92ZXJyaWRlcyIsInJvb3QiLCJ0ZXh0VHJhbnNmb3JtIiwidmFyaWFudHMiLCJ2YXJpYW50IiwiY29sb3IiLCJzdHlsZSIsIk11aVBhcGVyIiwiYm94U2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLHFMQURQO0FBRUUsV0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBTUU7QUFBTSxZQUFJLEVBQUMseUNBQVg7QUFBcUQsV0FBRyxFQUFDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFXRSw4REFBQyw0REFBRDtBQUFlLFdBQUssRUFBRUMsb0RBQXRCO0FBQUEsNkJBQ0UsOERBQUMsbUVBQUQ7QUFBQSxnQ0FDRSw4REFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UsOERBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQSxrQkFERjtBQXFCRDs7QUFFRCwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUVPLE1BQU1JLFlBQVksR0FBR0MsZ0VBQU0sQ0FBQyxRQUFELENBQVc7QUFDN0Msc0JBQXNCLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUFkLENBQXNCQyxJQUFLO0FBQ2hFLFdBQVcsQ0FBQztBQUFFTDtBQUFGLENBQUQsS0FDUEEsS0FBSyxDQUFDRyxPQUFOLENBQWNHLGVBQWQsQ0FBOEJOLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUFkLENBQXNCQyxJQUFwRCxDQUEwRDtBQUM5RCxhQUFhLENBQUM7QUFBRUw7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDN0M7QUFDQSxDQU5PO0FBUUEsTUFBTUMsZUFBZSxHQUFHTixnRUFBTSxDQUFDTyx3REFBRCxDQUFZO0FBQ2pEO0FBQ0E7QUFDQSxTQUFTLENBQUM7QUFBRVQ7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDekM7QUFDQSxJQUFJLENBQUM7QUFBRVA7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1UsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBNkI7QUFDaEQsV0FBVyxDQUFDO0FBQUVYO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQzNDO0FBQ0EsQ0FSTztBQVVBLE1BQU1LLFdBQVcsR0FBR1YsZ0VBQU0sQ0FBRVcsS0FBRCxpQkFDaEMsOERBQUMseURBQUQ7QUFBWSxXQUFTLEVBQUUsSUFBdkI7QUFBNkIsU0FBTyxFQUFFO0FBQXRDLEdBQW1EQSxLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRCtCLENBRTlCO0FBQ0g7QUFDQSxDQUpPO0FBTUEsTUFBTUMsT0FBTyxHQUFHWixnRUFBTSxDQUFDLElBQUQsQ0FBTztBQUNwQztBQUNBO0FBQ0E7QUFDQSxTQUFTLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ08sT0FBTixFQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVE8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JQO0FBRUE7QUFDQTs7QUFFQSxNQUFNUSxNQUFnQixHQUFHLE1BQU07QUFDN0Isc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSwyQkFDRSw4REFBQywwREFBRDtBQUFBLDhCQUVFLDhEQUFDLGtEQUFEO0FBQUssVUFBRSxFQUFFO0FBQUVDLGtCQUFRLEVBQUU7QUFBWixTQUFUO0FBQUEsZ0NBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUUsT0FBckI7QUFBOEIsWUFBRSxFQUFFO0FBQUVDLGNBQUUsRUFBQztBQUFMLFdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVlFO0FBQUEsZ0NBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxrREFBRDtBQUFBLGtDQUNFO0FBQUEsbUNBQ0U7QUFBRyxrQkFBSSxFQUFFLEdBQVQ7QUFBYyxvQkFBTSxFQUFFLFFBQXRCO0FBQWdDLGlCQUFHLEVBQUUscUJBQXJDO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFFLDBCQUFWO0FBQXNDLG1CQUFHLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBTUU7QUFBQSxtQ0FDRTtBQUFHLGtCQUFJLEVBQUUsR0FBVDtBQUFjLG9CQUFNLEVBQUUsUUFBdEI7QUFBZ0MsaUJBQUcsRUFBRSxxQkFBckM7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUUsNEJBQVY7QUFBd0MsbUJBQUcsRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQ0QsQ0FsQ0Q7O0FBb0NBLCtEQUFlRixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFFTyxNQUFNRyxZQUFZLEdBQUdoQixnRUFBTSxDQUFDaUIscURBQUQsQ0FBUztBQUMzQyxzQkFBc0IsQ0FBQztBQUFFbkI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csT0FBTixDQUFjaUIsVUFBZCxDQUF5QkMsS0FBTTtBQUNwRTtBQUNBO0FBQ0EsSUFBSSxDQUFDO0FBQUVyQjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDVSxXQUFOLENBQWtCWSxFQUFsQixDQUFxQixJQUFyQixDQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDO0FBQUV0QjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDVSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FoQk87QUFrQkEsTUFBTVksVUFBVSxHQUFHckIsZ0VBQU0sQ0FBQyxLQUFELENBQVE7QUFDeEM7QUFDQTtBQUNBLElBQUksQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDVSxXQUFOLENBQWtCWSxFQUFsQixDQUFxQixJQUFyQixDQUEyQjtBQUM5QztBQUNBO0FBQ0EsQ0FOTyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQlA7QUFFQTtBQUNBOztBQUVBLE1BQU1FLE1BQWdCLEdBQUcsTUFBTTtBQUM3QixzQkFDRSw4REFBQyx1REFBRDtBQUFjLFlBQVEsRUFBRSxRQUF4QjtBQUFBLDJCQUNFLDhEQUFDLHNEQUFEO0FBQVMsZUFBUyxFQUFFZix3REFBcEI7QUFBQSw2QkFDRSw4REFBQyxxREFBRDtBQUFZLFdBQUcsRUFBRSxxQkFBakI7QUFBd0MsV0FBRyxFQUFFO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FSRDs7QUFVQSwrREFBZWUsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBRU8sTUFBTUMsWUFBWSxHQUFHdkIsZ0VBQU0sQ0FBQyxLQUFELENBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsQ0FKTyxDOzs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBRUEsTUFBTUYsS0FBSyxHQUFHMEIsOERBQVcsQ0FBQztBQUN4QnZCLFNBQU8sRUFBRTtBQUNMQyxXQUFPLEVBQUU7QUFDTHVCLFdBQUssRUFBRSxTQURGO0FBRUx0QixVQUFJLEVBQUUsU0FGRDtBQUdMdUIsVUFBSSxFQUFFO0FBSEQsS0FESjtBQU1MQyxhQUFTLEVBQUU7QUFDUEYsV0FBSyxFQUFFLFNBREE7QUFFUHRCLFVBQUksRUFBRSxTQUZDO0FBR1B1QixVQUFJLEVBQUU7QUFIQyxLQU5OO0FBV0xFLFFBQUksRUFBRTtBQUNGMUIsYUFBTyxFQUFFLFNBRFA7QUFFRnlCLGVBQVMsRUFBRTtBQUZULEtBWEQ7QUFlTEUsU0FBSyxFQUFFO0FBQ0gxQixVQUFJLEVBQUU7QUFESCxLQWZGO0FBa0JMMkIsV0FBTyxFQUFFO0FBQ0wzQixVQUFJLEVBQUU7QUFERCxLQWxCSjtBQXFCTDRCLFdBQU8sRUFBRTtBQUNMNUIsVUFBSSxFQUFFO0FBREQsS0FyQko7QUF3Qkw2QixRQUFJLEVBQUU7QUFDRixVQUFJLFNBREY7QUFFRixXQUFLLFNBRkg7QUFHRixXQUFLLFNBSEg7QUFJRixXQUFLLFNBSkg7QUFLRixXQUFLO0FBTEg7QUF4QkQsR0FEZTtBQWlDeEJDLFlBQVUsRUFBRTtBQUNSQyxjQUFVLEVBQUU7QUFESixHQWpDWTtBQW9DeEJDLE9BQUssRUFBRTtBQUNIQyxnQkFBWSxFQUFFO0FBRFgsR0FwQ2lCO0FBdUN4QkMsWUFBVSxFQUFFO0FBQ1JDLGFBQVMsRUFBRTtBQUNQQyxvQkFBYyxFQUFFO0FBQ1pDLFlBQUksRUFBRTtBQUNGQyx1QkFBYSxFQUFFO0FBRGI7QUFETSxPQURUO0FBTVBDLGNBQVEsRUFBRSxDQUNOO0FBQ0kvQixhQUFLLEVBQUU7QUFBRWdDLGlCQUFPLEVBQUUsV0FBWDtBQUF3QkMsZUFBSyxFQUFFO0FBQS9CLFNBRFg7QUFFSUMsYUFBSyxFQUFFO0FBQ0hELGVBQUssRUFBRTtBQURKO0FBRlgsT0FETTtBQU5ILEtBREg7QUFnQlJFLFlBQVEsRUFBRTtBQUNOUCxvQkFBYyxFQUFFO0FBQ1pDLFlBQUksRUFBRTtBQUNGTyxtQkFBUyxFQUFFO0FBRFQ7QUFETTtBQURWO0FBaEJGO0FBdkNZLENBQUQsQ0FBekI7QUFpRUEsK0RBQWVqRCxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICd1aS9jb21wb25lbnRzL3N1cmZhY2VzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICd1aS9jb21wb25lbnRzL3N1cmZhY2VzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSAndWkvc3R5bGVzL3BhZ2VzL19hcHAuc3R5bGUnO1xuXG5pbXBvcnQgJ0BzdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHRoZW1lIGZyb20gJ3VpL3RoZW1lcy90aGVtZSc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmsgXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwXCIgXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiIFxuICAgICAgICAvPlxuICAgICAgICA8bGluayBocmVmPVwiL2ZvbnRzL3R3LWljb25zL2Nzcy90cmVpbmF3ZWItaWNvbnMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cbiAgICAgICAgPHRpdGxlPkUtZGlhcmlzdGFzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyU3R5bGVkID0gc3R5bGVkKCdmb290ZXInKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiBcclxuICAgIHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluKX07XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nKDQpfSAwO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcoMil9O1xyXG4gIGZsZXgtd3JhcDogd3JhcDsgLy9RdWFuZG8gbsOjbyB0aXZlciBtYWlzIGVzcGHDp28gaXLDoSBqb2dhciBvcyBlbGVtZW50b3MgcGFyYSBiYWl4b1xyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKX0ge1xyXG4gICAgZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcoNSl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJUaXRsZSA9IHN0eWxlZCgocHJvcHMpID0+IChcclxuICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9eydoMid9IHZhcmlhbnQ9eydib2R5Mid9IHsuLi5wcm9wc30gLz5cclxuKSlgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwTGlzdCA9IHN0eWxlZCgndWwnKWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGdhcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nKCl9O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEyMnB4O1xyXG4gIH1cclxuYDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgRm9vdGVyU3R5bGVkLCBGb290ZXJDb250YWluZXIsIEZvb3RlclRpdGxlLCBBcHBMaXN0IH0gZnJvbSAnLi9Gb290ZXIuc3R5bGUnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9vdGVyU3R5bGVkPlxyXG4gICAgICA8Rm9vdGVyQ29udGFpbmVyPlxyXG5cclxuICAgICAgICA8Qm94IHN4PXt7IG1heFdpZHRoOiAnNDAwcHgnIH19PlxyXG4gICAgICAgICAgPEZvb3RlclRpdGxlPlF1ZW0gU29tb3M8L0Zvb3RlclRpdGxlPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J2JvZHkyJ30gc3g9e3sgbXQ6Mn19PlxyXG4gICAgICAgICAgICBFLWRpYXJpc3RhcyB0ZSBhanVkYSBhIGVuY29udHJhciB1bSBwcm9maXNzaW9uYWwgcGVyZmVpdG9cclxuICAgICAgICAgICAgcGFyYSByZWFsaXphciBhIGxpbXBlemEgZGEgc3VhIGNhc2EuIEdhcmFudGltb3Mgb3MgbWVsaG9yZXNcclxuICAgICAgICAgICAgcHJvZmlzc2lvbmFpcyBubyByYW1vIGNvbSB0b3RhbCBzZWd1cmFuw6dhIGUgcHJhdGljaWRhZGUhIFPDo28gbWlsaGFyZXMgXHJcbiAgICAgICAgICAgIGRlIGNsaWVudGVzIHNhdGlzZmVpdG9zIHBvciB0b2RvIG8gcGHDrXMuXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Rm9vdGVyVGl0bGU+QmFpeGUgbm9zc29zIGFwbGljYXRpdm9zPC9Gb290ZXJUaXRsZT5cclxuICAgICAgICAgIDxBcHBMaXN0PlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17Jy8nfSB0YXJnZXQ9eydfYmxhbmsnfSByZWw9eydub29wZW5lciBub3JlZmVycmVyJ30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWcvbG9nb3MvYXBwLXN0b3JlLnBuZyd9IGFsdD1cIkFwcFN0b3JlXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPXsnLyd9IHRhcmdldD17J19ibGFuayd9IHJlbD17J25vb3BlbmVyIG5vcmVmZXJyZXInfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltZy9sb2dvcy9nb29nbGUtcGxheS5wbmcnfSBhbHQ9XCJHb29nbGUgUGxheVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9BcHBMaXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9Gb290ZXJDb250YWluZXI+XHJcbiAgICA8L0Zvb3RlclN0eWxlZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQXBwQmFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckFwcEJhciA9IHN0eWxlZChBcHBCYXIpYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyfTtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpfSB7XHJcbiAgICAuTXVpVG9vbGJhci1yb290IHtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKX0ge1xyXG4gICAgLk11aVRvb2xiYXItcm9vdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJMb2dvID0gc3R5bGVkKCdpbWcnKWBcclxuICBoZWlnaHQ6IDI1cHg7XHJcblxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyl9IHtcclxuICAgICAgaGVpZ2h0OiA0N3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXJBcHBCYXIsIEhlYWRlckxvZ28gfSBmcm9tICcuL0hlYWRlci5zdHlsZSc7XHJcbmltcG9ydCB7IFRvb2xiYXIsIENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXJBcHBCYXIgcG9zaXRpb249eydzdGlja3knfT5cclxuICAgICAgPFRvb2xiYXIgY29tcG9uZW50PXtDb250YWluZXJ9ID5cclxuICAgICAgICA8SGVhZGVyTG9nbyBzcmM9eycvaW1nL2xvZ29zL2xvZ28uc3ZnJ30gYWx0PXsnRS1kaWFyaXN0YXMnfS8+XHJcbiAgICAgIDwvVG9vbGJhcj5cclxuICAgIDwvSGVhZGVyQXBwQmFyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5gOyIsImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICBsaWdodDogJyM5NjYxZmYnLFxyXG4gICAgICAgICAgbWFpbjogJyM2QjJBRUUnLFxyXG4gICAgICAgICAgZGFyazogJyM1ODFFQ0QnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICAgIGxpZ2h0OiAnIzJiZmZmMicsXHJcbiAgICAgICAgICBtYWluOiAnIzAyRTdEOScsXHJcbiAgICAgICAgICBkYXJrOiAnIzFkZDZjYicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRleHQ6IHtcclxuICAgICAgICAgIHByaW1hcnk6ICcjNzA3MDcwJyxcclxuICAgICAgICAgIHNlY29uZGFyeTogJyM5QjlCOUInLFxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgbWFpbjogJyNGQzNDMDAnLFxyXG4gICAgICB9LFxyXG4gICAgICB3YXJuaW5nOiB7XHJcbiAgICAgICAgICBtYWluOiAnI0ZDQTYwMCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgICAgIG1haW46ICcjMDBEMzREJyxcclxuICAgICAgfSxcclxuICAgICAgZ3JleToge1xyXG4gICAgICAgICAgNTA6ICcjRkFGQUZBJyxcclxuICAgICAgICAgIDEwMDogJyNGMEYwRjAnLFxyXG4gICAgICAgICAgMjAwOiAnI0Q3RDlERCcsXHJcbiAgICAgICAgICAzMDA6ICcjQzRDNEM0JyxcclxuICAgICAgICAgIDQwMDogJyM5QjlCOUInLFxyXG4gICAgICB9LFxyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgICBmb250RmFtaWx5OiAnUG9wcGlucycsXHJcbiAgfSxcclxuICBzaGFwZToge1xyXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgICBNdWlCdXR0b246IHtcclxuICAgICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YXJpYW50czogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgcHJvcHM6IHsgdmFyaWFudDogJ2NvbnRhaW5lZCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9LFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIE11aVBhcGVyOiB7XHJcbiAgICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMHB4IDBweCAzOXB4IHJnYmEoMCwgMCwgMCwgMC4wNSknLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9