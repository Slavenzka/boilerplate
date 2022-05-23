import DesktopApp from 'App/DesktopApp'
import AdaptiveApp from 'App/AdaptiveApp'
import useElasticAdaptive from 'hooks/useElasticAdaptive'
import { DeviceTypes } from 'specs/enum.spec'

const ViewSwitcher = ({
  isDesktopOnly
}: {
  isDesktopOnly?: boolean
}) => {
  const { type } = useElasticAdaptive()

  return isDesktopOnly || type === DeviceTypes.DESKTOP
    ? <DesktopApp />
    : <AdaptiveApp />
}

export default ViewSwitcher
