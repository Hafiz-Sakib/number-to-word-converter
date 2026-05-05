// ===== BANGLA NUMBER DATA =====
const NUM_TO_BD = {
  0: "শূন্য", 1: "এক", 2: "দুই", 3: "তিন", 4: "চার",
  5: "পাঁচ", 6: "ছয়", 7: "সাত", 8: "আট", 9: "নয়",
  10: "দশ", 11: "এগার", 12: "বার", 13: "তের", 14: "চৌদ্দ",
  15: "পনের", 16: "ষোল", 17: "সতের", 18: "আঠার", 19: "ঊনিশ",
  20: "বিশ", 21: "একুশ", 22: "বাইশ", 23: "তেইশ", 24: "চব্বিশ",
  25: "পঁচিশ", 26: "ছাব্বিশ", 27: "সাতাশ", 28: "আটাশ", 29: "ঊনত্রিশ",
  30: "ত্রিশ", 31: "একত্রিশ", 32: "বত্রিশ", 33: "তেত্রিশ", 34: "চৌত্রিশ",
  35: "পঁয়ত্রিশ", 36: "ছত্রিশ", 37: "সাঁইত্রিশ", 38: "আটত্রিশ", 39: "ঊনচল্লিশ",
  40: "চল্লিশ", 41: "একচল্লিশ", 42: "বিয়াল্লিশ", 43: "তেতাল্লিশ", 44: "চুয়াল্লিশ",
  45: "পঁয়তাল্লিশ", 46: "ছেচল্লিশ", 47: "সাতচল্লিশ", 48: "আটচল্লিশ", 49: "ঊনপঞ্চাশ",
  50: "পঞ্চাশ", 51: "একান্ন", 52: "বায়ান্ন", 53: "তিপ্পান্ন", 54: "চুয়ান্ন",
  55: "পঞ্চান্ন", 56: "ছাপ্পান্ন", 57: "সাতান্ন", 58: "আটান্ন", 59: "ঊনষাট",
  60: "ষাট", 61: "একষট্টি", 62: "বাষট্টি", 63: "তেষট্টি", 64: "চৌষট্টি",
  65: "পঁয়ষট্টি", 66: "ছেষট্টি", 67: "সাতষট্টি", 68: "আটষট্টি", 69: "ঊনসত্তর",
  70: "সত্তর", 71: "একাত্তর", 72: "বাহাত্তর", 73: "তিয়াত্তর", 74: "চুয়াত্তর",
  75: "পঁচাত্তর", 76: "ছিয়াত্তর", 77: "সাতাত্তর", 78: "আটাত্তর", 79: "ঊনআশি",
  80: "আশি", 81: "একাশি", 82: "বিরাশি", 83: "তিরাশি", 84: "চুরাশি",
  85: "পঁচাশি", 86: "ছিয়াশি", 87: "সাতাশি", 88: "আটাশি", 89: "ঊননব্বই",
  90: "নব্বই", 91: "একানব্বই", 92: "বিরানব্বই", 93: "তিরানব্বই", 94: "চুরানব্বই",
  95: "পঁচানব্বই", 96: "ছিয়ানব্বই", 97: "সাতানব্বই", 98: "আটানব্বই", 99: "নিরানব্বই"
};

// ===== BANGLA CONVERSION FUNCTIONS =====
function bdUnderHundred(n) { return NUM_TO_BD[n] || ""; }

function bdHundred(n) {
  let w = "";
  let q = Math.floor(n / 100), r = n % 100;
  if (q > 0) w += bdUnderHundred(q) + " শত ";
  if (r > 0) w += bdUnderHundred(r);
  return w.trim();
}

function bdThousand(n) {
  let w = "";
  let q = Math.floor(n / 1000), r = n % 1000;
  if (q > 0) w += bdUnderHundred(q) + " হাজার ";
  if (r > 0) w += bdHundred(r);
  return w.trim();
}

function bdLakh(n) {
  let w = "";
  let q = Math.floor(n / 100000), r = n % 100000;
  if (q > 0) w += bdUnderHundred(q) + " লক্ষ ";
  if (r > 0) w += bdThousand(r);
  return w.trim();
}

function bdCrore(n) {
  let w = "";
  let q = Math.floor(n / 10000000), r = n % 10000000;
  if (q > 0) w += bdUnderHundred(q) + " কোটি ";
  if (r > 0) w += bdLakh(r);
  return w.trim();
}

function convertBangla(numStr) {
  const parts = numStr.split(".");
  const intPart = parseInt(parts[0]);
  if (isNaN(intPart)) return null;

  let result = "";
  if (intPart >= 10000000) result = bdCrore(intPart);
  else if (intPart >= 100000) result = bdLakh(intPart);
  else if (intPart >= 1000) result = bdThousand(intPart);
  else if (intPart >= 100) result = bdHundred(intPart);
  else result = bdUnderHundred(intPart);

  if (parts.length > 1 && parts[1]) {
    result += " দশমিক";
    for (const d of parts[1]) {
      result += " " + bdUnderHundred(parseInt(d));
    }
  }
  return result;
}

// ===== ENGLISH CONVERSION FUNCTIONS =====
const ONE = [
  "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen"
];
const TEN = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function numChunk(n) {
  if (n === 0) return "";
  if (n < 20) return ONE[n];
  if (n < 100) return TEN[Math.floor(n / 10)] + (n % 10 ? "-" + ONE[n % 10] : "");
  return ONE[Math.floor(n / 100)] + " hundred" + (n % 100 ? " and " + numChunk(n % 100) : "");
}

function convertEnglish(numStr) {
  const parts = numStr.split(".");
  let n = parseInt(parts[0]);
  if (isNaN(n)) return null;

  let neg = n < 0;
  n = Math.abs(n);

  if (n === 0 && parts.length === 1) return "zero";

  const scales = [
    [10000000, "crore"],
    [100000, "lakh"],
    [1000, "thousand"],
    [1, ""]
  ];

  let parts_result = [];
  let remaining = n;
  for (const [scale, name] of scales) {
    const chunk = Math.floor(remaining / scale);
    remaining = remaining % scale;
    if (chunk > 0) {
      parts_result.push(numChunk(chunk) + (name ? " " + name : ""));
    }
  }

  let result = parts_result.join(", ");
  if (neg) result = "negative " + result;

  if (parts.length > 1 && parts[1]) {
    result += " point";
    for (const d of parts[1]) {
      result += " " + ONE[parseInt(d)];
    }
  }

  return result.trim();
}

// ===== BREAKDOWN ANALYSIS =====
function getBreakdown(numStr, lang) {
  const n = parseInt(numStr.split(".")[0]);
  if (isNaN(n) || n === 0) return [];

  const breakdown = [];
  let rem = n;

  const crore = Math.floor(rem / 10000000);
  if (crore > 0) {
    breakdown.push({ label: lang === "bn" ? "কোটি" : "Crore", value: crore, class: "tag-crore" });
    rem %= 10000000;
  }
  const lakh = Math.floor(rem / 100000);
  if (lakh > 0) {
    breakdown.push({ label: lang === "bn" ? "লক্ষ" : "Lakh", value: lakh, class: "tag-lakh" });
    rem %= 100000;
  }
  const thousand = Math.floor(rem / 1000);
  if (thousand > 0) {
    breakdown.push({ label: lang === "bn" ? "হাজার" : "Thousand", value: thousand, class: "tag-thousand" });
    rem %= 1000;
  }
  const hundred = Math.floor(rem / 100);
  if (hundred > 0) {
    breakdown.push({ label: lang === "bn" ? "শত" : "Hundred", value: hundred, class: "tag-hundred" });
    rem %= 100;
  }
  if (rem > 0) {
    breakdown.push({ label: lang === "bn" ? "একক" : "Ones", value: rem, class: "tag-tens" });
  }
  return breakdown;
}

// ===== HISTORY =====
const MAX_HISTORY = 8;
let history = JSON.parse(localStorage.getItem("n2w_history") || "[]");

function addToHistory(num, word, lang) {
  history = history.filter(h => !(h.num === num && h.lang === lang));
  history.unshift({ num, word, lang, ts: Date.now() });
  if (history.length > MAX_HISTORY) history = history.slice(0, MAX_HISTORY);
  localStorage.setItem("n2w_history", JSON.stringify(history));
}

function getHistory(lang) {
  return lang ? history.filter(h => h.lang === lang) : history;
}

// ===== TOAST =====
let toastTimer;
function showToast(msg, icon = "fa-check-circle") {
  const toast = document.getElementById("toast");
  toast.innerHTML = `<i class="fas ${icon} toast-icon"></i> ${msg}`;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2400);
}

// ===== CLIPBOARD =====
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Copied to clipboard!");
  }).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast("Copied!");
  });
}

// ===== FORMATTED NUMBER DISPLAY =====
function formatNumberDisplay(numStr) {
  if (!numStr) return "";
  const parts = numStr.split(".");
  const intStr = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.length > 1 ? intStr + "." + parts[1] : intStr;
}

// ===== DIGIT CHIPS =====
function renderDigitChips(numStr, colorClass) {
  if (!numStr) return "";
  const formatted = formatNumberDisplay(numStr);
  return formatted.split("").map((ch, i) => {
    if (ch === "," || ch === ".") {
      return `<span class="digit-sep">${ch}</span>`;
    }
    return `<span class="digit-chip ${colorClass}" style="animation-delay:${i * 0.04}s">${ch}</span>`;
  }).join("");
}

// ===== SPEAK (TTS) =====
function speak(text, lang) {
  if (!window.speechSynthesis) {
    showToast("TTS not supported", "fa-exclamation-circle");
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang === "bn" ? "bn-BD" : "en-US";
  utter.rate = 0.85;
  window.speechSynthesis.speak(utter);
  showToast("Speaking...", "fa-volume-up");
}

// ===== VIEWS =====
let currentView = "home";
let currentResult = { num: "", word: "", lang: "" };
let historyVisible = false;

function render() {
  const root = document.getElementById("root");
  if (currentView === "home") {
    root.innerHTML = renderHome();
  } else if (currentView === "bangla") {
    root.innerHTML = renderConverter("bn");
  } else if (currentView === "english") {
    root.innerHTML = renderConverter("en");
  }
  attachEvents();
}

function renderHome() {
  const recentHistory = history.slice(0, 3);
  const historyHTML = recentHistory.length === 0
    ? `<div class="empty-history">No conversions yet</div>`
    : recentHistory.map(h => `
        <div class="history-item">
          <span class="history-num">${h.num}</span>
          <span class="history-word">${h.word}</span>
          <span class="history-lang-badge ${h.lang === 'bn' ? 'badge-bn' : 'badge-en'}">${h.lang === 'bn' ? 'বাং' : 'EN'}</span>
        </div>`).join("");

  return `
    <div class="app-container">
      <div class="card">
        <div class="card-inner-glow"></div>

        <div class="brand-header fade-up">
          <div class="brand-icon">🔢</div>
          <h1 class="brand-title">Number to Words</h1>
          <p class="brand-subtitle">Bangla & English Converter</p>
        </div>

        <div class="divider">
          <div class="divider-line"></div>
          <div class="divider-dot"></div>
          <div class="divider-line"></div>
        </div>

        <p class="section-label fade-up fade-up-1">Choose Language</p>

        <div class="option-buttons">
          <button class="option-btn option-btn-bangla fade-up fade-up-1" id="btn-bangla">
            <div class="option-icon"><i class="fas fa-language"></i></div>
            <div class="option-content">
              <div class="option-title">বাংলা সংখ্যা → শব্দ</div>
              <div class="option-desc">Bangla number to words with decimals</div>
            </div>
            <i class="fas fa-chevron-right option-arrow"></i>
          </button>

          <button class="option-btn option-btn-english fade-up fade-up-2" id="btn-english">
            <div class="option-icon"><i class="fas fa-globe"></i></div>
            <div class="option-content">
              <div class="option-title">English Number → Words</div>
              <div class="option-desc">English conversion with breakdown</div>
            </div>
            <i class="fas fa-chevron-right option-arrow"></i>
          </button>
        </div>

        <div class="history-preview fade-up fade-up-3">
          <div class="history-preview-title"><i class="fas fa-history" style="margin-right:6px"></i>Recent Conversions</div>
          ${historyHTML}
        </div>

        <div class="card-footer fade-up fade-up-3">
          <p class="footer-text">Made with <span>♥</span> by Mohammad Hafizur Rahman Sakib</p>
        </div>
      </div>
    </div>`;
}

function renderConverter(lang) {
  const isBn = lang === "bn";
  const accentClass = isBn ? "teal" : "gold";
  const chipClass = isBn ? "digit-chip-teal" : "digit-chip-gold";
  const inputClass = isBn ? "input-field-bangla" : "";
  const inputIconClass = isBn ? "input-icon-teal" : "";

  const pageTitle = isBn
    ? `<span class="page-title-bn">বাংলা সংখ্যা থেকে শব্দ</span>`
    : `English Number to Words`;

  const placeholder = isBn ? "সংখ্যা লিখুন (যেমন: 12345.50)" : "Enter a number (e.g., 12345678)";
  const hint = isBn
    ? "Supports integers and decimals up to 99 crore"
    : "Supports integers and decimals up to 99 crore";
  const convertLabel = isBn ? "<i class='fas fa-exchange-alt btn-icon'></i> রূপান্তর করুন" : "<i class='fas fa-exchange-alt btn-icon'></i> Convert to Words";

  let resultHTML = "";
  if (currentResult.word && currentResult.lang === lang) {
    const breakdown = getBreakdown(currentResult.num, lang);
    const brkHTML = breakdown.map(b =>
      `<span class="breakdown-tag ${b.class}"><strong>${b.value}</strong> ${b.label}</span>`
    ).join("");

    const wordFmt = currentResult.word.charAt(0).toUpperCase() + currentResult.word.slice(1);

    resultHTML = `
      <div class="result-container">
        <div class="result-label"><i class="fas fa-check-circle" style="margin-right:6px;color:var(--accent-teal)"></i>Result</div>
        <div class="result-box result-box-${accentClass}">
          <p class="result-text ${isBn ? 'result-text-bn' : ''}">${wordFmt}</p>
          <button class="copy-btn" id="copy-btn" title="Copy">
            <i class="fas fa-copy"></i>
          </button>
        </div>
        <div class="result-actions">
          <button class="action-btn" id="speak-btn">
            <i class="fas fa-volume-up"></i> ${isBn ? "শুনুন" : "Speak"}
          </button>
          <button class="action-btn" id="save-btn">
            <i class="fas fa-download"></i> ${isBn ? "সেভ করুন" : "Save"}
          </button>
          <button class="action-btn" id="share-btn">
            <i class="fas fa-share-alt"></i> Share
          </button>
        </div>
        ${breakdown.length > 1 ? `
        <div class="breakdown-container">
          <div class="breakdown-title"><i class="fas fa-th-list" style="margin-right:5px"></i>Number Breakdown</div>
          <div class="breakdown-list">${brkHTML}</div>
        </div>` : ""}
      </div>`;
  }

  const convHistory = getHistory(lang).slice(0, 5);
  const historyRowsHTML = convHistory.length === 0
    ? `<div class="empty-history" style="padding:12px 0">No history for this language yet</div>`
    : convHistory.map((h, i) =>
        `<div class="history-row" data-num="${h.num}" data-idx="${i}">
          <div class="history-row-left">
            <span class="history-row-num">${h.num}</span>
            <span class="history-row-word ${isBn ? 'history-row-word-bn' : ''}">${h.word}</span>
          </div>
          <span class="history-row-use"><i class="fas fa-redo" style="font-size:10px"></i></span>
        </div>`
      ).join("");

  return `
    <div class="app-container">
      <div class="card">
        <div class="card-inner-glow"></div>
        <div class="page-header">
          <button class="back-btn" id="back-btn">
            <i class="fas fa-arrow-left"></i>
          </button>
          <h1 class="page-title">${pageTitle}</h1>
        </div>

        <div class="input-wrapper">
          <label class="input-label" for="num-input">
            <i class="fas fa-hashtag" style="margin-right:5px"></i>Enter Number
          </label>
          <div class="input-field-container">
            <input
              type="text"
              id="num-input"
              class="input-field ${inputClass}"
              placeholder="${placeholder}"
              inputmode="decimal"
              autocomplete="off"
              value="${currentResult.lang === lang ? currentResult.num : ''}"
            />
            <i class="fas fa-calculator input-icon ${inputIconClass}"></i>
            <button class="input-clear-btn" id="clear-btn" style="display:none">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="input-hint"><i class="fas fa-info-circle" style="margin-right:4px;opacity:0.5"></i>${hint}</div>
        </div>

        <div class="digit-display" id="digit-display">
          ${currentResult.lang === lang && currentResult.num ? renderDigitChips(currentResult.num, chipClass) : ""}
        </div>

        <button class="convert-btn convert-btn-${accentClass}" id="convert-btn">
          ${convertLabel}
        </button>

        ${resultHTML}

        <div class="history-toggle">
          <span class="history-toggle-label"><i class="fas fa-history" style="margin-right:6px"></i>Conversion History</span>
          <button class="history-toggle-btn" id="history-toggle-btn">
            ${historyVisible ? "Hide <i class='fas fa-chevron-up'></i>" : "Show <i class='fas fa-chevron-down'></i>"}
          </button>
        </div>
        ${historyVisible ? `<div class="history-list" id="history-list">${historyRowsHTML}</div>` : ""}
      </div>
    </div>`;
}

// ===== ATTACH EVENTS =====
function attachEvents() {
  // Home
  const btnBangla = document.getElementById("btn-bangla");
  const btnEnglish = document.getElementById("btn-english");
  if (btnBangla) btnBangla.addEventListener("click", () => { currentView = "bangla"; currentResult = { num: "", word: "", lang: "" }; render(); });
  if (btnEnglish) btnEnglish.addEventListener("click", () => { currentView = "english"; currentResult = { num: "", word: "", lang: "" }; render(); });

  // Back
  const backBtn = document.getElementById("back-btn");
  if (backBtn) backBtn.addEventListener("click", () => { currentView = "home"; currentResult = { num: "", word: "", lang: "" }; historyVisible = false; render(); });

  // Input
  const numInput = document.getElementById("num-input");
  const clearBtn = document.getElementById("clear-btn");
  const digitDisplay = document.getElementById("digit-display");
  const lang = currentView === "bangla" ? "bn" : "en";
  const chipClass = lang === "bn" ? "digit-chip-teal" : "digit-chip-gold";

  if (numInput) {
    numInput.addEventListener("input", () => {
      const val = numInput.value;
      clearBtn.style.display = val ? "flex" : "none";
      if (digitDisplay) {
        digitDisplay.innerHTML = renderDigitChips(val, chipClass);
      }
    });
    // Show/hide clear on load
    if (numInput.value) clearBtn.style.display = "flex";

    // Enter to convert
    numInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") document.getElementById("convert-btn")?.click();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      numInput.value = "";
      clearBtn.style.display = "none";
      digitDisplay.innerHTML = "";
      numInput.focus();
    });
  }

  // Convert
  const convertBtn = document.getElementById("convert-btn");
  if (convertBtn) {
    convertBtn.addEventListener("click", () => {
      const val = numInput ? numInput.value.trim() : "";
      if (!val) {
        showToast("Please enter a number!", "fa-exclamation-circle");
        numInput?.focus();
        return;
      }

      if (!/^-?\d+(\.\d+)?$/.test(val)) {
        showToast("Invalid number format!", "fa-exclamation-circle");
        return;
      }

      convertBtn.classList.add("loading");
      setTimeout(() => {
        convertBtn.classList.remove("loading");
        let word;
        if (lang === "bn") {
          word = convertBangla(val);
        } else {
          word = convertEnglish(val);
        }

        if (!word) {
          showToast("Could not convert this number", "fa-exclamation-circle");
          return;
        }

        currentResult = { num: val, word, lang };
        addToHistory(val, word, lang);
        render();
        // Scroll to result
        setTimeout(() => {
          document.querySelector(".result-container")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 100);
      }, 300);
    });
  }

  // Copy
  const copyBtn = document.getElementById("copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      copyText(currentResult.word);
      copyBtn.innerHTML = "<i class='fas fa-check'></i>";
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtn.classList.remove("copied");
      }, 2000);
    });
  }

  // Speak
  const speakBtn = document.getElementById("speak-btn");
  if (speakBtn) speakBtn.addEventListener("click", () => speak(currentResult.word, lang));

  // Save as .txt
  const saveBtn = document.getElementById("save-btn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const content = `Number: ${currentResult.num}\nWords: ${currentResult.word}\nLanguage: ${lang === 'bn' ? 'Bangla' : 'English'}\nDate: ${new Date().toLocaleString()}`;
      const blob = new Blob([content], { type: "text/plain" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `num2word_${currentResult.num}.txt`;
      a.click();
      showToast("File saved!", "fa-download");
    });
  }

  // Share
  const shareBtn = document.getElementById("share-btn");
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      const text = `${currentResult.num} = ${currentResult.word}`;
      if (navigator.share) {
        navigator.share({ title: "Number to Words", text }).catch(() => {});
      } else {
        copyText(text);
        showToast("Share text copied!", "fa-share-alt");
      }
    });
  }

  // History toggle
  const historyToggle = document.getElementById("history-toggle-btn");
  if (historyToggle) {
    historyToggle.addEventListener("click", () => {
      historyVisible = !historyVisible;
      render();
      // Restore input focus if needed
      const inp = document.getElementById("num-input");
      if (inp && currentResult.num) {
        // maintain scroll position
      }
    });
  }

  // History rows - click to re-use
  document.querySelectorAll(".history-row").forEach(row => {
    row.addEventListener("click", () => {
      const num = row.dataset.num;
      const inp = document.getElementById("num-input");
      if (inp) {
        inp.value = num;
        inp.dispatchEvent(new Event("input"));
        document.getElementById("convert-btn")?.click();
      }
    });
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  render();
});
