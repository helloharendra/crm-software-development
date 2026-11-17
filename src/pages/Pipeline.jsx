import { useState } from 'react'
import { ChevronLeft, ChevronRight, Clock, Plus } from 'lucide-react'
import { Avatar, PageHeader, inr } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { deals as initial, stages } from '../data'

const stageColor = {
  New: 'bg-slate-400', Qualified: 'bg-sky-500', Proposal: 'bg-amber-500', Negotiation: 'bg-brand-500', Won: 'bg-emerald-500',
}

export default function Pipeline() {
  const { openContact } = useContact()
  const [deals, setDeals] = useState(initial)

  const move = (id, dir) =>
    setDeals((ds) => ds.map((d) => {
      if (d.id !== id) return d
      const i = Math.min(stages.length - 1, Math.max(0, stages.indexOf(d.stage) + dir))
      return { ...d, stage: stages[i] }
    }))

  return (
    <>
      <PageHeader
        title="Deal pipeline"
        subtitle="Move deals between stages with the arrows. The full version adds drag-and-drop, automations and forecasting."
        actions={<button onClick={() => openContact('Create Deal')} className="btn-primary"><Plus className="h-4 w-4" /> New deal</button>}
      />
      <div className="scrollbar-thin -mx-4 flex gap-4 overflow-x-auto px-4 pb-4">
        {stages.map((stage) => {
          const list = deals.filter((d) => d.stage === stage)
          const total = list.reduce((s, d) => s + d.value, 0)
          return (
            <div key={stage} className="w-72 shrink-0 animate-fade-up">
              <div className="mb-3 flex items-center gap-2 px-1">
                <span className={`h-2.5 w-2.5 rounded-full ${stageColor[stage]}`} />
                <h3 className="text-sm font-semibold text-slate-800">{stage}</h3>
                <span className="rounded-md bg-slate-200/70 px-1.5 text-xs font-semibold text-slate-600">{list.length}</span>
                <span className="ml-auto text-xs font-semibold text-slate-500">{inr(total)}</span>
              </div>
              <div className="min-h-[420px] space-y-3 rounded-2xl bg-slate-100/70 p-2.5">
                {list.map((d) => (
                  <div key={d.id} className="card group p-4 transition hover:-translate-y-0.5 hover:shadow-lg">
                    <p className="text-xs font-medium text-slate-400">{d.company}</p>
                    <p className="mt-1 font-semibold leading-snug text-slate-800">{d.title}</p>
                    <p className="mt-3 text-lg font-bold text-slate-900">{inr(d.value)}</p>
                    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                      <div className="flex items-center gap-2">
                        <Avatar name={d.owner} size="sm" />
                        {d.days > 0 && <span className="inline-flex items-center gap-1 text-xs text-slate-400"><Clock className="h-3.5 w-3.5" />{d.days}d</span>}
                      </div>
                      <div className="flex gap-1 opacity-60 transition group-hover:opacity-100">
                        <button onClick={() => move(d.id, -1)} className="rounded-lg border border-slate-200 p-1 hover:bg-slate-50"><ChevronLeft className="h-4 w-4" /></button>
                        <button onClick={() => move(d.id, 1)} className="rounded-lg border border-slate-200 p-1 hover:bg-slate-50"><ChevronRight className="h-4 w-4" /></button>
                      </div>
                    </div>
                  </div>
                ))}
                {list.length === 0 && <p className="py-10 text-center text-xs text-slate-400">No deals in this stage</p>}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
