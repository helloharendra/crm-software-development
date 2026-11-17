import { CalendarClock, IndianRupee, Percent, Phone, Plus, Target, Trophy, Video, Mail } from 'lucide-react'
import { Badge, Card, Hero, HeroStat, Person, Progress, StatCard, inr } from '../components/ui'
import { BarsChart, DonutChart } from '../components/Charts'
import { useContact } from '../components/ContactModal'
import { followUps, sales, sources, team } from '../data'

const typeIcon = { Call: Phone, Demo: Video, Email: Mail }

export default function Dashboard() {
  const { openContact } = useContact()
  return (
    <>
      <Hero
        eyebrow="Sales cockpit"
        title="You're 120% to target this month 🎯"
        subtitle="36 deals closed so far in November. 3 follow-ups are scheduled for today."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="Pipeline value" value="₹1.2Cr" /><HeroStat label="Win rate" value="34%" /></div>}
      >
        <button onClick={() => openContact('Add Lead')} className="btn bg-white text-brand-700 hover:bg-brand-50"><Plus className="h-4 w-4" /> Add lead</button>
      </Hero>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Revenue won (Nov)" value="₹78.6L" delta="22.4%" icon={IndianRupee} />
        <StatCard label="New leads" value="248" delta="14.1%" icon={Target} tone="sky" />
        <StatCard label="Conversion rate" value="18.6%" delta="2.3%" icon={Percent} tone="emerald" />
        <StatCard label="Avg. deal cycle" value="21 days" delta="-3 days" icon={CalendarClock} tone="amber" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Deals won vs target" subtitle="Last 6 months" className="xl:col-span-2">
          <BarsChart data={sales} series={[{ key: 'won', name: 'Won' }, { key: 'target', name: 'Target' }]} />
        </Card>
        <Card title="Lead sources">
          <DonutChart data={sources} centerValue="248" centerLabel="Leads this month" />
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Leaderboard" subtitle="Quota attainment this quarter" className="xl:col-span-2" action={<Trophy className="h-5 w-5 text-amber-500" />}>
          <div className="space-y-5">
            {team.map((t, i) => (
              <div key={t.name} className="flex items-center gap-4">
                <span className="w-5 text-sm font-bold text-slate-400">#{i + 1}</span>
                <div className="w-48"><Person name={t.name} sub={`${t.deals} deals · ${inr(t.revenue)}`} /></div>
                <div className="flex-1"><Progress value={t.quota} tone={t.quota > 75 ? 'green' : t.quota > 55 ? 'brand' : 'amber'} /></div>
                <span className="w-12 text-right text-sm font-semibold text-slate-700">{t.quota}%</span>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Today's follow-ups">
          <ul className="space-y-3">
            {followUps.map((f) => {
              const Icon = typeIcon[f.type]
              return (
                <li key={f.who} className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-brand-200 hover:bg-brand-50/40">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></div>
                  <div className="flex-1 text-sm">
                    <p className="font-semibold text-slate-800">{f.who}</p>
                    <p className="text-xs text-slate-400">{f.company}</p>
                  </div>
                  <Badge tone="brand" dot={false}>{f.time}</Badge>
                </li>
              )
            })}
          </ul>
        </Card>
      </div>
    </>
  )
}
