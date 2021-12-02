import './_header.scss'

const Header: React.FC = () => (
  <div className="header">
    <div>
      <img src="/images/evmoscope_logo.svg" alt="Evmoscope" />
      <span>evmoscope</span>
    </div>
    <div className="headerInput">
      <div>
        <input type="text" placeholder="Search for validator / tx hash / block height / address" />
        <img src="/images/search.svg" alt="Search" />
      </div>
    </div>



  </div>
)

export default Header
