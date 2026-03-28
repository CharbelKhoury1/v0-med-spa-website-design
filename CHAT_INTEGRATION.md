# VoiceGlow Chat Agent Integration Documentation

This document describes how the AI Medical Concierge (VoiceGlow Agent) is integrated into the Verdun Clinic website and how to maintain its styling.

## 1. Integration Structure
The integration consists of three main parts:
- **Component**: [chat-widget.tsx](file:///c%3A/Users/ckhou/Desktop/Aesthetic%20Clinic%20Prototype/v0-med-spa-website-design/components/chat-widget.tsx) - The React component that initializes the widget.
- **External Script**: Loaded from VoiceGlow's CDN via `vg_bundle.js`.
- **Internal Styling**: [chat-internal.css](file:///c%3A/Users/ckhou/Desktop/Aesthetic%20Clinic%20Prototype/v0-med-spa-website-design/public/chat-internal.css) - Custom CSS injected into the widget's protected container.

## 2. Configuration (`VG_CONFIG`)
The widget is configured in `useEffect` within [chat-widget.tsx](file:///c%3A/Users/ckhou/Desktop/Aesthetic%20Clinic%20Prototype/v0-med-spa-website-design/components/chat-widget.tsx).
- **ID**: `osFN4Fpizkx4bMmAHL8m` (Agent ID)
- **Region**: `eu`
- **Render**: `bottom-right`
- **Stylesheets**: 
  - `https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css` (Base styles)
  - `/chat-internal.css` (Our custom fix for transparency and shape)

## 3. Styling & Maintenance
Because the widget renders in its own environment (Shadow DOM), global website CSS often fails to affect it. To change its appearance, you must edit [chat-internal.css](file:///c%3A/Users/ckhou/Desktop/Aesthetic%20Clinic%20Prototype/v0-med-spa-website-design/public/chat-internal.css).

### Key CSS Selectors in `chat-internal.css`:
- **Background Transparency**: Fixed by targeting `.vg-render-container [class*="chat-window"]` and `.vg-render-container .vg-bg-background` with `background-color: white !important;`.
- **Circular Bubble**: Enforced by targeting `.vg-render-container [class*="bubble"]` with `border-radius: 50% !important;`.
- **Carousel Images**: Standardized via `.vg-card-image` in [globals.css](file:///c%3A/Users/ckhou/Desktop/Aesthetic%20Clinic%20Prototype/v0-med-spa-website-design/app/globals.css).

## 4. Troubleshooting
If the widget background becomes transparent again:
1. Ensure `chat-internal.css` exists in the `public/` folder.
2. Check that [chat-widget.tsx](file:///c%3A/Users/ckhou/Desktop/Aesthetic%20Clinic%20Prototype/v0-med-spa-website-design/components/chat-widget.tsx) is correctly passing the full URL to the `stylesheets` array.
3. Verify that `!important` is used in the CSS rules to override VoiceGlow's default theme settings.
