import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './map.css'

const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} style={{ fontSize: '50px', color: 'red' }} />
      <p className="pin-text">{text}</p>
    </div>
  )

  export default LocationPin