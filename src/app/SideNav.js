import Link from "next/link";
import styles from "./SideNav.module.css"; // CSS for SideNav

const SideNav = ({ isOpen }) => {
  return (
    <div className={`${styles.sidenav} ${isOpen ? styles.open : styles.closed}`}>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/about">About</Link>
          </li>
          <li>
            <Link href="/dashboard/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
