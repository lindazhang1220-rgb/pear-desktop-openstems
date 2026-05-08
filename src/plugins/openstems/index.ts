import { createPlugin } from '@/utils';

import type { MusicPlayer } from '@/types/music-player';
import type { RendererContext } from '@/types/contexts';

type OpenStemsConfig = {
  enabled: boolean;
};

type StemRow = {
  label: string;
  value: number;
};

type OpenStemsRenderer = {
  button: HTMLButtonElement | null;
  panel: HTMLDivElement | null;
  backdrop: HTMLDivElement | null;
  open: boolean;
  mode: 'realtime' | 'karaoke' | '8stems';
  stemMix: boolean;
  target: 'local' | 'daw' | 'obs';
  rows: StemRow[];
  keyShift: number;
  createButton: () => HTMLButtonElement;
  createPanel: () => HTMLDivElement;
  setOpen: (open: boolean) => void;
  renderPanel: () => void;
  stop: () => void;
  onPlayerApiReady: (
    api: MusicPlayer,
    context: RendererContext<OpenStemsConfig>,
  ) => void;
};

const stylesId = 'openstems-style';
const buttonId = 'openstems-button';
const panelId = 'openstems-panel';
const backdropId = 'openstems-backdrop';

const layouts: Record<OpenStemsRenderer['mode'], StemRow[]> = {
  realtime: [
    { label: 'Vocals', value: 100 },
    { label: 'Bass', value: 100 },
    { label: 'Drums', value: 100 },
    { label: 'Piano', value: 100 },
    { label: 'Others', value: 100 },
  ],
  karaoke: [
    { label: 'Lead Vocal', value: 100 },
    { label: 'Accompaniment', value: 100 },
  ],
  '8stems': [
    { label: 'Lead Vocal', value: 100 },
    { label: 'Backing Vocal', value: 100 },
    { label: 'Guitar', value: 100 },
    { label: 'Bass', value: 100 },
    { label: 'Drums', value: 100 },
    { label: 'Piano', value: 100 },
    { label: 'Wind', value: 100 },
    { label: 'Others', value: 100 },
  ],
};

const injectStyles = () => {
  if (document.getElementById(stylesId)) return;

  const style = document.createElement('style');
  style.id = stylesId;
  style.textContent = `
    #${buttonId} {
      align-items: center;
      background: transparent;
      border: 0;
      color: var(--yt-spec-text-primary, #fff);
      cursor: pointer;
      display: inline-flex;
      height: 40px;
      justify-content: center;
      margin: 0 4px;
      padding: 0;
      width: 40px;
    }

    #${buttonId} svg {
      display: block;
      height: 24px;
      width: 24px;
    }

    #${backdropId} {
      background: rgba(0, 0, 0, 0.12);
      inset: 0;
      opacity: 0;
      pointer-events: none;
      position: fixed;
      transition: opacity 160ms ease;
      z-index: 9998;
    }

    #${backdropId}[data-open='true'] {
      opacity: 1;
      pointer-events: auto;
    }

    #${panelId} {
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0)),
        rgba(18, 18, 18, 0.98);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      box-shadow: 0 24px 72px rgba(0, 0, 0, 0.48);
      box-sizing: border-box;
      color: rgba(255, 255, 255, 0.94);
      display: flex;
      flex-direction: column;
      font: 500 13px/1.35 Roboto, Arial, sans-serif;
      max-height: calc(100vh - 24px);
      overflow: hidden;
      position: fixed;
      right: 12px;
      top: 12px;
      transform: translateX(calc(100% + 24px));
      transition: transform 180ms cubic-bezier(0.2, 0, 0, 1);
      width: min(412px, calc(100vw - 24px));
      z-index: 9999;
    }

    #${panelId}[data-open='true'] {
      transform: translateX(0);
    }

    .openstems-header {
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      display: flex;
      justify-content: space-between;
      min-height: 76px;
      padding: 0 20px;
    }

    .openstems-brand {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: 0;
    }

    .openstems-close {
      align-items: center;
      background: transparent;
      border: 0;
      color: rgba(255, 255, 255, 0.72);
      cursor: pointer;
      display: inline-flex;
      height: 32px;
      justify-content: center;
      padding: 0;
      width: 32px;
    }

    .openstems-body {
      display: flex;
      flex-direction: column;
      gap: 22px;
      overflow-y: auto;
      padding: 20px;
    }

    .openstems-now {
      align-items: center;
      display: flex;
      gap: 12px;
      justify-content: space-between;
    }

    .openstems-track {
      min-width: 0;
    }

    .openstems-title {
      font-size: 18px;
      font-weight: 800;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .openstems-artist {
      color: rgba(255, 255, 255, 0.56);
      font-size: 13px;
      margin-top: 2px;
    }

    .openstems-switch {
      align-items: center;
      display: inline-flex;
      gap: 8px;
      white-space: nowrap;
    }

    .openstems-toggle {
      background: rgba(255, 255, 255, 0.18);
      border: 0;
      border-radius: 999px;
      cursor: pointer;
      height: 22px;
      padding: 2px;
      position: relative;
      width: 42px;
    }

    .openstems-toggle::after {
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      content: '';
      display: block;
      height: 18px;
      transform: translateX(0);
      transition: transform 140ms ease;
      width: 18px;
    }

    .openstems-toggle[aria-pressed='true'] {
      background: #3ea6ff;
    }

    .openstems-toggle[aria-pressed='true']::after {
      transform: translateX(20px);
    }

    .openstems-key {
      display: grid;
      gap: 10px;
    }

    .openstems-kv {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }

    .openstems-label {
      color: rgba(255, 255, 255, 0.48);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .openstems-value {
      align-items: center;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      display: inline-flex;
      font-weight: 800;
      height: 30px;
      justify-content: center;
      min-width: 44px;
    }

    .openstems-range {
      accent-color: #fff;
      width: 100%;
    }

    .openstems-tabs {
      align-items: center;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .openstems-tab {
      background: transparent;
      border: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.14);
      color: rgba(255, 255, 255, 0.56);
      cursor: pointer;
      font: inherit;
      font-weight: 800;
      height: 36px;
      padding: 0 4px;
    }

    .openstems-tab[aria-selected='true'] {
      border-bottom-color: #fff;
      color: #fff;
    }

    .openstems-section {
      display: grid;
      gap: 10px;
    }

    .openstems-section-head {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }

    .openstems-reset {
      background: transparent;
      border: 0;
      color: rgba(255, 255, 255, 0.45);
      cursor: pointer;
      font: inherit;
      font-size: 12px;
      font-weight: 700;
      padding: 0;
    }

    .openstems-row {
      align-items: center;
      display: grid;
      gap: 10px;
      grid-template-columns: 110px minmax(0, 1fr) 42px 46px 46px;
      min-height: 42px;
    }

    .openstems-row-label {
      font-size: 13px;
      font-weight: 800;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .openstems-percent {
      color: rgba(255, 255, 255, 0.58);
      font-size: 12px;
      text-align: right;
    }

    .openstems-mini {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      color: rgba(255, 255, 255, 0.62);
      cursor: pointer;
      font: inherit;
      font-size: 11px;
      font-weight: 800;
      height: 30px;
    }

    .openstems-send-status {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      color: rgba(255, 255, 255, 0.48);
      font-size: 12px;
      font-weight: 700;
      margin-top: 4px;
      padding-top: 18px;
      text-align: center;
    }

    .openstems-actions {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .openstems-send {
      align-items: center;
      background: rgba(255, 255, 255, 0.025);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 4px;
      color: rgba(255, 255, 255, 0.55);
      cursor: pointer;
      display: inline-flex;
      font: inherit;
      font-size: 12px;
      font-weight: 800;
      gap: 7px;
      height: 38px;
      justify-content: center;
    }

    .openstems-send[data-active='true'] {
      background: rgba(255, 0, 51, 0.16);
      border-color: rgba(255, 255, 255, 0.42);
      color: #fff;
    }

    .openstems-dot {
      background: rgba(255, 255, 255, 0.28);
      border-radius: 50%;
      height: 8px;
      width: 8px;
    }

    .openstems-send[data-active='true'] .openstems-dot {
      background: #ff0033;
      box-shadow: 0 0 10px rgba(255, 0, 51, 0.62);
    }

    @media (max-width: 520px) {
      #${panelId} {
        border-radius: 0;
        inset: 0;
        max-height: none;
        width: 100vw;
      }

      .openstems-row {
        grid-template-columns: 88px minmax(0, 1fr) 38px;
      }

      .openstems-mini {
        display: none;
      }
    }
  `;
  document.head.append(style);
};

const createIcon = () => `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" fill="#ff0033"></circle>
    <rect x="7.5" y="8" width="3" height="8" rx="1.5" fill="#fff"></rect>
    <rect x="13.5" y="8" width="3" height="8" rx="1.5" fill="#fff"></rect>
  </svg>
`;

const formatKey = (value: number) => (value > 0 ? `+${value}` : String(value));

export default createPlugin<
  unknown,
  unknown,
  OpenStemsRenderer,
  OpenStemsConfig
>({
  name: () => 'OpenStems',
  description: () => 'Adds the OpenStems control surface to Pear.',
  restartNeeded: false,
  config: {
    enabled: true,
  },
  renderer: {
    button: null,
    panel: null,
    backdrop: null,
    open: false,
    mode: 'realtime',
    stemMix: true,
    target: 'local',
    rows: layouts.realtime.map((row) => ({ ...row })),
    keyShift: 0,

    createButton() {
      const button = document.createElement('button');
      button.id = buttonId;
      button.type = 'button';
      button.title = 'OpenStems';
      button.setAttribute('aria-label', 'Open OpenStems');
      button.innerHTML = createIcon();
      button.addEventListener('click', () => this.setOpen(!this.open));
      return button;
    },

    createPanel() {
      const backdrop = document.createElement('div');
      backdrop.id = backdropId;
      backdrop.addEventListener('click', () => this.setOpen(false));
      document.body.append(backdrop);
      this.backdrop = backdrop;

      const panel = document.createElement('div');
      panel.id = panelId;
      panel.setAttribute('role', 'dialog');
      panel.setAttribute('aria-label', 'OpenStems');
      document.body.append(panel);
      return panel;
    },

    setOpen(open) {
      this.open = open;
      this.panel?.setAttribute('data-open', String(open));
      this.backdrop?.setAttribute('data-open', String(open));
      this.button?.setAttribute('aria-expanded', String(open));
    },

    renderPanel() {
      if (!this.panel) return;

      const rows = this.rows.map((row, index) => `
        <div class="openstems-row">
          <div class="openstems-row-label">${row.label}</div>
          <input class="openstems-range" type="range" min="0" max="100" value="${row.value}" data-row="${index}">
          <div class="openstems-percent">${row.value}%</div>
          <button class="openstems-mini" type="button">Solo</button>
          <button class="openstems-mini" type="button">Mute</button>
        </div>
      `).join('');

      this.panel.innerHTML = `
        <div class="openstems-header">
          <div class="openstems-brand">OpenStems</div>
          <button class="openstems-close" type="button" aria-label="Close OpenStems">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
        <div class="openstems-body">
          <section class="openstems-now">
            <div class="openstems-track">
              <div class="openstems-title">Current track</div>
              <div class="openstems-artist">Pear OpenStems</div>
            </div>
            <div class="openstems-switch">
              <div>
                <div class="openstems-title" style="font-size: 16px;">Stem Mix</div>
                <div class="openstems-artist">${this.stemMix ? 'On' : 'Original'}</div>
              </div>
              <button class="openstems-toggle" type="button" aria-pressed="${this.stemMix}" aria-label="Toggle Stem Mix"></button>
            </div>
          </section>

          <section class="openstems-key">
            <div class="openstems-kv">
              <div class="openstems-label">Key</div>
              <div class="openstems-value">${formatKey(this.keyShift)}</div>
            </div>
            <input class="openstems-range" type="range" min="-7" max="6" value="${this.keyShift}" data-key-shift="true" aria-label="Key shift">
          </section>

          <nav class="openstems-tabs" aria-label="OpenStems modes">
            <button class="openstems-tab" type="button" data-mode="realtime" aria-selected="${this.mode === 'realtime'}">Realtime</button>
            <button class="openstems-tab" type="button" data-mode="karaoke" aria-selected="${this.mode === 'karaoke'}">Karaoke <span class="openstems-value" style="height: 18px; min-width: 28px; font-size: 10px;">HQ</span></button>
            <button class="openstems-tab" type="button" data-mode="8stems" aria-selected="${this.mode === '8stems'}">8 Stems <span class="openstems-value" style="height: 18px; min-width: 28px; font-size: 10px;">HQ</span></button>
          </nav>

          <section class="openstems-section">
            <div class="openstems-section-head">
              <div class="openstems-label">Mixer</div>
              <button class="openstems-reset" type="button">Reset</button>
            </div>
            ${rows}
          </section>

          <section class="openstems-section">
            <div class="openstems-send-status">${this.target === 'local' ? 'Ready to send audio' : this.target === 'daw' ? 'Sending audio to DAW' : 'Sending audio to OBS'}</div>
            <div class="openstems-actions">
              <button class="openstems-send" type="button" data-send-target="daw" data-active="${this.target === 'daw'}">
                <span class="openstems-dot" aria-hidden="true"></span>
                Send to Daw
              </button>
              <button class="openstems-send" type="button" data-send-target="obs" data-active="${this.target === 'obs'}">
                <span class="openstems-dot" aria-hidden="true"></span>
                Send to OBS
              </button>
            </div>
          </section>
        </div>
      `;

      this.panel
        .querySelector<HTMLButtonElement>('.openstems-close')
        ?.addEventListener('click', () => this.setOpen(false));

      this.panel
        .querySelector<HTMLButtonElement>('.openstems-toggle')
        ?.addEventListener('click', () => {
          this.stemMix = !this.stemMix;
          this.renderPanel();
        });

      this.panel
        .querySelector<HTMLInputElement>('[data-key-shift="true"]')
        ?.addEventListener('input', (event) => {
          this.keyShift = Number((event.currentTarget as HTMLInputElement).value);
          this.renderPanel();
        });

      this.panel.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((tab) => {
        tab.addEventListener('click', () => {
          const nextMode = tab.dataset.mode as OpenStemsRenderer['mode'];
          this.mode = nextMode;
          this.rows = layouts[nextMode].map((row) => ({ ...row }));
          this.renderPanel();
        });
      });

      this.panel.querySelectorAll<HTMLInputElement>('[data-row]').forEach((slider) => {
        slider.addEventListener('input', (event) => {
          const input = event.currentTarget as HTMLInputElement;
          const rowIndex = Number(input.dataset.row);
          this.rows[rowIndex].value = Number(input.value);
          this.renderPanel();
        });
      });

      this.panel
        .querySelector<HTMLButtonElement>('.openstems-reset')
        ?.addEventListener('click', () => {
          this.rows = layouts[this.mode].map((row) => ({ ...row }));
          this.keyShift = 0;
          this.renderPanel();
        });

      this.panel.querySelectorAll<HTMLButtonElement>('[data-send-target]').forEach((button) => {
        button.addEventListener('click', () => {
          const target = button.dataset.sendTarget === 'daw' ? 'daw' : 'obs';
          this.target = this.target === target ? 'local' : target;
          this.renderPanel();
        });
      });
    },

    onPlayerApiReady() {
      injectStyles();
      this.button = this.createButton();
      this.panel = this.createPanel();
      this.renderPanel();

      const mount = () => {
        const topRow = document.querySelector('.top-row-buttons.ytmusic-player');
        if (topRow && this.button && !document.getElementById(buttonId)) {
          topRow.prepend(this.button);
          return true;
        }
        return false;
      };

      if (!mount()) {
        const observer = new MutationObserver(() => {
          if (mount()) observer.disconnect();
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
    },

    stop() {
      this.button?.remove();
      this.panel?.remove();
      this.backdrop?.remove();
      this.button = null;
      this.panel = null;
      this.backdrop = null;
      this.open = false;
      document.getElementById(stylesId)?.remove();
    },
  },
});
