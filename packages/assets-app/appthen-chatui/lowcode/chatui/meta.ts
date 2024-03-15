
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const chatuiMeta: IPublicTypeComponentMetadata = {
  "componentName": "chatui",
  "title": "chatui",
  "docUrl": "",
  "screenshot": "",
  group: '高级组件',
  category: '对话类',
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/chatUI",
    "version": "0.1.0",
    "exportName": "chatui",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "initialMessages",
            "zh-CN": "初始消息"
          }
        },
        "name": "initialMessages",
        "setter": {
          "componentName": "JsonSetter",

        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "wideBreakpoint",
            "zh-CN": "宽屏断点"
          }
        },
        "name": "wideBreakpoint",
        "setter": {
          "componentName": "StringSetter",

        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "navbar",
            "zh-CN": "导航栏配置"
          }
        },
        "name": "navbar",
        "setter": {
          "componentName": "ObjectSetter",
          props: {
            config: {
              items: [
                {
                  name: 'title',
                  title: '标题',
                  setter: 'StringSetter',
                },
                {
                  name: 'logo',
                  title: 'logo',
                  setter: 'StringSetter',
                },

                {
                  name: 'className',
                  title: 'className',
                  setter: 'StringSetter',
                }
              ]
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'renderNavbar',
            'zh-CN': '导航栏渲染'
          },
        },
        name: 'renderNavbar',
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template: 'renderNavbar(props){\n// \nreturn "空" \n}'
          }
        }


      },

      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loadMoreText',
            'zh-CN': '加载更多文字'
          },
        },
        name: 'loadMoreText',
        setter: {
          componentName: 'StringSetter',
        }


      },

      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'renderBeforeMessageList',
            'zh-CN': '消息列表上方渲染'
          },
        },
        name: 'renderBeforeMessageList',
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template: 'renderBeforeMessageList(props){\n// \nreturn "空" \n}'
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'renderMessageContent',
            'zh-CN': '消息内容渲染'
          },
        },
        name: 'renderMessageContent',
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'renderMessageContent(msg,${extParams}){\n// \nreturn "空" \n}'
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'quickReplies',
            'zh-CN': '快捷回复'
          },
        },
        name: 'quickReplies',
        setter: [
          'JsonSetter',
          {

            componentName: 'ArraySetter',
            props: {
              itemSetter: {

                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
    
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'name',
                            'zh-CN': '名称'
                          },
                        },
                        name: 'name',
                        setter: {
                          componentName: 'StringSetter',
                        }
                      }, {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'code',
                            'zh-CN': '代码'
                          },
                        },
                        name: 'code',
                        setter: {
                          componentName: 'StringSetter',
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'icon',
                            'zh-CN': '图标'
                          },
                        },
                        name: 'icon',
                        setter: {
                          componentName: 'StringSetter',
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'img',
                            'zh-CN': '图片'
                          },
                        },
                        name: 'img',
                        setter: {
                          componentName: 'StringSetter',
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'isNew',
                            'zh-CN': '是否新'
                          },
                        },
                        name: 'isNew',
                        setter: {
                          componentName: 'BoolSetter',
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'isHighlight',
                            'zh-CN': '是否高亮'
                          },
                        },
                        name: 'isHighlight',
                        setter: {
                          componentName: 'BoolSetter',
                        }
                      },
                    ],
                  },
                },
              }
            }},

          
        ]
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'quickRepliesVisible',
            'zh-CN': '快捷回复可见'
          },
        },
        name: 'quickRepliesVisible',
        setter: {
          componentName: 'BoolSetter',
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'renderQuickReplies',
            'zh-CN': '快捷回复渲染'
          },
        },
        name: 'renderQuickReplies',
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'renderQuickReplies(quickReplies,${extParams}){\n// \nreturn "空" \n}'
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'text',
            'zh-CN': '文本初始'
          },
        },
        name: 'text',
        setter: {
          componentName: 'StringSetter',
        }
      }, {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': '文本占位符'
          },
        },
        name: 'placeholder',
        setter: {
          componentName: 'StringSetter',
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'inputType',
            'zh-CN': '输入框类型'
          },
        },
        name: 'inputType',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              { label: '文本', value: 'text' },
              { label: '音频', value: 'voice' },
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rightAction',
            'zh-CN': '右侧按钮类型'
          },
        },
        name: 'rightAction',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [


                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'img',
                      'zh-CN': '图片'
                    },
                  },
                  name: 'img',
                  setter: {
                    componentName: 'StringSetter',
                  }
                }
              ],
            },
          },

        }
      },

      {
        name: 'toolbar',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'toolbar',
            'zh-CN': '工具栏'
          },
        },
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [

                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'type',
                          'zh-CN': '类型'
                        },
                      },
                      name: 'type',
                      setter: {
                        componentName: 'StringSetter',
                      }
                    }, {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'title',
                          'zh-CN': '标题'
                        },
                      },
                      name: 'title',
                      setter: {
                        componentName: 'StringSetter',
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'icon',
                          'zh-CN': '图标'
                        },
                      },
                      name: 'icon',
                      setter: {
                        componentName: 'StringSetter',
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'img',
                          'zh-CN': '图片'
                        },
                      },
                      name: 'img',
                      setter: {
                        componentName: 'StringSetter',
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'render',
                          'zh-CN': '渲染'
                        },
                      },
                      name: 'render',
                      setter: {
                        componentName: 'SlotSetter',
                        initialValue: {
                          type: 'JSSlot',
                          params: ['route', 'params', 'routes', 'paths'],
                          value: [],
                        },
                      }
                    },
                  ],
                },
              },

            },
          },
        },

      },


    ],
    "supports": {
      "style": true,
      events: [
        {
          "name": "saveField",
          "description": "初始化完成",
          template:
          "saveField(ref){\n// \n this.setState({ref:ref}) \n}",
        },
        ,{
        "name": "onScroll",
        "description": "滚动事件",
        template: "onScroll(${extParams}){\n \n \n}",
      },
      {
        "name": "onRefresh",
        "description": "滚动事件",
        template: "onRefresh(${extParams}){\n \n \n}",
      },
      {
        "name": "onQuickReplyClick",
        "description": "快捷回复点击事件",
        template: "onQuickReplyClick(item,${extParams}){\n \n return '' \n}",
      },
      {
        "name": "onQuickReplyScroll",
        "description": "快捷回复滚动事件",
        template: "onQuickReplyScroll(${extParams}){\n \n return '' \n}",


      },
      {
        "name": "onInputFocus",
        "description": "输入框获取焦点事件",

      },
      {
        "name": "onInputChange",
        "description": "输入框内容变化事件",
        template: "onInputChange(type,text,${extParams}){\n \n return text \n}",

      },
      {
        "name": "onInputBlur",
        "description": "输入框失去焦点事件",

      },
      {
        "name": "onSend",
        "description": "发送事件",
        template: "onSend(type,text,${extParams}){\n \n return text \n}",

      },
      {
        "name": "onImageSend",
        "description": "图片发送事件",
        template: "onImageSend(file,${extParams}){\n \n return '' \n}",

      },
      {
        "name": "onInputTypeChange",
        "description": "输入框类型变化事件",
      },
      {
        "name": "onToolbarClick",
        "description": "工具栏点击事件",

        template: "onToolbarClick(e,${extParams}){\n \n return '' \n}",

      },
      {
        "name": "onAccessoryToggle",
        "description": "附件面板开关事件",
        template: "onAccessoryToggle(e,${extParams}){\n \n return '' \n}",

      },
      {
        "name": "onAccessoryToggle",
        "description": "工具栏打开/关闭回调 ",
        template: "onAccessoryToggle(e,${extParams}){\n \n return '' \n}",

      },

      ]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "chatUI",
    "screenshot": "https://cdn.appthen.cn/editor/assets/appthen-chatUI.svg",
    "schema": {
      "componentName": "chatui",
      "props": {
        navbar: {
          title: '智能助理',
        },
        initialMessages:[
          {
            type: 'text',
            content: { text: '主人好，我是智能助理，你的贴心小助手~' },
            user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
          },
        ],
        quickReplies: [

          {
            name: '短语1',
            isNew: true,
          },
          {
            name: '短语2',
            isHighlight: true,
          },
          {
            name: '短语3',
          },
        ],
        IconButtonProps: {
          img: "dgdfg"
        }
      }
    }
  }
];

export default {
  ...chatuiMeta,
  snippets
};
