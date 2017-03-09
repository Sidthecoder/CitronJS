(function(root, factory) {
  /* ======= Global Citron ======= */
  (typeof module === "object" && module.exports) ? module.exports = factory() : root.Citron = factory();
}(this, function() {
    //=require ../dist/citron.js
    return Citron;
}));
