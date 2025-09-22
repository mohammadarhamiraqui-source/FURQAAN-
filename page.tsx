"use client";

import { useState } from "react";
import ConfettiCanvas from "./components/ConfettiCanvas";

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  function sendApology() {
    if (typeof window !== "undefined" && (window as any).spawnConfetti) {
      (window as any).spawnConfetti(36);
    }
    toast("Apology sent ✉️");
  }

  function sendMessage() {
    if (!message.trim()) {
      toast("Please type a short message.");
      return;
    }
    if (typeof window !== "undefined" && (window as any).spawnConfetti) {
      (window as any).spawnConfetti(28);
    }
    toast("Message sent — good luck!");
    setMessage("");
    setShowForm(false);
  }

  function toast(text: string, ms: number = 2200) {
    const t = document.createElement("div");
    t.textContent = text;
    Object.assign(t.style, {
      position: "fixed",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: "30px",
      background: "rgba(6,10,18,0.8)",
      color: "#fff",
      padding: "10px 16px",
      borderRadius: "10px",
      backdropFilter: "blur(4px)",
      zIndex: 10000,
      fontWeight: "600"
    });
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = "0"; }, ms - 300);
    setTimeout(() => { t.remove(); }, ms);
  }

  return (
    <>
      <ConfettiCanvas />
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "920px",
            background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(2,6,23,0.6)",
            padding: "32px",
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: "28px",
            alignItems: "center",
            border: "1px solid rgba(255,255,255,0.03)"
          }}
        >
          <div>
            <h1 style={{
              margin: "0 0 8px 0",
              fontSize: "36px",
              lineHeight: 1.05,
              letterSpacing: "-0.02em"
            }}>
              I’m sorry, KuchuPuchu 💌
            </h1>
            <p style={{
              margin: "0 0 18px 0",
              color: "var(--muted)",
              fontSize: "15px"
            }}>
              Sometimes words fall short — this little page is my way of saying it. Press the button to send a gentle apology card with a tiny animation.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button onClick={sendApology} style={{
                padding: "10px 16px",
                borderRadius: "10px",
                border: "0",
                cursor: "pointer",
                fontWeight: 600,
                background: "linear-gradient(90deg, var(--accent), #ff9aa2)",
                color: "#fff",
                boxShadow: "0 6px 18px rgba(255,107,129,0.12)"
              }}>
                Send apology • ✉️
              </button>
              <button onClick={() => setShowForm(true)} style={{
                padding: "10px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "transparent",
                color: "var(--muted)",
                fontWeight: 600,
                backdropFilter: "blur(4px)",
                cursor: "pointer"
              }}>
                Write a message
              </button>
            </div>

            {showForm && (
              <div style={{ marginTop: "18px" }}>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  style={{
                    width: "100%",
                    minHeight: "84px",
                    borderRadius: "10px",
                    padding: "12px",
                    border: "1px solid rgba(255,255,255,0.04)",
                    background: "transparent",
                    color: "inherit",
                    fontFamily: "inherit"
                  }}
                ></textarea>
                <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                  <button onClick={sendMessage} style={{
                    padding: "10px 16px",
                    borderRadius: "10px",
                    border: "0",
                    cursor: "pointer",
                    fontWeight: 600,
                    background: "linear-gradient(90deg, var(--accent), #ff9aa2)",
                    color: "#fff",
                    boxShadow: "0 6px 18px rgba(255,107,129,0.12)"
                  }}>Send</button>
                  <button onClick={() => setShowForm(false)} style={{
                    padding: "10px 16px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "transparent",
                    color: "var(--muted)",
                    fontWeight: 600,
                    backdropFilter: "blur(4px)",
                    cursor: "pointer"
                  }}>Cancel</button>
                </div>
              </div>
            )}

            <footer style={{ marginTop: "18px", color: "var(--muted)", fontSize: "13px", textAlign: "center" }}>
              Made with ❤️ — KuchuPuchu apology demo
            </footer>
          </div>

          <div style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
            borderRadius: "12px",
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <div style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              background: "conic-gradient(from 120deg, #ff9aa2, #ffd166, #ffd166, #ff9aa2)",
              display: "grid",
              placeItems: "center",
              fontSize: "40px",
              color: "#071028",
              fontWeight: "800",
              boxShadow: "0 8px 28px rgba(0,0,0,0.45), inset 0 -8px 30px rgba(255,255,255,0.06)",
              marginBottom: "16px"
            }}>
              KP
            </div>
            <div style={{ textAlign: "center", color: "var(--muted)", fontSize: "14px", maxWidth: "260px" }}>
              A small gesture can mean a lot. Let them know you care.
            </div>
            <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "10px" }}>
              Click “Send apology” to show confetti and a toast.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
