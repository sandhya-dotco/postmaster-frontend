import { LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import styles from './Settings.module.css';

export function Settings() {
  const { logout } = useAuth();
  const { theme, setTheme } = useTheme();
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Settings</h1>
        <p>Profile, appearance, and session.</p>
      </div>

      <div className="card">
        <h2 className={styles.sectionTitle}>Profile</h2>
        
        <div className={styles.section}>
          <div className={styles.profileRow}>
            <div className={styles.avatarLg}>AC</div>
            <button className={styles.changePhoto}>Change photo</button>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input type="text" className={styles.input} defaultValue="Alex Chen" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input type="email" className={styles.input} defaultValue="alex@northwind.co" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Company</label>
              <input type="text" className={styles.input} defaultValue="Northwind" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Role</label>
              <input type="text" className={styles.input} defaultValue="Marketing Lead" />
            </div>
          </div>

          <button className={`btn btn-primary ${styles.saveBtn}`}>Save changes</button>
        </div>
      </div>

      <div className="card">
        <h2 className={styles.sectionTitle}>Theme</h2>
        <div className={styles.themeGroup}>
          <button 
            className={`${styles.themeBtn} ${theme === 'light' ? styles.active : ''}`}
            onClick={() => setTheme('light')}
          >
            Light
          </button>
          <button 
            className={`${styles.themeBtn} ${theme === 'dark' ? styles.active : ''}`}
            onClick={() => setTheme('dark')}
          >
            Dark
          </button>
          <button 
            className={`${styles.themeBtn} ${theme === 'system' ? styles.active : ''}`}
            onClick={() => setTheme('system')}
          >
            System
          </button>
        </div>
      </div>

      <div className="card">
        <div className={styles.sessionRow}>
          <div>
            <h2 className={styles.sectionTitle}>Session</h2>
            <p className={styles.sessionText}>Sign out of this device.</p>
          </div>
          <button className={`btn btn-danger-outline ${styles.logoutBtn}`} onClick={logout}>
            <LogOut size={16} /> Log out
          </button>
        </div>
      </div>
    </div>
  );
}
