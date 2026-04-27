"use client";

import { useCallback, useRef } from 'react'
import Script from 'next/script'

export default function ContactTurnstile() {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  const cloudflareTurnstileSiteKey = '0x4AAAAAADEYPB8SBWwqGgzc';

  const mountTurnstile = useCallback(() => {
    if (!window.turnstile || !containerRef.current) return;

    if (widgetIdRef.current) {
      window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    containerRef.current.innerHTML = '';
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: cloudflareTurnstileSiteKey,
    });
  }, []);

  return (
    <>
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={mountTurnstile}
      />
      <div ref={containerRef} />
    </>
  );
}