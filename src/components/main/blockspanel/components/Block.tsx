import { t } from '../../../../utils'
import styles from './../_blocksPanel.module.scss'

const Block: React.FC = () => {

  return (
    <div className={styles.block}>
      <span className={styles.blocksHeaderHeight}>140575</span>
      <span className={styles.blocksHeaderHash}>A8F47C5D81F6B7CD1D940B366DDE7C5B8AA44834A31B968CCCF60DCE87EAE92A</span>
      <span className={styles.blocksHeaderProposer}>rubyfun</span>
      <span className={styles.blocksHeaderTxs}>12</span>
      <span className={styles.blocksHeaderTime}>04:15:53</span>
    </div>
  )
}

export default Block
