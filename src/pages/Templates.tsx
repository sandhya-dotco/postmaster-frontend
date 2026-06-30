import { useState } from 'react';
import { Plus, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CreateTemplateModal } from '../components/ui/Modals';
import styles from './Templates.module.css';

const templates = [
  { name: 'Welcome v3', type: 'Onboarding', uses: 184, updated: '2 DAYS AGO', color: '#10b981' },
  { name: 'Monthly Newsletter', type: 'Newsletter', uses: 12, updated: '1 WEEK AGO', color: '#3b82f6' },
  { name: 'Product Update', type: 'Announcement', uses: 47, updated: '3 DAYS AGO', color: '#f59e0b' },
  { name: 'Re-engagement Push', type: 'Lifecycle', uses: 9, updated: '5 DAYS AGO', color: '#ec4899' },
  { name: 'Receipt — Plain', type: 'Transactional', uses: 1240, updated: '1 MONTH AGO', color: '#64748b' },
  { name: 'Beta Invite', type: 'Outreach', uses: 3, updated: '1 DAY AGO', color: '#8b5cf6' },
];

export function Templates() {
  const [isCreateOpen, setCreateOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.header}>
          <h1>Templates</h1>
          <p>Reusable email designs for your campaigns.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setCreateOpen(true)}>
          <Plus size={16} style={{ marginRight: '0.5rem' }} /> Create Template
        </button>
      </div>

      <div className={styles.grid}>
        {templates.map((tpl, i) => (
          <div key={i} className={styles.card} onClick={() => navigate('/compose')}>
            <div className={styles.cardImage}>
              <div className={styles.emailMockup}>
                <div className={styles.emailMockupHeader} style={{ backgroundColor: tpl.color }}></div>
                <div className={styles.emailMockupBody}>
                  <div className={`${styles.skeletonLine} ${styles.w2}`}></div>
                  <div className={`${styles.skeletonLine} ${styles.w1}`}></div>
                  <div className={`${styles.skeletonLine} ${styles.w3}`}></div>
                  <div className={styles.skeletonButton} style={{ backgroundColor: tpl.color, opacity: 0.2 }}></div>
                </div>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>{tpl.name}</div>
                <div className={styles.badge} style={{ color: tpl.color, backgroundColor: `${tpl.color}15` }}>
                  {tpl.type}
                </div>
              </div>
              <div className={styles.cardDesc}>
                Used in {tpl.uses} campaigns
              </div>
              
              <div className={styles.cardFooter}>
                <span>UPDATED {tpl.updated}</span>
                <ExternalLink size={14} className={styles.footerIcon} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <CreateTemplateModal 
        isOpen={isCreateOpen} 
        onClose={() => setCreateOpen(false)} 
      />
    </div>
  );
}
