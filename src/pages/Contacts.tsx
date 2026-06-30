import { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { AddContactModal } from '../components/ui/Modals';
import styles from './Contacts.module.css';

const contacts = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', list: 'VIP', status: 'Subscribed' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com', list: 'Newsletter', status: 'Subscribed' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', list: 'Newsletter', status: 'Unsubscribed' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', list: 'VIP', status: 'Subscribed' },
  { id: 5, name: 'Evan Wright', email: 'evan@example.com', list: 'Beta Users', status: 'Subscribed' },
];

export function Contacts() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.header}>
          <h1>Contacts</h1>
          <p>Manage your contacts and lists here.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setContactModalOpen(true)}>
          <Plus size={16} style={{ marginRight: '0.5rem' }} /> Add Contact
        </button>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <Search size={16} className={styles.searchIcon} />
            <input type="text" placeholder="Search contacts..." className={styles.searchInput} />
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>List</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id}>
                <td className={styles.contactName}>{c.name}</td>
                <td>{c.email}</td>
                <td><span className={styles.listTag}>{c.list}</span></td>
                <td>
                  <span className={`${styles.statusBadge} ${c.status === 'Subscribed' ? styles.statusActive : styles.statusInactive}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </div>
  );
}
