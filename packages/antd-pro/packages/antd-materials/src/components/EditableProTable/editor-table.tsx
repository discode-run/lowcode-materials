import * as React from 'react'
import { Component, createRef } from 'react'
import {
  EditableProTable as OriginalProTable,
  ActionType,
  ProColumnType
} from '@ant-design/pro-components'
import { ProConfigProvider } from '@ant-design/pro-provider'
import type { ProFormInstance } from '@ant-design/pro-components'
import type { TablePaginationConfig } from 'antd'
import { Tag, ConfigProvider } from 'antd'
import zhCNIntl from 'antd/es/locale/zh_CN'
import enUSIntl from 'antd/es/locale/en_US'
import { defineGetterProperties, isPlainObj } from '../../shared/index'
import { FormProps } from 'rc-field-form/lib/Form'

interface IValueEnum {
  text: string
  value: string
  status: string
}

type IExtendsColType = ProColumnType & {
  valueEnum?: Record<string, IValueEnum>
  renderTag?: boolean
}

export type EditableProTableProps = React.ComponentProps<typeof OriginalProTable> & {
  columns?: IExtendsColType[]
  intl?: string
  onValuesChange?: FormProps['onValuesChange']
  toolBarRenderOpen?: boolean
  recordCreatorProps?: any
}

const intlMap = {
  zhCNIntl,
  enUSIntl
}

class EditableProTable extends Component<EditableProTableProps, any> {
  state = {
    selectedRowKeys: (this.props.rowSelection as any)?.selectedRowKeys ?? [],
    selectedRows: [],
    collapsed:
      this.props.search === false
        ? undefined
        : this.props.search?.defaultCollapsed
  }

  actionRef = createRef<ActionType>()
  formRef = createRef<ProFormInstance>()

  onSelectRowsChange = (selectedRowKeys: any[], selectedRows: any[]) => {
    this.setState({
      selectedRowKeys,
      selectedRows
    })
  }

  getSelectedRowKeys() {
    return this.state.selectedRowKeys
  }

  getSelectedRows() {
    return this.state.selectedRows
  }

  setSelectedRowKeys(selectedRowKeys: any[]) {
    this.setState({
      selectedRowKeys: Array.isArray(selectedRowKeys)
        ? selectedRowKeys
        : [selectedRowKeys]
    })
  }

  componentDidMount() {
    defineGetterProperties(this, [this.actionRef, this.formRef])
  }

  render() {
    const { columns = [], rowSelection, intl, onValuesChange, toolBarRender, toolBarRenderOpen, recordCreatorProps = {} } = this.props
    const { selectedRowKeys, collapsed } = this.state

    if (this.props?.rowKey && recordCreatorProps.record) {
      recordCreatorProps.record[this.props.rowKey] = (Math.random() * 10000000).toFixed(0)
    }

    // 处理标签渲染
    const processedColumns = columns.map((item) => {
      if (isPlainObj(item.valueEnum) && item.renderTag === true) {
        return {
          ...item,
          render: (_: any, record: any) => {
            const colValue = record[item.dataIndex as string]
            const target = item.valueEnum?.[colValue]
            return target?.text ? (
              <Tag color={target.status?.toLowerCase()}>{target.text}</Tag>
            ) : (
              '-'
            )
          }
        }
      }
      return item
    })

    const pagination = this.props.pagination as TablePaginationConfig
    if (typeof pagination?.current === 'number') {
      delete pagination.current
    }
    if (typeof pagination?.total === 'number') {
      delete pagination.total
    }

    const toolBarRenderFunc = () => {
      if (toolBarRenderOpen) {
        if (toolBarRender === false) {
          return null
        }
        return toolBarRender
      }
      return false
    }

    const data = Array.isArray(this.props.dataSource) ? this.props.dataSource : []

    return (
          <OriginalProTable
            {...this.props}
            dataSource={data}
            recordCreatorProps={recordCreatorProps}
            rowSelection={
              rowSelection
                ? {
                    ...rowSelection,
                    defaultSelectedRowKeys: selectedRowKeys,
                    selectedRowKeys,
                    onChange: (keys: any[], rows: any[], info: any) => {
                      rowSelection?.onChange?.(keys, rows, info)
                      this.onSelectRowsChange(keys, rows)
                    }
                  }
                : false
            }
            value={this.props?.dataSource}
            columns={processedColumns}
            editableFormRef={this.formRef}
            form={{ onValuesChange }}
            toolBarRender={toolBarRenderFunc()}
          />
    )
  }
}

export default EditableProTable
