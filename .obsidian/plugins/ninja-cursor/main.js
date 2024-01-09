/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  DEFAULT_SETTINGS: () => DEFAULT_SETTINGS,
  ObsidianLiveSyncSettingTab: () => ObsidianLiveSyncSettingTab,
  default: () => NinjaCursorPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
function waitForReflowComplete() {
  return new Promise((res) => {
    window.requestAnimationFrame(() => res(true));
  });
}
var NinjaCursorForWindow = class {
  constructor(plugin, aw, ad, registerDomEvent) {
    this.lastPos = null;
    this.styleCount = 0;
    this.plugin = plugin;
    this.app = plugin.app;
    this.bufferedWindow = aw;
    this.bufferedDocument = ad;
    this.wrapperElement = ad.createElement("div");
    this.wrapperElement.addClass("cursorWrapper");
    this.cursorElement = ad.createElement("span");
    this.wrapperElement.appendChild(this.cursorElement);
    ad.body.appendChild(this.wrapperElement);
    this.cursorElement.addClass("x-cursor");
    const styleRoot = this.wrapperElement;
    let datumTop = 0;
    let datumElement;
    let cursorVisibility = false;
    let processing = false;
    const moveCursor = async (e, noAnimate) => {
      if (processing) {
        return;
      }
      processing = true;
      await __moveCursor(e, noAnimate);
      processing = false;
    };
    const __moveCursor = async (e, noAnimate) => {
      try {
        if ([
          !this.plugin.settings.reactToContentEditable && !this.plugin.settings.reactToInputElement && !this.plugin.settings.reactToVimMode,
          this.plugin.settings.reactToContentEditable && e && e.target instanceof HTMLElement && e.target.isContentEditable,
          this.plugin.settings.reactToInputElement && e && e.target instanceof HTMLElement && e.target.tagName == "INPUT",
          this.plugin.settings.reactToVimMode && e && e.target instanceof HTMLElement && e.target.closest(".cm-vimMode")
        ].every((e2) => !e2)) {
          return;
        }
        if (e && e.target instanceof HTMLElement && (e.target.isContentEditable || e.target.tagName == "INPUT")) {
          datumElement = e.target;
          if (!cursorVisibility) {
            cursorVisibility = true;
          }
        } else if (e != null) {
          if (cursorVisibility) {
            styleRoot.style.setProperty("--cursor-visibility", `hidden`);
            cursorVisibility = false;
          }
          return;
        }
        if (e && e.target instanceof HTMLElement) {
          datumElement = e.target;
        }
        await waitForReflowComplete();
        datumTop = datumElement.getBoundingClientRect().top;
        const selection = aw.getSelection();
        if (!selection) {
          console.log("Could not find selection");
          return;
        }
        if (selection.rangeCount == 0)
          return;
        const range = selection.getRangeAt(0);
        let rect = range == null ? void 0 : range.getBoundingClientRect();
        if (!rect) {
          console.log("Could not find range");
          return;
        }
        if (rect.x == 0 && rect.y == 0) {
          const textRange = ad.createRange();
          textRange.setStart(range.startContainer, range.startOffset);
          textRange.setEndAfter(range.startContainer);
          let textRect = textRange.getBoundingClientRect();
          if (textRect.x == 0 && textRect.y == 0) {
            const startEndOffset = range.endOffset - 1 < 0 ? 0 : range.endOffset - 1;
            textRange.setStart(range.endContainer, startEndOffset);
            textRange.setEnd(range.endContainer, range.endOffset);
            const textRects = textRange.getClientRects();
            const tempRect = textRects.item(textRects.length - 1);
            if (!tempRect) {
              console.log("Could not found");
              return;
            }
            textRect = tempRect;
            textRect.x = tempRect.right;
            textRect.y = tempRect.bottom - tempRect.height;
          }
          if (textRect.x == 0 && textRect.y == 0) {
            return;
          }
          rect = textRect;
        }
        if (this.lastPos == null) {
          this.lastPos = rect;
          return;
        }
        if (this.lastPos.x == rect.x && this.lastPos.y == rect.y) {
          return;
        }
        this.styleCount = (this.styleCount + 1) % 2;
        const dx = rect.x - this.lastPos.x;
        const dy = this.lastPos.y - rect.y;
        const cursorDragAngle = Math.atan2(dx, dy) + Math.PI / 2;
        const cursorDragDistance = Math.sqrt(dx * dx + dy * dy);
        const cursorDragHeight = Math.abs(Math.sin(cursorDragAngle)) * 8 + Math.abs(Math.cos(cursorDragAngle)) * rect.height;
        const cursorDragWidth = cursorDragDistance;
        styleRoot.style.cssText = `
  --cursor-drag-height: ${cursorDragHeight}px;
  --cursor-drag-width: ${cursorDragWidth}px;
  --cursor-drag-angle: ${cursorDragAngle}rad;
  --cursor-height: ${rect.height}px;
  --cursor-x1: ${this.lastPos.x}px;
  --cursor-y1src: ${this.lastPos.y}px;
  --cursor-x2: ${rect.x}px;
  --cursor-y2src: ${rect.y}px;
  --cursor-offset-y: ${0}px;
  --cursor-visibility: visible;
`;
        if (noAnimate) {
          this.lastPos = rect;
          return;
        }
        aw.requestAnimationFrame((time) => {
          this.cursorElement.className = `x-cursor x-cursor${this.styleCount}`;
          this.lastPos = rect;
        });
      } catch (ex) {
        console.log(ex);
      }
    };
    const supportVIMMode = true;
    const eventNames = ["keydown", "mousedown", "touchend", ...supportVIMMode ? ["keyup", "mouseup", "touchstart"] : []];
    for (const event of eventNames) {
      registerDomEvent(aw, event, (ev) => {
        moveCursor(ev);
      });
    }
    let triggered = false;
    const applyWheelScroll = (last) => {
      if (!triggered) {
        requestAnimationFrame(() => {
          if (datumElement) {
            try {
              const curTop = datumElement.getBoundingClientRect().top;
              const diff = curTop - datumTop;
              styleRoot.style.setProperty("--cursor-offset-y", `${diff}px`);
              if (last === false || last != diff) {
                requestAnimationFrame(() => applyWheelScroll(diff));
              } else if (last == diff) {
                moveCursor(void 0, true);
              }
            } catch (ex) {
              console.log(ex);
            }
          }
          triggered = false;
        });
        triggered = true;
      }
    };
    registerDomEvent(aw, "wheel", (e) => {
      applyWheelScroll(false);
    });
  }
  unload() {
    if (this.wrapperElement) {
      const doc = this.wrapperElement.doc;
      if (doc) {
        doc.body.removeChild(this.wrapperElement);
        this.wrapperElement = null;
      }
    }
  }
};
var NinjaCursorPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.Cursors = [];
  }
  async onload() {
    await this.loadSettings();
    this.registerEvent(this.app.workspace.on("window-open", (win) => {
      console.log("Open by window-open");
      const exist = this.Cursors.find((e) => e.bufferedWindow == win.win);
      if (!exist) {
        const w2 = new NinjaCursorForWindow(this, win.win, win.doc, this.registerDomEvent.bind(this));
        this.Cursors.push(w2);
      }
    }));
    this.registerEvent(this.app.workspace.on("window-close", (win) => {
      const target = this.Cursors.find((e) => e.bufferedWindow == win.win);
      if (target) {
        target.unload();
        this.Cursors.remove(target);
      }
    }));
    console.log("Open by init");
    const w = new NinjaCursorForWindow(this, window, document, this.registerDomEvent.bind(this));
    this.Cursors.push(w);
    this.addSettingTab(new ObsidianLiveSyncSettingTab(this.app, this));
  }
  onunload() {
    for (const v of this.Cursors) {
      v.unload();
    }
  }
  async loadSettings() {
    const settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.settings = settings;
  }
  async saveSettings() {
    const settings = { ...this.settings };
    await this.saveData(settings);
  }
};
var ObsidianLiveSyncSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.selectedScreen = "";
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Settings for Ninja-cursor" });
    containerEl.createEl("h3", { text: "React to interactions on limited elements" });
    containerEl.createDiv("", (el) => {
      el.textContent = "If nothing is configured, react to all.";
    });
    new import_obsidian.Setting(containerEl).setName("React to editor-ish elements").addToggle((toggle) => toggle.setValue(this.plugin.settings.reactToContentEditable).onChange(async (value) => {
      this.plugin.settings.reactToContentEditable = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("React to plain-text elements").addToggle((toggle) => toggle.setValue(this.plugin.settings.reactToInputElement).onChange(async (value) => {
      this.plugin.settings.reactToInputElement = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("React to the editor which in a vim-mode").addToggle((toggle) => toggle.setValue(this.plugin.settings.reactToVimMode).onChange(async (value) => {
      this.plugin.settings.reactToVimMode = value;
      await this.plugin.saveSettings();
    }));
  }
};
var DEFAULT_SETTINGS = {
  reactToContentEditable: false,
  reactToVimMode: false,
  reactToInputElement: false
};