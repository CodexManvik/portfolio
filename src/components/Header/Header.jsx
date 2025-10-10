import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          <span className={styles.logoText}>Manvik</span>
        </div>

        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('experience')} className={styles.navLink}>
            Experience
          </button>
          <button onClick={() => scrollToSection('education')} className={styles.navLink}>
            Education
          </button>
          <button onClick={() => scrollToSection('projects')} className={styles.navLink}>
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className={styles.navLink}>
            Skills
          </button>
          <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
            Contact
          </button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
