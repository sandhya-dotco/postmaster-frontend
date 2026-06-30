import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import styles from './Analytics.module.css';

const deliveryData = [
  { val: 90 }, { val: 91 }, { val: 90.5 }, { val: 92 },
  { val: 93 }, { val: 95 }, { val: 96 }, { val: 95.5 },
  { val: 96.5 }, { val: 97 }, { val: 96 }, { val: 97 }
];

const openData = [
  { val: 20 }, { val: 25 }, { val: 22 }, { val: 27 },
  { val: 29 }, { val: 26 }, { val: 30 }, { val: 29 },
  { val: 31 }, { val: 28 }, { val: 32 }, { val: 35 }
];

export function Analytics() {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.header}>
          <h1>Analytics</h1>
          <p>Track delivery and engagement across all campaigns.</p>
        </div>
        <select className={styles.select}>
          <option>Last 30 Days</option>
          <option>Last 3 Months</option>
          <option>All Time</option>
        </select>
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Delivery Rate</div>
          <div className={styles.metricValue}>99.16%</div>
          <div className={`${styles.metricChange} ${styles.changePos}`}>+0.04%</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Open Rate</div>
          <div className={styles.metricValue}>28.4%</div>
          <div className={`${styles.metricChange} ${styles.changePos}`}>+2.1%</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Click Rate</div>
          <div className={styles.metricValue}>4.12%</div>
          <div className={`${styles.metricChange} ${styles.changeNeg}`}>-0.3%</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Unsubscribes</div>
          <div className={styles.metricValue}>0.12%</div>
          <div className={`${styles.metricChange} ${styles.changeNeutral}`}>stable</div>
        </div>
      </div>

      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div className={styles.chartTitle}>Delivery Rate</div>
            <div className={styles.chartSubtitle}>Last 12 weeks</div>
          </div>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={deliveryData}>
                <Area type="monotone" dataKey="val" stroke="var(--chart-green-stroke)" fill="var(--chart-green-fill)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div className={styles.chartTitle}>Open Rate</div>
            <div className={styles.chartSubtitle}>Last 12 weeks</div>
          </div>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={openData}>
                <Area type="monotone" dataKey="val" stroke="var(--chart-blue-stroke)" fill="var(--chart-blue-fill)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className={styles.engagementCard}>
        <div className={styles.engagementHeader}>Engagement by Campaign</div>
        <div className={styles.engagementPlaceholder}>
          <div className={styles.axisPlaceholder}>
            <span>C1</span><span>C2</span><span>C3</span><span>C4</span><span>C5</span><span>C6</span><span>C7</span><span>C8</span><span>C9</span><span>C10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
