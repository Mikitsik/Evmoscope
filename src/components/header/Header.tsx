import styles from './_header.module.scss'
import { t } from '../../utils/index'

const Header: React.FC = () => (
  <section className={styles.header}>
    <div className={styles.headerTop}>
      <div className={styles.headerTopLogo}>
        <img src="/images/evmoscope_logo.svg" alt="Evmoscope" />
        <span>evmoscope</span>
      </div>
      <div className={styles.headerTopWallet}>
        <div className={styles.headerTopWalletWrapper}>
          <div className={styles.headerTopWalletButton}>
            <span>{t('Enter')}</span>
          </div>
        </div>
      </div>
      <div className={styles.headerTopInput}>
        <input type="text" placeholder="Search for validator / tx hash / block height / address" />
        <img src="/images/search.svg" alt="Search" />
      </div>
    </div>
    <div className={styles.headerBottom}>
      <div>
        <span className={styles.headerBottomTitle}>{t('Chain')}</span>
        <span className={styles.headerBottomSubtitle}>{t('Evmos')}</span>
      </div>
      <div>
        <span className={styles.headerBottomTitle}>{t('Supply')}</span>
        <span className={styles.headerBottomSubtitle}>5,014,857.33 {t('Photon')}</span>
      </div>
      <div>
        <span className={styles.headerBottomTitle}>{t('Block Height')}</span>
        <span className={styles.headerBottomSubtitle}>140575</span>
      </div>
      <div>
        <span className={styles.headerBottomTitle}>{t('Average Block Time')}</span>
        <span className={styles.headerBottomSubtitle}>6.76 s</span>
      </div>
      <div>
        <span className={styles.headerBottomTitle}>{t('Txs Total')}</span>
        <span className={styles.headerBottomSubtitle}>84585521</span>
      </div>
      <div>
        <span className={styles.headerBottomTitle}>{t('Inflation')}</span>
        <span className={styles.headerBottomSubtitle}>13.29&#37;</span>
      </div>
    </div>
  </section>
)

export default Header
