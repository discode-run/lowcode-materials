import * as React from '.pnpm/@types+react@18.2.46/node_modules/@types/react'
import { Modal as OriginalProModal } from '.pnpm/antd@5.9.0_moment@2.30.1/node_modules/antd/es'
import { BaseDialog } from '../../shared/base/BaseDialog'

interface IModalOperationProps {
  content: string
  type: string
  action: string
}

export type IProModalProps = React.ComponentProps<typeof OriginalProModal> & {
  __designMode?: 'design'
  operations?: IModalOperationProps[]
}

export default class ProModal extends BaseDialog {
  render() {
    const innerProps = this.transformProps()

    return (
      <OriginalProModal
        {...this.props}
        {...innerProps}
        onClose={innerProps.onCancel}
      />
    )
  }
}
