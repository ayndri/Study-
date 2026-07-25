"use client";

import { useEffect, useMemo, useState } from "react";
import { get, set } from "@/lib/store";

type Week = { label: string; focus: string; tasks: string[] };
type Plan = { weeks: Week[]; tips: string[] };
type Saved = { plan: Plan; meta: { target: string; current: string; testDate: string; hours: number; focus: string[] } };

const FOCUS = ["Listening", "Structure", "Reading", "Writing / Esai", "Vocabulary"];

export default function StudyPlan() {
  const [current, setCurrent] = useState("");
  const [target, setTarget] = useState("550");
  const [testDate, setTestDate] = useState("");
  const [hours, setHours] = useState(8);
  const [focus, setFocus] = useState<string[]>(["Structure", "Reading"]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [saved, setSaved] = useState<Saved | null>(null);
  const [checks, setChecks] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const s = get<Saved | null>("studyPlan", null);
    if (s) {
      setSaved(s);
      if (s.meta) {
        setCurrent(s.meta.current || "");
        setTarget(s.meta.target || "550");
        setTestDate(s.meta.testDate || "");
        setHours(s.meta.hours || 8);
        setFocus(s.meta.focus || []);
      }
    }
    setChecks(get<Record<string, boolean>>("studyPlanChecks", {}));
  }, []);

  const daysLeft = useMemo(() => {
    if (!testDate) return null;
    const t = new Date(testDate + "T00:00:00").getTime();
    if (isNaN(t)) return null;
    return Math.ceil((t - Date.now()) / 86400000);
  }, [testDate]);

  function toggleFocus(f: string) {
    setFocus((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  }

  function weeksUntil(): number {
    if (daysLeft && daysLeft > 0) return Math.min(Math.max(Math.ceil(daysLeft / 7), 1), 16);
    return 8;
  }

  async function generate() {
    setErr(null);
    setLoading(true);
    try {
      const res = await fetch("/api/rencana", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentScore: current,
          targetScore: target,
          testDate,
          hoursPerWeek: hours,
          weeks: weeksUntil(),
          focus,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) setErr(data.error || "Gagal menyusun rencana.");
      else {
        const s: Saved = { plan: data.plan as Plan, meta: { target, current, testDate, hours, focus } };
        setSaved(s);
        set("studyPlan", s);
        setChecks({});
        set("studyPlanChecks", {});
      }
    } catch {
      setErr("Tidak dapat menghubungi server.");
    } finally {
      setLoading(false);
    }
  }

  function toggleTask(key: string) {
    setChecks((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      set("studyPlanChecks", next);
      return next;
    });
  }

  const totalTasks = saved ? saved.plan.weeks.reduce((n, w) => n + w.tasks.length, 0) : 0;
  const doneTasks = saved
    ? saved.plan.weeks.reduce((n, w, wi) => n + w.tasks.filter((_, ti) => checks[`w${wi}-t${ti}`]).length, 0)
    : 0;

  return (
    <div>
      <div className="card pad">
        <div className="eyebrow">Data kamu</div>
        <div className="grid g2" style={{ gap: 14, marginTop: 8 }}>
          <div>
            <label className="auth-label">Skor TOEFL ITP sekarang (opsional)</label>
            <input className="auth-input" placeholder="mis. 480" value={current} onChange={(e) => setCurrent(e.target.value)} />
          </div>
          <div>
            <label className="auth-label">Target skor</label>
            <input className="auth-input" placeholder="mis. 550" value={target} onChange={(e) => setTarget(e.target.value)} />
          </div>
          <div>
            <label className="auth-label">Perkiraan tanggal tes</label>
            <input className="auth-input" type="date" value={testDate} onChange={(e) => setTestDate(e.target.value)} />
          </div>
          <div>
            <label className="auth-label">Jam belajar / minggu: {hours}</label>
            <input type="range" min={2} max={30} value={hours} onChange={(e) => setHours(Number(e.target.value))} style={{ width: "100%", marginTop: 10 }} />
          </div>
        </div>

        <label className="auth-label" style={{ marginTop: 14 }}>Fokus (pilih beberapa)</label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
          {FOCUS.map((f) => (
            <button key={f} className={"btn sm " + (focus.includes(f) ? "gold" : "ghost")} onClick={() => toggleFocus(f)}>
              {f}
            </button>
          ))}
        </div>

        {daysLeft !== null && (
          <div className="explain" style={{ marginTop: 14, borderLeftColor: daysLeft > 0 ? "var(--teal)" : "var(--bad)" }}>
            {daysLeft > 0 ? <><b>{daysLeft} hari</b> lagi menuju tanggal tes (~{weeksUntil()} minggu).</> : <b>Tanggal tes sudah lewat — perbarui tanggalnya.</b>}
          </div>
        )}

        <button className="btn gold" style={{ marginTop: 16 }} onClick={generate} disabled={loading}>
          {loading ? "AI menyusun rencana…" : saved ? "↻ Susun ulang rencana" : "✦ Susun rencana belajar"}
        </button>
        {err && <div className="explain" style={{ borderLeftColor: "var(--bad)", marginTop: 12 }}><b>Info:</b> {err}</div>}
      </div>

      {saved && (
        <div style={{ marginTop: 20 }}>
          <div className="card pad" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div>
              <div className="eyebrow">Progres rencana</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, marginTop: 4 }}>
                {doneTasks} / {totalTasks} tugas selesai
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 160 }}>
              <div className="bar"><i style={{ width: `${totalTasks ? (doneTasks / totalTasks) * 100 : 0}%` }} /></div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {saved.plan.weeks.map((w, wi) => (
              <div key={wi} className="card pad">
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 700 }}>{w.label}</h3>
                  {w.focus && <span className="pill teal">{w.focus}</span>}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
                  {w.tasks.map((t, ti) => {
                    const key = `w${wi}-t${ti}`;
                    const on = !!checks[key];
                    return (
                      <label key={ti} className="plan-task" style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer" }}>
                        <input type="checkbox" checked={on} onChange={() => toggleTask(key)} style={{ marginTop: 3 }} />
                        <span style={{ textDecoration: on ? "line-through" : "none", color: on ? "var(--muted)" : "var(--ink)", fontSize: 14.5, lineHeight: 1.6 }}>{t}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {saved.plan.tips.length > 0 && (
            <div className="card pad" style={{ marginTop: 16 }}>
              <div className="eyebrow">Tips</div>
              <ul className="tips" style={{ marginTop: 10 }}>
                {saved.plan.tips.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
