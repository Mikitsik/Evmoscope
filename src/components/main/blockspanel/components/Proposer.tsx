import { t } from '../../../../utils'
import styles from './_proposer.module.scss'

const Proposer: React.FC = () => {
  const fakeArray = (start, end) => {
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
  }

  return (
    <>
      <section className={styles.validator}>
        <div className={styles.validatorCommon}>
          <div>
            <img src="/images/stakebenefit_logo.svg" alt="StakeBenefit" />
          </div>
          <div>
            <div className={styles.validatorCommonTitle}>StakeBenefit</div>
            <div>https://stakebenefit.com</div>
          </div>
          <div>
            <div className={styles.validatorCommonTitle}>{t('Commission')}</div>
            <div>7%</div>
          </div>
          <div>
            <div className={styles.validatorCommonTitle}>{t('Status')}</div>
            <div>{t('Active')}</div>
          </div>
          <div>
            <div className={styles.validatorCommonTitle}>{t('Voting Power')}</div>
            <div>0.07%</div>
          </div>
          <div>
            <div className={styles.validatorCommonDelegate}>
              <span>{t('Delegate')}</span>
            </div>
          </div>
        </div>
        <div>
        <div className={styles.validatorInfoItem}>
          <span className={styles.validatorInfoItemFirst}>{t('Identity')}</span>
          <span className={styles.validatorInfoItemSecond}>48CE867E6AB5ED72</span>
          <span className={styles.validatorInfoItemThird}>{t('Account Address')}</span>
          <span>evmos1jkn3w5rm7lp0pn0xxxxxxxxxxxxxxx23t9t6dc</span>
        </div>
        <div className={styles.validatorInfoItem}>
          <span className={styles.validatorInfoItemFirst}>{t('Unbond Height')}</span>
          <span className={styles.validatorInfoItemSecond}>86964</span>
          <span className={styles.validatorInfoItemThird}>{t('Validator Address')}</span>
          <span>evmosvaloper1jkn3w5rm7lpxxxxxxxxxxxxxxxxxxxx3xty2v9</span>
        </div>
        <div className={styles.validatorInfoItem}>
          <span className={styles.validatorInfoItemFirst}>{t('Unbond Time')}</span>
          <span className={styles.validatorInfoItemSecond}>2021-12-05 20:32</span>
          <span className={styles.validatorInfoItemThird}>{t('Hex Address')}</span>
          <span>A466C1CACDC6XXXXXXXXXXXXXXXXXXXXF908CB71</span>
        </div>
        <div className={styles.validatorInfoItem}>
          <span className={styles.validatorInfoItemFirst}>{t('Min Self Delegation')}</span>
          <span className={styles.validatorInfoItemSecond}>1</span>
          <span className={styles.validatorInfoItemThird}>{t('Contact')}</span>
          <span>+123123456789</span>
        </div>
        <div className={styles.validatorInfoItem}>
          <span className={styles.validatorInfoItemFirst}>{t('Jailed')}</span>
          <span className={styles.validatorInfoItemSecond}>-</span>
        </div>
        <div className={styles.validatorInfoItem}>
          <span className={styles.validatorInfoItemFirst}>{t('Bonded Tokens')}</span>
          <span className={styles.validatorInfoItemSecond}>322422669962077.3 APHOTON</span>
        </div>
        <div className={styles.validatorInfoItem}>
          <span className={styles.validatorInfoItemFirst}>{t('Self Delegation')}</span>
          <span className={styles.validatorInfoItemSecond}>19.33%</span>
        </div>
        <div className={styles.validatorInfoItem}>
          <span className={styles.validatorInfoItemFirst}>{t('Annual Profit')}</span>
          <span className={styles.validatorInfoItemSecond}>11.98 %</span>
        </div>
      </div>
      <div>
        <div className={styles.validatorBlocksDashboard}><span>{t('Last 100 Blocks')}</span></div>
        <div className={styles.validatorBlocksVisualisation}>
          {fakeArray(1, 100).map((_, i) => {
            return (
              <div className={styles.validatorBlocksVisualisationBlock} key={i} />
            )
          })}
        </div>
      </div>

      </section>
    </>
  )
}

export default Proposer
