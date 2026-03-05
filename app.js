const state = {
  lang: localStorage.getItem("site_lang") || "zh",
  repo: "jjjgghh/openclawz-site", // TODO: 替换为你的 GitHub 仓库，如 miaoxworld/openclaw-manager
  releaseCache: null,
  releaseLoading: false,
  carouselIndex: 0,
  carouselTimer: null,
};

const i18n = {
  zh: {
    nav_home: "首页",
    nav_download: "下载",
    nav_changelog: "更新日志",
    nav_docs: "文档",
    hero_badge: "OpenClaw 一键部署方案",
    hero_title: "ClawPilot",
    hero_subtitle: "让 OpenClaw 安装、配置、运维变成可视化操作",
    hero_desc: "面向不会代码的用户设计：安装引导、AI 配置、消息渠道、日志诊断、服务控制，一套界面全部搞定。",
    hero_cta_download: "立即下载",
    hero_cta_docs: "查看文档",
    sec_feature_title: "核心能力",
    sec_feature_desc: "以桌面端体验为核心，兼顾部署效率和运维可控性。",
    f1_t: "一键部署",
    f1_d: "自动检测 Node 与 OpenClaw 依赖，降低环境问题导致的失败率。",
    f2_t: "可视化配置",
    f2_d: "Provider、模型、渠道、目录都支持图形化配置与即时保存。",
    f3_t: "诊断排障",
    f3_d: "内置实时日志、预检与故障定位，让用户可自助修复常见问题。",
    sec_adv_title: "为什么是 ClawPilot",
    sec_adv_desc: "你不用教用户敲命令，用户也能自己跑起来。",
    adv_1: "图形化安装流程，降低学习门槛",
    adv_2: "多平台支持（Windows / macOS / Linux）",
    adv_3: "暗色与亮色主题，适配不同使用场景",
    adv_4: "模块化设置页，易于后续扩展",
    sec_show_title: "场景展示",
    show_1_t: "工作流自动化",
    show_1_d: "从需求到执行，快速落地：服务启动、配置调整、渠道连接一步完成。",
    show_2_t: "实时运维面板",
    show_2_d: "进程状态、端口、运行时长、日志数据一眼可见。",
    show_3_t: "小白友好交互",
    show_3_d: "按钮式操作、状态提示、错误信息可读化，减少支持成本。",
    sec_faq_title: "常见问题",
    faq1_q: "需要懂命令行吗？",
    faq1_a: "不需要，大部分操作都可在图形界面完成。",
    faq2_q: "可以连接云端 OpenClaw 吗？",
    faq2_a: "可以，推荐云端部署服务，桌面端做管理入口。",
    faq3_q: "这个项目适合商用部署吗？",
    faq3_a: "适合，建议补齐签名、公证、升级与监控链路后再规模化分发。",
    cta_title: "开始构建你的 OpenClaw 发行版",
    cta_desc: "现在就搭建下载页，给用户一个可直接安装的入口。",
    cta_btn: "前往下载",
    dl_title: "下载 ClawPilot",
    dl_desc: "自动读取 GitHub Releases；如果读取失败会显示本地示例数据。",
    dl_loading: "正在同步发布信息...",
    dl_no_data: "暂无可用安装包，请先发布 Release。",
    dl_latest: "最新版本",
    dl_history: "历史版本",
    cl_title: "更新日志",
    docs_title: "文档中心",
    docs_desc: "可放置安装教程、FAQ、故障排查和版本说明。",
    footer_text: "基于 OpenClaw 构建 · ClawPilot 网站模板",
  },
  en: {
    nav_home: "Home",
    nav_download: "Download",
    nav_changelog: "Changelog",
    nav_docs: "Docs",
    hero_badge: "OpenClaw One-Click Solution",
    hero_title: "ClawPilot",
    hero_subtitle: "Visual operations for OpenClaw deployment and maintenance",
    hero_desc: "Built for non-technical users: setup wizard, AI config, channels, diagnostics, and service control in one interface.",
    hero_cta_download: "Download",
    hero_cta_docs: "Documentation",
    sec_feature_title: "Core Capabilities",
    sec_feature_desc: "Desktop-first experience with deployment speed and operational clarity.",
    f1_t: "One-Click Deploy",
    f1_d: "Auto checks Node/OpenClaw dependencies to reduce setup failures.",
    f2_t: "Visual Configuration",
    f2_d: "Configure provider, model, channel, and directories in UI with instant save.",
    f3_t: "Diagnostics",
    f3_d: "Built-in live logs and preflight checks help users fix issues themselves.",
    sec_adv_title: "Why ClawPilot",
    sec_adv_desc: "Your users can run it without learning terminal commands.",
    adv_1: "GUI onboarding lowers learning curve",
    adv_2: "Cross-platform support (Windows / macOS / Linux)",
    adv_3: "Dark and light themes for different environments",
    adv_4: "Modular settings structure for future extensions",
    sec_show_title: "Use Cases",
    show_1_t: "Workflow Automation",
    show_1_d: "From request to execution: start service, adjust config, connect channels quickly.",
    show_2_t: "Live Ops Panel",
    show_2_d: "Process status, port, uptime, and logs visible at a glance.",
    show_3_t: "Beginner Friendly UX",
    show_3_d: "Button-driven actions and human-readable errors reduce support cost.",
    sec_faq_title: "FAQ",
    faq1_q: "Do I need command line skills?",
    faq1_a: "No, most operations are available in the GUI.",
    faq2_q: "Can it connect to cloud OpenClaw?",
    faq2_a: "Yes. Deploy OpenClaw in cloud and use desktop as the control panel.",
    faq3_q: "Is it ready for commercial rollout?",
    faq3_a: "Yes, after adding signing/notarization/update/monitoring pipeline.",
    cta_title: "Build your OpenClaw distribution",
    cta_desc: "Ship a clean download page and let users install directly.",
    cta_btn: "Go Download",
    dl_title: "Download ClawPilot",
    dl_desc: "Auto-sync from GitHub Releases with local fallback when unavailable.",
    dl_loading: "Syncing release data...",
    dl_no_data: "No package found. Please publish a release first.",
    dl_latest: "Latest",
    dl_history: "Version History",
    cl_title: "Changelog",
    docs_title: "Docs Center",
    docs_desc: "Put quick start, FAQ, troubleshooting and release notes here.",
    footer_text: "Built on OpenClaw · ClawPilot site starter",
  },
};

const fallbackDownloads = [
  { os: "Windows x64", version: "v0.1.0", file: "ClawPilot-Setup-0.1.0.exe", url: "https://github.com/your-org/your-repo/releases/latest" },
  { os: "macOS Apple Silicon", version: "v0.1.0", file: "ClawPilot-0.1.0-arm64.dmg", url: "https://github.com/your-org/your-repo/releases/latest" },
  { os: "macOS Intel", version: "v0.1.0", file: "ClawPilot-0.1.0-x64.dmg", url: "https://github.com/your-org/your-repo/releases/latest" },
  { os: "Linux AppImage", version: "v0.1.0", file: "ClawPilot-0.1.0.AppImage", url: "https://github.com/your-org/your-repo/releases/latest" },
];

const fallbackChangelogs = [
  { ver: "v0.1.0", date: "2026-03-05", notes: "官网模板改版，复刻 LobsterAI 风格布局。" },
  { ver: "v0.0.9", date: "2026-03-01", notes: "优化暗色主题、导航结构与响应式布局。" },
];

const slides = [
  { titleZh: "服务状态总览", titleEn: "Service Overview", descZh: "启动、停止、重启与实时状态展示。", descEn: "Start, stop, restart and live service status.", color: "linear-gradient(140deg, rgba(255,95,99,.28), rgba(255,95,99,.02) 45%, rgba(95,142,255,.18))" },
  { titleZh: "AI 配置中心", titleEn: "AI Config Center", descZh: "Provider、模型、密钥配置统一入口。", descEn: "Single entry for provider, model and key setup.", color: "linear-gradient(140deg, rgba(95,142,255,.24), rgba(255,95,99,.10))" },
  { titleZh: "渠道与日志诊断", titleEn: "Channels & Logs", descZh: "渠道状态、实时日志与排障动作联动。", descEn: "Channel status, live logs and troubleshooting actions.", color: "linear-gradient(140deg, rgba(95,220,170,.20), rgba(95,142,255,.16))" },
];

function t(key) {
  return i18n[state.lang][key] || key;
}

function route() {
  return (location.hash || "#/").replace(/^#/, "");
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.getElementById("langSwitch").textContent = state.lang === "zh" ? "EN" : "中";
}

function navActive(path) {
  document.querySelectorAll(".nav a").forEach((a) => {
    const href = a.getAttribute("href");
    a.classList.toggle("active", href === `#${path}`);
  });
}

function classifyAsset(name) {
  const n = name.toLowerCase();
  if (n.endsWith(".exe") || n.endsWith(".msi")) return "Windows x64";
  if (n.endsWith(".dmg") && (n.includes("arm64") || n.includes("aarch64") || n.includes("apple"))) return "macOS Apple Silicon";
  if (n.endsWith(".dmg")) return "macOS Intel";
  if (n.endsWith(".appimage")) return "Linux AppImage";
  if (n.endsWith(".deb")) return "Linux Deb";
  return "Other";
}

async function loadReleases() {
  if (state.releaseCache || state.releaseLoading) return state.releaseCache;
  if (!state.repo || state.repo.includes("your-org")) return null;

  state.releaseLoading = true;
  try {
    const api = `https://api.github.com/repos/${state.repo}/releases?per_page=12`;
    const res = await fetch(api, { headers: { Accept: "application/vnd.github+json" } });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = await res.json();

    const packages = [];
    const history = [];

    data.forEach((release) => {
      const ver = release.tag_name || release.name || "unknown";
      const date = String(release.published_at || "").slice(0, 10);
      history.push({ ver, date, notes: (release.body || "").split("\n")[0] || "-" });

      (release.assets || []).forEach((a) => {
        packages.push({
          os: classifyAsset(a.name),
          version: ver,
          file: a.name,
          size: `${Math.max(1, Math.round((a.size || 0) / 1024 / 1024))} MB`,
          url: a.browser_download_url,
          downloads: a.download_count || 0,
        });
      });
    });

    state.releaseCache = {
      packages: packages.length ? packages : fallbackDownloads,
      history: history.length ? history : fallbackChangelogs,
      source: "github",
    };
    return state.releaseCache;
  } catch {
    state.releaseCache = {
      packages: fallbackDownloads,
      history: fallbackChangelogs,
      source: "fallback",
    };
    return state.releaseCache;
  } finally {
    state.releaseLoading = false;
  }
}

function renderHome() {
  return `
    <section class="hero fade">
      <div class="hero-left panel">
        <div class="hero-badge" data-i18n="hero_badge">${t("hero_badge")}</div>
        <h1>${t("hero_title")}</h1>
        <h3>${t("hero_subtitle")}</h3>
        <p>${t("hero_desc")}</p>
        <div class="hero-cta">
          <a class="btn primary" href="#/download">${t("hero_cta_download")}</a>
          <a class="btn" href="#/docs">${t("hero_cta_docs")}</a>
        </div>
      </div>

      <div class="hero-right panel">
        <div class="carousel" id="heroCarousel"></div>
        <div class="carousel-dots" id="carouselDots"></div>
      </div>
    </section>

    <section class="section fade">
      <div class="section-head">
        <h2>${t("sec_feature_title")}</h2>
        <p>${t("sec_feature_desc")}</p>
      </div>
      <div class="cards3">
        <article class="panel feature-card"><h3>${t("f1_t")}</h3><p>${t("f1_d")}</p></article>
        <article class="panel feature-card"><h3>${t("f2_t")}</h3><p>${t("f2_d")}</p></article>
        <article class="panel feature-card"><h3>${t("f3_t")}</h3><p>${t("f3_d")}</p></article>
      </div>
    </section>

    <section class="section fade split">
      <div class="panel">
        <h2>${t("sec_adv_title")}</h2>
        <p class="muted">${t("sec_adv_desc")}</p>
        <ul class="adv-list">
          <li>${t("adv_1")}</li><li>${t("adv_2")}</li><li>${t("adv_3")}</li><li>${t("adv_4")}</li>
        </ul>
      </div>
      <div class="panel stats">
        <div><b>3 min</b><span>Avg Setup</span></div>
        <div><b>99%</b><span>Wizard Success</span></div>
        <div><b>3 OS</b><span>Cross Platform</span></div>
        <div><b>GUI</b><span>Non-Tech Friendly</span></div>
      </div>
    </section>

    <section class="section fade">
      <h2>${t("sec_show_title")}</h2>
      <div class="showcase">
        <article class="panel show-row"><div class="show-copy"><h3>${t("show_1_t")}</h3><p>${t("show_1_d")}</p></div><div class="show-media"></div></article>
        <article class="panel show-row reverse"><div class="show-copy"><h3>${t("show_2_t")}</h3><p>${t("show_2_d")}</p></div><div class="show-media"></div></article>
        <article class="panel show-row"><div class="show-copy"><h3>${t("show_3_t")}</h3><p>${t("show_3_d")}</p></div><div class="show-media"></div></article>
      </div>
    </section>

    <section class="section fade">
      <h2>${t("sec_faq_title")}</h2>
      <div class="faq-item"><div class="q">${t("faq1_q")}</div><div class="a">${t("faq1_a")}</div></div>
      <div class="faq-item"><div class="q">${t("faq2_q")}</div><div class="a">${t("faq2_a")}</div></div>
      <div class="faq-item"><div class="q">${t("faq3_q")}</div><div class="a">${t("faq3_a")}</div></div>
    </section>

    <section class="section fade cta panel">
      <h2>${t("cta_title")}</h2>
      <p>${t("cta_desc")}</p>
      <a class="btn primary" href="#/download">${t("cta_btn")}</a>
    </section>
  `;
}

function renderDownloadContent(dataset) {
  const top = dataset.packages.slice(0, 4);
  return `
    <section class="panel fade page-card">
      <h2>${t("dl_title")}</h2>
      <p class="muted">${t("dl_desc")}</p>

      <div class="download-grid">
        ${top
          .map(
            (d) => `
          <article class="download-card">
            <div class="download-os">${d.os}</div>
            <div class="download-ver">${d.version}</div>
            <div class="download-file">${d.file}</div>
            <div class="download-meta">${d.size || "-"} · ${d.downloads ?? 0} downloads</div>
            <a class="btn primary" href="${d.url}" target="_blank">Download</a>
          </article>`
          )
          .join("")}
      </div>

      <h3 class="sub-title">${t("dl_history")}</h3>
      <table class="table">
        <thead><tr><th>Version</th><th>Date</th><th>Notes</th></tr></thead>
        <tbody>
          ${dataset.history
            .map((h) => `<tr><td><span class="pill">${h.ver}</span></td><td>${h.date || "-"}</td><td>${h.notes || "-"}</td></tr>`)
            .join("")}
        </tbody>
      </table>
    </section>
  `;
}

function renderDownloadLoading() {
  return `
    <section class="panel fade page-card">
      <h2>${t("dl_title")}</h2>
      <p class="muted">${t("dl_loading")}</p>
    </section>
  `;
}

function renderChangelog() {
  const list = (state.releaseCache && state.releaseCache.history) || fallbackChangelogs;
  return `
    <section class="panel fade page-card">
      <h2>${t("cl_title")}</h2>
      ${list
        .map((c) => `<div class="faq-item"><div class="q">${c.ver} · ${c.date || "-"}</div><div class="a">${c.notes || "-"}</div></div>`)
        .join("")}
    </section>
  `;
}

function renderDocs() {
  return `
    <section class="panel fade page-card">
      <h2>${t("docs_title")}</h2>
      <p>${t("docs_desc")}</p>
      <div class="faq-item"><div class="q">1. Quick Start</div><div class="a">Install package -> Launch app -> One-click deploy -> Configure AI channels.</div></div>
      <div class="faq-item"><div class="q">2. Troubleshooting</div><div class="a">Check service status, logs panel, and network/firewall settings.</div></div>
      <div class="faq-item"><div class="q">3. Release</div><div class="a">Set <code>state.repo</code> in app.js to auto-sync downloads from GitHub Releases.</div></div>
    </section>
  `;
}

function mountCarousel() {
  const root = document.getElementById("heroCarousel");
  const dots = document.getElementById("carouselDots");
  if (!root || !dots) return;

  function paint() {
    const s = slides[state.carouselIndex % slides.length];
    root.innerHTML = `
      <div class="carousel-slide" style="background:${s.color}">
        <div class="carousel-ui-top"></div>
        <div class="carousel-ui-mid"></div>
        <div class="carousel-ui-cards"><i></i><i></i><i></i><i></i></div>
        <div class="carousel-caption">
          <b>${state.lang === "zh" ? s.titleZh : s.titleEn}</b>
          <span>${state.lang === "zh" ? s.descZh : s.descEn}</span>
        </div>
      </div>
    `;

    dots.innerHTML = slides
      .map((_, i) => `<button class="dot ${i === state.carouselIndex ? "on" : ""}" data-idx="${i}"></button>`)
      .join("");

    dots.querySelectorAll(".dot").forEach((d) => {
      d.addEventListener("click", () => {
        state.carouselIndex = Number(d.dataset.idx);
        paint();
      });
    });
  }

  paint();

  if (state.carouselTimer) clearInterval(state.carouselTimer);
  state.carouselTimer = setInterval(() => {
    state.carouselIndex = (state.carouselIndex + 1) % slides.length;
    paint();
  }, 3400);
}

async function render() {
  const path = route();
  navActive(path);
  const app = document.getElementById("app");

  if (path === "/download") {
    app.innerHTML = renderDownloadLoading();
    const dataset = (await loadReleases()) || { packages: fallbackDownloads, history: fallbackChangelogs };
    app.innerHTML = renderDownloadContent(dataset);
    return;
  }

  if (path === "/changelog") {
    if (!state.releaseCache) await loadReleases();
    app.innerHTML = renderChangelog();
    return;
  }

  if (path === "/docs") {
    app.innerHTML = renderDocs();
    return;
  }

  app.innerHTML = renderHome();
  mountCarousel();
}

function boot() {
  document.getElementById("year").textContent = String(new Date().getFullYear());
  document.getElementById("langSwitch").addEventListener("click", async () => {
    state.lang = state.lang === "zh" ? "en" : "zh";
    localStorage.setItem("site_lang", state.lang);
    applyI18n();
    await render();
  });
  window.addEventListener("hashchange", () => render());
  applyI18n();
  render();
}

boot();
