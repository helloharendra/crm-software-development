import { useState } from 'react'
import { Download, Filter, Mail, MessageCircle, Phone, Plus } from 'lucide-react'
import { Badge, Card, DataTable, PageHeader, Person, Segmented } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { leads } from '../data'

const tone = { Hot: 'red', Warm: 'amber', Cold: 'blue' }

export default function Leads() {
  const { openContact } = useContact()
  const [status, setStatus] = useState('All')
  const rows = leads.filter((l) => status === 'All' || l.status === status)

  return (
    <>
      <PageHeader
        title="Leads"
        subtitle="AI lead scoring ranks who to call first."
        actions={<>
          <button onClick={() => openContact('Import / Export Leads')} className="btn-ghost"><Download className="h-4 w-4" /> Import</button>
          <button onClick={() => openContact('Add Lead')} className="btn-primary"><Plus className="h-4 w-4" /> Add lead</button>
        </>}
      />
      <Card bodyClass="" title={`${rows.length} leads`} action={<div className="flex items-center gap-2"><Filter className="h-4 w-4 text-slate-400" /><Segmented options={['All', 'Hot', 'Warm', 'Cold']} value={status} onChange={setStatus} /></div>}>
        <DataTable
          rows={rows}
          columns={[
            { key: 'name', label: 'Lead', render: (r) => <Person name={r.name} sub={r.email} /> },
            { key: 'company', label: 'Company', render: (r) => <span className="font-medium text-slate-700">{r.company}</span> },
            { key: 'source', label: 'Source' },
            {
              key: 'score', label: 'Score', render: (r) => (
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8">
                    <svg viewBox="0 0 36 36" className="h-8 w-8 -rotate-90">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                      <circle cx="18" cy="18" r="15" fill="none" strokeWidth="4" strokeLinecap="round" className="stroke-brand-500" strokeDasharray={`${(r.score / 100) * 94} 94`} />
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-800">{r.score}</span>
                </div>
              ),
            },
            { key: 'status', label: 'Status', render: (r) => <Badge tone={tone[r.status]}>{r.status}</Badge> },
            { key: 'created', label: 'Created' },
            {
              key: 'actions', label: '', align: 'right', render: (r) => (
                <div className="flex justify-end gap-1">
                  {[Phone, Mail, MessageCircle].map((Icon, i) => (
                    <button key={i} onClick={() => openContact(['Click-to-Call', 'Email Templates', 'WhatsApp Integration'][i])} className="rounded-lg p-2 text-slate-400 hover:bg-brand-50 hover:text-brand-600"><Icon className="h-4 w-4" /></button>
                  ))}
                </div>
              ),
            },
          ]}
        />
      </Card>
    </>
  )
}
