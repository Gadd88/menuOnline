const u = (e) => {
    let { version: d } = e, t = "";
    return d == 1 && (t = m(e)), d == 2 && (t = p(e)), d == 3 && (t = x(e)), d == 4 && (t = h(e)), t;
  }, c = (e) => {
    let d = window.__OneFoodMenu__.allergens, t = "";
    return (e == null ? void 0 : e.length) == 0 || !e ? "" : (t += e.map((l) => `<div data-prod-allergen class="cursor-pointer flex-shrink-0 text-xs p-1 bg-slate-100 rounded-full border w-6 h-6 grid place-content-center">${d.find((o) => o.uid == l).name}</div>`).join(""), t);
  }, g = (e) => e.map((d) => ` <div data-prod-tag class="flex text-xs flex-shrink-0 px-2 py-1 rounded-full bg-green-600 bg-opacity-10 text-green-600">${d}</div>`).join("");
  let f = (e, d = !1) => {
    let t = window.__OneFoodMenu__.configs.priceSymbol, l = window.__OneFoodMenu__.configs.version, o = "";
    return e.map((n, i) => (o = "", (l == 1 || l == 2) && i >= 1 && !d || (o += `<div class="flex justify-between items-center border-t first:border-t-0 border-dashed border-gray-300 
              ${(l == 1 || l == 2) && !d ? "py-0" : "py-2"}">
                          
                          <div class="text-gray-500 text-sm">${n == null ? void 0 : n.size}</div>`, o += '<div class="flex gap-2 items-center">', n.salePrice ? (o += `<div class="text-gray-700 font-medium text-lg">
                                      ${t} ${n.salePrice}
                                  </div>`/* , o += `<div class="text-red-400 line-through opacity-70 text-sm">
                                      ${t} ${n.price}
                                  </div>` */) : o += `<div class="text-gray-700 font-medium text-lg">
                                      ${t} ${n.price}
                                  </div>`, (l == 1 || l == 2) && !d && e[1] && (o += '<span class="arrow-down rounded bg-slate-200"></span>'), o += "</div>", o += "</div>"), o)).join("");
  };
  const m = ({ products: e, categories: d }) => d.map((t) => {
    let l = "", o = "";
    return o = e[t.uid].map((n) => {
      let i = "";
      return i += `   <div class="1fm-product flex cursor-pointer rounded-xl bg-white flex-shrink-0 shadow h-44" data-product-block="${n.uid}" >`, i += `   <div class=" h-full w-40 image-bg image-bg-2 shrink-0 rounded-l-xl">
                                          <div class="image-bg h-full w-full rounded-l-xl" style="background-image: url(${n.imageUrl})"> </div>
                                      </div>`, i += '<div class="p-2.5 md:p-4 flex flex-col flex-grow overflow-hidden">', i += `<div class="font-bold mb-2">${n.name}</div>`, i += '<div class="flex gap-2 overflow-x-auto overflow-hidden max-w-full pb-2">', i += c(n.allergens), n.tags && (i += g(n.tags)), i += "</div>", i += `<div class="mt-auto opacity-60 leading-tight line-clamp-2 w-full hidden text-base">${n.description}</div>`, i += '<div class="pt-4">', n.options && (i += f(n.options)), i += "</div>", i += `   </div>
                          </div>`, i;
    }).join(""), l += `<div class="1fm-category my-6" data-category>
                          <h2 class="1fm-category-title text-2xl font-bold">${t.name}</h2> 
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2"> ${o} </div>
                      </div>`, l;
  }).join(""), p = ({ products: e, categories: d, priceSymbol: t }) => d.map((l) => {
    let o = "", n = "";
    return n = e[l.uid].map((i) => {
      var a, r;
      let s = "";
      return s += `<div class="1fm-product snap-center flex flex-col cursor-pointer rounded-xl bg-white flex-shrink-0 shadow w-72" data-product-block="${i.uid}" >`, s += `<div class="h-52 w-full image-bg image-bg-2 shrink-0 rounded-t-xl">
                                      <div class="image-bg h-full w-full rounded-t-xl" style="background-image: url(${i.imageUrl})"> </div>
                                  </div>`, s += '<div class="p-4 flex flex-col flex-grow">', s += `<div class="font-bold pb-2">${i.name}</div>`, (((a = i.allergens) == null ? void 0 : a.length) > 0 || ((r = i.tags) == null ? void 0 : r.length) > 0) && (s += '<div class="flex gap-2 overflow-x-auto overflow-hidden max-w-full my-2">', s += c(i.allergens), i.tags && (s += g(i.tags)), s += "</div>"), s += `<div class="opacity-60 leading-tight line-clamp-2 w-full mt-auto">${i.description}</div>`, s += '<div class="pt-4">', i.options && (s += f(i.options)), s += "</div>", s += `   </div>
                          </div>`, s;
    }).join(""), o += `<div class="1fm-category my-6 overflow-hidden relative" data-category>
                          <h2 class="1fm-category-title text-2xl font-bold">${l.name}</h2>
                          <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory py-6 px-1">${n}</div>
                      </div>`, o;
  }).join(""), x = ({ products: e, categories: d }) => d.map((t) => {
    let l = "", o = "";
    return o = e[t.uid].map((n) => {
      var s, a;
      let i = "";
      return i += '<div class="1fm-product bg-white rounded-md shadow p-4 md:p-6 flex flex-shrink-0 relative">', i += '<div class="w-full flex flex-col">', i += `<div class="font-bold mb-auto pb-2 text-2xl line-clamp-2">${n.name}</div>`, (((s = n.tags) == null ? void 0 : s.length) || ((a = n.allergens) == null ? void 0 : a.length)) && (i += '<div class="flex gap-2 overflow-x-auto overflow-hidden max-w-full py-2">', i += c(n.allergens), i += g(n.tags), i += "</div>"), i += `<div class="opacity-50 leading-tight w-full mb-2 text-lg">${n.description}</div>`, i += "<div>", n.options && (i += f(n.options)), i += "</div>", i += `</div>
                          </div>`, i;
    }).join(""), l += `<div class="1fm-category my-8 first:mt-0 py-5 bg-s rounded-md" data-category>
                          <h2 class="text-center text-2xl md:text-3xl mb-6 font-semibold uppercase p-4 w-full truncate">${t.name}</h2> 
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"> ${o} </div>
                      </div>`, l;
  }).join(""), h = ({ products: e, categories: d }) => `<div class="bg-white p-4 shadow rounded-md">${d.map((l) => {
    let o = "", n = "";
    return n = e[l.uid].map((i) => {
      var a, r;
      let s = "";
      return s += '<div class="1fm-product flex flex-shrink-0 p-2 md:p-4">', s += '<div class="w-full flex flex-col">', s += `<div class="font-bold mb-2 text-2xl line-clamp-2">${i.name}</div>`, (((a = i.tags) == null ? void 0 : a.length) || ((r = i.allergens) == null ? void 0 : r.length)) && (s += '<div class="flex gap-2 overflow-x-auto overflow-hidden max-w-full py-4">', s += c(i.allergens), s += g(i.tags), s += "</div>"), s += `<div class="opacity-50 italic leading-tight w-full mb-2 text-lg">${i.description}</div>`, s += "<div>", i.options && (s += f(i.options)), s += "</div>", s += `</div>
                          </div>`, s;
    }).join(""), o += `
                      <div class="1fm-category my-20 first:mt-10 max-w-[768px] mx-auto" data-category>
                          <h2 class="text-center text-2xl md:text-3xl mb-6 font-semibold uppercase bg-gray-50 border border-gray-400 p-4">${l.name}</h2> 
                          <div class="grid grid-cols-1 gap-6 gap-y-8"> ${n} </div>
                      </div>`, o;
  }).join("")}</div>`, w = (e) => {
    let { products: d } = window.__OneFoodMenu__, { version: t, priceSymbol: l } = window.__OneFoodMenu__.configs, o = d.filter((a) => a.uid === e), n = "";
    (t == 1 || t == 2) && (n = b(o));
    let i = y(n);
    document.body.classList.add("modal-open"), window.__OneFoodMenu__.nodes.menuModal.innerHTML = i, document.querySelectorAll("[data-close-modal]").forEach((a) => {
      a.addEventListener("click", (r) => {
        window.__OneFoodMenu__.nodes.menuModal.innerHTML = "", document.body.classList.remove("modal-open");
      });
    });
  }, b = (e, d) => {
    let t = e == null ? void 0 : e[0], l = "";
    return l += ` <div class="flex flex-col bg-white flex-shrink-0 rounded-t-xl">
                  ${(() => `<div class="h-80 w-full image-bg image-bg-2 shrink-0 border-b border-opacity-50">
              <div class="image-bg h-full w-full rounded-t-xl" style="background-image: url(${t.imageUrl})"></div>
          </div>`)()}
                  <div class="p-4 flex flex-col flex-grow">
                      <div class="font-bold my-2">${t.name}</div>`, l += '<div class="flex gap-2 flex-wrap overflow-hidden max-w-full pb-2">', l += c(t.allergens), t.tags && (l += g(t.tags)), l += "</div>", l += ` <div class="opacity-60 text leading-tight my-2">${t.description}</div>`, l += "<div>", t.options && (l += f(t.options, !0)), l += "</div>", l += "</div>", l += "</div>", l;
  }, y = (e) => ` <div class="modal fixed z-20 flex items-end justify-center top-0 left-0 w-full h-screen p-2 md:p-4 fade-in">
          <div class="modal-backdrop fixed h-full w-full min-h-screen top-0 left-0 bg-black bg-opacity-30" data-close-modal></div>
          <div class="modal-container bg-white rounded-xl z-10 m-auto w-full flex flex-col flex-1 max-h-full relative overflow-hidden max-w-[375px]">
              <div class="modal-close cursor-pointer bg-white text-black absolute text-opacity-80 transition-all p-2 rounded-full right-2 top-2" data-close-modal>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </div>
              <div class="modal-content overflow-y-auto h-full flex-1">
                  <div class="overflow-y-hidden">
                      ${e}
                  </div>
              </div>
          </div>
      </div>`, _ = () => {
    let { version: e } = window.__OneFoodMenu__.configs;
    (e == 1 || e == 2) && M();
  }, M = () => {
    document.addEventListener(
      "click",
      function(e) {
        let d = e.target, t = "data-product-block";
        for (; d != null; ) {
          if (d.hasAttribute(t)) {
            let l = d.getAttribute(t);
            w(l), d = null;
            return;
          }
          d = d.parentElement;
        }
      },
      !0
    );
  };
  function $() {
    return typeof window < "u";
  }
  function v(e, d) {
    let t = Object.assign({}, e);
    for (let l in d)
      typeof d[l] == "object" && d[l] !== null && l in e ? t[l] = v(e[l], d[l]) : t[l] = d[l];
    return t;
  }
  function k(e, d = "") {
    e.innerHTML = d;
  }
  function L(e) {
    let d = {}, t = [];
    return e.categories.forEach((l) => {
      d != null && d[l.uid] || (d[l.uid] = []), d[l.uid] = [
        ...e.products.filter((o) => o.categoryId === l.uid)
      ], d[l.uid].length && t.push(l);
    }), { groupedProducts: d, filteredCategories: t };
  }
  function O(e) {
    let t = `<div class="menu-allergens my-10">
                              <h3 class="text-2xl font-bold my-6">${window.__OneFoodMenu__.configs.allergens.title}</h3>
                              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">`;
    e.forEach((l) => {
      t += `  <div class="flex py-2 gap-x-4 items-center">
                                  <div class="overflow-hidden truncate flex-shrink-0 w-12 h-12 grid place-content-center bg-slate-200 rounded-full border-2 border-slate-400 font-medium text-slate-500">${l.name}</div>
                                  <div>${l.description}</div>
                              </div>`;
    }), t += "</div></div>", window.__OneFoodMenu__.nodes.menuAllergens.innerHTML = t;
  }
  function H(e = [], d = {}) {
    var s, a, r;
    if (!$())
      return;
    const t = document.getElementById("OneFoodMenu");
    if (t == null)
      return;
    (arguments == null ? void 0 : arguments.length) == 1 && (d = e, e = e == null ? void 0 : e.menu, delete d.menu);
    let l = {
      version: 1,
      priceSymbol: "$",
      allergens: {
        title: "Allergens",
        description: "Some description about allergens"
      }
    };
    if (l = v(l, d), Object.entries(e).length == 0 || ((s = e == null ? void 0 : e.products) == null ? void 0 : s.length) == 0 || ((a = e == null ? void 0 : e.categories) == null ? void 0 : a.length) == 0)
      return;
    window.__OneFoodMenu__ = {
      configs: l,
      products: e.products,
      categories: e.categories,
      allergens: (e == null ? void 0 : e.allergens) || null,
      nodes: {
        menuMain: t
      }
    }, T(t);
    let o = "", { groupedProducts: n, filteredCategories: i } = L(e);
    o = u({
      categories: i,
      products: n,
      version: l.version,
      priceSymbol: l.priceSymbol
    }), k(window.__OneFoodMenu__.nodes.menuItems, o), (r = e.allergens) != null && r.length && O(e.allergens), _();
  }
  const T = (e) => {
    e.innerHTML = "", [
      "Items",
      "Allergens",
      "Credits",
      "Modal"
    ].forEach((t) => {
      let l = document.createElement("div");
      l.id = `OneFoodMenu${t}`, window.__OneFoodMenu__.nodes["menu" + t] = l, t == "Credits" && (l.innerHTML = null), e.appendChild(l);
    });
  };
  export {
    H as createMenu
  };