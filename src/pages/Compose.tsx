import { useState } from 'react';
import { Bold, Italic, Link, List, ImageIcon, X, Paperclip, Calendar, Send } from 'lucide-react';
import { ScheduleModal } from '../components/ui/Modals';
import styles from './Compose.module.css';

export function Compose() {
  const [isScheduleOpen, setScheduleOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Compose Email</h1>
        <p>Draft a new message to send now or schedule for later.</p>
      </div>

      <div className={styles.composerCard}>
        <div className={styles.row}>
          <div className={styles.label}>TO</div>
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles.tagGreen}`}>
              VIP (2,401) <X size={12} className={styles.tagClose} />
            </span>
            <span className={`${styles.tag} ${styles.tagGreen}`}>
              Newsletter (12,402) <X size={12} className={styles.tagClose} />
            </span>
            <input type="text" className={styles.input} placeholder="Add list or email..." />
          </div>
        </div>
        
        <div className={styles.row}>
          <div className={styles.label}>SUBJECT</div>
          <input type="text" className={styles.input} placeholder="Write a subject line that earns the open..." />
        </div>

        <div className={styles.toolbar}>
          <button className={styles.toolbarBtn}><Bold size={16} /></button>
          <button className={styles.toolbarBtn}><Italic size={16} /></button>
          <button className={styles.toolbarBtn}><Link size={16} /></button>
          <button className={styles.toolbarBtn}><List size={16} /></button>
          <button className={styles.toolbarBtn}><ImageIcon size={16} /></button>
        </div>

        <div className={styles.editorArea}>
          <div className={styles.editorGreeting}>Hi there,</div>
          <div className={styles.editorPlaceholder}>Start writing your message...</div>
        </div>

        <div className={styles.attachmentArea}>
          <div className={styles.attachmentBadge}>
            <Paperclip size={14} /> pricing-sheet.pdf - 248 KB <X size={14} className={styles.tagClose} />
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.draftText}>Save as draft</div>
        <div className={styles.actions}>
          <button className={`btn btn-outline ${styles.scheduleBtn}`} onClick={() => setScheduleOpen(true)}>
            <Calendar size={16} /> Schedule
          </button>
          <button className={`btn btn-primary ${styles.sendBtn}`}>
            <Send size={16} /> Send now
          </button>
        </div>
      </div>

      <ScheduleModal 
        isOpen={isScheduleOpen} 
        onClose={() => setScheduleOpen(false)} 
      />
    </div>
  );
}
