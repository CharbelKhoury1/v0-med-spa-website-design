"use client"

import { useEffect } from "react"
import Script from "next/script"

export function VoiceAgentWidget() {
  useEffect(() => {
    // 1. Set the configuration
    // @ts-ignore
    window.VG_CONFIG = {
      ID: "osFN4Fpizkx4bMmAHL8m",
      region: "eu",
      render: "bottom-right",
      stylesheets: ["https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"], 
    }

    // 2. Create the script loader exactly as in the inspiration
    const VG_SCRIPT = document.createElement("script")
    VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"
    VG_SCRIPT.defer = true
    document.body.appendChild(VG_SCRIPT)

    return () => {
      if (document.body.contains(VG_SCRIPT)) {
        document.body.removeChild(VG_SCRIPT)
      }
    }
  }, [])

  return (
    <div 
      style={{ width: 0, height: 0 }} 
      id="VG_OVERLAY_CONTAINER" 
    />
  )
}
