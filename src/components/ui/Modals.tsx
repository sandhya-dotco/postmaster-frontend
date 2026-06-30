import { useState } from 'react';
import { Mail, Repeat, Beaker, ArrowRight, CalendarClock, LayoutTemplate } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Modal } from './Modal';
import styles from './Modals.module.css';

interface NewCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewCampaignModal({ isOpen, onClose }: NewCampaignModalProps) {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('regular');

  const handleContinue = () => {
    onClose();
    navigate('/compose');
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="New Campaign" 
      subtitle="Name your campaign and pick a delivery model. You'll compose the message next."
    >
      <div className={styles.formGroup}>
        <label className={styles.label}>CAMPAIGN NAME</label>
        <input type="text" className={styles.input} placeholder="e.g. Black Friday Preview" />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>CAMPAIGN TYPE</label>
        <div className={styles.typeGrid}>
          <div 
            className={`${styles.typeCard} ${selectedType === 'regular' ? styles.active : ''}`}
            onClick={() => setSelectedType('regular')}
          >
            <Mail size={16} className={styles.typeIcon} />
            <div className={styles.typeTitle}>Regular</div>
            <div className={styles.typeDesc}>One-off broadcast to a list or segment.</div>
          </div>
          <div 
            className={`${styles.typeCard} ${selectedType === 'automation' ? styles.active : ''}`}
            onClick={() => setSelectedType('automation')}
          >
            <Repeat size={16} className={styles.typeIcon} />
            <div className={styles.typeTitle}>Automation</div>
            <div className={styles.typeDesc}>Triggered by events or schedules.</div>
          </div>
          <div 
            className={`${styles.typeCard} ${selectedType === 'abtest' ? styles.active : ''}`}
            onClick={() => setSelectedType('abtest')}
          >
            <Beaker size={16} className={styles.typeIcon} />
            <div className={styles.typeTitle}>A/B Test</div>
            <div className={styles.typeDesc}>Compare subject lines or content.</div>
          </div>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>AUDIENCE</label>
        <select className={styles.select} defaultValue="newsletter">
          <option value="newsletter">Newsletter (12,402)</option>
          <option value="vip">VIP (2,401)</option>
          <option value="beta">Beta Users (840)</option>
        </select>
      </div>

      <div className={styles.footer}>
        <button className="btn btn-outline" onClick={onClose}>Cancel</button>
        <button className="btn btn-primary" onClick={handleContinue}>
          Continue to compose <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
        </button>
      </div>
    </Modal>
  );
}

interface AddContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddContactModal({ isOpen, onClose }: AddContactModalProps) {
  const handleAdd = () => {
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Add Contact" 
      subtitle="Add a single subscriber to a list. They will be eligible for future campaigns immediately."
    >
      <div className={styles.formGroup}>
        <label className={styles.label}>FULL NAME</label>
        <input type="text" className={styles.input} placeholder="Jane Doe" autoFocus />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>EMAIL</label>
        <input type="email" className={styles.input} placeholder="jane@company.com" />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>LIST</label>
        <select className={styles.select} defaultValue="newsletter">
          <option value="newsletter">Newsletter</option>
          <option value="vip">VIP</option>
          <option value="beta">Beta Users</option>
        </select>
      </div>

      <div className={styles.footer}>
        <button className="btn btn-outline" onClick={onClose}>Cancel</button>
        <button className="btn btn-primary" onClick={handleAdd}>Add contact</button>
      </div>
    </Modal>
  );
}

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const handleSchedule = () => {
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Schedule Campaign" 
      subtitle="Pick a date and time to send this campaign automatically."
    >
      <div className={styles.formGroup}>
        <label className={styles.label}>SEND DATE</label>
        <input type="date" className={styles.input} />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>SEND TIME</label>
        <input type="time" className={styles.input} />
      </div>

      <div className={styles.footer}>
        <button className="btn btn-outline" onClick={onClose}>Cancel</button>
        <button className="btn btn-primary" onClick={handleSchedule}>
          <CalendarClock size={16} style={{ marginRight: '0.5rem' }} /> Schedule Send
        </button>
      </div>
    </Modal>
  );
}

interface CreateTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateTemplateModal({ isOpen, onClose }: CreateTemplateModalProps) {
  const navigate = useNavigate();

  const handleCreate = () => {
    onClose();
    navigate('/compose');
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Create Template" 
      subtitle="Start a new reusable email design."
    >
      <div className={styles.formGroup}>
        <label className={styles.label}>TEMPLATE NAME</label>
        <input type="text" className={styles.input} placeholder="e.g. Welcome Series Step 1" autoFocus />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>CATEGORY</label>
        <select className={styles.select} defaultValue="newsletter">
          <option value="newsletter">Newsletter</option>
          <option value="onboarding">Onboarding</option>
          <option value="announcement">Announcement</option>
          <option value="lifecycle">Lifecycle</option>
          <option value="transactional">Transactional</option>
        </select>
      </div>

      <div className={styles.footer}>
        <button className="btn btn-outline" onClick={onClose}>Cancel</button>
        <button className="btn btn-primary" onClick={handleCreate}>
          <LayoutTemplate size={16} style={{ marginRight: '0.5rem' }} /> Create
        </button>
      </div>
    </Modal>
  );
}
