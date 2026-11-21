(function () {
  const START = Date.UTC(1919, 8, 18), DAY = 864e5;
  const dayOf = (s) => { const [y, m, d] = s.split("-").map(Number); return Math.round((Date.UTC(y, m - 1, d) - START) / DAY); };
  const $ = (id) => document.getElementById(id);
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const fmt = (n) => { const t = new Date(START + n * DAY); return t.getUTCDate() + " " + MONTHS[t.getUTCMonth()] + " " + t.getUTCFullYear(); };
  const WD = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const EVENTS = [
    ["1919-09-18","Joins HMS Calcutta","Aged 17, he joins the cruiser at Portsmouth as a Boy.","portsmouth.jpg","One of the Royal Navy ships entering Portsmouth Harbour, December 1918, nine months before he joined. © The rights holder Q 73790 (IWM Non-Commercial Licence)."],
    ["1919-10-10","Arrives at Bermuda","The ship reaches the North America and West Indies Station base.","bermuda.jpg","Hamilton Harbour, Bermuda, between 1921 and 1922, with nine submarines at anchor. Photo by Duncanogi's father, released into the public domain worldwide by Duncanogi (Wikipedia)."],
    ["1919-12-06","Landings at Trinidad","Parties from the ship go ashore at Trinidad.","trinidad.jpg","Trinidad – Port of Spain, between ca. 1915 and ca. 1920. Bain News Service. George Grantham Bain Collection, Library of Congress, LC-DIG-ggbain-22790. No known restrictions on publication."],
    ["1920-03-06","Fire reported","A fire is logged on 6 March while the ship is at Trinidad."],
    ["1920-03-11","Eighteenth birthday","Rated Ordinary Seaman and signs on for a 12-year engagement."],
    ["1920-07-10","Icebergs off Newfoundland","The ship passes icebergs during a northern cruise."],
    ["1920-07-30","Commander-in-Chief dies","Vice-Admiral Sir Trevylyan Napier dies at Bermuda.","napier.jpg","Rear-admiral Trevylyan Dacres Willes Napier, drawn by Francis Dodd, 9 June 1917 (three years before his death). Imperial War Museums, Art.IWM ART 1761. Public domain (Wikimedia Commons)."],
    ["1920-09-13","Colón: Prince of Wales tour","The ship is at Colón as the Prince of Wales tours the region.","colon.jpg","Colón, Panama: unpaved street with wooden houses and palm trees, 1906, about 14 years before the visit. Wellcome Collection. Public Domain Mark."],
    ["1920-10-02","Prince addresses the ship","The Prince speaks to the ship's company at Bermuda."],
    ["1921-02-11","Able Seaman","Promoted to Able Seaman."],
    ["1921-05-02","Wireless room fire","A fire breaks out in the wireless room."],
    ["1921-05-20","Philadelphia Navy Yard","Calcutta is at the Philadelphia Navy Yard from 20 to 23 May, on her way home.","philadelphia.jpg","HMS Calcutta at the Philadelphia Navy Yard, 20 May 1921, with her crew lined up on deck. The photograph is inscribed \"Navy Yard, Phila.\" Rickard, J (20 April 2019), HMS Calcutta at Philadelphia, 1921, historyofwar.org. Used with permission."],
    ["1921-06-03","Home to Portsmouth","The ship returns home and recommissions on 14 June."],
    ["1922-01-25","Panama Canal","Passes through the canal into the Pacific.","culebra.jpg","The Great Culebra Cut with Gold Hill, showing landslide in the foreground, Panama Canal. O. E. Jorstad and I. L. Maduro Jr., ca. 1913, about nine years before this transit. Library of Congress. No known restrictions on publication."],
    ["1922-02-21","Honolulu","Calls at Hawaii.",["honolulu.jpg","waikiki.jpg"],["US Post Office, Custom House and Court House, Honolulu, 1922. Hawaii Shinpo Sha. Public domain in the US (Wikimedia Commons).","Two natives with outrigger canoes at the shoreline, Honolulu, Hawaii, c. 1922, with Diamond Head behind. Library of Congress, U.S. Geography File (LC-USZ62-105953). No known restrictions on publication."]],
    ["1922-03-08","Palmyra","Calls at Palmyra Atoll.","palmyra.jpg","Palmyra Atoll from the air, 21 September 1921, about six months before the visit. Taken by the crew of the USS Eagle 40, the first known aerial photograph of the atoll. Reproduced in Jesse Johnson, \"The Palmyra Atoll Digital Archive\", Hawaiian Journal of History. Public domain per the Palmyra Atoll Digital Archive."],
    ["1922-04-10","San Francisco","Reaches the US west coast.","sf.jpg","Ferry Building and Embarcadero, San Francisco, aerial view dated 14 September 1925. San Francisco Subjects Photograph Collection (SFP 162), San Francisco History Center, San Francisco Public Library (digitalsf.org/record/29782). No copyright – United States."],
    ["1922-08-09","HMS Raleigh wrecked","The cruiser Raleigh is wrecked on 8 August near Forteau Bay, Labrador. Calcutta reaches Forteau Bay the next day.","raleigh.jpg","HMS Raleigh aground off Point Amour, Labrador, August 1922. Photographer not identified. George Metcalf Archival Collection, Canadian War Museum (CWM 19750148-068). Reproduced under the museum's non-commercial reproduction terms."],
    ["1923-01-15","New Orleans","Visits the Gulf coast of the United States.","neworleans.jpg","New Orleans in 1919, four years before the visit, probably from the roof of the Gunewald Hotel. Canal Street runs to the Mississippi right of centre. Centre of a panorama by G. L. Prince, Library of Congress, Panoramic Photographs (pan.6a05628). Public domain in the US (Wikimedia Commons)."],
    ["1923-01-24","Havana","Calls at Cuba.","havana.jpg","Morro Castle, Havana. Photo by a U.S. Navy reconnaissance plane. The catalogue date is 1909, but the negative number (WT-428-1-23) points to 1923. National Photo Company Collection, Library of Congress, LC-USZ62-39983. No known restrictions on publication."],
    ["1923-03-11","Good conduct badge","Awarded his first good conduct badge."],
    ["1923-07-06","Man overboard","AB G. Legg is lost overboard near Halifax.","halifax.jpg","Halifax from Citadel Hill, Nova Scotia, ca. 1924. Creator unknown. Ingenium Archives, CN Images of Canada Collection, 20452, http://collection.ingenium.ca/en/id/20452/. Public domain (Canada)."],
    ["1923-09-27","Pays off at Portsmouth","The commission ends. His later postings were shore bases and are not mapped."]
  ].map(([d, t, x, img, cr]) => ({ day: dayOf(d), title: t, text: x, img, cr }));

  const PLACES = [["Portsmouth",50.8,-1.1],["Bermuda",32.3,-64.8],["Trinidad",10.65,-61.5],["Colón",9.35,-79.9],["Honolulu",21.3,-157.9],["San Francisco",37.8,-122.4],["New Orleans",29.95,-90.1],["Havana",23.1,-82.4],["Halifax",44.65,-63.6],["Palmyra",5.9,-162.1],["Forteau Bay",51.45,-56.95]];

  const BOY_END = dayOf("1920-03-10"), AB_START = dayOf("1921-02-11"), OS_START = dayOf("1920-03-11");
  const RATINGS = [["Boy","#7ec8b0"],["Ordinary Seaman","#ef8a6b"],["Able Seaman","#f4d27a"]];
  const ratingAt = (d) => (d <= BOY_END ? 0 : d < AB_START ? 1 : 2);
  const ageAt = (d) => (d >= OS_START ? 18 : 17) + (d >= dayOf("1921-03-11") ? 1 : 0) + (d >= dayOf("1922-03-11") ? 1 : 0) + (d >= dayOf("1923-03-11") ? 1 : 0);

  const canvas = $("map"), ctx = canvas.getContext("2d");
  const portrait = new Image(); portrait.src = "portrait.jpg";
  let track, land, kf, cum, TOTAL, W = 0, H = 0, dpr = 1;
  let day = 0, playing = false, speed = 45, pauseAtEvents = true, view = "globe";
  let holdUntil = 0, lastEvt = -1, rot = null, last = 0;

  const graticule = d3.geoGraticule10();
  const proj = { globe: d3.geoOrthographic().clipAngle(90), chart: d3.geoNaturalEarth1() };
  const path = d3.geoPath(null, ctx);

  const hav = (a, b) => { const r = Math.PI / 180, dl = (b[0] - a[0]) * r, dn = (b[1] - a[1]) * r; const x = Math.sin(dl / 2) ** 2 + Math.cos(a[0] * r) * Math.cos(b[0] * r) * Math.sin(dn / 2) ** 2; return 2 * 3440.065 * Math.asin(Math.sqrt(x)); };

  function posAt(d) {
    d = Math.max(0, Math.min(TOTAL, d));
    let lo = 0, hi = kf.length - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (kf[m].d <= d) lo = m; else hi = m; }
    const a = kf[lo], b = kf[hi];
    if (b.d === a.d || d >= b.d && hi === kf.length - 1 && d > b.d) return { ll: [b.lon, b.lat], dist: cum[hi], i: lo };
    const t = Math.max(0, Math.min(1, (d - a.d) / (b.d - a.d)));
    const ll = d3.geoInterpolate([a.lon, a.lat], [b.lon, b.lat])(t);
    return { ll, dist: cum[lo] + (cum[hi] - cum[lo]) * t, i: lo };
  }

  function resize() {
    const r = $("stage").getBoundingClientRect();
    W = r.width; H = r.height; dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const g = proj.globe; g.translate([W / 2, H / 2]).scale(Math.min(W, H) * 0.46);
    const c = proj.chart; c.fitExtent([[16, 16], [W - 16, H - 16]], { type: "Sphere" });
    draw();
  }

  function draw() {
    if (!kf) return;
    const p = posAt(day), P = proj[view];
    if (view === "globe") {
      const target = [-p.ll[0], -p.ll[1] * 0.8];
      if (!rot) rot = target.slice();
      let dx = target[0] - rot[0]; while (dx > 180) dx -= 360; while (dx < -180) dx += 360;
      rot[0] += dx * 0.12; rot[1] += (target[1] - rot[1]) * 0.12;
      P.rotate([rot[0], rot[1], 0]);
    }
    path.projection(P);
    ctx.clearRect(0, 0, W, H);
    ctx.beginPath(); path({ type: "Sphere" }); ctx.fillStyle = "#0e2a3d"; ctx.fill();
    ctx.beginPath(); path(graticule); ctx.strokeStyle = "rgba(106,147,170,.18)"; ctx.lineWidth = 0.5; ctx.stroke();
    ctx.beginPath(); path(land); ctx.fillStyle = "#2f4c5e"; ctx.fill(); ctx.strokeStyle = "#6a93aa"; ctx.lineWidth = 0.6; ctx.stroke();
    ctx.beginPath(); path({ type: "Sphere" }); ctx.strokeStyle = "#24475d"; ctx.lineWidth = 1.5; ctx.stroke();

    const full = { type: "LineString", coordinates: kf.map((k) => [k.lon, k.lat]) };
    ctx.beginPath(); path(full); ctx.strokeStyle = "rgba(227,176,75,.22)"; ctx.lineWidth = 1.2; ctx.stroke();
    const done = kf.filter((k) => k.d <= day).map((k) => [k.lon, k.lat]); done.push(p.ll);
    if (done.length > 1) { ctx.beginPath(); path({ type: "LineString", coordinates: done }); ctx.strokeStyle = "#e3b04b"; ctx.lineWidth = 2.2; ctx.lineJoin = "round"; ctx.stroke(); }

    ctx.font = "12px sans-serif"; ctx.textBaseline = "middle";
    for (const [n, la, lo] of PLACES) {
      if (view === "globe" && d3.geoDistance([lo, la], [-rot[0], -rot[1]]) > Math.PI / 2 - 0.05) continue;
      const q = P([lo, la]); if (!q) continue;
      ctx.beginPath(); ctx.arc(q[0], q[1], 2.5, 0, 6.283); ctx.fillStyle = "#9db3c0"; ctx.fill();
      ctx.fillStyle = "rgba(232,238,241,.75)"; ctx.fillText(n, q[0] + 6, q[1]);
    }

    const m = P(p.ll);
    if (m) {
      const R = Math.max(20, Math.min(30, Math.min(W, H) * 0.045)), col = RATINGS[ratingAt(day)][1];
      ctx.save();
      ctx.beginPath(); ctx.arc(m[0], m[1], R + 4, 0, 6.283); ctx.fillStyle = "rgba(11,31,46,.7)"; ctx.fill();
      ctx.beginPath(); ctx.arc(m[0], m[1], R, 0, 6.283); ctx.clip();
      if (portrait.complete && portrait.naturalWidth) ctx.drawImage(portrait, m[0] - R, m[1] - R, 2 * R, 2 * R);
      else { ctx.fillStyle = col; ctx.fill(); }
      ctx.restore();
      ctx.beginPath(); ctx.arc(m[0], m[1], R, 0, 6.283); ctx.strokeStyle = col; ctx.lineWidth = 3.5; ctx.stroke();
    }
    updateUI(p);
  }

  function nearest(ll) {
    let best = null, bd = 1e9;
    for (const [n, la, lo] of PLACES) { const d = hav([ll[1], ll[0]], [la, lo]); if (d < bd) { bd = d; best = n; } }
    return bd < 120 ? best : "At sea, near " + best;
  }

  function updateUI(p) {
    const d = Math.round(day);
    $("date").textContent = fmt(d);
    $("day").textContent = WD[new Date(START + d * DAY).getUTCDay()] + " · day " + (d + 1) + " of " + (TOTAL + 1);
    const r = ratingAt(d);
    $("rating").textContent = RATINGS[r][0]; $("swatch").style.background = RATINGS[r][1];
    $("age").textContent = "Aged " + ageAt(d);
    $("where").textContent = nearest(p.ll);
    $("coords").textContent = Math.abs(p.ll[1]).toFixed(1) + "°" + (p.ll[1] >= 0 ? "N" : "S") + " " + Math.abs(p.ll[0]).toFixed(1) + "°" + (p.ll[0] >= 0 ? "E" : "W");
    $("dist").textContent = Math.round(p.dist).toLocaleString("en-GB") + " nautical miles";
    if (document.activeElement !== $("scrub") || playing) $("scrub").value = d;
    let ei = -1; EVENTS.forEach((e, i) => { if (e.day <= d) ei = i; });
    if (ei >= 0) { $("card").style.display = ""; $("cardMeta").textContent = fmt(EVENTS[ei].day); $("cardText").innerHTML = "<strong>" + EVENTS[ei].title + ".</strong> " + EVENTS[ei].text; const E = EVENTS[ei]; const imgs = [].concat(E.img || []), crs = [].concat(E.cr || []); const box = $("cardImgs"); const key = imgs.join("|"); if (box.dataset.key !== key) { box.dataset.key = key; box.innerHTML = imgs.map((s, k) => '<figure><img src="' + s + '" alt="' + (crs[k] || "").replace(/"/g, "&quot;") + '"><figcaption>' + (crs[k] || "") + "</figcaption></figure>").join(""); } }
    else $("card").style.display = "none";
    document.querySelectorAll("#events button").forEach((b, i) => b.classList.toggle("now", i === ei));
  }

  function frame(t) {
    if (!last) last = t;
    const dt = Math.min(0.1, (t - last) / 1000); last = t;
    if (playing && t > holdUntil) {
      const prev = day; day = Math.min(TOTAL, day + speed * dt);
      if (pauseAtEvents) for (const e of EVENTS) if (e.day > prev && e.day <= day) { day = e.day; holdUntil = t + 3800; break; }
      if (day >= TOTAL) setPlaying(false);
    }
    draw(); requestAnimationFrame(frame);
  }

  function setPlaying(v) {
    if (v && day >= TOTAL) day = 0;
    playing = v; $("play").textContent = v ? "Pause" : "Play";
  }

  function init() {
    kf = track.map(([s, la, lo]) => ({ d: dayOf(s), lat: la, lon: lo }));
    TOTAL = kf[kf.length - 1].d; $("scrub").max = TOTAL;
    cum = [0]; for (let i = 1; i < kf.length; i++) cum[i] = cum[i - 1] + hav([kf[i - 1].lat, kf[i - 1].lon], [kf[i].lat, kf[i].lon]);
    $("events").innerHTML = EVENTS.map((e, i) => '<li><button type="button" data-i="' + i + '"><span class="d">' + fmt(e.day) + "</span>" + e.title + "</button></li>").join("");
    $("events").addEventListener("click", (ev) => { const b = ev.target.closest("button"); if (!b) return; setPlaying(false); day = EVENTS[b.dataset.i].day; draw(); });
    $("play").onclick = () => setPlaying(!playing);
    $("scrub").addEventListener("input", (e) => { setPlaying(false); day = +e.target.value; draw(); });
    document.querySelectorAll("[data-speed]").forEach((b) => b.onclick = () => { speed = +b.dataset.speed; document.querySelectorAll("[data-speed]").forEach((x) => x.setAttribute("aria-pressed", x === b)); });
    document.querySelectorAll("[data-view]").forEach((b) => b.onclick = () => { view = b.dataset.view; document.querySelectorAll("[data-view]").forEach((x) => x.setAttribute("aria-pressed", x === b)); draw(); });
    $("stops").onclick = (e) => { pauseAtEvents = !pauseAtEvents; e.currentTarget.setAttribute("aria-pressed", pauseAtEvents); };
    window.addEventListener("resize", resize);
    portrait.onload = draw;
    resize(); requestAnimationFrame(frame);
  }

  Promise.all([fetch("track.json").then((r) => r.json()), fetch("land.json").then((r) => r.json())])
    .then(([t, l]) => { track = t; land = l; init(); })
    .catch(() => { $("stage").insertAdjacentHTML("beforeend", '<div class="err">The map data could not be loaded.</div>'); });
})();
