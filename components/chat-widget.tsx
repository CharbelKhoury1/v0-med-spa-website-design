"use client"

import { useEffect } from "react"

/**
 * AI Chat Widget Component
 * Integrates the VoiceGlow (VG) agent into the website.
 * 
 * To avoid display and CSS issues:
 * 1. Initialized in a useEffect hook to ensure it only runs on the client.
 * 2. Positions the container explicitly to avoid layout shifts.
 */
export function ChatWidget() {
  useEffect(() => {
    // Configure VoiceGlow Agent
    window.VG_CONFIG = {
      ID: "osFN4Fpizkx4bMmAHL8m",
      region: 'eu',
      render: 'bottom-right',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"
      ],
      // Optional: Add user data if needed here
    }

    // Load VoiceGlow Bundle
    const script = document.createElement("script")
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"
    script.defer = true
    
    document.body.appendChild(script)

    // Cleanup script on unmount if necessary
    return () => {
      if (document.body.contains(script)) {
        // We typically don't remove chat scripts as they might leave orphans,
        // but for a clean SPA experience we could.
        // document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div 
      id="VG_OVERLAY_CONTAINER" 
      style={{ 
        width: 0, 
        height: 0, 
        position: 'fixed', 
        bottom: 0, 
        right: 0, 
        zIndex: 9999 
      }}
    >
      {/* The chatbot will be rendered inside this container or relative to it */}
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    VG_CONFIG: any
  }
}
