import styles from './_blocksPanel.module.scss'
import { t } from '../../../utils'
import Block from './components/Block'

const BlocksPanel: React.FC = () => {
  const fakeArray = (start, end) => {
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
  }

  return (
    <div className={styles.blocks}>
      <div className={styles.blocksHeader}>
        <span className={styles.blocksHeaderHeight}>{t('Height')}</span>
        <span className={styles.blocksHeaderHash}>{t('Hash')}</span>
        <span className={styles.blocksHeaderProposer}>{t('Proposer')}</span>
        <span className={styles.blocksHeaderTxs}>{t('Txs')}</span>
        <span className={styles.blocksHeaderTime}>{t('Time')}</span>
      </div>
      {fakeArray(1, 20).map((_, i) => {
        return (
          <Block key={i} />
        )
      })}
    </div>
  )
}

export default BlocksPanel
