import styles from './_blocksPanel.module.scss'
import { t } from '../../../utils'
import Block from './components/Block'

const BlocksPanel: React.FC = () => {

  return (
    <div className={styles.blocks}>
      <div className={styles.blocksHeader}>
        <span className={styles.blocksHeaderHeight}>{t('Height')}</span>
        <span className={styles.blocksHeaderHash}>{t('Hash')}</span>
        <span className={styles.blocksHeaderProposer}>{t('Proposer')}</span>
        <span className={styles.blocksHeaderTxs}>{t('Txs')}</span>
        <span className={styles.blocksHeaderTime}>{t('Time')}</span>
      </div>
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </div>
  )
}

export default BlocksPanel
