import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NewCampaignModal } from '../components/ui/Modals';
import styles from './Campaigns.module.css';

const campaigns = [
  { name: 'User Re-engagement Flow', status: 'SENT', audience: '12,400', openRate: '32.4%', date: 'Oct 26, 2025' },
  { name: 'Monthly Newsletter — Oct', status: 'SCHEDULED', audience: '185,000', openRate: '—', date: 'Oct 31, 2025' },
  { name: 'Beta Program Invite', status: 'DRAFT', audience: '840', openRate: '—', date: '—' },
  { name: 'Black Friday Preview', status: 'SCHEDULED', audience: '94,210', openRate: '—', date: 'Nov 22, 2025' },
  { name: 'Product Update v2.4', status: 'SENT', audience: '48,109', openRate: '41.2%', date: 'Oct 18, 2025' },
  { name: 'Customer Survey Q4', status: 'SENT', audience: '8,290', openRate: '18.7%', date: 'Oct 12, 2025' },
  { name: 'Onboarding Sequence', status: 'DRAFT', audience: '—', openRate: '—', date: '—' },
];

export function Campaigns() {
  const [isCampaignModalOpen, setCampaignModalOpen] = useState(false);
  const navigate = useNavigate();

  const getStatusClass = (status: string) => {
    if (status === 'SENT') return styles.statusSent;
    if (status === 'SCHEDULED') return styles.statusScheduled;
    return styles.statusDraft;
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.header}>
          <h1>Campaigns</h1>
          <p>All drafts, scheduled sends, and delivered campaigns.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setCampaignModalOpen(true)}>
          <Plus size={16} style={{ marginRight: '0.5rem' }} /> New Campaign
        </button>
      </div>

      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.active}`}>All</div>
        <div className={styles.tab}>Draft</div>
        <div className={styles.tab}>Scheduled</div>
        <div className={styles.tab}>Sent</div>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Campaign</th>
              <th>Status</th>
              <th>Audience</th>
              <th>Open Rate</th>
              <th>Send Date</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, i) => (
              <tr key={i}>
                <td className={styles.campaignName}>{c.name}</td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusClass(c.status)}`}>
                    {c.status}
                  </span>
                </td>
                <td>{c.audience}</td>
                <td className={c.openRate !== '—' ? styles.boldMetric : ''}>{c.openRate}</td>
                <td>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <NewCampaignModal 
        isOpen={isCampaignModalOpen} 
        onClose={() => setCampaignModalOpen(false)} 
      />
    </div>
  );
}
