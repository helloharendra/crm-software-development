import {
  BarChart3, CalendarCheck, Contact, Handshake, Headphones, KanbanSquare, LayoutDashboard, Mail, Settings, Target, Users,
} from 'lucide-react'

export const app = {
  name: 'NayaCRM',
  tagline: 'Sales & Customer Relationships',
  logo: Handshake,
  user: { name: 'Kavya Iyer', role: 'Sales Manager' },
  searchPlaceholder: 'Search leads, deals, contacts…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Sales',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Deal Pipeline', to: '/pipeline', icon: KanbanSquare },
      { label: 'Leads', to: '/leads', icon: Target, badge: 'New' },
    ],
  },
  {
    title: 'Engage',
    items: [
      { label: 'Contacts & Accounts', icon: Contact },
      { label: 'Follow-ups & Tasks', icon: CalendarCheck },
      { label: 'Email & WhatsApp Campaigns', icon: Mail },
      { label: 'Support Tickets', icon: Headphones },
    ],
  },
  {
    title: 'Admin',
    items: [
      { label: 'Team & Territories', icon: Users },
      { label: 'Sales Reports', icon: BarChart3 },
      { label: 'Settings', icon: Settings },
    ],
  },
]
