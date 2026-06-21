const COURSES_KEY = "sala-viva-courses";
const SESSION_KEY = "sala-viva-session";
const ACCOUNTS_KEY = "sala-viva-accounts";
const AGENDA_KEY = "sala-viva-agenda";
const GRADES_KEY = "sala-viva-grades";
const UNIVERSAL_ADMIN_ACCOUNT = {
  email: "univelsal.arvoredaciencia39@com.gmail",
  password: "arvoredacienciasalaviva",
  code: "839241",
  name: "Administrador Universal AdC",
  role: "Administrador universal AdC/CEE",
  initials: "AU",
  permissions: ["create", "manage_courses", "manage_users", "manage_profiles", "view_reports"]
};

const initialCourses = [
  {
    id: "matematica",
    title: "Matematica 2B",
    teacher: "Prof. Helena Costa",
    description: "Equacoes, funcoes e projetos semanais para o segundo bimestre.",
    code: "MAT-2B-84",
    color: "#1f7a63",
    average: "8.4",
    posts: [
      {
        author: "Helena Costa",
        initials: "HC",
        date: "Hoje, 09:10",
        title: "Lista de revisao publicada",
        body: "A lista de revisao para a prova de sexta ja esta disponivel. Priorizem os exercicios 4, 7 e 12.",
        type: "aviso",
        attachments: [{ id: "a1", name: "lista-revisao.pdf", size: 240000, type: "application/pdf" }]
      },
      {
        author: "Helena Costa",
        initials: "HC",
        date: "Ontem, 16:45",
        title: "Grupo de estudo",
        body: "Quem quiser revisar funcoes quadraticas pode entrar na sala de apoio amanha no segundo horario.",
        type: "aula",
        attachments: []
      }
    ],
    assignments: [
      { title: "Exercicios de funcao afim", due: "Amanha", points: 10, done: false, attachments: [], submission: [] },
      { title: "Projeto: grafico de consumo", due: "24 mai", points: 20, done: false, attachments: [], submission: [] },
      { title: "Quiz de equacoes", due: "Entregue", points: 5, done: true, attachments: [], submission: [] }
    ],
    people: [
      { name: "Ana Souza", role: "Aluna", score: "9.1" },
      { name: "Bruno Lima", role: "Aluno", score: "8.6" },
      { name: "Carla Mendes", role: "Aluna", score: "8.0" },
      { name: "Diego Alves", role: "Aluno", score: "7.8" }
    ]
  },
  {
    id: "historia",
    title: "Historia 1A",
    teacher: "Prof. Marcos Vieira",
    description: "Debates, linhas do tempo e fontes historicas para estudar Brasil republicano.",
    code: "HIS-1A-22",
    color: "#3176b7",
    average: "8.0",
    posts: [
      {
        author: "Marcos Vieira",
        initials: "MV",
        date: "Hoje, 08:20",
        title: "Documento para debate",
        body: "Leiam a fonte anexada antes da aula. Vamos comparar duas interpretacoes sobre a Primeira Republica.",
        type: "material",
        attachments: [{ id: "a2", name: "fonte-historica.docx", size: 146000, type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }]
      }
    ],
    assignments: [
      { title: "Linha do tempo ilustrada", due: "23 mai", points: 15, done: false, attachments: [], submission: [] },
      { title: "Analise de fonte primaria", due: "Entregue", points: 10, done: true, attachments: [], submission: [] }
    ],
    people: [
      { name: "Laura Dias", role: "Aluna", score: "8.8" },
      { name: "Mateus Rocha", role: "Aluno", score: "7.9" },
      { name: "Nina Prado", role: "Aluna", score: "7.4" }
    ]
  },
  {
    id: "ciencias",
    title: "Ciencias 3C",
    teacher: "Prof. Bianca Nunes",
    description: "Experimentos, relatorios curtos e acompanhamento do projeto de energia solar.",
    code: "CIE-3C-61",
    color: "#d95f50",
    average: "8.7",
    posts: [
      {
        author: "Bianca Nunes",
        initials: "BN",
        date: "Segunda, 13:00",
        title: "Materiais do laboratorio",
        body: "Tragam o caderno de laboratorio. Os grupos vao registrar medidas e fotos do experimento.",
        type: "aula",
        attachments: []
      }
    ],
    assignments: [
      { title: "Relatorio: circuito simples", due: "25 mai", points: 20, done: false, attachments: [], submission: [] },
      { title: "Mapa mental de energia", due: "Entregue", points: 8, done: true, attachments: [], submission: [] }
    ],
    people: [
      { name: "Pedro Martins", role: "Aluno", score: "8.9" },
      { name: "Sofia Barros", role: "Aluna", score: "9.4" },
      { name: "Theo Castro", role: "Aluno", score: "7.7" }
    ]
  }
];

const initialAgenda = [
  {
    id: "agenda-1",
    title: "Aula de revisao de funcoes",
    courseId: "matematica",
    date: "2026-05-22",
    time: "14:30",
    type: "Aula",
    notes: "Revisao antes da avaliacao semanal.",
    status: "ativo"
  },
  {
    id: "agenda-2",
    title: "Entrega da linha do tempo",
    courseId: "historia",
    date: "2026-05-23",
    time: "10:00",
    type: "Prazo",
    notes: "Conferir fontes e imagens antes de enviar.",
    status: "ativo"
  },
  {
    id: "agenda-3",
    title: "Laboratorio de circuitos",
    courseId: "ciencias",
    date: "2026-05-25",
    time: "13:20",
    type: "Aula",
    notes: "Trazer caderno de laboratorio.",
    status: "ativo"
  }
];

const palette = ["#1f7a63", "#3176b7", "#d95f50", "#c78519", "#6f5aa7"];
const learnerProfiles = ["Aluno", "Responsavel", "Visitante"];
const disciplineProfiles = [
  "Professor",
  "Coordenador",
  "Diretor",
  "Vice-diretor",
  "Administrador CEE",
  "Administrador universal AdC/CEE"
];
const accountAdminProfiles = ["Administrador CEE", "Administrador universal AdC/CEE"];

let courses = normalizeCourses(loadCourses());
let accounts = normalizeAccounts(loadAccounts());
let agendaItems = normalizeAgenda(loadAgenda());
let grades = loadGrades();
let activeCourseId = courses[0].id;
let activeTab = "mural";
let activeView = "turmas";
let currentUser = null;
let pendingUser = null;
let pendingAccessCode = "";
let quickAccessCode = "";
let composerAttachments = [];
let createAttachments = [];

const homeScreen = document.querySelector("#homeScreen");
const loginScreen = document.querySelector("#loginScreen");
const appShell = document.querySelector("#appShell");
const loginForm = document.querySelector("#loginForm");
const mfaForm = document.querySelector("#mfaForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginRole = document.querySelector("#loginRole");
const rememberLogin = document.querySelector("#rememberLogin");
const trustDevice = document.querySelector("#trustDevice");
const fillAdminLogin = document.querySelector("#fillAdminLogin");
const mfaCode = document.querySelector("#mfaCode");
const homeLoginButton = document.querySelector("#homeLoginButton");
const homeEnterButton = document.querySelector("#homeEnterButton");
const homeAccessCourse = document.querySelector("#homeAccessCourse");
const backToHome = document.querySelector("#backToHome");
const courseStrip = document.querySelector("#courseStrip");
const courseTitle = document.querySelector("#courseTitle");
const courseDescription = document.querySelector("#courseDescription");
const deleteCourseButton = document.querySelector("#deleteCourse");
const accessCourseButton = document.querySelector("#accessCourseButton");
const accessCourseModal = document.querySelector("#accessCourseModal");
const accessCourseForm = document.querySelector("#accessCourseForm");
const accessCourseCode = document.querySelector("#accessCourseCode");
const closeAccessCourse = document.querySelector("#closeAccessCourse");
const cancelAccessCourse = document.querySelector("#cancelAccessCourse");
const panelContent = document.querySelector("#panelContent");
const deadlineList = document.querySelector("#deadlineList");
const pendingCount = document.querySelector("#pendingCount");
const averageScore = document.querySelector("#averageScore");
const searchInput = document.querySelector("#searchInput");
const composer = document.querySelector("#composer");
const postText = document.querySelector("#postText");
const postFiles = document.querySelector("#postFiles");
const postAttachmentList = document.querySelector("#postAttachmentList");
const createMenu = document.querySelector("#createMenu");
const createModal = document.querySelector("#createModal");
const createForm = document.querySelector("#createForm");
const createType = document.querySelector("#createType");
const createDate = document.querySelector("#createDate");
const createDateWrap = document.querySelector("#createDateWrap");
const createPoints = document.querySelector("#createPoints");
const createPointsWrap = document.querySelector("#createPointsWrap");
const createItemTitleWrap = document.querySelector("#createItemTitleWrap");
const createItemTitle = document.querySelector("#createItemTitle");
const accountFields = document.querySelector("#accountFields");
const createAccountEmail = document.querySelector("#createAccountEmail");
const createAccountPassword = document.querySelector("#createAccountPassword");
const createAccountCode = document.querySelector("#createAccountCode");
const createAccountRole = document.querySelector("#createAccountRole");
const studentFields = document.querySelector("#studentFields");
const createStudentEmail = document.querySelector("#createStudentEmail");
const warningFields = document.querySelector("#warningFields");
const warningStudent = document.querySelector("#warningStudent");
const warningType = document.querySelector("#warningType");
const createBody = document.querySelector("#createBody");
const createBodyWrap = document.querySelector("#createBodyWrap");
const createFiles = document.querySelector("#createFiles");
const createFilesDrop = document.querySelector("#createFilesDrop");
const createAttachmentList = document.querySelector("#createAttachmentList");
const profileButton = document.querySelector("#profileButton");
const profileMenu = document.querySelector("#profileMenu");
const profileName = document.querySelector("#profileName");
const profileRole = document.querySelector("#profileRole");
const toast = document.querySelector("#toast");
const viewPanels = document.querySelectorAll("[data-view-panel]");
const navItems = document.querySelectorAll("[data-view]");
const agendaForm = document.querySelector("#agendaForm");
const agendaTitle = document.querySelector("#agendaTitle");
const agendaCourse = document.querySelector("#agendaCourse");
const agendaDate = document.querySelector("#agendaDate");
const agendaTime = document.querySelector("#agendaTime");
const agendaType = document.querySelector("#agendaType");
const agendaNotes = document.querySelector("#agendaNotes");
const agendaList = document.querySelector("#agendaList");
const agendaCourseFilter = document.querySelector("#agendaCourseFilter");
const agendaStatusFilter = document.querySelector("#agendaStatusFilter");
const agendaTotal = document.querySelector("#agendaTotal");
const agendaToday = document.querySelector("#agendaToday");
const agendaPending = document.querySelector("#agendaPending");
const nextLessonName = document.querySelector("#nextLessonName");
const nextLessonTime = document.querySelector("#nextLessonTime");
const gradeCourseSelect = document.querySelector("#gradeCourseSelect");
const gradeSummary = document.querySelector("#gradeSummary");
const gradebookTable = document.querySelector("#gradebookTable");
const adminOnlyItems = document.querySelectorAll(".admin-only");
const accountsList = document.querySelector("#accountsList");
const accountTotal = document.querySelector("#accountTotal");
const accountAdmins = document.querySelector("#accountAdmins");
const accountCreatedTotal = document.querySelector("#accountCreatedTotal");
const openCreateAccountFromAccounts = document.querySelector("#openCreateAccountFromAccounts");
const aiMessages = document.querySelector("#aiMessages");
const aiForm = document.querySelector("#aiForm");
const aiInput = document.querySelector("#aiInput");

function loadCourses() {
  try {
    const saved = localStorage.getItem(COURSES_KEY);
    return saved ? JSON.parse(saved) : initialCourses;
  } catch {
    return initialCourses;
  }
}

function normalizeCourses(items) {
  return items.map((course, index) => ({
    ...course,
    id: course.id || makeId(course.title || "turma"),
    code: course.code || makeCode(course.title || "TURMA"),
    color: course.color || palette[index % palette.length],
    average: course.average || "8.0",
    posts: (course.posts || []).map((post) => ({ type: "aviso", attachments: [], ...post })),
    assignments: (course.assignments || []).map((assignment) => ({
      due: "Sem prazo",
      points: 10,
      done: false,
      attachments: [],
      submission: [],
      ...assignment
    })),
    people: course.people || [],
    warnings: course.warnings || []
  }));
}

function saveCourses() {
  localStorage.setItem(COURSES_KEY, JSON.stringify(courses));
}

function loadAccounts() {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]");
  } catch {
    return [];
  }
}

function normalizeAccounts(items) {
  const usedEmails = new Set([UNIVERSAL_ADMIN_ACCOUNT.email]);
  const usedPasswords = new Set([UNIVERSAL_ADMIN_ACCOUNT.password]);
  const usedCodes = new Set([UNIVERSAL_ADMIN_ACCOUNT.code]);

  return (items || []).reduce((list, account) => {
    const email = String(account.email || "").trim().toLowerCase();
    if (!email || usedEmails.has(email)) return list;

    let password = String(account.password || "");
    while (!password || password.length < 6 || usedPasswords.has(password)) {
      password = `adc${Math.random().toString(36).slice(2, 8)}${Math.floor(10 + Math.random() * 90)}`;
    }

    let code = String(account.code || "");
    while (!/^\d{6}$/.test(code) || usedCodes.has(code)) {
      code = String(Math.floor(100000 + Math.random() * 900000));
    }

    usedEmails.add(email);
    usedPasswords.add(password);
    usedCodes.add(code);
    list.push({
      ...account,
      email,
      password,
      code,
      name: account.name || email.split("@")[0],
      role: account.role || "Aluno",
      initials: account.initials || initials(account.name || email),
      createdAt: account.createdAt || new Date().toISOString()
    });
    return list;
  }, []);
}

function saveAccounts() {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

function loadAgenda() {
  try {
    const saved = localStorage.getItem(AGENDA_KEY);
    return saved ? JSON.parse(saved) : initialAgenda;
  } catch {
    return initialAgenda;
  }
}

function normalizeAgenda(items) {
  return (items || []).map((item) => ({
    id: item.id || makeId(item.title || "evento"),
    title: item.title || "Evento sem titulo",
    courseId: item.courseId || courses[0]?.id || "geral",
    date: item.date || "",
    dateText: item.dateText || "",
    time: item.time || "",
    type: item.type || "Lembrete",
    notes: item.notes || "",
    status: item.status || "ativo"
  }));
}

function saveAgenda() {
  localStorage.setItem(AGENDA_KEY, JSON.stringify(agendaItems));
}

function loadGrades() {
  try {
    return JSON.parse(localStorage.getItem(GRADES_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveGrades() {
  localStorage.setItem(GRADES_KEY, JSON.stringify(grades));
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function makeId(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") + "-" + Date.now().toString(36);
}

function makeCode(value) {
  const prefix = String(value).replace(/[^a-zA-Z]/g, "").slice(0, 3).toUpperCase() || "SAL";
  return `${prefix}-${Math.floor(100 + Math.random() * 900)}`;
}

function makeAccessCode() {
  let code = "";
  do {
    code = String(Math.floor(100000 + Math.random() * 900000));
  } while (isCodeUsed(code));
  return code;
}

function makeAccountPassword() {
  let password = "";
  do {
    password = `adc${Math.random().toString(36).slice(2, 8)}${Math.floor(10 + Math.random() * 90)}`;
  } while (isPasswordUsed(password));
  return password;
}

function isEmailUsed(email) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  return normalizedEmail === UNIVERSAL_ADMIN_ACCOUNT.email || accounts.some((account) => account.email === normalizedEmail);
}

function isPasswordUsed(password, ignoredEmail = "") {
  const normalizedEmail = String(ignoredEmail || "").trim().toLowerCase();
  return password === UNIVERSAL_ADMIN_ACCOUNT.password || accounts.some((account) => account.email !== normalizedEmail && account.password === password);
}

function isCodeUsed(code, ignoredEmail = "") {
  const normalizedEmail = String(ignoredEmail || "").trim().toLowerCase();
  return code === UNIVERSAL_ADMIN_ACCOUNT.code || accounts.some((account) => account.email !== normalizedEmail && account.code === code);
}

function stableKey(value) {
  return String(value || "item")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "item";
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function formatDateLabel(dateValue, fallback = "Sem data") {
  if (!dateValue) return fallback;
  const [year, month, day] = dateValue.split("-").map(Number);
  if (!year || !month || !day) return fallback;
  return new Date(year, month - 1, day).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short"
  });
}

function eventSortValue(item) {
  if (!item.date) return Number.MAX_SAFE_INTEGER;
  return Number(new Date(`${item.date}T${item.time || "23:59"}`));
}

function courseName(courseId) {
  return courses.find((course) => course.id === courseId)?.title || "Geral";
}

function courseOptions(selectedId, includeAll = false) {
  const allOption = includeAll ? `<option value="todos">Todas as turmas</option>` : "";
  return allOption + courses.map((course) => `
    <option value="${escapeHTML(course.id)}" ${course.id === selectedId ? "selected" : ""}>${escapeHTML(course.title)}</option>
  `).join("");
}

function canManageDiscipline(user = currentUser) {
  return Boolean(user && disciplineProfiles.includes(user.role));
}

function canManageAccounts(user = currentUser) {
  return Boolean(user && (user.universalAdmin || accountAdminProfiles.includes(user.role)));
}

function accountByEmail(email) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  if (normalizedEmail === UNIVERSAL_ADMIN_ACCOUNT.email) {
    return UNIVERSAL_ADMIN_ACCOUNT;
  }
  return accounts.find((account) => account.email === normalizedEmail);
}

function studentOptions(course) {
  return course.people.map((person) => `
    <option value="${escapeHTML(person.email || person.name)}">${escapeHTML(person.name)}${person.email ? ` - ${escapeHTML(person.email)}` : ""}</option>
  `).join("");
}

function getActiveCourse() {
  return courses.find((course) => course.id === activeCourseId) || courses[0];
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function initials(name) {
  return String(name || "Usuario")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function formatSize(size) {
  if (!size) return "0 KB";
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function filesToAttachments(fileList) {
  return Array.from(fileList || []).map((file) => ({
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    name: file.name,
    size: file.size,
    type: file.type || "arquivo"
  }));
}

function renderAttachmentChips(attachments = []) {
  if (!attachments.length) return "";
  return `
    <div class="attachment-list">
      ${attachments.map((file) => `
        <span class="attachment-chip" title="${escapeHTML(file.name)}">
          <strong>Arquivo</strong>
          <span>${escapeHTML(file.name)} (${formatSize(file.size)})</span>
        </span>
      `).join("")}
    </div>
  `;
}

function renderAttachmentPreview(container, attachments) {
  container.innerHTML = renderAttachmentChips(attachments);
}

function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

function setSession(user, remember) {
  const target = remember ? localStorage : sessionStorage;
  const other = remember ? sessionStorage : localStorage;
  target.setItem(SESSION_KEY, JSON.stringify(user));
  other.removeItem(SESSION_KEY);
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
}

function showHome() {
  currentUser = null;
  pendingUser = null;
  homeScreen.classList.remove("hidden");
  loginScreen.classList.add("hidden");
  appShell.classList.add("hidden");
  mfaForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  adminOnlyItems.forEach((item) => item.classList.add("hidden"));
}

function showApp(user) {
  currentUser = user;
  homeScreen.classList.add("hidden");
  loginScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
  profileButton.textContent = user.initials;
  profileName.textContent = user.name;
  profileRole.textContent = user.role;
  adminOnlyItems.forEach((item) => item.classList.toggle("hidden", !canManageAccounts(user)));
  if (activeView === "contas" && !canManageAccounts(user)) {
    activeView = "turmas";
  }
  render();
}

function showLogin() {
  currentUser = null;
  pendingUser = null;
  quickAccessCode = "";
  homeScreen.classList.add("hidden");
  appShell.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  loginForm.classList.remove("hidden");
  mfaForm.classList.add("hidden");
  mfaCode.value = "";
  adminOnlyItems.forEach((item) => item.classList.add("hidden"));
}

function completeLogin(user, remember) {
  setSession(user, remember);
  showApp(user);
  showToast("Login realizado com seguranca.");
  if (pendingAccessCode) {
    const code = pendingAccessCode;
    pendingAccessCode = "";
    accessCourseByCode(code);
  }
}

function validateLogin() {
  const email = loginEmail.value.trim().toLowerCase();
  const password = loginPassword.value;

  if (!email.includes("@") || !email.includes(".")) {
    showToast("Digite um email valido.");
    return null;
  }

  if (password.length < 6) {
    showToast("A senha precisa ter pelo menos 6 caracteres.");
    return null;
  }

  if (email === UNIVERSAL_ADMIN_ACCOUNT.email) {
    if (password !== UNIVERSAL_ADMIN_ACCOUNT.password) {
      showToast("Senha da conta adm universal incorreta.");
      return null;
    }

    return {
      name: UNIVERSAL_ADMIN_ACCOUNT.name,
      email: UNIVERSAL_ADMIN_ACCOUNT.email,
      role: UNIVERSAL_ADMIN_ACCOUNT.role,
      initials: UNIVERSAL_ADMIN_ACCOUNT.initials,
      code: UNIVERSAL_ADMIN_ACCOUNT.code,
      permissions: UNIVERSAL_ADMIN_ACCOUNT.permissions,
      trusted: true,
      universalAdmin: true,
      signedAt: new Date().toISOString()
    };
  }

  const savedAccount = accounts.find((account) => account.email === email);
  if (savedAccount) {
    if (password !== savedAccount.password) {
      showToast("Senha da conta cadastrada incorreta.");
      return null;
    }

    return {
      name: savedAccount.name,
      email: savedAccount.email,
      role: savedAccount.role,
      initials: savedAccount.initials,
      code: savedAccount.code,
      trusted: trustDevice.checked,
      createdAccount: true,
      signedAt: new Date().toISOString()
    };
  }

  showToast("Conta nao encontrada. Use uma conta criada pelo administrador.");
  return null;
}

function renderCourses() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleCourses = courses.filter((course) => {
    return [course.title, course.teacher, course.description].join(" ").toLowerCase().includes(query);
  });

  courseStrip.innerHTML = visibleCourses.map((course) => `
    <button class="course-tile ${course.id === activeCourseId ? "active" : ""}" type="button" data-course="${escapeHTML(course.id)}">
      <strong>${escapeHTML(course.title)}</strong>
      <span>${escapeHTML(course.teacher)}</span>
      <span>${course.assignments.filter((item) => !item.done).length} atividades pendentes</span>
    </button>
  `).join("");

  courseStrip.querySelectorAll("[data-course]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCourseId = button.dataset.course;
      composer.classList.add("hidden");
      render();
    });
  });
}

function renderDeadlines(course) {
  const pending = course.assignments.filter((assignment) => !assignment.done);
  pendingCount.textContent = pending.length;
  averageScore.textContent = course.average;
  deadlineList.innerHTML = pending.map((assignment) => `
    <li class="deadline-row">
      <strong>${escapeHTML(assignment.title)}</strong>
      <span>${escapeHTML(assignment.due)}</span>
    </li>
  `).join("") || `<li class="deadline-row"><strong>Nada pendente</strong><span>Boa!</span></li>`;
}

function renderStream(course) {
  panelContent.innerHTML = `
    <ul class="stream-list">
      ${course.posts.map((post, index) => `
        <li class="post">
          <div class="post-header">
            <span class="avatar">${escapeHTML(post.initials)}</span>
            <div>
              <h2>${escapeHTML(post.title)}</h2>
              <time>${escapeHTML(post.author)} - ${escapeHTML(post.date)}</time>
            </div>
          </div>
          <p>${escapeHTML(post.body)}</p>
          ${renderAttachmentChips(post.attachments)}
          <div class="post-actions">
            <button class="secondary-button" type="button" data-post-delete="${index}">Excluir</button>
          </div>
        </li>
      `).join("")}
    </ul>
  `;

  panelContent.querySelectorAll("[data-post-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      course.posts.splice(Number(button.dataset.postDelete), 1);
      saveCourses();
      showToast("Item removido do mural.");
      renderPanel(course);
    });
  });
}

function renderAssignments(course) {
  panelContent.innerHTML = `
    <ul class="assignment-list">
      ${course.assignments.map((assignment, index) => `
        <li class="assignment">
          <div class="assignment-header">
            <span class="avatar">${assignment.done ? "OK" : "!"}</span>
            <div>
              <h2>${escapeHTML(assignment.title)}</h2>
              <time>${Number(assignment.points || 0)} pontos - Prazo: ${escapeHTML(assignment.due)}</time>
            </div>
          </div>
          <p>${escapeHTML(assignment.body || (assignment.done ? "Entrega registrada e pronta para correcao." : "Abra a atividade, anexe sua resposta e acompanhe o retorno do professor."))}</p>
          ${renderAttachmentChips(assignment.attachments)}
          ${assignment.submission?.length ? `<p><strong>Resposta anexada:</strong></p>${renderAttachmentChips(assignment.submission)}` : ""}
          <div class="assignment-footer">
            <span class="status-pill ${assignment.done ? "done" : ""}">${assignment.done ? "Entregue" : "Pendente"}</span>
            <div class="assignment-actions">
              <label class="upload-button">
                Anexar arquivo
                <input type="file" multiple data-submission="${index}">
              </label>
              <button class="secondary-button" type="button" data-assignment="${index}" ${assignment.done ? "disabled" : ""}>Marcar entrega</button>
              <button class="secondary-button" type="button" data-assignment-delete="${index}">Excluir</button>
            </div>
          </div>
        </li>
      `).join("")}
    </ul>
  `;

  panelContent.querySelectorAll("[data-assignment]").forEach((button) => {
    button.addEventListener("click", () => {
      course.assignments[Number(button.dataset.assignment)].done = true;
      saveCourses();
      showToast("Atividade marcada como entregue.");
      render();
    });
  });

  panelContent.querySelectorAll("[data-assignment-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.assignmentDelete);
      const removed = course.assignments.splice(index, 1)[0];
      if (removed) {
        Object.values(grades[course.id] || {}).forEach((studentGrades) => {
          delete studentGrades[stableKey(removed.title)];
        });
        agendaItems = agendaItems.filter((item) => item.courseId !== course.id || item.title !== `Prazo: ${removed.title}`);
        saveGrades();
        saveAgenda();
      }
      saveCourses();
      showToast("Atividade excluida.");
      render();
    });
  });

  panelContent.querySelectorAll("[data-submission]").forEach((input) => {
    input.addEventListener("change", () => {
      const index = Number(input.dataset.submission);
      course.assignments[index].submission = filesToAttachments(input.files);
      saveCourses();
      showToast("Arquivo anexado na atividade.");
      renderPanel(course);
    });
  });
}

function renderPeople(course) {
  const canWarn = canManageDiscipline();
  panelContent.innerHTML = `
    <ul class="people-list">
      ${course.people.map((person) => `
        <li class="person-row">
          <div class="person-main">
            <span class="avatar">${initials(person.name)}</span>
            <div>
              <strong>${escapeHTML(person.name)}</strong>
              <span>${escapeHTML(person.role)}</span>
            </div>
          </div>
          <span>Media ${escapeHTML(person.score)}</span>
        </li>
      `).join("")}
    </ul>
    <section class="discipline-panel">
      <div class="section-heading">
        <h2>Advertencias e punicoes</h2>
      </div>
      ${canWarn ? `<button class="primary-button" type="button" id="openWarningFromPeople">Criar advertencia</button>` : `<p class="permission-note">Somente professores, coordenadores, diretores e administradores podem criar advertencias.</p>`}
      <ul class="warning-list">
        ${(course.warnings || []).map((warning, index) => `
          <li class="warning-card">
            <div>
              <strong>${escapeHTML(warning.studentName)}</strong>
              <span>${escapeHTML(warning.type)} - ${escapeHTML(warning.date)}</span>
              <p>${escapeHTML(warning.body)}</p>
              <small>Registrado por ${escapeHTML(warning.author)}</small>
            </div>
            ${canWarn ? `<button class="secondary-button" type="button" data-warning-delete="${index}">Excluir</button>` : ""}
          </li>
        `).join("") || `<li class="empty-state">Nenhuma advertencia registrada.</li>`}
      </ul>
    </section>
  `;

  const warningButton = document.querySelector("#openWarningFromPeople");
  if (warningButton) {
    warningButton.addEventListener("click", () => openCreateModal("advertencia"));
  }

  panelContent.querySelectorAll("[data-warning-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      course.warnings.splice(Number(button.dataset.warningDelete), 1);
      saveCourses();
      showToast("Advertencia removida.");
      renderPeople(course);
    });
  });
}

function renderNextLesson() {
  const nextItem = agendaItems
    .filter((item) => item.status !== "concluido")
    .sort((a, b) => eventSortValue(a) - eventSortValue(b))[0];

  if (!nextItem) {
    nextLessonName.textContent = "Sem eventos";
    nextLessonTime.textContent = "Agenda livre";
    return;
  }

  nextLessonName.textContent = nextItem.title;
  nextLessonTime.textContent = `${formatDateLabel(nextItem.date, nextItem.dateText || "Sem data")}${nextItem.time ? `, ${nextItem.time}` : ""}`;
}

function renderAgendaPage() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCourse = agendaCourseFilter.value || "todos";
  const selectedStatus = agendaStatusFilter.value || "ativos";

  agendaCourse.innerHTML = courseOptions(agendaCourse.value || activeCourseId);
  agendaCourse.value = agendaCourse.value || activeCourseId;
  agendaCourseFilter.innerHTML = courseOptions(selectedCourse, true);
  agendaCourseFilter.value = [...agendaCourseFilter.options].some((option) => option.value === selectedCourse) ? selectedCourse : "todos";
  agendaDate.value = agendaDate.value || todayISO();

  const today = todayISO();
  const activeItems = agendaItems.filter((item) => item.status !== "concluido");
  agendaTotal.textContent = activeItems.length;
  agendaToday.textContent = agendaItems.filter((item) => item.date === today && item.status !== "concluido").length;
  agendaPending.textContent = activeItems.filter((item) => item.type !== "Aula").length;

  const filtered = agendaItems
    .filter((item) => selectedCourse === "todos" || item.courseId === selectedCourse)
    .filter((item) => selectedStatus === "todos" || (selectedStatus === "ativos" ? item.status !== "concluido" : item.status === selectedStatus))
    .filter((item) => {
      const haystack = [item.title, item.type, item.notes, courseName(item.courseId)].join(" ").toLowerCase();
      return haystack.includes(query);
    })
    .sort((a, b) => eventSortValue(a) - eventSortValue(b));

  agendaList.innerHTML = filtered.map((item) => `
    <li class="agenda-card ${item.status === "concluido" ? "completed" : ""}">
      <div class="agenda-date">
        <strong>${escapeHTML(formatDateLabel(item.date, item.dateText || "Sem data"))}</strong>
        <span>${escapeHTML(item.time || "--:--")}</span>
      </div>
      <div class="agenda-info">
        <div class="agenda-meta">
          <span class="status-pill ${item.status === "concluido" ? "done" : ""}">${escapeHTML(item.type)}</span>
          <span>${escapeHTML(courseName(item.courseId))}</span>
        </div>
        <h2>${escapeHTML(item.title)}</h2>
        <p>${escapeHTML(item.notes || "Sem observacoes.")}</p>
      </div>
      <div class="agenda-actions">
        <button class="secondary-button" type="button" data-agenda-done="${escapeHTML(item.id)}" ${item.status === "concluido" ? "disabled" : ""}>Concluir</button>
        <button class="secondary-button" type="button" data-agenda-delete="${escapeHTML(item.id)}">Remover</button>
      </div>
    </li>
  `).join("") || `<li class="empty-state">Nenhum evento encontrado.</li>`;

  agendaList.querySelectorAll("[data-agenda-done]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = agendaItems.find((eventItem) => eventItem.id === button.dataset.agendaDone);
      if (!item) return;
      item.status = "concluido";
      saveAgenda();
      showToast("Evento concluido.");
      renderAgendaPage();
      renderNextLesson();
    });
  });

  agendaList.querySelectorAll("[data-agenda-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      agendaItems = agendaItems.filter((eventItem) => eventItem.id !== button.dataset.agendaDelete);
      saveAgenda();
      showToast("Evento removido da agenda.");
      renderAgendaPage();
      renderNextLesson();
    });
  });
}

function addAgendaItem(item) {
  agendaItems.unshift({
    id: makeId(item.title || "evento"),
    title: item.title || "Evento sem titulo",
    courseId: item.courseId || activeCourseId,
    date: item.date || "",
    dateText: item.dateText || "",
    time: item.time || "",
    type: item.type || "Lembrete",
    notes: item.notes || "",
    status: "ativo"
  });
  saveAgenda();
}

function createDatePayload(value) {
  const cleanValue = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(cleanValue)) {
    return { date: cleanValue, dateText: "" };
  }
  return { date: "", dateText: cleanValue };
}

function ensureGradebook(course) {
  if (!grades[course.id]) grades[course.id] = {};

  course.people.forEach((person) => {
    const studentKey = stableKey(person.name);
    if (!grades[course.id][studentKey]) grades[course.id][studentKey] = {};
    course.assignments.forEach((assignment) => {
      const assignmentKey = stableKey(assignment.title);
      if (grades[course.id][studentKey][assignmentKey] === undefined) {
        grades[course.id][studentKey][assignmentKey] = "";
      }
    });
  });
}

function getStudentAverage(course, person) {
  const studentGrades = grades[course.id]?.[stableKey(person.name)] || {};
  const values = course.assignments
    .map((assignment) => studentGrades[stableKey(assignment.title)])
    .filter((value) => value !== "" && value !== null && value !== undefined)
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value) && value >= 0);

  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getCourseAverageFromGrades(course) {
  const averages = course.people
    .map((person) => getStudentAverage(course, person))
    .filter((value) => value !== null);

  if (!averages.length) return null;
  return averages.reduce((sum, value) => sum + value, 0) / averages.length;
}

function updateCourseAverageFromGrades(course) {
  const average = getCourseAverageFromGrades(course);
  if (average !== null) {
    course.average = average.toFixed(1);
    saveCourses();
  }
}

function renderGradesPage() {
  const selectedCourseId = gradeCourseSelect.value || activeCourseId;
  gradeCourseSelect.innerHTML = courseOptions(selectedCourseId);
  gradeCourseSelect.value = courses.some((course) => course.id === selectedCourseId) ? selectedCourseId : activeCourseId;

  const course = courses.find((item) => item.id === gradeCourseSelect.value) || getActiveCourse();
  ensureGradebook(course);

  if (!course.people.length || !course.assignments.length) {
    gradeSummary.innerHTML = `
      <div class="metric-block"><p>Media geral</p><strong>-</strong></div>
      <div class="metric-block"><p>Alunos</p><strong>${course.people.length}</strong></div>
      <div class="metric-block"><p>Atividades</p><strong>${course.assignments.length}</strong></div>
    `;
    gradebookTable.innerHTML = `<div class="empty-state">Crie alunos e atividades para usar o diario de notas.</div>`;
    return;
  }

  const query = searchInput.value.trim().toLowerCase();
  const visiblePeople = course.people.filter((person) => {
    return [person.name, person.role].join(" ").toLowerCase().includes(query);
  });
  const courseAverage = getCourseAverageFromGrades(course);
  const approvedCount = course.people.filter((person) => {
    const average = getStudentAverage(course, person);
    return average !== null && average >= 7;
  }).length;

  gradeSummary.innerHTML = `
    <div class="metric-block"><p>Media geral</p><strong>${courseAverage === null ? "-" : courseAverage.toFixed(1)}</strong></div>
    <div class="metric-block"><p>Alunos</p><strong>${course.people.length}</strong></div>
    <div class="metric-block"><p>Atividades</p><strong>${course.assignments.length}</strong></div>
    <div class="metric-block"><p>Media 7+</p><strong>${approvedCount}</strong></div>
  `;

  gradebookTable.innerHTML = `
    <table class="grade-table">
      <thead>
        <tr>
          <th>Aluno</th>
          ${course.assignments.map((assignment) => `<th>${escapeHTML(assignment.title)}</th>`).join("")}
          <th>Media</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${visiblePeople.map((person) => {
          const studentKey = stableKey(person.name);
          const average = getStudentAverage(course, person);
          return `
            <tr>
              <th>
                <strong>${escapeHTML(person.name)}</strong>
                <span>${escapeHTML(person.role)}</span>
              </th>
              ${course.assignments.map((assignment) => {
                const assignmentKey = stableKey(assignment.title);
                const value = grades[course.id][studentKey][assignmentKey] ?? "";
                return `
                  <td>
                    <input class="grade-input" type="number" min="0" max="10" step="0.1" value="${escapeHTML(value)}" data-student="${escapeHTML(studentKey)}" data-assignment="${escapeHTML(assignmentKey)}" aria-label="Nota de ${escapeHTML(person.name)} em ${escapeHTML(assignment.title)}">
                  </td>
                `;
              }).join("")}
              <td><strong>${average === null ? "-" : average.toFixed(1)}</strong></td>
              <td><span class="status-pill ${average !== null && average >= 7 ? "done" : ""}">${average === null ? "Sem notas" : average >= 7 ? "Em dia" : "Acompanhar"}</span></td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;

  gradebookTable.querySelectorAll("[data-student][data-assignment]").forEach((input) => {
    input.addEventListener("change", () => {
      const value = input.value === "" ? "" : Math.max(0, Math.min(10, Number(input.value)));
      input.value = value;
      grades[course.id][input.dataset.student][input.dataset.assignment] = value;
      saveGrades();
      updateCourseAverageFromGrades(course);
      showToast("Nota salva.");
      renderGradesPage();
      renderDeadlines(getActiveCourse());
    });
  });
}

function allVisibleAccounts() {
  return [...accounts];
}

function renderAccountsPage() {
  if (!accountsList) return;

  if (!canManageAccounts()) {
    accountsList.innerHTML = `<div class="empty-state">Apenas administradores podem ver contas.</div>`;
    accountTotal.textContent = "0";
    accountAdmins.textContent = "0";
    accountCreatedTotal.textContent = "0";
    return;
  }

  const query = searchInput.value.trim().toLowerCase();
  const allAccounts = allVisibleAccounts();
  const filtered = allAccounts.filter((account) => {
    return [account.name, account.email, account.role].join(" ").toLowerCase().includes(query);
  });

  accountTotal.textContent = allAccounts.length;
  accountAdmins.textContent = allAccounts.filter((account) => accountAdminProfiles.includes(account.role)).length;
  accountCreatedTotal.textContent = accounts.length;

  accountsList.innerHTML = filtered.map((account) => `
    <article class="account-card">
      <div>
        <strong>${escapeHTML(account.name)}</strong>
        <span>${escapeHTML(account.role)}</span>
      </div>
      <div>
        <small>Email</small>
        <span>${escapeHTML(account.email)}</span>
      </div>
      <div>
        <small>Criada em</small>
        <span>${formatDateLabel(String(account.createdAt || "").slice(0, 10), "Recente")}</span>
      </div>
      <div>
        <small>Status</small>
        <span>Ativa</span>
      </div>
      <div class="account-actions">
        <button class="secondary-button" type="button" data-account-delete="${escapeHTML(account.email)}">Excluir</button>
      </div>
    </article>
  `).join("") || `<div class="empty-state">Nenhuma conta encontrada.</div>`;

  accountsList.querySelectorAll("[data-account-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      accounts = accounts.filter((account) => account.email !== button.dataset.accountDelete);
      courses.forEach((course) => {
        course.people = course.people.filter((person) => person.email !== button.dataset.accountDelete);
      });
      saveAccounts();
      saveCourses();
      showToast("Conta excluida.");
      render();
    });
  });
}

function addAIMessage(author, text) {
  const message = document.createElement("div");
  message.className = `ai-message ${author === "ia" ? "ai-answer" : "ai-user"}`;
  message.innerHTML = `<strong>${author === "ia" ? "Rub" : "Voce"}</strong><p>${escapeHTML(text)}</p>`;
  aiMessages.appendChild(message);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

function getAIAnswer(question) {
  const text = question.toLowerCase();

  if (text.includes("conta") || text.includes("login") || text.includes("senha") || text.includes("codigo")) {
    return "Para criar conta, entre como administrador, clique em + Criar > Criar conta. Cada conta precisa ter email, senha e codigo diferentes. Para entrar, use email, senha e depois o codigo da propria conta.";
  }

  if (text.includes("aluno")) {
    return "Para criar aluno, primeiro crie uma conta para ele. Depois clique em + Criar > Criar aluno e informe o email dessa conta. O aluno sera adicionado na turma ativa.";
  }

  if (text.includes("advert") || text.includes("puni") || text.includes("disciplina")) {
    return "Advertencias ficam na aba Pessoas. So Professor, Coordenador, Diretor, Vice-diretor e Administradores podem criar ou excluir advertencias.";
  }

  if (text.includes("nota") || text.includes("boletim") || text.includes("media")) {
    return "Clique em Notas na lateral, escolha a turma e lance as notas de 0 a 10. A media da turma e de cada aluno e calculada automaticamente.";
  }

  if (text.includes("agenda") || text.includes("evento") || text.includes("prazo")) {
    return "Clique em Agenda para criar eventos, prazos, provas e reunioes. Atividades e aulas criadas pelo + Criar tambem podem entrar na agenda.";
  }

  if (text.includes("link") || text.includes("externo") || text.includes("outro computador") || text.includes("internet")) {
    return "O link local e http://127.0.0.1:4173. Para outro computador fora da rede, use link-publico-cloudflare.bat com cloudflared instalado, ou hospede em Netlify, Vercel ou GitHub Pages para link fixo.";
  }

  if (text.includes("turma")) {
    return "Para criar turma, clique em + Criar > Turma. Para excluir, abra a turma desejada e use Excluir turma. O sistema mantem pelo menos uma turma cadastrada.";
  }

  return "Posso ajudar com contas, alunos, turmas, agenda, notas, advertencias e link externo. Tente perguntar, por exemplo: como criar aluno?";
}

function renderAIPage() {
  if (!aiMessages || aiMessages.children.length) return;
  addAIMessage("ia", "Ola! Sou a Rub. Posso ajudar voce a usar o Sala Viva: contas, alunos, turmas, notas, agenda, advertencias e link externo.");
}

function renderPanel(course) {
  if (activeTab === "mural") renderStream(course);
  if (activeTab === "atividades") renderAssignments(course);
  if (activeTab === "pessoas") renderPeople(course);
}

function render() {
  const course = getActiveCourse();
  document.documentElement.style.setProperty("--accent", course.color);
  courseTitle.textContent = course.title;
  courseDescription.textContent = course.description;
  renderCourses();
  renderDeadlines(course);
  renderPanel(course);
  renderAgendaPage();
  renderGradesPage();
  renderAccountsPage();
  renderAIPage();
  renderNextLesson();
}

function setActiveTab(tabName) {
  activeTab = tabName;
  document.querySelectorAll(".tab").forEach((tab) => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
  composer.classList.add("hidden");
  renderPanel(getActiveCourse());
}

function setActiveView(viewName) {
  if (viewName === "contas" && !canManageAccounts()) {
    showToast("Somente administradores podem ver contas.");
    viewName = "turmas";
  }

  activeView = viewName;
  viewPanels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.viewPanel !== viewName);
  });
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });

  const placeholders = {
    turmas: "Buscar turmas, atividades ou alunos",
    agenda: "Buscar eventos, turmas ou observacoes",
    notas: "Buscar alunos nas notas",
    contas: "Buscar contas por nome, email, perfil ou codigo",
    ia: "Pergunte para a Rub"
  };

  searchInput.placeholder = placeholders[viewName] || placeholders.turmas;
  composer.classList.add("hidden");
  createMenu.classList.add("hidden");
  render();
}

function openComposer() {
  setActiveTab("mural");
  composerAttachments = [];
  postFiles.value = "";
  postAttachmentList.innerHTML = "";
  composer.classList.remove("hidden");
  postText.focus();
}

function closeCreateModal() {
  createModal.classList.add("hidden");
  createForm.reset();
  createAttachments = [];
  renderAttachmentPreview(createAttachmentList, createAttachments);
}

function updateCreateFields() {
  const type = createType.value;
  createPointsWrap.classList.toggle("hidden", type !== "atividade");
  createDateWrap.classList.toggle("hidden", !["atividade", "aula"].includes(type));
  createFilesDrop.classList.toggle("hidden", ["turma", "conta", "aluno", "advertencia"].includes(type));
  accountFields.classList.toggle("hidden", type !== "conta");
  studentFields.classList.toggle("hidden", type !== "aluno");
  warningFields.classList.toggle("hidden", type !== "advertencia");
  createBodyWrap.classList.toggle("hidden", ["conta", "aluno"].includes(type));

  const titles = {
    aviso: "Criar aviso",
    atividade: "Criar atividade",
    aula: "Criar aula",
    material: "Criar material",
    turma: "Criar turma",
    conta: "Criar conta",
    aluno: "Criar aluno",
    advertencia: "Criar advertencia"
  };

  document.querySelector("#createTitle").textContent = titles[type];
  createItemTitleWrap.childNodes[0].textContent = ["conta", "aluno"].includes(type) ? "Nome" : "Titulo";
  createItemTitle.placeholder = type === "turma" ? "Nome da turma" : ["conta", "aluno"].includes(type) ? "Nome completo" : "Titulo";
  createBody.placeholder = type === "turma" ? "Descricao da turma" : "Escreva os detalhes";
  createItemTitleWrap.classList.toggle("hidden", type === "advertencia");
  createItemTitle.required = type !== "advertencia";

  if (type === "conta" && !createAccountCode.value) {
    createAccountCode.value = makeAccessCode();
  }

  if (type === "conta" && !createAccountPassword.value) {
    createAccountPassword.value = makeAccountPassword();
  }

  if (type === "advertencia") {
    warningStudent.innerHTML = studentOptions(getActiveCourse());
  }
}

function openCreateModal(type = "aviso") {
  createMenu.classList.add("hidden");
  createForm.reset();
  createType.value = type;
  createAttachments = [];
  renderAttachmentPreview(createAttachmentList, createAttachments);
  updateCreateFields();
  createModal.classList.remove("hidden");
  createItemTitle.focus();
}

function createPost(type, title, body, date, attachments) {
  getActiveCourse().posts.unshift({
    author: currentUser.name,
    initials: currentUser.initials,
    date: date || "Agora",
    title,
    body,
    type,
    attachments
  });
  activeTab = "mural";
  setActiveTab("mural");
}

function createAssignment(title, body, due, points, attachments) {
  getActiveCourse().assignments.unshift({
    title,
    body,
    due: due || "Sem prazo",
    points: Number(points || 0),
    done: false,
    attachments,
    submission: []
  });
  activeTab = "atividades";
  setActiveTab("atividades");
}

function createCourse(title, description) {
  const newCourse = {
    id: makeId(title),
    title,
    teacher: learnerProfiles.includes(currentUser.role) ? "Professor a definir" : currentUser.name,
    description: description || "Nova turma criada na plataforma AdC/CEE.",
    code: makeCode(title),
    color: palette[courses.length % palette.length],
    average: "0.0",
    posts: [],
    assignments: [],
    people: [{ name: currentUser.name, role: currentUser.role, score: "-" }]
  };

  courses.unshift(newCourse);
  activeCourseId = newCourse.id;
}

function deleteActiveCourse() {
  if (courses.length <= 1) {
    showToast("Mantenha pelo menos uma turma cadastrada.");
    return;
  }

  const course = getActiveCourse();
  courses = courses.filter((item) => item.id !== course.id);
  agendaItems = agendaItems.filter((item) => item.courseId !== course.id);
  delete grades[course.id];
  activeCourseId = courses[0].id;
  saveCourses();
  saveAgenda();
  saveGrades();
  showToast("Turma excluida.");
  render();
}

function closeAccessCourseModal() {
  accessCourseModal.classList.add("hidden");
  accessCourseForm.reset();
}

function openAccessCourseModal(code = "") {
  accessCourseCode.value = code;
  accessCourseModal.classList.remove("hidden");
  accessCourseCode.focus();
}

function accessCourseByCode(code) {
  const cleanCode = String(code || "").trim().toUpperCase();
  const course = courses.find((item) => item.code.toUpperCase() === cleanCode);

  if (!cleanCode) {
    showToast("Digite o código da turma.");
    return;
  }

  if (!course) {
    showToast("Código de turma não encontrado.");
    return;
  }

  if (!currentUser) {
    pendingAccessCode = cleanCode;
    closeAccessCourseModal();
    showLogin();
    showToast("Entre com sua conta para acessar essa turma.");
    return;
  }

  activeCourseId = course.id;
  if (!course.people.some((person) => person.email === currentUser.email || person.name === currentUser.name)) {
    course.people.push({
      name: currentUser.name,
      email: currentUser.email,
      role: currentUser.role,
      score: "-"
    });
    saveCourses();
  }

  closeAccessCourseModal();
  setActiveView("turmas");
  showToast(`Turma acessada: ${course.title}`);
}

function createAccount(name, email, password, code, role) {
  const normalizedEmail = email.trim().toLowerCase();
  const cleanCode = String(code || "").trim();

  if (!normalizedEmail.includes("@") || !normalizedEmail.includes(".")) {
    showToast("Digite um email valido para a conta.");
    return false;
  }

  if (isEmailUsed(normalizedEmail)) {
    showToast("Esse email ja esta em uso.");
    return false;
  }

  if (password.length < 6) {
    showToast("A senha da conta precisa ter pelo menos 6 caracteres.");
    return false;
  }

  if (isPasswordUsed(password)) {
    showToast("Essa senha ja esta sendo usada por outra conta.");
    return false;
  }

  if (!/^\d{6}$/.test(cleanCode)) {
    showToast("O codigo precisa ter 6 numeros.");
    return false;
  }

  if (isCodeUsed(cleanCode)) {
    showToast("Esse codigo ja esta sendo usado por outra conta.");
    return false;
  }

  const account = {
    id: makeId(normalizedEmail),
    name,
    email: normalizedEmail,
    password,
    code: cleanCode,
    role,
    initials: initials(name),
    createdAt: new Date().toISOString()
  };

  accounts.unshift(account);
  saveAccounts();
  return true;
}

function createStudent(name, email) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const account = accounts.find((item) => item.email === normalizedEmail);
  if (!account) {
    showToast("Esse email ainda nao tem conta criada pelo adm.");
    return false;
  }

  const course = getActiveCourse();
  if (course.people.some((person) => person.email === normalizedEmail)) {
    showToast("Esse aluno ja esta nesta turma.");
    return false;
  }

  course.people.push({
    name: name || account.name,
    email: normalizedEmail,
    role: "Aluno",
    score: "-"
  });
  saveCourses();
  return true;
}

function createWarning(studentKey, type, body) {
  if (!canManageDiscipline()) {
    showToast("Seu perfil nao pode criar advertencias.");
    return false;
  }

  const course = getActiveCourse();
  const student = course.people.find((person) => (person.email || person.name) === studentKey);
  if (!student) {
    showToast("Selecione um aluno da turma.");
    return false;
  }

  course.warnings = course.warnings || [];
  course.warnings.unshift({
    id: makeId(`${student.name}-${type}`),
    studentName: student.name,
    studentEmail: student.email || "",
    type,
    body: body || "Registro disciplinar sem observacoes.",
    author: currentUser.name,
    authorRole: currentUser.role,
    date: new Date().toLocaleDateString("pt-BR")
  });
  saveCourses();
  return true;
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = validateLogin();
  if (!user) return;

  pendingUser = user;
  loginForm.classList.add("hidden");
  mfaForm.classList.remove("hidden");
  if (quickAccessCode && quickAccessCode === user.code) {
    mfaCode.value = quickAccessCode;
    showToast("Código autorizado preenchido.");
  } else {
    mfaCode.value = "";
    showToast("Digite o código de acesso da conta.");
  }
  mfaCode.focus();
});

mfaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!pendingUser || mfaCode.value.trim() !== pendingUser.code) {
    showToast("Código inválido.");
    return;
  }
  completeLogin(pendingUser, rememberLogin.checked);
});

document.querySelector("#backToLogin").addEventListener("click", () => {
  mfaForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

document.querySelector("#togglePassword").addEventListener("click", () => {
  const showing = loginPassword.type === "text";
  loginPassword.type = showing ? "password" : "text";
  document.querySelector("#togglePassword").textContent = showing ? "Ver" : "Ocultar";
});

homeLoginButton.addEventListener("click", showLogin);
homeEnterButton.addEventListener("click", showLogin);
homeAccessCourse.addEventListener("click", () => openAccessCourseModal());
backToHome.addEventListener("click", showHome);

fillAdminLogin.addEventListener("click", () => {
  loginEmail.value = UNIVERSAL_ADMIN_ACCOUNT.email;
  loginPassword.value = UNIVERSAL_ADMIN_ACCOUNT.password;
  loginRole.value = UNIVERSAL_ADMIN_ACCOUNT.role;
  trustDevice.checked = true;
  quickAccessCode = UNIVERSAL_ADMIN_ACCOUNT.code;
  showToast("Acesso autorizado preenchido. Clique em Continuar.");
});

loginEmail.addEventListener("input", () => {
  const isUniversalAdmin = loginEmail.value.trim().toLowerCase() === UNIVERSAL_ADMIN_ACCOUNT.email;
  quickAccessCode = "";
  if (isUniversalAdmin) {
    loginRole.value = UNIVERSAL_ADMIN_ACCOUNT.role;
    trustDevice.checked = true;
  }
});

createAccountRole.innerHTML = Array.from(loginRole.options)
  .map((option) => `<option value="${escapeHTML(option.value)}">${escapeHTML(option.textContent)}</option>`)
  .join("");

document.querySelector("#logoutButton").addEventListener("click", () => {
  clearSession();
  showHome();
  showToast("Sessao encerrada.");
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
});

navItems.forEach((item) => {
  item.addEventListener("click", () => setActiveView(item.dataset.view));
});

document.querySelector("#openCreateMain").addEventListener("click", () => openCreateModal("aviso"));
document.querySelector("#openCreateMenu").addEventListener("click", () => createMenu.classList.toggle("hidden"));
deleteCourseButton.addEventListener("click", deleteActiveCourse);
accessCourseButton.addEventListener("click", () => openAccessCourseModal());
openCreateAccountFromAccounts.addEventListener("click", () => openCreateModal("conta"));

createMenu.querySelectorAll("[data-create]").forEach((button) => {
  button.addEventListener("click", () => openCreateModal(button.dataset.create));
});

document.querySelectorAll("[data-ai-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    const question = button.dataset.aiPrompt;
    addAIMessage("user", question);
    window.setTimeout(() => addAIMessage("ia", getAIAnswer(question)), 180);
  });
});

aiForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = aiInput.value.trim();
  if (!question) return;
  addAIMessage("user", question);
  aiInput.value = "";
  window.setTimeout(() => addAIMessage("ia", getAIAnswer(question)), 180);
});

profileButton.addEventListener("click", () => profileMenu.classList.toggle("hidden"));

document.addEventListener("click", (event) => {
  if (!event.target.closest(".create-wrap")) createMenu.classList.add("hidden");
  if (!event.target.closest(".profile-wrap")) profileMenu.classList.add("hidden");
});

document.querySelector("#cancelComposer").addEventListener("click", () => {
  composer.classList.add("hidden");
  postText.value = "";
  postFiles.value = "";
  composerAttachments = [];
  postAttachmentList.innerHTML = "";
});

postFiles.addEventListener("change", () => {
  composerAttachments = filesToAttachments(postFiles.files);
  renderAttachmentPreview(postAttachmentList, composerAttachments);
});

composer.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = postText.value.trim();
  if (!message && !composerAttachments.length) {
    showToast("Escreva um aviso ou anexe um arquivo.");
    return;
  }

  getActiveCourse().posts.unshift({
    author: currentUser.name,
    initials: currentUser.initials,
    date: "Agora",
    title: "Novo aviso",
    body: message || "Arquivo compartilhado com a turma.",
    type: "aviso",
    attachments: composerAttachments
  });
  postText.value = "";
  postFiles.value = "";
  composerAttachments = [];
  postAttachmentList.innerHTML = "";
  composer.classList.add("hidden");
  saveCourses();
  showToast("Aviso publicado no mural.");
  renderPanel(getActiveCourse());
});

createFiles.addEventListener("change", () => {
  createAttachments = filesToAttachments(createFiles.files);
  renderAttachmentPreview(createAttachmentList, createAttachments);
});

createType.addEventListener("change", updateCreateFields);
document.querySelector("#cancelCreate").addEventListener("click", closeCreateModal);
document.querySelector("#closeCreateModal").addEventListener("click", closeCreateModal);

agendaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addAgendaItem({
    title: agendaTitle.value.trim(),
    courseId: agendaCourse.value,
    date: agendaDate.value,
    time: agendaTime.value,
    type: agendaType.value,
    notes: agendaNotes.value.trim()
  });
  agendaForm.reset();
  agendaDate.value = todayISO();
  showToast("Evento adicionado na agenda.");
  renderAgendaPage();
  renderNextLesson();
});

agendaCourseFilter.addEventListener("change", renderAgendaPage);
agendaStatusFilter.addEventListener("change", renderAgendaPage);

gradeCourseSelect.addEventListener("change", () => {
  activeCourseId = gradeCourseSelect.value;
  render();
});

accessCourseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  accessCourseByCode(accessCourseCode.value);
});

closeAccessCourse.addEventListener("click", closeAccessCourseModal);
cancelAccessCourse.addEventListener("click", closeAccessCourseModal);

createForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const type = createType.value;
  const title = createItemTitle.value.trim();
  const body = createBody.value.trim();

  if (type !== "advertencia" && !title) {
    showToast("Digite um titulo.");
    return;
  }

  if (type === "conta") {
    if (!canManageAccounts()) {
      showToast("Somente administradores podem criar contas.");
      return;
    }

    const created = createAccount(
      title,
      createAccountEmail.value,
      createAccountPassword.value,
      createAccountCode.value,
      createAccountRole.value
    );
    if (!created) return;
    showToast("Conta criada e pronta para login.");
  } else if (type === "aluno") {
    const created = createStudent(title, createStudentEmail.value);
    if (!created) return;
    activeTab = "pessoas";
    setActiveTab("pessoas");
    showToast("Aluno adicionado na turma.");
  } else if (type === "advertencia") {
    const created = createWarning(warningStudent.value, warningType.value, body);
    if (!created) return;
    activeTab = "pessoas";
    setActiveTab("pessoas");
    showToast("Advertencia registrada.");
  } else if (type === "turma") {
    createCourse(title, body);
    showToast("Turma criada.");
  } else if (type === "atividade") {
    createAssignment(title, body, createDate.value.trim(), createPoints.value, createAttachments);
    if (createDate.value.trim()) {
      const datePayload = createDatePayload(createDate.value);
      addAgendaItem({
        title: `Prazo: ${title}`,
        courseId: activeCourseId,
        type: "Prazo",
        notes: body || "Prazo de atividade.",
        ...datePayload
      });
    }
    showToast("Atividade criada.");
  } else if (type === "aula") {
    const datePayload = createDatePayload(createDate.value);
    createPost(type, `Aula: ${title}`, body || "Aula agendada para a turma.", createDate.value.trim() || "Agora", createAttachments);
    addAgendaItem({
      title,
      courseId: activeCourseId,
      type: "Aula",
      notes: body || "Aula criada pelo menu.",
      ...datePayload
    });
    showToast("Aula criada.");
  } else if (type === "material") {
    createPost(type, `Material: ${title}`, body || "Material de apoio publicado.", "Agora", createAttachments);
    showToast("Material criado.");
  } else {
    createPost(type, title, body || "Aviso publicado para a turma.", "Agora", createAttachments);
    showToast("Aviso criado.");
  }

  saveCourses();
  closeCreateModal();
  render();
});

searchInput.addEventListener("input", () => {
  if (activeView === "turmas") renderCourses();
  if (activeView === "agenda") renderAgendaPage();
  if (activeView === "notas") renderGradesPage();
  if (activeView === "contas") renderAccountsPage();
});

const session = getSession();
if (session) {
  showApp(session);
} else {
  showHome();
}
