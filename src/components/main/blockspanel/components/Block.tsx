import { t } from '../../../../utils'
import styles from './../_blocksPanel.module.scss'
import { useState } from 'react'
import classNames from 'classnames'
import BlockInfo from './BlockInfo'
import Proposer from './Proposer'

const Block: React.FC = () => {
  const [isExpand, setIsExpand] = useState<{
    isBlockInfo: Boolean
    isProposer: Boolean
    isTxs: Boolean
    isTime: Boolean
  }>({
    isBlockInfo: false,
    isProposer: false,
    isTxs: false,
    isTime: false
  })
  const expandBlockInfo = () => {
    setIsExpand((prevState) => {
      return {
        isBlockInfo: !prevState.isBlockInfo,
        isProposer: false,
        isTxs: false,
        isTime: false
       }
    })
  }
  const expandProposer = () => {
    setIsExpand((prevState) => {
      return {
        isBlockInfo: false,
        isProposer: !prevState.isProposer,
        isTxs: false,
        isTime: false
       }
    })
  }
  const expandTxs = () => {
    setIsExpand((prevState) => {
      return {
        isBlockInfo: false,
        isProposer: false,
        isTxs: !prevState.isTxs,
        isTime: false
      }
    })
  }
  const expandTime = () => {
    setIsExpand((prevState) => {
      return {
        isBlockInfo: false,
        isProposer: false,
        isTxs: false,
        isTime: !prevState.isTime
      }
    })
  }

  return (
    <>
      <div className={styles.block}>
        <span
          className={classNames(styles.blocksHeaderHeight, { [styles.blockTabActive]: isExpand.isBlockInfo })}
          onClick={expandBlockInfo}
        >140575</span>
        <span
          className={classNames(styles.blocksHeaderHeight, { [styles.blockTabActive]: isExpand.isBlockInfo })}
          onClick={expandBlockInfo}
        >A8F47C5D81F6B7CD1D940B366DDE7C5B8AA44834A31B968CCCF60DCE87EAE92A</span>
        <span
          className={classNames(styles.blocksHeaderHeight, { [styles.blockTabActive]: isExpand.isProposer })}
          onClick={expandProposer}
        >StakeBenefit</span>
        <span
          className={classNames(styles.blocksHeaderHeight, { [styles.blockTabActive]: isExpand.isTxs })}
          onClick={expandTxs}
        >3</span>
        <span
          className={classNames(styles.blocksHeaderHeight, { [styles.blockTabActive]: isExpand.isTime })}
          onClick={expandTime}
        >04:15:53</span>
      </div>
      {isExpand.isBlockInfo && (
        <div className={styles.blockExpand}>
          <BlockInfo />
        </div>
      )}
      {isExpand.isProposer && (
        <div className={styles.blockExpand}>
          <Proposer />
        </div>
      )}
    </>
  )
}

export default Block
