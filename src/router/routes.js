const routes = [
  {
    path: "/home",
    component: () => import("src/layouts/home-page.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/signup",
    component: () => import("src/layouts/signup-page.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/transfer",
    component: () => import("src/layouts/transfer1-page.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/transfer2",
    component: () => import("src/layouts/transfer2-page.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/transaction",
    component: () => import("src/layouts/transaction-page.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/MyQR",
    component: () => import("src/layouts/qrpayment2-page.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
