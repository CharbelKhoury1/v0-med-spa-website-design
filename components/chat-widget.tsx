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
    // Configure VoiceGlow Agent based on user snippet
    window.VG_CONFIG = {
      ID: "osFN4Fpizkx4bMmAHL8m", // YOUR AGENT ID 
      region: 'eu', // YOUR ACCOUNT REGION  
      render: 'bottom-right', // Widget position 
      stylesheets: [ 
          "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
          window.location.origin + "/chat-internal.css"
      ], 
    }

    // Load VoiceGlow Bundle exactly as provided in the snippet
    var VG_SCRIPT = document.createElement("script"); 
    VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"; 
    VG_SCRIPT.defer = true; // Remove 'defer' if you want widget to load faster (Will affect website loading) 
    document.body.appendChild(VG_SCRIPT); 

    // Cleanup script on unmount
    return () => {
      if (document.body.contains(VG_SCRIPT)) {
        document.body.removeChild(VG_SCRIPT);
      }
    }
  }, [])

  return (
    <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER"> 
        {/* Here is where renders the widget. */} 
    </div> 
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    VG_CONFIG: any
  }
}
