import * as React from '.pnpm/@types+react@18.2.46/node_modules/@types/react'
import { Drawer as OriginalDrawer } from '.pnpm/antd@5.9.0_moment@2.30.1/node_modules/antd/es'
import { BaseDialog } from '../../shared/base/BaseDialog'

export type IProDrawerProps = React.ComponentProps<typeof OriginalDrawer> & {
  __designMode?: 'design'
  operations?: IModalOperationProps[]
}

export interface IModalAction {
  show: () => void
  hide: () => void
  hidden: () => void
}

interface IModalOperationProps {
  id: string
  content: string
  type: string
  action: string
}

export default class ProDrawer extends BaseDialog {
  render() {
    const innerProps = this.transformProps()

    return (
      <OriginalDrawer
        {...this.props}
        {...innerProps}
        onClose={innerProps.onCancel}
      />
    )
  }
}
