import { Mail } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Mail size={20} />
          </div>
          Postmaster
        </div>
        
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>Enter your credentials to access your account.</p>

        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input type="email" className={styles.input} placeholder="alex@northwind.co" required defaultValue="alex@northwind.co" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <input type="password" className={styles.input} placeholder="••••••••" required defaultValue="password123" />
          </div>
          <button type="submit" className={`btn btn-primary ${styles.loginBtn}`}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
