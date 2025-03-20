import * as React from 'react'
import { Component, createRef } from 'react'
import {
  ProTable as OriginalProTable,
  ActionType,
  ProColumnType
} from '@ant-design/pro-components'
import type { ProFormInstance } from '@ant-design/pro-components'
import type { TablePaginationConfig } from 'antd'
import { Tag } from 'antd'
import zhCNIntl from 'antd/es/locale/zh_CN'
import enUSIntl from 'antd/es/locale/en_US'
import { defineGetterProperties, isPlainObj } from '../../shared/index'
// @ts-ignore
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

export type IProTableProps = React.ComponentProps<typeof OriginalProTable> & {
  columns?: IExtendsColType[]
  intl?: string
  onValuesChange?: FormProps['onValuesChange']
  toolBarRenderOpen?: boolean
}

const intlMap = {
  zhCNIntl,
  enUSIntl
}

class ProTable extends Component<IProTableProps, any> {
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
    console.log('fuckyou')
  }

  render() {
    const { columns = [], rowSelection, intl, onValuesChange, toolBarRender, toolBarRenderOpen } = this.props
    const { selectedRowKeys, collapsed } = this.state

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

    const data = Array.isArray(this.props.dataSource) ? this.props.dataSource : []
    const dataSource = this.props.request ? undefined : data

    const toolBarRenderFunc = () => {
      if (toolBarRenderOpen) {
        if (toolBarRender === false) {
          return null
        }
        return toolBarRender
      }
      return false
    }

    return (
      <OriginalProTable
        {...this.props}
        locale={intlMap[intl || 'zhCNIntl']}
        dataSource={dataSource}
        search={
          typeof this.props.search === 'boolean'
            ? this.props.search
            : {
                ...this.props.search,
                collapsed,
                onCollapse: () => {
                  if (this.props.search === false) return
                  this.setState({
                    collapsed: !collapsed
                  })
                  if (this.props.search?.onCollapse) {
                    this.props.search.onCollapse(!collapsed)
                  }
                }
              }
        }
        rowSelection={
          rowSelection
            ? {
                ...rowSelection,
                defaultSelectedRowKeys: selectedRowKeys,
                selectedRowKeys,
                onChange: (keys: any[], rows: any[]) => {
                  rowSelection?.onChange?.(keys, rows)
                  this.onSelectRowsChange(keys, rows)
                }
              }
            : false
        }
        columns={processedColumns}
        actionRef={this.actionRef}
        formRef={this.formRef}
        form={{ onValuesChange }}
        toolBarRender={toolBarRenderFunc()}
      />
    )
  }
}

export default ProTable
