import styles from './_main.module.scss'
import { t } from '../../utils'
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs'
import classNames from 'classnames'
import { BlocksPanel } from './blockspanel'
import { TxsPanel } from './txspanel'
import { ValidatorsPanel } from './validatorspanel'
import { IBCRelayerPanel } from './ibcrelayerpanel'
import { useState } from 'react'

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <div
      className={classNames(styles.tab, {
        [styles.tabActive]: isActive
      })}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

const Panel = ({ children }) => {
  const isActive = usePanelState()

return isActive ? <div className={styles.panel}>{children}</div> : null
}

const Main: React.FC = () => {
  const [tabState, setTabState] = useState<number>(1)


  return (
    <section className={styles.main}>
      <Tabs state={[tabState, setTabState]}>
        <div className={styles.mainTabswrapper}>
          <Tab><span>{t('Blocks')}</span></Tab>
          <Tab><span>{t('Validators')}</span></Tab>
          <Tab><span>{t('Transactions')}</span></Tab>
          <Tab><span>{t('IBC Relayer')}</span></Tab>
        </div>
        <div className={styles.mainPanels}>
          <Panel>
            <BlocksPanel/>
          </Panel>
          <Panel>
            <TxsPanel />
          </Panel>
          <Panel>
            <ValidatorsPanel />
          </Panel>
          <Panel>
            <IBCRelayerPanel />
          </Panel>
        </div>
      </Tabs>
    </section>
  )
}

export default Main