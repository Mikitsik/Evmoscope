import styles from './_layout.module.scss'

const Layout: React.FC = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
)

export default Layout
