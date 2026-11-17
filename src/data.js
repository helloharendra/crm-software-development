// Sample data for the UI demo. The complete project uses live APIs + database.
export const sales = [
  { label: 'Jun', won: 18, target: 20 }, { label: 'Jul', won: 22, target: 22 }, { label: 'Aug', won: 27, target: 24 },
  { label: 'Sep', won: 24, target: 26 }, { label: 'Oct', won: 31, target: 28 }, { label: 'Nov', won: 36, target: 30 },
]

export const sources = [
  { name: 'Website', value: 42 }, { name: 'Referral', value: 23 }, { name: 'Google Ads', value: 18 },
  { name: 'WhatsApp', value: 11 }, { name: 'Events', value: 6 },
]

export const team = [
  { name: 'Kavya Iyer', deals: 14, revenue: 2860000, quota: 92 },
  { name: 'Arjun Malhotra', deals: 11, revenue: 2140000, quota: 78 },
  { name: 'Neha Gupta', deals: 9, revenue: 1720000, quota: 64 },
  { name: 'Rahul Desai', deals: 7, revenue: 1190000, quota: 51 },
]

export const followUps = [
  { who: 'Vikram Rao', company: 'Zenith Motors', type: 'Call', time: '11:30 AM' },
  { who: 'Ananya Shah', company: 'Bloom Interiors', type: 'Demo', time: '2:00 PM' },
  { who: 'Imran Khan', company: 'Apex Logistics', type: 'Email', time: '4:15 PM' },
]

export const stages = ['New', 'Qualified', 'Proposal', 'Negotiation', 'Won']

export const deals = [
  { id: 1, title: 'ERP rollout – 4 plants', company: 'Zenith Motors', value: 1850000, owner: 'Kavya Iyer', stage: 'Negotiation', days: 3 },
  { id: 2, title: 'Annual AMC renewal', company: 'Apex Logistics', value: 420000, owner: 'Arjun Malhotra', stage: 'Proposal', days: 6 },
  { id: 3, title: 'Showroom CRM licences', company: 'Bloom Interiors', value: 260000, owner: 'Neha Gupta', stage: 'Qualified', days: 2 },
  { id: 4, title: 'Fleet tracking pilot', company: 'Swift Cabs', value: 640000, owner: 'Rahul Desai', stage: 'New', days: 1 },
  { id: 5, title: 'Hospital billing suite', company: 'CarePlus Clinics', value: 980000, owner: 'Kavya Iyer', stage: 'Proposal', days: 9 },
  { id: 6, title: 'E-commerce integration', company: 'UrbanKart', value: 350000, owner: 'Neha Gupta', stage: 'Won', days: 0 },
  { id: 7, title: 'School app – 3 branches', company: 'Little Scholars', value: 290000, owner: 'Arjun Malhotra', stage: 'New', days: 4 },
  { id: 8, title: 'Warehouse automation', company: 'Omkar Steel', value: 1240000, owner: 'Rahul Desai', stage: 'Qualified', days: 5 },
  { id: 9, title: 'POS for 12 outlets', company: 'Chai Point Co.', value: 560000, owner: 'Kavya Iyer', stage: 'Won', days: 0 },
]

export const leads = [
  { id: 1, name: 'Vikram Rao', company: 'Zenith Motors', email: 'vikram@zenith.in', source: 'Website', score: 92, status: 'Hot', created: '17 Nov' },
  { id: 2, name: 'Ananya Shah', company: 'Bloom Interiors', email: 'ananya@bloom.co', source: 'Referral', score: 81, status: 'Hot', created: '16 Nov' },
  { id: 3, name: 'Imran Khan', company: 'Apex Logistics', email: 'imran@apexlog.com', source: 'Google Ads', score: 67, status: 'Warm', created: '16 Nov' },
  { id: 4, name: 'Pooja Bansal', company: 'FreshMart', email: 'pooja@freshmart.in', source: 'WhatsApp', score: 58, status: 'Warm', created: '15 Nov' },
  { id: 5, name: 'Sanjay Patil', company: 'Patil Builders', email: 'sanjay@patil.co.in', source: 'Events', score: 34, status: 'Cold', created: '14 Nov' },
  { id: 6, name: 'Meera Joshi', company: 'Little Scholars', email: 'meera@lscholars.edu', source: 'Website', score: 76, status: 'Warm', created: '13 Nov' },
  { id: 7, name: 'Karan Singh', company: 'Swift Cabs', email: 'karan@swiftcabs.in', source: 'Google Ads', score: 88, status: 'Hot', created: '12 Nov' },
]
