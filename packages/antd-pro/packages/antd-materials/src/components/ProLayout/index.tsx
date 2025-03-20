import {
  ProLayout,
  SettingDrawer,
  ProSettings
} from '@ant-design/pro-components'
import { ProConfigProvider } from '@ant-design/pro-provider'
import React, { useState } from 'react'

export default props => {
  const [pathname, setPathname] = useState(props?.location?.pathname)
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(
    props?.settingsdata || {}
  )

  const content = () => {
    return props?.content
  }

  return (
    <ProConfigProvider dark={props?.dark}>
      <ProLayout
        prefixCls="my-prefix"
        splitMenus
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/')
            }}
          >
            {dom}
          </div>
        )}
        {...props}
        {...settings}
        location={{
          pathname
        }}
      >
        {content()}
        {!props?.devops ? null : (
          <SettingDrawer
            pathname={pathname}
            settings={settings}
            onSettingChange={changeSetting => {
              setSetting(changeSetting)
              props.onSettingChange({
                settingsdata: changeSetting
              })
            }}
            // disableUrlParams={false}
          />
        )}
      </ProLayout>
    </ProConfigProvider>
  )
}
