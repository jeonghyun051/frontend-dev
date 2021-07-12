/* app module */
const App = function(){
    const app = {};
    app.textContent = "Hello World";
    return app;
}

module.exports = App; // 모듈에서는 하나만 내보낼 수 있다.

// /* app module */
// module.exports = function() {
//     const app = {};
//     app.textContent = "Hello World";

//     return app;
// }