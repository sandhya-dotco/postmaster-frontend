import { BarChart2, Mail, Users, ArrowUpRight } from 'lucide-react';
import styles from './Dashboard.module.css';

export function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <p>Welcome back, Alex. Here is what is happening today.</p>
      </div>

      <div className={styles.statsGrid}>
        <div className="card">
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>Total Subscribers</span>
            <Users size={18} className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>24,592</div>
          <div className={styles.statChange}>
            <ArrowUpRight size={14} className={styles.posIcon} /> 12% from last month
          </div>
        </div>

        <div className="card">
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>Avg. Open Rate</span>
            <BarChart2 size={18} className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>32.4%</div>
          <div className={styles.statChange}>
            <ArrowUpRight size={14} className={styles.posIcon} /> 2.1% from last month
          </div>
        </div>

        <div className="card">
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>Emails Sent</span>
            <Mail size={18} className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>1.2M</div>
          <div className={styles.statChange}>
            <span className={styles.neutralText}>On track for this quarter</span>
          </div>
        </div>
      </div>

      <div className={styles.recentSection}>
        <h2 className={styles.sectionTitle}>Recent Campaigns</h2>
        <div className="card">
          <div className={styles.recentItem}>
            <div className={styles.recentInfo}>
              <div className={styles.recentName}>User Re-engagement Flow</div>
              <div className={styles.recentMeta}>Sent to 12,400 subscribers • Oct 26</div>
            </div>
            <div className={styles.recentStatus}>Sent</div>
          </div>
          <div className={styles.recentItem}>
            <div className={styles.recentInfo}>
              <div className={styles.recentName}>Monthly Newsletter — Oct</div>
              <div className={styles.recentMeta}>Scheduling for 185,000 subscribers • Oct 31</div>
            </div>
            <div className={`${styles.recentStatus} ${styles.statusScheduled}`}>Scheduled</div>
          </div>
        </div>
      </div>
    </div>
  );
}
