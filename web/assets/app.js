/* AgriMarket - interacciones mínimas para la maquetación HTML/CSS */
(function () {
  "use strict";

  var ICONS = {
    leaf:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 4 13c0-6 5-9 16-9 0 11-3 16-9 16Z"/><path d="M4 21c3-6 7-9 13-11"/></svg>',
    store:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/><path d="M3 9h18"/></svg>',
    cart:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M2 3h3l2.4 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 7H6"/></svg>',
    panel:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>',
    user:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
    logout:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
    menu:
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    close:
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    search:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
    check:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>',
    pin:
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    shield:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M9 12l2 2 4-4"/></svg>',
    truck:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    heart:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
    arrow:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>'
  };

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function money(n) {
    return "$" + Number(n || 0).toLocaleString("es-CO");
  }

  function getPage() {
    return document.body.getAttribute("data-page") || "inicio";
  }

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem("agrimarket_cart") || "[]");
    } catch (e) {
      return [];
    }
  }

  function saveCart(items) {
    localStorage.setItem("agrimarket_cart", JSON.stringify(items));
  }

  function cartCount() {
    return getCart().reduce(function (s, i) {
      return s + Number(i.cant || 0);
    }, 0);
  }

  function ensureCart() {
    if (getPage() === "solicitud" && getCart().length === 0) {
      saveCart([
        { nombre: "Plátano hartón", precio: 2500, unidad: "kg", emoji: "🍌", cant: 2 },
        { nombre: "Yuca", precio: 1800, unidad: "kg", emoji: "🥔", cant: 1 }
      ]);
    }
  }

  function renderHeader() {
    var page = getPage();
    var count = cartCount();
    var isLogged = false;
    try {
      isLogged = Boolean(JSON.parse(localStorage.getItem("agrimarket_user") || "null"));
    } catch (e) {
      isLogged = false;
    }

    function active(name) {
      return page === name ? " class=\"activo\"" : "";
    }

    var html =
      '<header class="site-header">' +
      '  <div class="barra">' +
      '    <a class="logo" href="index.html" aria-label="AgriMarket, ir al inicio">' +
      ICONS.leaf +
      "      Agri<span>Market</span>" +
      "    </a>" +
      '    <button class="menu-btn" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav-principal">' +
      ICONS.menu +
      "    </button>" +
      '    <nav class="nav" id="nav-principal" aria-label="Navegación principal">' +
      '      <a href="index.html"' + active("inicio") + ">" + ICONS.store + " Inicio</a>" +
      '      <a href="catalogo.html"' + active("catalogo") + ">Catálogo</a>" +
      '      <a href="panel.html"' + active("panel") + ">" + ICONS.panel + " Mi panel</a>" +
      '      <a href="solicitud.html"' + active("solicitud") + ">" + ICONS.cart + " Carrito (" + count + ")</a>" +
      (isLogged
        ? '      <button class="salir" type="button" id="btn-salir">' + ICONS.logout + " Salir</button>"
        : '      <a href="login.html"' + active("login") + ">" + ICONS.user + " Ingresar</a>") +
      "    </nav>" +
      "  </div>" +
      "</header>";

    var mount = qs("#site-header");
    if (mount) mount.innerHTML = html;

    var menu = qs(".menu-btn");
    var nav = qs(".nav");
    if (menu && nav) {
      menu.addEventListener("click", function () {
        var open = nav.classList.toggle("abierto");
        menu.setAttribute("aria-expanded", String(open));
        menu.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
        menu.innerHTML = open ? ICONS.close : ICONS.menu;
      });
    }

    var salir = qs("#btn-salir");
    if (salir) {
      salir.addEventListener("click", function () {
        localStorage.removeItem("agrimarket_user");
        window.location.href = "login.html";
      });
    }
  }

  function renderFooter() {
    var mount = qs("#site-footer");
    if (!mount) return;
    mount.innerHTML =
      '<footer class="site-footer">' +
      '  <div class="links">' +
      '    <a href="index.html">Inicio</a>' +
      '    <a href="catalogo.html">Catálogo</a>' +
      '    <a href="ui-kit.html">UI Kit</a>' +
      '    <a href="wireframes.html">Wireframes</a>' +
      '    <a href="user-flow.html">User Flow</a>' +
      '    <a href="journey.html">Customer Journey</a>' +
      "  </div>" +
      "  <div>AgriMarket · Prototipo visual del MVP · Purísima, Córdoba · 2026</div>" +
      "</footer>";
  }

  function toast(msg, isError) {
    var wrap = qs(".toast-wrap");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "toast-wrap";
      document.body.appendChild(wrap);
    }
    var el = document.createElement("div");
    el.className = "toast" + (isError ? " error" : "");
    el.setAttribute("role", "status");
    el.textContent = msg;
    wrap.appendChild(el);
    setTimeout(function () {
      el.remove();
    }, 3200);
  }

  function initCatalog() {
    var grid = qs("#grid-catalogo");
    if (!grid) return;

    var search = qs("#buscar-producto");
    var chips = qsa(".cat button");
    var count = qs("#resultados");
    var sort = qs("#ordenar");
    var empty = qs("#sin-resultados");
    var cards = qsa(".producto-card", grid);
    var currentCat = "Todos";

    function apply() {
      var term = (search ? search.value : "").trim().toLowerCase();
      var visible = 0;

      cards.forEach(function (card) {
        var cat = card.getAttribute("data-categoria") || "";
        var text = (card.getAttribute("data-nombre") + " " + card.getAttribute("data-productor")).toLowerCase();
        var okCat = currentCat === "Todos" || cat === currentCat;
        var okText = !term || text.indexOf(term) !== -1;
        var show = okCat && okText;
        card.classList.toggle("oculto", !show);
        if (show) visible++;
      });

      if (count) count.textContent = visible + (visible === 1 ? " producto encontrado" : " productos encontrados");
      if (empty) empty.classList.toggle("oculto", visible !== 0);

      if (sort) {
        var mode = sort.value;
        if (mode !== "recomendado") {
          var sorted = cards.slice().sort(function (a, b) {
            if (mode === "precio-asc") return Number(a.getAttribute("data-precio")) - Number(b.getAttribute("data-precio"));
            if (mode === "precio-desc") return Number(b.getAttribute("data-precio")) - Number(a.getAttribute("data-precio"));
            return a.getAttribute("data-nombre").localeCompare(b.getAttribute("data-nombre"), "es");
          });
          sorted.forEach(function (c) {
            grid.appendChild(c);
          });
        }
      }
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) {
          c.classList.remove("activo");
          c.setAttribute("aria-pressed", "false");
        });
        chip.classList.add("activo");
        chip.setAttribute("aria-pressed", "true");
        currentCat = chip.getAttribute("data-cat");
        apply();
      });
    });

    if (search) search.addEventListener("input", apply);
    if (sort) sort.addEventListener("change", apply);
    var btn = qs("#btn-buscar");
    if (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        apply();
      });
    }
    apply();
  }

  function initDetail() {
    var qty = qs("#cantidad");
    if (!qty) return;
    var minus = qs("#menos");
    var plus = qs("#mas");
    var total = qs("#total-linea");
    var price = Number(qs("#detalle-producto") ? qs("#detalle-producto").getAttribute("data-precio") : 0);

    function update() {
      var n = Math.max(1, parseInt(qty.value, 10) || 1);
      qty.value = n;
      if (total) total.textContent = money(price * n);
    }

    if (minus) minus.addEventListener("click", function () {
      qty.value = Math.max(1, (parseInt(qty.value, 10) || 1) - 1);
      update();
    });
    if (plus) plus.addEventListener("click", function () {
      qty.value = (parseInt(qty.value, 10) || 1) + 1;
      update();
    });
    qty.addEventListener("input", update);

    var add = qs("#agregar-solicitud");
    if (add) {
      add.addEventListener("click", function () {
        var root = qs("#detalle-producto");
        var items = getCart();
        items.push({
          nombre: root.getAttribute("data-nombre"),
          precio: Number(root.getAttribute("data-precio")),
          unidad: root.getAttribute("data-unidad"),
          emoji: root.getAttribute("data-emoji"),
          cant: Math.max(1, parseInt(qty.value, 10) || 1)
        });
        saveCart(items);
        toast("Producto agregado a la solicitud");
        setTimeout(function () {
          window.location.href = "solicitud.html";
        }, 350);
      });
    }
    update();
  }

  function initSolicitud() {
    var lista = qs("#lista-solicitud");
    if (!lista) return;

    var flete = 5000;

    function render() {
      var items = getCart();
      lista.innerHTML = items
        .map(function (i, ix) {
          return (
            '<div class="lista-item" data-index="' + ix + '">' +
            '  <div class="mini" aria-hidden="true">' + i.emoji + "</div>" +
            '  <div class="info"><b>' + i.nombre + "</b><small>" + i.cant + " " + i.unidad + " × " + money(i.precio) + "</small></div>" +
            '  <div class="cantidad" style="max-width:150px;margin:0">' +
            '    <button type="button" class="menos" aria-label="Quitar una unidad de ' + i.nombre + '">−</button>' +
            '    <input class="cant" type="number" min="1" value="' + i.cant + '" aria-label="Cantidad de ' + i.nombre + '">' +
            '    <button type="button" class="mas" aria-label="Agregar una unidad de ' + i.nombre + '">+</button>' +
            "  </div>" +
            '  <div class="precio-linea">' + money(i.precio * i.cant) + "</div>" +
            '  <button type="button" class="btn sec sm quitar" aria-label="Quitar ' + i.nombre + ' de la solicitud">Quitar</button>' +
            "</div>"
          );
        })
        .join("");

      lista.classList.toggle("oculto", items.length === 0);
      var vacia = qs("#solicitud-vacia");
      if (vacia) vacia.classList.toggle("oculto", items.length !== 0);

      var subtotal = items.reduce(function (s, i) {
        return s + i.precio * i.cant;
      }, 0);
      var subtotalEl = qs("#subtotal");
      var fleteEl = qs("#flete");
      var totalEl = qs("#total");
      if (subtotalEl) subtotalEl.textContent = money(subtotal);
      if (fleteEl) fleteEl.textContent = flete === 0 ? "Sin costo" : money(flete);
      if (totalEl) totalEl.textContent = money(subtotal + (items.length ? flete : 0));

      qsa(".quitar", lista).forEach(function (btn) {
        btn.addEventListener("click", function () {
          var idx = Number(btn.closest(".lista-item").getAttribute("data-index"));
          var arr = getCart();
          arr.splice(idx, 1);
          saveCart(arr);
          render();
          toast("Producto retirado de la solicitud");
        });
      });

      qsa(".menos", lista).forEach(function (btn) {
        btn.addEventListener("click", function () {
          var row = btn.closest(".lista-item");
          var idx = Number(row.getAttribute("data-index"));
          var arr = getCart();
          arr[idx].cant = Math.max(1, arr[idx].cant - 1);
          saveCart(arr);
          render();
        });
      });

      qsa(".mas", lista).forEach(function (btn) {
        btn.addEventListener("click", function () {
          var row = btn.closest(".lista-item");
          var idx = Number(row.getAttribute("data-index"));
          var arr = getCart();
          arr[idx].cant += 1;
          saveCart(arr);
          render();
        });
      });

      qsa(".cant", lista).forEach(function (input) {
        input.addEventListener("change", function () {
          var row = input.closest(".lista-item");
          var idx = Number(row.getAttribute("data-index"));
          var arr = getCart();
          arr[idx].cant = Math.max(1, parseInt(input.value, 10) || 1);
          saveCart(arr);
          render();
        });
      });
    }

    qsa('input[name="entrega"]').forEach(function (radio) {
      radio.addEventListener("change", function () {
        flete = Number(radio.getAttribute("data-flete") || 0);
        render();
      });
    });

    render();

    var form = qs("#form-solicitud");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var nombre = qs("#nombre-recibe");
        var dir = qs("#direccion");
        var tel = qs("#telefono");
        var error = qs("#error-solicitud");
        var faltan = [nombre, dir, tel].filter(function (x) {
          return x && !x.value.trim();
        });
        if (faltan.length) {
          if (error) {
            error.textContent = "Completa nombre, dirección y teléfono para continuar.";
            error.classList.remove("oculto");
          }
          faltan[0].focus();
          return;
        }
        if (error) error.classList.add("oculto");
        saveCart([]);
        toast("Solicitud enviada al productor");
        setTimeout(function () {
          window.location.href = "exito.html";
        }, 450);
      });
    }
  }

  function initLogin() {
    var form = qs("#form-login");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = qs("#login-email");
      var pass = qs("#login-pass");
      if (!email.value.includes("@") || pass.value.length < 4) {
        toast("Revisa tu correo y contraseña", true);
        return;
      }
      localStorage.setItem("agrimarket_user", JSON.stringify({ nombre: "María Fernanda", rol: "consumidor" }));
      toast("Bienvenido a AgriMarket");
      setTimeout(function () {
        window.location.href = "index.html";
      }, 400);
    });

    qsa("[data-acceso]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var rol = btn.getAttribute("data-acceso");
        localStorage.setItem("agrimarket_user", JSON.stringify({ nombre: rol === "productor" ? "José Ramón" : "María Fernanda", rol: rol }));
        toast(rol === "productor" ? "Ingresaste como productor" : "Ingresaste como consumidor");
        setTimeout(function () {
          window.location.href = rol === "productor" ? "panel.html" : "index.html";
        }, 350);
      });
    });
  }

  function initRegistro() {
    var form = qs("#form-registro");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nombre = qs("#reg-nombre");
      var email = qs("#reg-email");
      var pass = qs("#reg-pass");
      var error = qs("#error-registro");
      var msg = "";
      if (!nombre.value.trim()) msg = "Escribe tu nombre completo.";
      else if (!email.value.includes("@")) msg = "Escribe un correo válido.";
      else if (pass.value.length < 6) msg = "La contraseña debe tener al menos 6 caracteres.";
      if (msg) {
        if (error) {
          error.textContent = msg;
          error.classList.remove("oculto");
        }
        return;
      }
      if (error) error.classList.add("oculto");
      var rol = qs('input[name="rol"]:checked');
      localStorage.setItem(
        "agrimarket_user",
        JSON.stringify({ nombre: nombre.value.trim(), rol: rol ? rol.value : "consumidor" })
      );
      toast("Cuenta creada. ¡Bienvenido a AgriMarket!");
      setTimeout(function () {
        window.location.href = rol && rol.value === "productor" ? "panel.html" : "index.html";
      }, 550);
    });
  }

  function initPanel() {
    var perfil = qs("#form-perfil");
    if (perfil) {
      perfil.addEventListener("submit", function (e) {
        e.preventDefault();
        toast("Perfil actualizado");
      });
    }

    qsa("[data-responder]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var estado = btn.getAttribute("data-responder");
        var row = btn.closest(".solicitud-row");
        var badge = qs(".estado-solicitud", row);
        if (badge) {
          badge.textContent = estado;
          badge.className = "etiqueta estado-solicitud " + (estado === "Aceptada" ? "" : "rech");
        }
        var acciones = qs(".acciones-solicitud", row);
        if (acciones) acciones.classList.add("oculto");
        toast(estado === "Aceptada" ? "Solicitud aceptada" : "Solicitud rechazada");
      });
    });

    qsa("[data-eliminar]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var card = btn.closest(".card");
        if (card) card.remove();
        toast("Producto eliminado");
      });
    });

    function abrirTab(target) {
      if (!target) return;
      qsa(".tabs button").forEach(function (t) {
        t.classList.toggle("activo", t.getAttribute("data-tab") === target);
      });
      qsa("[data-panel]").forEach(function (p) {
        p.classList.toggle("oculto", p.getAttribute("data-panel") !== target);
      });
    }

    qsa(".tabs button").forEach(function (tab) {
      tab.addEventListener("click", function () {
        abrirTab(tab.getAttribute("data-tab"));
      });
    });

    qsa("[data-ir-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        abrirTab(btn.getAttribute("data-ir-tab"));
      });
    });

    var hash = (window.location.hash || "").replace("#", "");
    if (hash) abrirTab(hash);
  }

  function initPublicar() {
    var form = qs("#form-publicar");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nombre = qs("#prod-nombre");
      var precio = qs("#prod-precio");
      var error = qs("#error-publicar");
      var msg = "";
      if (!nombre.value.trim()) msg = "Escribe el nombre del producto.";
      else if (!precio.value || Number(precio.value) <= 0) msg = "El precio debe ser mayor que cero.";
      if (msg) {
        if (error) {
          error.textContent = msg;
          error.classList.remove("oculto");
        }
        return;
      }
      if (error) error.classList.add("oculto");
      toast("Producto publicado");
      setTimeout(function () {
        window.location.href = "panel.html";
      }, 500);
    });
  }

  function initUIKit() {
    qsa(".swatch").forEach(function (sw) {
      sw.addEventListener("click", function () {
        var code = sw.getAttribute("data-hex");
        if (!code) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(function () {
            toast("Color " + code + " copiado");
          });
        } else {
          toast(code);
        }
      });
      sw.style.cursor = "pointer";
      sw.title = "Clic para copiar el código hexadecimal";
    });
  }

  function init() {
    ensureCart();
    renderHeader();
    renderFooter();
    initCatalog();
    initDetail();
    initSolicitud();
    initLogin();
    initRegistro();
    initPanel();
    initPublicar();
    initUIKit();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
