import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Edit, Send, BarChart2, Settings, Mail, Plus } from 'lucide-react';
import { NewCampaignModal } from '../ui/Modals';
import styles from './AppLayout.module.css';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Contacts', path: '/contacts', icon: Users },
  { name: 'Templates', path: '/templates', icon: FileText },
  { name: 'Compose', path: '/compose', icon: Edit },
  { name: 'Campaigns', path: '/campaigns', icon: Send },
  { name: 'Analytics', path: '/analytics', icon: BarChart2 },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export function AppLayout() {
  const [isCampaignModalOpen, setCampaignModalOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Simple breadcrumb logic based on path
  const getBreadcrumbs = () => {
    const parts = currentPath.split('/').filter(Boolean);
    if (parts.length === 0) return ['Dashboard'];
    
    // Capitalize first letter of path parts
    return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Mail size={16} />
          </div>
          Postmaster
        </div>
        
        <nav className={styles.nav}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  isActive || (item.path === '/' && currentPath === '') 
                    ? `${styles.navItem} ${styles.active}` 
                    : styles.navItem
                }
              >
                <Icon className={styles.navIcon} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className={styles.newCampaignBtnContainer}>
          <button className={`btn btn-primary ${styles.newCampaignBtn}`} onClick={() => setCampaignModalOpen(true)}>
            <Plus size={16} /> New Campaign
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.breadcrumbs}>
            {breadcrumbs.length > 1 && (
              <>
                <span>{breadcrumbs[0]}</span>
                <span>›</span>
                <span className={styles.breadcrumbCurrent}>{breadcrumbs[1]}</span>
              </>
            )}
            {breadcrumbs.length === 1 && (
              <span className={styles.breadcrumbCurrent}>{breadcrumbs[0]}</span>
            )}
          </div>
          
          <div className={styles.avatar}>
            AC
          </div>
        </header>
        
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>

      <NewCampaignModal 
        isOpen={isCampaignModalOpen} 
        onClose={() => setCampaignModalOpen(false)} 
      />
    </div>
  );
}
