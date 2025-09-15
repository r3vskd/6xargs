var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let html = renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(html, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  Layout: () => Layout,
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { json } from "@remix-run/node";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
async function loader({ request }) {
  return json({
    ENV: {
      API_URL: process.env.API_URL || "http://localhost:3001",
      NODE_ENV: "development"
    }
  });
}
function Layout({ children }) {
  let data = useLoaderData();
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "description", content: "6xargs - Revolutionizing Bug Bounty and Pentesting with AI-powered Triage" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "keywords", content: "bug bounty, pentesting, security, AI, triage, vulnerability assessment" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "author", content: "6xargs Team" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { property: "og:type", content: "website" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { property: "og:title", content: "6xargs - AI-Powered Security Platform" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { property: "og:description", content: "Revolutionizing Bug Bounty and Pentesting with AI-powered Triage and Air Gapped CLI" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { property: "og:image", content: "/og-image.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { property: "twitter:card", content: "summary_large_image" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { property: "twitter:title", content: "6xargs - AI-Powered Security Platform" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { property: "twitter:description", content: "Revolutionizing Bug Bounty and Pentesting with AI-powered Triage and Air Gapped CLI" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { property: "twitter:image", content: "/og-image.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "h-full bg-gray-50 dark:bg-gray-900", children: [
      children,
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 74,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("title", { children: "Oops! Something went wrong" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "h-full bg-gray-50 dark:bg-gray-900", children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV2("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxDEV2("div", { className: "bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10", children: /* @__PURE__ */ jsxDEV2("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV2("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-4", children: "Oops! Something went wrong" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 101,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV2("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: "We're sorry, but something unexpected happened. Please try refreshing the page." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 104,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV2(
          "button",
          {
            onClick: () => window.location.reload(),
            className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Refresh Page"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 107,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._index.tsx
var dashboard_index_exports = {};
__export(dashboard_index_exports, {
  default: () => DashboardIndex,
  loader: () => loader2,
  meta: () => meta
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/utils/auth.server.ts
import { redirect } from "@remix-run/node";
import { createCookieSessionStorage } from "@remix-run/node";
var API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3001/api", sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 60 * 60 * 24 * 7,
    // 7 days
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET || "default-secret"],
    secure: !1
  }
});
async function getSession(request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}
async function getUser(request) {
  let token = (await getSession(request)).get("token");
  if (!token)
    return null;
  try {
    let response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    return response.ok && (await response.json()).data?.user || null;
  } catch (error) {
    return console.error("Error fetching user:", error), null;
  }
}
async function requireAuth(request) {
  let user = await getUser(request);
  if (!user)
    throw redirect("/auth/login");
  return user;
}
async function logout(request) {
  let session = await getSession(request);
  return redirect("/auth/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/routes/dashboard._index.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Dashboard Overview - 6xargs" },
  { name: "description", content: "Overview of your bug bounty activities" }
];
async function loader2({ request }) {
  let user = await requireAuth(request);
  return json2({ user, stats: {
    totalPrograms: 12,
    activeReports: 8,
    resolvedReports: 45,
    pendingTriage: 3,
    totalEarnings: 15750,
    thisMonthEarnings: 2500
  }, recentActivity: [
    {
      id: 1,
      type: "report_submitted",
      title: "XSS vulnerability reported",
      program: "TechCorp Bug Bounty",
      timestamp: "2 hours ago",
      severity: "HIGH"
    },
    {
      id: 2,
      type: "triage_completed",
      title: "AI Triage completed for SQL injection",
      program: "StartupXYZ Security",
      timestamp: "5 hours ago",
      severity: "CRITICAL"
    },
    {
      id: 3,
      type: "report_accepted",
      title: "CSRF vulnerability accepted",
      program: "E-commerce Platform",
      timestamp: "1 day ago",
      severity: "MEDIUM"
    }
  ] });
}
function DashboardIndex() {
  let { user, stats, recentActivity } = useLoaderData2(), getSeverityColor = (severity) => {
    switch (severity) {
      case "CRITICAL":
        return "bg-red-100 text-red-800";
      case "HIGH":
        return "bg-orange-100 text-orange-800";
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-800";
      case "LOW":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }, getActivityIcon = (type) => {
    switch (type) {
      case "report_submitted":
        return /* @__PURE__ */ jsxDEV3("svg", { className: "w-5 h-5 text-blue-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this);
      case "triage_completed":
        return /* @__PURE__ */ jsxDEV3("svg", { className: "w-5 h-5 text-green-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this);
      case "report_accepted":
        return /* @__PURE__ */ jsxDEV3("svg", { className: "w-5 h-5 text-purple-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this);
      default:
        return /* @__PURE__ */ jsxDEV3("svg", { className: "w-5 h-5 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this);
    }
  };
  return /* @__PURE__ */ jsxDEV3("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxDEV3("div", { children: [
      /* @__PURE__ */ jsxDEV3("h1", { className: "text-3xl font-bold text-gray-900", children: [
        "Welcome back, ",
        user.name || user.email,
        "!"
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { className: "mt-2 text-gray-600", children: "Here's what's happening with your bug bounty activities." }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "p-2 bg-blue-100 rounded-lg", children: /* @__PURE__ */ jsxDEV3("svg", { className: "w-6 h-6 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "ml-4", children: [
          /* @__PURE__ */ jsxDEV3("p", { className: "text-sm font-medium text-gray-600", children: "Total Programs" }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 120,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "text-2xl font-bold text-gray-900", children: stats.totalPrograms }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "p-2 bg-orange-100 rounded-lg", children: /* @__PURE__ */ jsxDEV3("svg", { className: "w-6 h-6 text-orange-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 130,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 129,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "ml-4", children: [
          /* @__PURE__ */ jsxDEV3("p", { className: "text-sm font-medium text-gray-600", children: "Active Reports" }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 134,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "text-2xl font-bold text-gray-900", children: stats.activeReports }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "p-2 bg-green-100 rounded-lg", children: /* @__PURE__ */ jsxDEV3("svg", { className: "w-6 h-6 text-green-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 144,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "ml-4", children: [
          /* @__PURE__ */ jsxDEV3("p", { className: "text-sm font-medium text-gray-600", children: "Resolved Reports" }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 148,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "text-2xl font-bold text-gray-900", children: stats.resolvedReports }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 141,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "p-2 bg-purple-100 rounded-lg", children: /* @__PURE__ */ jsxDEV3("svg", { className: "w-6 h-6 text-purple-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 158,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 157,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "ml-4", children: [
          /* @__PURE__ */ jsxDEV3("p", { className: "text-sm font-medium text-gray-600", children: "Pending Triage" }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 162,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "text-2xl font-bold text-gray-900", children: stats.pendingTriage }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 161,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "p-2 bg-yellow-100 rounded-lg", children: /* @__PURE__ */ jsxDEV3("svg", { className: "w-6 h-6 text-yellow-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 172,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 171,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "ml-4", children: [
          /* @__PURE__ */ jsxDEV3("p", { className: "text-sm font-medium text-gray-600", children: "Total Earnings" }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "text-2xl font-bold text-gray-900", children: [
            "$",
            stats.totalEarnings.toLocaleString()
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 177,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "p-2 bg-indigo-100 rounded-lg", children: /* @__PURE__ */ jsxDEV3("svg", { className: "w-6 h-6 text-indigo-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 186,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 185,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 184,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "ml-4", children: [
          /* @__PURE__ */ jsxDEV3("p", { className: "text-sm font-medium text-gray-600", children: "This Month" }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 190,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "text-2xl font-bold text-gray-900", children: [
            "$",
            stats.thisMonthEarnings.toLocaleString()
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 189,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 183,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "bg-white rounded-lg shadow", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "px-6 py-4 border-b border-gray-200", children: /* @__PURE__ */ jsxDEV3("h2", { className: "text-lg font-medium text-gray-900", children: "Recent Activity" }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 200,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "divide-y divide-gray-200", children: recentActivity.map((activity) => /* @__PURE__ */ jsxDEV3("div", { className: "px-6 py-4 hover:bg-gray-50 transition-colors", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "flex-shrink-0", children: getActivityIcon(activity.type) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 206,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxDEV3("p", { className: "text-sm font-medium text-gray-900 truncate", children: activity.title }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 210,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "text-sm text-gray-500 truncate", children: activity.program }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 213,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 209,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV3("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(activity.severity)}`, children: activity.severity }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 218,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV3("span", { className: "text-sm text-gray-500", children: activity.timestamp }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 221,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 217,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 205,
        columnNumber: 15
      }, this) }, activity.id, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 204,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard._index.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

// app/routes/auth.register.tsx
var auth_register_exports = {};
__export(auth_register_exports, {
  action: () => action,
  default: () => Register,
  loader: () => loader3,
  meta: () => meta2
});
import { json as json3, redirect as redirect2 } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { useState } from "react";
import { Fragment, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Register - 6xargs" },
  { name: "description", content: "Create your 6xargs account" }
];
async function loader3({ request }) {
  return request.headers.get("Cookie")?.includes("auth-token") ? redirect2("/dashboard") : json3({});
}
async function action({ request }) {
  let formData = await request.formData(), email = formData.get("email"), username = formData.get("username"), password = formData.get("password"), confirmPassword = formData.get("confirmPassword"), firstName = formData.get("firstName"), lastName = formData.get("lastName"), role = formData.get("role"), companyName = formData.get("companyName"), terms = formData.get("terms") === "on", errors = {};
  if (email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || (errors.email = "Please enter a valid email address") : errors.email = "Email is required", username ? username.length < 3 ? errors.username = "Username must be at least 3 characters" : /^[a-zA-Z0-9_]+$/.test(username) || (errors.username = "Username can only contain letters, numbers, and underscores") : errors.username = "Username is required", firstName || (errors.firstName = "First name is required"), lastName || (errors.lastName = "Last name is required"), password ? password.length < 8 ? errors.password = "Password must be at least 8 characters" : /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password) || (errors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number") : errors.password = "Password is required", confirmPassword ? password !== confirmPassword && (errors.confirmPassword = "Passwords do not match") : errors.confirmPassword = "Please confirm your password", role || (errors.role = "Please select your role"), role === "COMPANY_ADMIN" && !companyName && (errors.companyName = "Company name is required for company administrators"), terms || (errors.terms = "You must accept the terms and conditions"), Object.keys(errors).length > 0)
    return json3(
      {
        errors,
        values: { email, username, firstName, lastName, role, companyName }
      },
      { status: 400 }
    );
  try {
    let apiUrl = process.env.API_URL || "http://localhost:3001", response = await fetch(`${apiUrl}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        username,
        password,
        firstName,
        lastName,
        role,
        companyName: role === "COMPANY_ADMIN" ? companyName : void 0
      })
    }), data = await response.json();
    if (!response.ok)
      return json3(
        {
          errors: { general: data.message || "Registration failed" },
          values: { email, username, firstName, lastName, role, companyName }
        },
        { status: 400 }
      );
    let headers = new Headers();
    return headers.append(
      "Set-Cookie",
      `auth-token=${data.token}; HttpOnly; Path=/; Max-Age=${24 * 60 * 60}; SameSite=Strict`
    ), headers.append(
      "Set-Cookie",
      `user-data=${JSON.stringify(data.user)}; Path=/; Max-Age=${24 * 60 * 60}; SameSite=Strict`
    ), redirect2("/dashboard", { headers });
  } catch (error) {
    return console.error("Registration error:", error), json3(
      {
        errors: { general: "Something went wrong. Please try again." },
        values: { email, username, firstName, lastName, role, companyName }
      },
      { status: 500 }
    );
  }
}
function Register() {
  let actionData = useActionData(), navigation = useNavigation(), [showPassword, setShowPassword] = useState(!1), [showConfirmPassword, setShowConfirmPassword] = useState(!1), [selectedRole, setSelectedRole] = useState(actionData?.values?.role || "HACKER"), isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ jsxDEV4("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV4("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsxDEV4("div", { children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV4(Link, { to: "/", className: "text-3xl font-bold", children: [
        /* @__PURE__ */ jsxDEV4("span", { className: "text-blue-600", children: "6x" }, void 0, !1, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("span", { className: "text-gray-900 dark:text-white", children: "args" }, void 0, !1, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 166,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 163,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white", children: "Create your account" }, void 0, !1, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { className: "mt-2 text-center text-sm text-gray-600 dark:text-gray-400", children: [
        "Or",
        " ",
        /* @__PURE__ */ jsxDEV4(
          Link,
          {
            to: "/auth/login",
            className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400",
            children: "sign in to your existing account"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 174,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.register.tsx",
      lineNumber: 162,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4(Form, { className: "mt-8 space-y-6", method: "post", children: [
      actionData?.errors?.general && /* @__PURE__ */ jsxDEV4("div", { className: "rounded-md bg-red-50 dark:bg-red-900/20 p-4", children: /* @__PURE__ */ jsxDEV4("div", { className: "text-sm text-red-700 dark:text-red-400", children: actionData.errors.general }, void 0, !1, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 186,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 185,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV4("div", { children: [
          /* @__PURE__ */ jsxDEV4("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: "I am a..." }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 195,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxDEV4("label", { className: "relative", children: [
              /* @__PURE__ */ jsxDEV4(
                "input",
                {
                  type: "radio",
                  name: "role",
                  value: "HACKER",
                  checked: selectedRole === "HACKER",
                  onChange: (e) => setSelectedRole(e.target.value),
                  className: "sr-only"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 200,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV4("div", { className: `p-3 border rounded-lg cursor-pointer text-center ${selectedRole === "HACKER" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"}`, children: [
                /* @__PURE__ */ jsxDEV4("div", { className: "text-sm font-medium", children: "Security Researcher" }, void 0, !1, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 213,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV4("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Bug bounty hunter" }, void 0, !1, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 214,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 208,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 199,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4("label", { className: "relative", children: [
              /* @__PURE__ */ jsxDEV4(
                "input",
                {
                  type: "radio",
                  name: "role",
                  value: "COMPANY_ADMIN",
                  checked: selectedRole === "COMPANY_ADMIN",
                  onChange: (e) => setSelectedRole(e.target.value),
                  className: "sr-only"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 218,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV4("div", { className: `p-3 border rounded-lg cursor-pointer text-center ${selectedRole === "COMPANY_ADMIN" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"}`, children: [
                /* @__PURE__ */ jsxDEV4("div", { className: "text-sm font-medium", children: "Company Admin" }, void 0, !1, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 231,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV4("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Manage programs" }, void 0, !1, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 232,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 226,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 217,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 198,
            columnNumber: 15
          }, this),
          actionData?.errors?.role && /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: actionData.errors.role }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 237,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 194,
          columnNumber: 13
        }, this),
        selectedRole === "COMPANY_ADMIN" && /* @__PURE__ */ jsxDEV4("div", { children: [
          /* @__PURE__ */ jsxDEV4("label", { htmlFor: "companyName", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Company Name" }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 246,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV4(
            "input",
            {
              id: "companyName",
              name: "companyName",
              type: "text",
              required: !0,
              defaultValue: actionData?.values?.companyName || "",
              className: `mt-1 appearance-none relative block w-full px-3 py-2 border ${actionData?.errors?.companyName ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"} placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`,
              placeholder: "Enter your company name"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 249,
              columnNumber: 17
            },
            this
          ),
          actionData?.errors?.companyName && /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: actionData.errors.companyName }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 263,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 245,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxDEV4("div", { children: [
            /* @__PURE__ */ jsxDEV4("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "First Name" }, void 0, !1, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 273,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                id: "firstName",
                name: "firstName",
                type: "text",
                required: !0,
                defaultValue: actionData?.values?.firstName || "",
                className: `mt-1 appearance-none relative block w-full px-3 py-2 border ${actionData?.errors?.firstName ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"} placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`,
                placeholder: "First name"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 276,
                columnNumber: 17
              },
              this
            ),
            actionData?.errors?.firstName && /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: actionData.errors.firstName }, void 0, !1, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 290,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 272,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { children: [
            /* @__PURE__ */ jsxDEV4("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Last Name" }, void 0, !1, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 296,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                id: "lastName",
                name: "lastName",
                type: "text",
                required: !0,
                defaultValue: actionData?.values?.lastName || "",
                className: `mt-1 appearance-none relative block w-full px-3 py-2 border ${actionData?.errors?.lastName ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"} placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`,
                placeholder: "Last name"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 299,
                columnNumber: 17
              },
              this
            ),
            actionData?.errors?.lastName && /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: actionData.errors.lastName }, void 0, !1, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 313,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 295,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 271,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { children: [
          /* @__PURE__ */ jsxDEV4("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email address" }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 322,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              defaultValue: actionData?.values?.email || "",
              className: `mt-1 appearance-none relative block w-full px-3 py-2 border ${actionData?.errors?.email ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"} placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`,
              placeholder: "Enter your email"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 325,
              columnNumber: 15
            },
            this
          ),
          actionData?.errors?.email && /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: actionData.errors.email }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 340,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 321,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { children: [
          /* @__PURE__ */ jsxDEV4("label", { htmlFor: "username", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Username" }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 348,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4(
            "input",
            {
              id: "username",
              name: "username",
              type: "text",
              autoComplete: "username",
              required: !0,
              defaultValue: actionData?.values?.username || "",
              className: `mt-1 appearance-none relative block w-full px-3 py-2 border ${actionData?.errors?.username ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"} placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`,
              placeholder: "Choose a username"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 351,
              columnNumber: 15
            },
            this
          ),
          actionData?.errors?.username && /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: actionData.errors.username }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 366,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 347,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { children: [
          /* @__PURE__ */ jsxDEV4("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Password" }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 374,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "mt-1 relative", children: [
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                id: "password",
                name: "password",
                type: showPassword ? "text" : "password",
                autoComplete: "new-password",
                required: !0,
                className: `appearance-none relative block w-full px-3 py-2 pr-10 border ${actionData?.errors?.password ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"} placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`,
                placeholder: "Create a password"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 378,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV4(
              "button",
              {
                type: "button",
                className: "absolute inset-y-0 right-0 pr-3 flex items-center",
                onClick: () => setShowPassword(!showPassword),
                children: showPassword ? /* @__PURE__ */ jsxDEV4("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" }, void 0, !1, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 398,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 397,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDEV4("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
                  /* @__PURE__ */ jsxDEV4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, !1, {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 402,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" }, void 0, !1, {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 403,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 401,
                  columnNumber: 21
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 391,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 377,
            columnNumber: 15
          }, this),
          actionData?.errors?.password && /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: actionData.errors.password }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 409,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 373,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { children: [
          /* @__PURE__ */ jsxDEV4("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Confirm Password" }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 417,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "mt-1 relative", children: [
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                id: "confirmPassword",
                name: "confirmPassword",
                type: showConfirmPassword ? "text" : "password",
                autoComplete: "new-password",
                required: !0,
                className: `appearance-none relative block w-full px-3 py-2 pr-10 border ${actionData?.errors?.confirmPassword ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"} placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`,
                placeholder: "Confirm your password"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 421,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV4(
              "button",
              {
                type: "button",
                className: "absolute inset-y-0 right-0 pr-3 flex items-center",
                onClick: () => setShowConfirmPassword(!showConfirmPassword),
                children: showConfirmPassword ? /* @__PURE__ */ jsxDEV4("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" }, void 0, !1, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 441,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 440,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDEV4("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
                  /* @__PURE__ */ jsxDEV4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, !1, {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 445,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" }, void 0, !1, {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 446,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 444,
                  columnNumber: 21
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 434,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 420,
            columnNumber: 15
          }, this),
          actionData?.errors?.confirmPassword && /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: actionData.errors.confirmPassword }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 452,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 416,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 192,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV4(
          "input",
          {
            id: "terms",
            name: "terms",
            type: "checkbox",
            required: !0,
            className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 461,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4("label", { htmlFor: "terms", className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: [
          "I agree to the",
          " ",
          /* @__PURE__ */ jsxDEV4(Link, { to: "/terms", className: "text-blue-600 hover:text-blue-500 dark:text-blue-400", children: "Terms and Conditions" }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 470,
            columnNumber: 15
          }, this),
          " ",
          "and",
          " ",
          /* @__PURE__ */ jsxDEV4(Link, { to: "/privacy", className: "text-blue-600 hover:text-blue-500 dark:text-blue-400", children: "Privacy Policy" }, void 0, !1, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 474,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 468,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 460,
        columnNumber: 11
      }, this),
      actionData?.errors?.terms && /* @__PURE__ */ jsxDEV4("p", { className: "text-sm text-red-600 dark:text-red-400", children: actionData.errors.terms }, void 0, !1, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 480,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4(
        "button",
        {
          type: "submit",
          disabled: isSubmitting,
          className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-900",
          children: isSubmitting ? /* @__PURE__ */ jsxDEV4(Fragment, { children: [
            /* @__PURE__ */ jsxDEV4("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsxDEV4("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }, void 0, !1, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 494,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV4("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }, void 0, !1, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 495,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 493,
              columnNumber: 19
            }, this),
            "Creating account..."
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 492,
            columnNumber: 17
          }, this) : "Create account"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 486,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 485,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV4("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsxDEV4(
          Link,
          {
            to: "/auth/login",
            className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400",
            children: "Sign in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 508,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 506,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 505,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.register.tsx",
      lineNumber: 183,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.register.tsx",
    lineNumber: 161,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.register.tsx",
    lineNumber: 160,
    columnNumber: 5
  }, this);
}

// app/routes/auth.logout.tsx
var auth_logout_exports = {};
__export(auth_logout_exports, {
  action: () => action2,
  loader: () => loader4
});
async function action2({ request }) {
  return logout(request);
}
async function loader4() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/auth/login"
    }
  });
}

// app/routes/auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action3,
  default: () => Login,
  loader: () => loader5,
  meta: () => meta3
});
import { json as json4, redirect as redirect3 } from "@remix-run/node";
import { Form as Form2, Link as Link2, useActionData as useActionData2, useNavigation as useNavigation2 } from "@remix-run/react";
import { useState as useState2 } from "react";
import { Fragment as Fragment2, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Login - 6xargs" },
  { name: "description", content: "Sign in to your 6xargs account" }
];
async function loader5({ request }) {
  return request.headers.get("Cookie")?.includes("auth-token") ? redirect3("/dashboard") : json4({});
}
async function action3({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), remember = formData.get("remember") === "on", errors = {};
  if (email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || (errors.email = "Please enter a valid email address") : errors.email = "Email is required", password ? password.length < 6 && (errors.password = "Password must be at least 6 characters") : errors.password = "Password is required", Object.keys(errors).length > 0)
    return json4({ errors, values: { email, remember } }, { status: 400 });
  try {
    let apiUrl = process.env.API_URL || "http://localhost:3001", response = await fetch(`${apiUrl}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, remember })
    }), data = await response.json();
    if (!response.ok)
      return json4(
        {
          errors: { general: data.message || "Invalid credentials" },
          values: { email, remember }
        },
        { status: 400 }
      );
    let headers = new Headers();
    return headers.append(
      "Set-Cookie",
      `auth-token=${data.token}; HttpOnly; Path=/; Max-Age=${remember ? 30 * 24 * 60 * 60 : 24 * 60 * 60}; SameSite=Strict`
    ), headers.append(
      "Set-Cookie",
      `user-data=${JSON.stringify(data.user)}; Path=/; Max-Age=${remember ? 30 * 24 * 60 * 60 : 24 * 60 * 60}; SameSite=Strict`
    ), redirect3("/dashboard", { headers });
  } catch (error) {
    return console.error("Login error:", error), json4(
      {
        errors: { general: "Something went wrong. Please try again." },
        values: { email, remember }
      },
      { status: 500 }
    );
  }
}
function Login() {
  let actionData = useActionData2(), navigation = useNavigation2(), [showPassword, setShowPassword] = useState2(!1), isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV5("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsxDEV5("div", { children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV5(Link2, { to: "/", className: "text-3xl font-bold", children: [
        /* @__PURE__ */ jsxDEV5("span", { className: "text-blue-600", children: "6x" }, void 0, !1, {
          fileName: "app/routes/auth.login.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("span", { className: "text-gray-900 dark:text-white", children: "args" }, void 0, !1, {
          fileName: "app/routes/auth.login.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white", children: "Sign in to your account" }, void 0, !1, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { className: "mt-2 text-center text-sm text-gray-600 dark:text-gray-400", children: [
        "Or",
        " ",
        /* @__PURE__ */ jsxDEV5(
          Link2,
          {
            to: "/auth/register",
            className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400",
            children: "create a new account"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 116,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.login.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(Form2, { className: "mt-8 space-y-6", method: "post", children: [
      actionData?.errors?.general && /* @__PURE__ */ jsxDEV5("div", { className: "rounded-md bg-red-50 dark:bg-red-900/20 p-4", children: /* @__PURE__ */ jsxDEV5("div", { className: "text-sm text-red-700 dark:text-red-400", children: actionData.errors.general }, void 0, !1, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 128,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email address" }, void 0, !1, {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              defaultValue: actionData?.values?.email || "",
              className: `mt-1 appearance-none relative block w-full px-3 py-2 border ${actionData?.errors?.email ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"} placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`,
              placeholder: "Enter your email"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.login.tsx",
              lineNumber: 139,
              columnNumber: 15
            },
            this
          ),
          actionData?.errors?.email && /* @__PURE__ */ jsxDEV5("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: actionData.errors.email }, void 0, !1, {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.login.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Password" }, void 0, !1, {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "mt-1 relative", children: [
            /* @__PURE__ */ jsxDEV5(
              "input",
              {
                id: "password",
                name: "password",
                type: showPassword ? "text" : "password",
                autoComplete: "current-password",
                required: !0,
                className: `appearance-none relative block w-full px-3 py-2 pr-10 border ${actionData?.errors?.password ? "border-red-300 dark:border-red-600" : "border-gray-300 dark:border-gray-600"} placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`,
                placeholder: "Enter your password"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 165,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV5(
              "button",
              {
                type: "button",
                className: "absolute inset-y-0 right-0 pr-3 flex items-center",
                onClick: () => setShowPassword(!showPassword),
                children: showPassword ? /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" }, void 0, !1, {
                  fileName: "app/routes/auth.login.tsx",
                  lineNumber: 185,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/auth.login.tsx",
                  lineNumber: 184,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
                  /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, !1, {
                    fileName: "app/routes/auth.login.tsx",
                    lineNumber: 189,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" }, void 0, !1, {
                    fileName: "app/routes/auth.login.tsx",
                    lineNumber: 190,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/auth.login.tsx",
                  lineNumber: 188,
                  columnNumber: 21
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 178,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 164,
            columnNumber: 15
          }, this),
          actionData?.errors?.password && /* @__PURE__ */ jsxDEV5("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: actionData.errors.password }, void 0, !1, {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 196,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.login.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 134,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV5(
            "input",
            {
              id: "remember",
              name: "remember",
              type: "checkbox",
              defaultChecked: actionData?.values?.remember || !1,
              className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.login.tsx",
              lineNumber: 205,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: "remember", className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: "Remember me" }, void 0, !1, {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 212,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.login.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "text-sm", children: /* @__PURE__ */ jsxDEV5(
          Link2,
          {
            to: "/auth/forgot-password",
            className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400",
            children: "Forgot your password?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 218,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/auth.login.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 203,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5(
        "button",
        {
          type: "submit",
          disabled: isSubmitting,
          className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-900",
          children: isSubmitting ? /* @__PURE__ */ jsxDEV5(Fragment2, { children: [
            /* @__PURE__ */ jsxDEV5("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsxDEV5("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }, void 0, !1, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 236,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV5("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }, void 0, !1, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 237,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.login.tsx",
              lineNumber: 235,
              columnNumber: 19
            }, this),
            "Signing in..."
          ] }, void 0, !0, {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 234,
            columnNumber: 17
          }, this) : "Sign in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/auth.login.tsx",
          lineNumber: 228,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 227,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ jsxDEV5(
          Link2,
          {
            to: "/auth/register",
            className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400",
            children: "Sign up now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 250,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 248,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 247,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.login.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login.tsx",
    lineNumber: 103,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  loader: () => loader6,
  meta: () => meta4
});
import { json as json5, redirect as redirect4 } from "@remix-run/node";
import { useLoaderData as useLoaderData3, Link as Link3, Outlet as Outlet2 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "Dashboard - 6xargs" },
  { name: "description", content: "Manage your bug bounty programs and reports" }
];
async function loader6({ request }) {
  let user = await requireAuth(request);
  if (!user)
    throw redirect4("/auth/login");
  return json5({ user });
}
function Dashboard() {
  let { user } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV6("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxDEV6("nav", { className: "bg-white shadow-sm border-b", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV6(Link3, { to: "/", className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxDEV6("img", { src: "/logo-dark.png", alt: "6xargs", className: "h-8 w-auto" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("span", { className: "text-xl font-bold text-gray-900", children: "6xargs" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxDEV6("span", { className: "text-white text-sm font-medium", children: user.name?.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase() }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 42,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 41,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("span", { className: "text-sm text-gray-700", children: user.name || user.email }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("span", { className: "px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full capitalize", children: user.role.toLowerCase() }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("form", { method: "post", action: "/auth/logout", children: /* @__PURE__ */ jsxDEV6(
          "button",
          {
            type: "submit",
            className: "text-sm text-gray-500 hover:text-gray-700 transition-colors",
            children: "Logout"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 53,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "flex", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "w-64 bg-white shadow-sm h-screen sticky top-0", children: /* @__PURE__ */ jsxDEV6("div", { className: "p-6", children: /* @__PURE__ */ jsxDEV6("nav", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxDEV6(
          Link3,
          {
            to: "/dashboard",
            className: "flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV6("svg", { className: "w-5 h-5 mr-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 75,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 76,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 74,
                columnNumber: 17
              }, this),
              "Overview"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 70,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          Link3,
          {
            to: "/dashboard/programs",
            className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV6("svg", { className: "w-5 h-5 mr-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 86,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 85,
                columnNumber: 17
              }, this),
              "Programs"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 81,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          Link3,
          {
            to: "/dashboard/reports",
            className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV6("svg", { className: "w-5 h-5 mr-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 96,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 95,
                columnNumber: 17
              }, this),
              "Reports"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 91,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          Link3,
          {
            to: "/dashboard/ai",
            className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV6("svg", { className: "w-5 h-5 mr-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 106,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 105,
                columnNumber: 17
              }, this),
              "AI Triage"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 101,
            columnNumber: 15
          },
          this
        ),
        user.role === "ADMIN" && /* @__PURE__ */ jsxDEV6(
          Link3,
          {
            to: "/dashboard/admin",
            className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV6("svg", { className: "w-5 h-5 mr-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 117,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 118,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 116,
                columnNumber: 19
              }, this),
              "Admin"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 112,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "flex-1 p-8", children: /* @__PURE__ */ jsxDEV6(Outlet2, {}, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta5
});
import { useState as useState6, useEffect as useEffect3 } from "react";

// app/components/Navigation.tsx
import { useState as useState3 } from "react";
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var Navigation = () => {
  let [isMenuOpen, setIsMenuOpen] = useState3(!1);
  return /* @__PURE__ */ jsxDEV7("nav", { className: `navbar ${isMenuOpen ? "responsive" : ""}`, children: /* @__PURE__ */ jsxDEV7("div", { className: "nav-container", children: [
    /* @__PURE__ */ jsxDEV7(Link4, { to: "/", className: "nav-logo", children: [
      /* @__PURE__ */ jsxDEV7("img", { src: "/images/6xargs.svg", alt: "6xargs", className: "logo-img" }, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("span", { className: "logo-text", children: "6xargs" }, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "menu-icon", onClick: () => {
      setIsMenuOpen(!isMenuOpen);
    }, children: [
      /* @__PURE__ */ jsxDEV7("span", {}, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("span", {}, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("span", {}, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("ul", { className: `nav-menu ${isMenuOpen ? "active" : ""}`, children: [
      { href: "/", text: "Home", dataText: "Home" },
      { href: "/about", text: "About", dataText: "About" },
      { href: "/services", text: "Services", dataText: "Services" },
      { href: "/contact", text: "Contact", dataText: "Contact" },
      { href: "/login", text: "Login", dataText: "Login" },
      { href: "/register", text: "Register", dataText: "Register" }
    ].map((link, index) => /* @__PURE__ */ jsxDEV7("li", { className: "nav-item", children: /* @__PURE__ */ jsxDEV7(
      Link4,
      {
        to: link.href,
        className: "nav-link glitch-effect",
        "data-text": link.dataText,
        onClick: () => setIsMenuOpen(!1),
        children: link.text
      },
      void 0,
      !1,
      {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 37,
        columnNumber: 15
      },
      this
    ) }, index, !1, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}, Navigation_default = Navigation;

// app/components/TerminalAnimation.tsx
import { useState as useState4, useEffect, useRef } from "react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var TerminalAnimation = () => {
  let [isClient, setIsClient] = useState4(!1);
  return useEffect(() => {
    setIsClient(!0);
  }, []), isClient ? /* @__PURE__ */ jsxDEV8(TerminalAnimationClient, {}, void 0, !1, {
    fileName: "app/components/TerminalAnimation.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this) : /* @__PURE__ */ jsxDEV8("div", { className: "bg-gray-900 rounded-lg p-6 font-mono text-green-400 h-96 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV8("div", { children: "Loading terminal..." }, void 0, !1, {
    fileName: "app/components/TerminalAnimation.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/TerminalAnimation.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
}, TerminalAnimationClient = () => {
  let [currentLineIndex, setCurrentLineIndex] = useState4(0), [isAnimating, setIsAnimating] = useState4(!1), [displayedLines, setDisplayedLines] = useState4([]), terminalRef = useRef(null), sequence = [
    {
      type: "command",
      content: "$ search for open ports with nmap based on the target program and use case toggling technique with awesome-waf on 6xargs.com",
      typewriter: !0,
      delay: 2
    },
    {
      type: "output",
      content: "Initializing network scanner...",
      delay: 500
    },
    {
      type: "output",
      content: "Loading security modules...",
      delay: 500
    },
    {
      type: "output",
      content: "Starting reconnaissance phase...",
      delay: 500
    },
    {
      type: "output",
      content: "\u2713 Port scanning completed",
      delay: 500
    },
    {
      type: "output",
      content: "\u2713 Service enumeration finished",
      delay: 500
    },
    {
      type: "output",
      content: "Initializing Anti-WAF scanner on each service...",
      delay: 1e3
    },
    {
      type: "output",
      content: "\u2713 Found 3 potential vulnerabilities",
      delay: 500
    },
    {
      type: "output",
      content: "Generating penetration test report...",
      delay: 1200
    },
    {
      type: "table",
      content: [
        "+--------------------------------------------------+",
        "| PENTEST REPORT - TARGET: 6xargs.com             |",
        "+--------------------------------------------------+",
        "| Date: 08/11/2025 | Type: Grey Box Testing       |",
        "+--------------------------------------------------+",
        "| VULNERABILITIES FOUND                           |",
        "+--------------------------------------------------+",
        "| [!] SQL Injection - /product?id= (CRITICAL)     |",
        "| [!] Stored XSS - comments field (HIGH)          |",
        "| [!] CSRF - password form (MEDIUM)               |",
        "+--------------------------------------------------+"
      ],
      delay: 200
    }
  ], sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)), typewriterEffect = async (text, speed = 2) => {
    let chars = [];
    for (let i = 0; i < text.length; i++)
      chars.push(text.slice(0, i + 1)), await sleep(speed);
    return chars;
  }, createTerminalLine = (type, content, key) => /* @__PURE__ */ jsxDEV8("div", { className: `terminal-line ${type}`, children: /* @__PURE__ */ jsxDEV8("span", { className: "line-content", children: content }, void 0, !1, {
    fileName: "app/components/TerminalAnimation.tsx",
    lineNumber: 112,
    columnNumber: 9
  }, this) }, key, !1, {
    fileName: "app/components/TerminalAnimation.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this), startAnimation = async () => {
    if (!isAnimating) {
      setIsAnimating(!0), setDisplayedLines([]), setCurrentLineIndex(0);
      for (let i = 0; i < sequence.length; i++) {
        let item = sequence[i];
        if (item.type === "table" && Array.isArray(item.content))
          for (let j = 0; j < item.content.length; j++)
            await sleep(item.delay), setDisplayedLines((prev) => [
              ...prev,
              createTerminalLine("output", item.content[j], i * 100 + j)
            ]);
        else if (item.typewriter && typeof item.content == "string") {
          let chars = await typewriterEffect(item.content, item.delay);
          for (let char of chars)
            setDisplayedLines((prev) => {
              let newLines = [...prev], lastIndex = newLines.length - 1;
              return lastIndex >= 0 && newLines[lastIndex].props.className.includes(item.type) ? newLines[lastIndex] = createTerminalLine(item.type, char, i) : newLines.push(createTerminalLine(item.type, char, i)), newLines;
            }), await sleep(10);
        } else
          await sleep(item.delay), setDisplayedLines((prev) => [
            ...prev,
            createTerminalLine(item.type, item.content, i)
          ]);
        setCurrentLineIndex(i + 1);
      }
      setIsAnimating(!1);
    }
  }, restartAnimation = () => {
    setDisplayedLines([]), setCurrentLineIndex(0), setTimeout(startAnimation, 500);
  };
  return useEffect(() => {
    let timer = setTimeout(startAnimation, 1e3);
    return () => clearTimeout(timer);
  }, []), /* @__PURE__ */ jsxDEV8("div", { className: "terminal-container", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "terminal-header", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "terminal-buttons", children: [
        /* @__PURE__ */ jsxDEV8("span", { className: "terminal-button close" }, void 0, !1, {
          fileName: "app/components/TerminalAnimation.tsx",
          lineNumber: 178,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("span", { className: "terminal-button minimize" }, void 0, !1, {
          fileName: "app/components/TerminalAnimation.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("span", { className: "terminal-button maximize" }, void 0, !1, {
          fileName: "app/components/TerminalAnimation.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/TerminalAnimation.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "terminal-title", children: "6xargs CLI - Penetration Testing" }, void 0, !1, {
        fileName: "app/components/TerminalAnimation.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/TerminalAnimation.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(
      "div",
      {
        ref: terminalRef,
        id: "terminal-output",
        className: "terminal-output",
        children: [
          displayedLines,
          /* @__PURE__ */ jsxDEV8("div", { className: "terminal-cursor", children: "_" }, void 0, !1, {
            fileName: "app/components/TerminalAnimation.tsx",
            lineNumber: 190,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/TerminalAnimation.tsx",
        lineNumber: 184,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV8(
      "button",
      {
        onClick: restartAnimation,
        className: "restart-btn",
        disabled: isAnimating,
        children: isAnimating ? "Running..." : "Restart Demo"
      },
      void 0,
      !1,
      {
        fileName: "app/components/TerminalAnimation.tsx",
        lineNumber: 192,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/TerminalAnimation.tsx",
    lineNumber: 175,
    columnNumber: 5
  }, this);
}, TerminalAnimation_default = TerminalAnimation;

// app/components/ThreeScene.tsx
import { useEffect as useEffect2, useRef as useRef2, useState as useState5 } from "react";
import * as THREE from "three";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var ThreeScene = () => {
  let [isClient, setIsClient] = useState5(!1);
  return useEffect2(() => {
    setIsClient(!0);
  }, []), isClient ? /* @__PURE__ */ jsxDEV9(ThreeSceneClient, {}, void 0, !1, {
    fileName: "app/components/ThreeScene.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this) : /* @__PURE__ */ jsxDEV9("div", { className: "w-full h-96 bg-gray-900 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxDEV9("div", { className: "text-white", children: "Loading 3D Scene..." }, void 0, !1, {
    fileName: "app/components/ThreeScene.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ThreeScene.tsx",
    lineNumber: 12,
    columnNumber: 12
  }, this);
}, ThreeSceneClient = () => {
  let mountRef = useRef2(null), sceneRef = useRef2(null), rendererRef = useRef2(null), animationIdRef = useRef2(null);
  return useEffect2(() => {
    if (!mountRef.current)
      return;
    let scene = new THREE.Scene();
    sceneRef.current = scene;
    let camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1e3
    );
    camera.position.z = 5;
    let renderer = new THREE.WebGLRenderer({ antialias: !0, alpha: !0 });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight), renderer.setClearColor(0, 0), mountRef.current.appendChild(renderer.domElement), rendererRef.current = renderer;
    let halfHeight = 2 / 5, radius = 1, increasedDistance = 2, vertices = new Float32Array([
      // Bottom hexagon vertices (z = -halfHeight)
      radius,
      0,
      -halfHeight,
      radius / 2,
      Math.sqrt(3) / 2 * radius * increasedDistance,
      -halfHeight,
      -radius / 2,
      Math.sqrt(3) / 2 * radius,
      -halfHeight,
      -radius,
      0,
      -halfHeight,
      -radius / 2,
      -Math.sqrt(3) / 2 * radius * increasedDistance,
      -halfHeight,
      radius / 2,
      -Math.sqrt(3) / 2 * radius,
      -halfHeight,
      // Top hexagon vertices (z = halfHeight)
      radius,
      0,
      halfHeight,
      radius / 2,
      Math.sqrt(3) / 2 * radius * increasedDistance,
      halfHeight,
      -radius / 2,
      Math.sqrt(3) / 2 * radius,
      halfHeight,
      -radius,
      0,
      halfHeight,
      -radius / 2,
      -Math.sqrt(3) / 2 * radius * increasedDistance,
      halfHeight,
      radius / 2,
      -Math.sqrt(3) / 2 * radius,
      halfHeight
    ]), indices = [
      // Bottom hexagon faces
      0,
      1,
      2,
      0,
      2,
      3,
      0,
      3,
      4,
      0,
      4,
      5,
      // Top hexagon faces
      6,
      7,
      8,
      6,
      8,
      9,
      6,
      9,
      10,
      6,
      10,
      11,
      // Side faces
      0,
      1,
      7,
      0,
      7,
      6,
      1,
      2,
      8,
      1,
      8,
      7,
      2,
      3,
      9,
      2,
      9,
      8,
      3,
      4,
      10,
      3,
      10,
      9,
      4,
      5,
      11,
      4,
      11,
      10,
      5,
      0,
      6,
      5,
      6,
      11
    ], geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3)), geometry.setIndex(indices), geometry.computeVertexNormals();
    let material = new THREE.MeshNormalMaterial(), elongatedHexagon = new THREE.Mesh(geometry, material);
    scene.add(elongatedHexagon);
    let eyeGeometry = new THREE.SphereGeometry(0.4, 32, 32), eyeMaterial = new THREE.MeshBasicMaterial({ color: 0 }), eye1 = new THREE.Mesh(eyeGeometry, eyeMaterial), eye2 = new THREE.Mesh(eyeGeometry, eyeMaterial);
    eye1.position.set(0, 0, -halfHeight - 0.1), eye2.position.set(0, 0, halfHeight + 0.1);
    let irisGeometry1 = new THREE.SphereGeometry(0.03, 32, 32), irisMaterial1 = new THREE.MeshBasicMaterial({ color: 16777215 }), iris1 = new THREE.Mesh(irisGeometry1, irisMaterial1), pupilGeometry1 = new THREE.SphereGeometry(0.01, 32, 32), pupilMaterial1 = new THREE.MeshBasicMaterial({ color: 16777215 }), pupil1 = new THREE.Mesh(pupilGeometry1, pupilMaterial1);
    iris1.position.set(0.02, 0.02, -halfHeight - 0.08), pupil1.position.set(0.03, 0.03, -halfHeight - 0.06), eye1.add(iris1), eye1.add(pupil1);
    let irisGeometry2 = new THREE.SphereGeometry(0.03, 32, 32), irisMaterial2 = new THREE.MeshBasicMaterial({ color: 16777215 }), iris2 = new THREE.Mesh(irisGeometry2, irisMaterial2), pupilGeometry2 = new THREE.SphereGeometry(0.01, 32, 32), pupilMaterial2 = new THREE.MeshBasicMaterial({ color: 16777215 }), pupil2 = new THREE.Mesh(pupilGeometry2, pupilMaterial2);
    iris2.position.set(0.02, 0.02, halfHeight + 0.08), pupil2.position.set(0.03, 0.03, halfHeight + 0.06), eye2.add(iris2), eye2.add(pupil2), scene.add(eye1), scene.add(eye2);
    let animate = () => {
      animationIdRef.current = requestAnimationFrame(animate), elongatedHexagon.rotation.x += 0.01, elongatedHexagon.rotation.y += 0.01, eye1.rotation.x += 5e-3, eye1.rotation.y += 5e-3, eye2.rotation.x += 5e-3, eye2.rotation.y += 5e-3, renderer.render(scene, camera);
    };
    animate();
    let handleResize = () => {
      if (!mountRef.current || !renderer)
        return;
      let width = mountRef.current.clientWidth, height2 = mountRef.current.clientHeight;
      camera.aspect = width / height2, camera.updateProjectionMatrix(), renderer.setSize(width, height2);
    };
    return window.addEventListener("resize", handleResize), () => {
      window.removeEventListener("resize", handleResize), animationIdRef.current && cancelAnimationFrame(animationIdRef.current), mountRef.current && renderer.domElement && mountRef.current.removeChild(renderer.domElement), renderer.dispose(), geometry.dispose(), material.dispose(), eyeGeometry.dispose(), eyeMaterial.dispose();
    };
  }, []), /* @__PURE__ */ jsxDEV9(
    "div",
    {
      ref: mountRef,
      className: "three-scene-container",
      style: { width: "100%", height: "400px" }
    },
    void 0,
    !1,
    {
      fileName: "app/components/ThreeScene.tsx",
      lineNumber: 210,
      columnNumber: 5
    },
    this
  );
}, ThreeScene_default = ThreeScene;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "6xargs | AI Assisted Bug Bounty Platform" },
  { name: "description", content: "White label AI layer. Agentic-AI Powered Hacking. Faster Pentesting. Faster Triage times. Easier than ever. Protect the internet with us." }
];
function Index() {
  let [isMenuOpen, setIsMenuOpen] = useState6(!1);
  useEffect3(() => {
    let heroTitle = document.getElementById("hero-title");
    if (heroTitle) {
      let text = heroTitle.textContent;
      if (text) {
        let lines = text.trim().split(`
`), wrappedHTML = "";
        lines.forEach((line) => {
          if (line.trim() !== "") {
            let trimmedLine = line.trim(), lineHTML = '<div class="title-line">';
            for (let i = 0; i < trimmedLine.length; i++) {
              let char = trimmedLine[i];
              char === " " ? lineHTML += '<span class="space"> </span>' : lineHTML += `<span class="letter">${char}</span>`;
            }
            lineHTML += "</div>", wrappedHTML += lineHTML;
          }
        }), heroTitle.innerHTML = wrappedHTML;
      }
    }
    let heroSubtitle = document.getElementById("hero-subtitle");
    if (heroSubtitle) {
      let text = heroSubtitle.textContent;
      if (text) {
        let wrappedText = "";
        for (let i = 0; i < text.length; i++) {
          let char = text[i];
          char === " " ? wrappedText += '<span class="space"> </span>' : char === `
` || char === "\r" ? wrappedText += "<br>" : wrappedText += `<span class="letter">${char}</span>`;
        }
        heroSubtitle.innerHTML = wrappedText;
      }
    }
  }, []);
  let goToIndex = () => {
    window.location.href = "/";
  };
  return /* @__PURE__ */ jsxDEV10("div", { className: "min-h-screen bg-black text-white font-varela overflow-x-hidden", children: [
    /* @__PURE__ */ jsxDEV10("div", { className: "grid-background fixed top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(Navigation_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("header", { className: "h-screen flex justify-left items-center relative overflow-hidden pr-96", children: /* @__PURE__ */ jsxDEV10("div", { className: "container max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV10(
        "h1",
        {
          className: "hero-title-hover text-6xl font-bold leading-tight mb-6 text-left",
          id: "hero-title",
          children: "White label AI layer"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 96,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        "h2",
        {
          className: "hero-subtitle text-xl font-bold text-gray-400 leading-relaxed -ml-64",
          id: "hero-subtitle",
          children: [
            "Agentic-AI Powered Hacking.",
            `
`,
            "Faster Pentesting.",
            `
`,
            "Faster Triage times.",
            `
`,
            "Easier than ever.",
            `
`,
            "Protect the internet with us."
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 103,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10("div", { className: "absolute top-0 right-0 w-1/2 h-full", children: /* @__PURE__ */ jsxDEV10(ThreeScene_default, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10(
        "img",
        {
          src: "/images/6xargs_logo.jpg",
          alt: "6xargs Logo",
          className: "hero-logo absolute top-1/2 right-1/4 transform -translate-y-1/2 w-80 h-auto opacity-100 rounded-3xl border-4 border-dashed border-purple-500 transition-all duration-300 hover:opacity-100 hover:cursor-pointer filter contrast-125 brightness-110 z-15"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 120,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10("div", { className: "mental-map-container absolute top-0 left-0 w-full h-full pointer-events-none", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer", "data-position": "top-left", style: { top: "20%", left: "calc(32% + 35rem)", animationDelay: "0s" }, children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "card-title text-base font-semibold text-white text-center mb-2", children: "Community Driven" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "card-content text-sm text-gray-300 text-center leading-snug", children: "Growing network of ethical hackers and security experts" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer", "data-position": "top-right", style: { top: "20%", right: "calc(22% - 20rem)", animationDelay: "0s" }, children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "card-title text-base font-semibold text-white text-center mb-2", children: "API" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "card-content text-sm text-gray-300 text-center leading-snug", children: "Connect your own platform with the world first Ethical Hacking Agentic AI" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer", "data-position": "center-left", style: { top: "50%", left: "calc(22% + 37rem)", transform: "translateY(-50%)", animationDelay: "0s" }, children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "card-title text-base font-semibold text-white text-center mb-2", children: "HITL" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "card-content text-sm text-gray-300 text-center leading-snug", children: "Human In The Loop reduces response time by 50%" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer", "data-position": "center-right", style: { top: "50%", right: "calc(22% - 25.5rem)", transform: "translateY(-50%)", animationDelay: "0s" }, children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "card-title text-base font-semibold text-white text-center mb-2", children: "AI-Powered Security" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "card-content text-sm text-gray-300 text-center leading-snug", children: "CAI WEB CLI - World First AI Powered Web Application Security Agent" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer", "data-position": "bottom-left", style: { bottom: "20%", left: "calc(32% + 35rem)", animationDelay: "0s" }, children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "card-title text-base font-semibold text-white text-center mb-2", children: "Enterprise Solutions" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "card-content text-sm text-gray-300 text-center leading-snug", children: "Scalable security solutions for organizations of all sizes" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "mental-map-card absolute opacity-0 animate-fade-in pointer-events-auto cursor-pointer", "data-position": "bottom-right", style: { bottom: "20%", right: "calc(22% - 20rem)", animationDelay: "0s" }, children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "card-title text-base font-semibold text-white text-center mb-2", children: "Real-time Analysis" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 155,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "card-content text-sm text-gray-300 text-center leading-snug", children: "Instant vulnerability assessment and prioritization" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("section", { className: "how-it-works-section bg-black p-8 max-w-7xl mx-auto my-8 rounded-2xl border-2 border-gray-700 shadow-2xl flex justify-left items-center", children: /* @__PURE__ */ jsxDEV10("div", { className: "how-it-works-container max-w-full flex gap-12 items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "how-it-works-card flex-2 bg-gray-900/70 rounded-2xl p-8 transition-all duration-300 overflow-hidden shadow-lg border border-gray-800/30 min-h-80 max-w-4xl flex items-center justify-center hover:bg-gray-800/70 hover:shadow-xl hover:border-white/10", children: /* @__PURE__ */ jsxDEV10("div", { className: "workflow-container w-full flex justify-center items-center", children: /* @__PURE__ */ jsxDEV10("div", { className: "workflow-steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "workflow-step", children: /* @__PURE__ */ jsxDEV10("div", { className: "workflow-box bg-gray-800/50 p-6 rounded-xl border border-gray-700", children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "step-number bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4", children: "1" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 170,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "step-title text-lg font-semibold text-white mb-2", children: "API Integration" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 171,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "step-description text-sm text-gray-300 leading-relaxed", children: "Platforms like HackerOne or Bugcrowd connect the CAI API with their own programs and security policies." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 172,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 169,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 168,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "workflow-step", children: /* @__PURE__ */ jsxDEV10("div", { className: "workflow-box bg-gray-800/50 p-6 rounded-xl border border-gray-700", children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "step-number bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4", children: "2" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 178,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "step-title text-lg font-semibold text-white mb-2", children: "CLI Access for Hackers" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 179,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "step-description text-sm text-gray-300 leading-relaxed", children: "Hackers use a web-based CLI inside the platform, powered by CAI Agentic AI." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 180,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 177,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 176,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "workflow-step", children: /* @__PURE__ */ jsxDEV10("div", { className: "workflow-box bg-gray-800/50 p-6 rounded-xl border border-gray-700", children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "step-number bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4", children: "3" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 186,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "step-title text-lg font-semibold text-white mb-2", children: "Secure Command Execution" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 187,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "step-description text-sm text-gray-300 leading-relaxed", children: "Hackers can run commands or prompts. CAI enforces program-specific restrictions and safety controls." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 188,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 185,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 184,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "workflow-step", children: /* @__PURE__ */ jsxDEV10("div", { className: "workflow-box bg-gray-800/50 p-6 rounded-xl border border-gray-700", children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "step-number bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4", children: "4" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 194,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "step-title text-lg font-semibold text-white mb-2", children: "Validation & Logs" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 195,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "step-description text-sm text-gray-300 leading-relaxed", children: "Every action is validated and stored in secure, auditable logs (Railway + PostgreSQL)." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 196,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 193,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 192,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "workflow-step", children: /* @__PURE__ */ jsxDEV10("div", { className: "workflow-box bg-gray-800/50 p-6 rounded-xl border border-gray-700", children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "step-number bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4", children: "5" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 202,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "step-title text-lg font-semibold text-white mb-2", children: "Insights & Reporting" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 203,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "step-description text-sm text-gray-300 leading-relaxed", children: "Results are summarized and shared directly in the company's triage workflow." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 204,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 201,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 200,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 167,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "how-it-works-text flex-1 flex flex-col gap-6 max-w-4xl", children: [
        /* @__PURE__ */ jsxDEV10("h2", { className: "text-4xl font-semibold tracking-wide relative inline-block mb-4", children: "How the API Works" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 211,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "text-xl text-gray-300 leading-relaxed", children: "With CAI API, any bug bounty platform can empower hackers with an AI-driven CLI directly in their workflow. Built-in security policies, command restrictions, and audit-ready logs streamline the vulnerability research and reporting process." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 164,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("section", { className: "agent-sneak-peek-section bg-black p-20 max-w-7xl mx-auto my-20 rounded-2xl border-2 border-gray-700 shadow-2xl flex justify-center items-center", children: /* @__PURE__ */ jsxDEV10("div", { className: "agent-sneak-peek-container max-w-6xl flex gap-16 items-center justify-center", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "agent-sneak-peek-card flex-1 bg-gray-900/70 rounded-xl p-8 transition-all duration-300 overflow-hidden shadow-lg border border-white/5 flex justify-center items-center hover:bg-gray-800/85 hover:shadow-xl hover:border-purple-500/20", children: /* @__PURE__ */ jsxDEV10("div", { className: "cli-container w-full flex justify-center items-center", children: /* @__PURE__ */ jsxDEV10("div", { className: "terminal-container bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700 max-w-2xl w-full", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "terminal-header bg-gray-800 px-4 py-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV10("div", { className: "terminal-controls flex space-x-2", children: [
            /* @__PURE__ */ jsxDEV10("div", { className: "control-button w-3 h-3 rounded-full bg-red-500" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 225,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV10("div", { className: "control-button w-3 h-3 rounded-full bg-yellow-500" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 226,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV10("div", { className: "control-button w-3 h-3 rounded-full bg-green-500" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 227,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 224,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "terminal-title text-gray-300 text-sm font-mono", children: "6xargs CLI - AI Security Agent" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 229,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 223,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "terminal-body bg-black p-4 font-mono text-sm", children: /* @__PURE__ */ jsxDEV10(TerminalAnimation_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 232,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 231,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 222,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 221,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "agent-sneak-peek-text flex-1 flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxDEV10("h2", { className: "text-4xl font-semibold tracking-wide text-purple-400 mb-4", children: "AI Agent CLI Demo" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 238,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "text-xl text-gray-300 leading-relaxed", children: "Experience our AI-powered security CLI in action. This interactive terminal demonstrates the power of automated vulnerability scanning and intelligent threat analysis." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 239,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 237,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 219,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 218,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("main", { className: "py-52 px-52 flex justify-center items-center", children: /* @__PURE__ */ jsxDEV10("section", { className: "cards-section max-w-5xl flex gap-16 items-center justify-center", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "section-left flex-1 flex flex-col gap-16", onClick: () => {
        window.location.href = "/login";
      }, children: /* @__PURE__ */ jsxDEV10("div", { className: "card form-card relative bg-gray-900/70 rounded-xl p-12 transition-all duration-300 text-center overflow-hidden shadow-lg border border-white/5 max-h-48 hover:bg-black/85 hover:shadow-xl hover:cursor-pointer hover:border-white/10 hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxDEV10("h2", { className: "text-3xl font-semibold mb-3 relative inline-block", children: "Hackers" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 249,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "subtitle text-xl text-gray-400 transition-colors", children: "Search for a bug bounty program" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 250,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 248,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 247,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "section-right flex-1 flex flex-col gap-16", onClick: () => {
        window.location.href = "/contact";
      }, children: /* @__PURE__ */ jsxDEV10("div", { className: "card business-card relative bg-gray-900/70 rounded-xl p-12 transition-all duration-300 text-center overflow-hidden shadow-lg border border-white/5 max-h-48 hover:bg-black/85 hover:shadow-xl hover:cursor-pointer hover:border-white/10 hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxDEV10("h2", { className: "text-3xl font-semibold mb-3 relative inline-block", children: "Enterprises" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 255,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "subtitle text-xl text-gray-400 transition-colors", children: "Register with us" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 256,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 254,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 253,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 246,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("footer", { className: "border-t border-gray-800/30 pt-12 bg-black/20", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "footer-content flex justify-around flex-wrap max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "footer-section mb-8 ml-10", children: [
          /* @__PURE__ */ jsxDEV10("h3", { className: "text-white mb-4 text-lg font-semibold", children: "Social Media" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 266,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10("ul", { className: "horizontal-list flex flex-wrap gap-4 text-center", children: [
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10("a", { href: "https://twitter.com/", className: "text-gray-400 hover:text-purple-400 transition-colors", children: "Twitter" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 268,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 268,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10("a", { href: "https://www.discord.com/", className: "text-gray-400 hover:text-purple-400 transition-colors", children: "Discord" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 269,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 269,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 267,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 265,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "footer-section mb-8 ml-10", children: [
          /* @__PURE__ */ jsxDEV10("h3", { className: "text-white mb-4 text-lg font-semibold", children: "Menu" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 273,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10("ul", { className: "horizontal-list flex flex-wrap gap-4 text-center", children: [
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10("a", { href: "/about", className: "text-gray-400 hover:text-purple-400 transition-colors", children: "About Us" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 275,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 275,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10("a", { href: "https://www.discord.com/", className: "text-gray-400 hover:text-purple-400 transition-colors", children: "Community" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 276,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 276,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 272,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "footer-section mb-8 ml-10", children: [
          /* @__PURE__ */ jsxDEV10("h3", { className: "text-white mb-4 text-lg font-semibold", children: "Support" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 280,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10("ul", { className: "horizontal-list flex flex-wrap gap-4 text-center", children: /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10("a", { href: "/contact", className: "text-gray-400 hover:text-purple-400 transition-colors", children: "Contact 6xargs" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 282,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 282,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 281,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 279,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "footer-section mb-8 ml-10", children: [
          /* @__PURE__ */ jsxDEV10("h3", { className: "text-white mb-4 text-lg font-semibold", children: "Resources" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 286,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10("ul", { className: "horizontal-list flex flex-wrap gap-4 text-center", children: [
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10("a", { href: "https://www.github.com/", className: "text-gray-400 hover:text-purple-400 transition-colors", children: "GitHub" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 288,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 288,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10("a", { href: "/terms-and-conditions", className: "text-gray-400 hover:text-purple-400 transition-colors", children: "Terms and Conditions" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 289,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 289,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10("a", { href: "/privacy-policy", className: "text-gray-400 hover:text-purple-400 transition-colors", children: "Privacy & Policy" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 290,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 290,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 287,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 285,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 264,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "footer-bottom text-center py-8 border-t border-white/10 justify-center items-center", children: /* @__PURE__ */ jsxDEV10("p", { className: "text-gray-400", children: "\xA92025 6xargs All rights reserved" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 295,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 294,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 263,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZJ2ZU6MR.js", imports: ["/build/_shared/chunk-2PVEFZQQ.js", "/build/_shared/chunk-U7WQEECF.js", "/build/_shared/chunk-OUXMQCSK.js", "/build/_shared/chunk-ZIPKILLR.js", "/build/_shared/chunk-V5CWULKU.js", "/build/_shared/chunk-2LCIGNNS.js", "/build/_shared/chunk-V6BBPW4V.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-53YDZFPS.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-EPA454TF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-D3QAA64X.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.logout": { id: "routes/auth.logout", parentId: "root", path: "auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.logout-B5SKEBEN.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.register": { id: "routes/auth.register", parentId: "root", path: "auth/register", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.register-NLS627G2.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-STLQJK7Z.js", imports: ["/build/_shared/chunk-JSCKBFOW.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard._index": { id: "routes/dashboard._index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard._index-ASTZXW2U.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "cf142d8f", hmr: { runtime: "/build/_shared\\chunk-OUXMQCSK.js", timestamp: 1757439672192 }, url: "/build/manifest-CF142D8F.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !0, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard._index": {
    id: "routes/dashboard._index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_index_exports
  },
  "routes/auth.register": {
    id: "routes/auth.register",
    parentId: "root",
    path: "auth/register",
    index: void 0,
    caseSensitive: void 0,
    module: auth_register_exports
  },
  "routes/auth.logout": {
    id: "routes/auth.logout",
    parentId: "root",
    path: "auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: auth_logout_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
