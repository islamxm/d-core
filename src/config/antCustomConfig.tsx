import { ConfigProviderProps } from "antd";

const antCustomConfig:ConfigProviderProps = {
  renderEmpty: () => (
    <span style={{display: 'flex', justifyContent: 'center'}}>Hiç zat ýok</span>
  )
}

export default antCustomConfig;