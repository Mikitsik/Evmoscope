import styles from './_header.module.scss'

const Header: React.FC = () => (
  <div className={styles.header}>
    <div className={styles.headerLogo}>
      <img src="/images/evmoscope_logo.svg" alt="Evmoscope" />
      <span>evmoscope</span>
    </div>
    <div className={styles.headerInput}>
      <input type="text" placeholder="Search for validator / tx hash / block height / address" />
      <img src="/images/search.svg" alt="Search" />
    </div>
  </div>
)

export default Header
