import { t } from '../../../../utils'
import styles from './_blockInfo.module.scss'

const BlockInfo: React.FC = () => (
  <>
    <div className={styles.blockInfoItem}>
      <span className={styles.blockInfoItemTitle}>{t('Chain Id')}</span>
      <span className={styles.blockInfoItemDescription}>evmos_9000-2</span>
    </div>
    <div className={styles.blockInfoItem}>
      <span className={styles.blockInfoItemTitle}>{t('Last Block Id')}</span>
      <span className={styles.blockInfoItemDescription}>4DAB24A77308BF18BC6848026D6C0974E61AC0D8F6BE1FB91E2BA1D415D9..</span>
    </div>
    <div className={styles.blockInfoItem}>
      <span className={styles.blockInfoItemTitle}>{t('Last Commit Hash')}</span>
      <span className={styles.blockInfoItemDescription}>B989E0505D6BC1149ABC8EECF907377FA7600ED125B40D73AD0AE1777E043152</span>
    </div>
    <div className={styles.blockInfoItem}>
      <span className={styles.blockInfoItemTitle}>{t('Data Hash')}</span>
      <span className={styles.blockInfoItemDescription}>F1BBBB98D6BFEFA1E26B089C2B32569948F78FA5E57A840A749203B50189B84B</span>
    </div>
    <div className={styles.blockInfoItem}>
      <span className={styles.blockInfoItemTitle}>{t("Validator's Hash")}</span>
      <span className={styles.blockInfoItemDescription}>B38E4C3658CB56591BE3957B7A13FA06D845EF956375D4A7A09BAD4516181FCF</span>
    </div>
    <div className={styles.blockInfoItem}>
      <span className={styles.blockInfoItemTitle}>{t("Next Validator's Hash")}</span>
      <span className={styles.blockInfoItemDescription}>F29DFA8A5BAFE42040CEC4BF5E1581AD0C137811744C0C7727FCF70559A91DE3</span>
    </div>
    <div className={styles.blockInfoItem}>
      <span className={styles.blockInfoItemTitle}>{t('Consensus Hash')}</span>
      <span className={styles.blockInfoItemDescription}>048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F</span>
    </div>
    <div className={styles.blockInfoItem}>
      <span className={styles.blockInfoItemTitle}>{t('App Hash')}</span>
      <span className={styles.blockInfoItemDescription}>2F64F55300499D6A60FCFC450C970176F2E6B7D948AFD3E704E268CC80024190</span>
    </div>
    <div className={styles.blockInfoItem}>
      <span className={styles.blockInfoItemTitle}>{t('Last Result Hash')}</span>
      <span className={styles.blockInfoItemDescription}>B52B08F26BACFCCF579BB10A2F9F121D2933C05F4E5D3BF3152DC1A6D8D2BF38</span>
    </div>
    <div className={styles.blockInfoItem}>
      <span className={styles.blockInfoItemTitle}>{t('Evidence Hash')}</span>
      <span className={styles.blockInfoItemDescription}>E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855</span>
    </div>
    <div className={styles.blockInfoItem}>
      <span className={styles.blockInfoItemTitle}>{t('Proposer Address')}</span>
      <span className={styles.blockInfoItemDescription}>StakeBenefit</span>
    </div>
  </>
)

export default BlockInfo
