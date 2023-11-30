

const snippets = [
  {
    "title": "高级菜单",
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
    "schema": {
      "componentName": "customNav",
      "props": {
        items: [
          {
            key: '1',
            label: '菜单项1',
            children: [
              {
                key: '1-1',
                label: '子菜单项1',
              },
              {
                key: '1-2',
                label: '子菜单项2',
              },
            ],
          },
          {
            key: '2',
            label: '菜单项2',
          },
        ],
        triggerSubMenuAction: 'click',
        mode: "inline",
        theme: "light",
        "icon.name": "icon-tuichu",
        "icon.url": [
          '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
          '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
        ]
      }
    }
  }
];


export default {
  snippets,
  "componentName": "customNav",
  "title": "高级菜单",
  "docUrl": "",
  screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
  category: '导航',
  props: [
    {
      name: 'items',
      title: '菜单项',
      setter: {
        componentName: 'JsonSetter',
      },
    },
    {
      name: 'defaultOpenKeys',
      title: {
        label: '初始展开菜单项',
        tip: '初始展开的 SubMenu 菜单项 key 数组',
      },
      setter: {
        componentName: 'JsonSetter',

      },
    },
    {
      name: 'defaultSelectedKeys',
      title: { label: '初始选中的菜单项', tip: '初始选中的菜单项 key 数组' },
      setter: {
        componentName: 'JsonSetter',

      },
    },
    {
      name: 'forceSubMenuRender',
      title: {
        label: '子菜单预渲染',
        tip: '在子菜单展示之前就渲染进 DOM',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'inlineCollapsed',
      title: { label: '是否收起', tip: 'inline 时菜单是否收起状态' },
      propType: 'bool',
    },
    {
      name: 'inlineIndent',
      title: { label: '缩进宽度', tip: 'inline 模式的菜单缩进宽度' },
      propType: 'number',
    },
    {
      name: 'mode',
      title: {
        label: '菜单类型',
        tip: '菜单类型，现在支持垂直、水平、和内嵌模式三种',
      },
      defaultValue: 'inline',
      propType: { type: 'oneOf', value: ['vertical', 'horizontal', 'inline'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '垂直',
              value: 'vertical',
            },
            {
              title: '水平',
              value: 'horizontal',
            },
            {
              title: '内嵌',
              value: 'inline',
            }
          ],
        },
      },
    },
    {
      name: 'multiple',
      title: { label: '是否允许多选', tip: '是否允许多选' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'openKeys',
      title: {
        label: '当前展开的菜单项',
        tip: '当前展开的 SubMenu 菜单项 key 数组',
      },
      setter: {
        componentName: 'JsonSetter',

      },
    },
    {
      name: 'selectable',
      title: { label: '是否允许选中', tip: '是否允许选中' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'selectedKeys',
      title: { label: '当前选中项', tip: '当前选中的菜单项 key 数组' },
      // propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'JsonSetter',

      },
    },
    {
      name: 'style',
      title: { label: '根节点样式', tip: '根节点样式' },
      propType: 'object',
    },
    {
      name: 'subMenuCloseDelay',
      title: {
        label: '关闭延时',
        tip: '用户鼠标离开子菜单后关闭延时，单位：秒',
      },
      propType: 'number',
    },
    {
      name: 'subMenuOpenDelay',
      title: {
        label: '开启延时',
        tip: '用户鼠标进入子菜单后开启延时，单位：秒',
      },
      propType: 'number',
    },
    {
      name: 'theme',
      title: { label: '主题颜色', tip: '主题颜色' },
      propType: { type: 'oneOf', value: ['light', 'dark'] },
      defaultValue: 'light',
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '正常模式',
              value: 'light',
            },
            {
              title: '黑色模式',
              value: 'dark',
            }
          ],
        },
      },
    },
    {
      name: 'onClick',
      title: { label: '点击 MenuItem 调用函数', tip: '点击 MenuItem 调用函数' },
      propType: 'func',
    },
    {
      name: 'onDeselect',
      title: {
        label: '取消选中时调用函数',
        tip: '取消选中时调用，仅在 multiple 生效',
      },
      propType: 'func',
    },
    {
      name: 'triggerSubMenuAction',
      title: {
        label: '触发方式',
        tip: '展开/关闭的触发行为',
      },
      propType: { type: 'oneOf', value: ['hover', 'click'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '触摸',
              value: 'hover',
            },
            {
              title: '点击',
              value: 'click',
            }
          ],
        },
      },
    },
    {
      name: 'onOpenChange',
      title: { label: 'SubMenu 展开/关闭的回调', tip: '展开/关闭的回调' },
      propType: 'func',
    },
    {
      name: 'onSelect',
      title: { label: '被选中时调用函数', tip: '被选中时调用函数' },
      propType: 'func',
    },
    {
      name: 'overflowedIndicator',
      title: { label: '折叠图标', tip: '自定义 Menu 折叠时的图标' },
      propType: 'node',
    },
    {
      title: 'icon配置',
      display: 'block',
      type: 'group',
      items: [
        // {
        //   name: 'icon.name',
        //   title: { label: 'icon标签', tip: '自定义图标,iconfont.cn' },
        //   setter: {
        //     componentName: 'StringSetter',
        //   },
        // },
        {
          name: 'icon',
          title: { label: 'icon地址', tip: '自定义 icon地址,iconfont.cn' },
          setter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'url',
                    title: { label: '地址', tip: '地址' },
                    setter: {
                      componentName: 'ArraySetter',
                      props: {
                        itemSetter: {
                          componentName: 'StringSetter',
                        }
                      }
                    },
                  },
                ],
              },
            },
          },
        },



        {
          name: 'icon.style',
          title: 'icon样式',
          type: 'group',
          extraProps: {
            display: 'entry',
          },
          items: [
            {
              name: 'icon.style',
              title: {
                label: '样式设置',
                tip: '自定义 icon样式',
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block',
              },
            },
          ],
        },
      ]
    },

  ],
  "configure": {

    "supports": {
      "style": true,
      events: [
        {
          name: 'onClick',
          template:
            "onClick({item,key,keyPath,domEvent},${extParams}){\n// 点击 MenuItem 调用此函数\nconsole.log('onClick',item,key,keyPath,domEvent);}",
        },
        {
          name: 'onDeselect',
          template:
            "onDeselect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 取消选中时调用，仅在 multiple 生效\nconsole.log('onDeselect',item,key,keyPath,selectedKeys,domEvent);}",
        },
        {
          name: 'onOpenChange',
          template:
            "onOpenChange(openKeys,${extParams}){\n// SubMenu 展开/关闭的回调\nconsole.log('onOpenChange',openKeys);}",
        },
        {
          name: 'onSelect',
          template:
            "onSelect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 被选中时调用\nconsole.log('onSelect',item,key,keyPath,selectedKeys,domEvent);}",
        },
      ],
    },
    "component": {}
  }
};



