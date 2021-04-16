const RouterBasename = "/react-ant-admin";

// 假设这是ajax返回的数据

const menu = [
  {
    title: "主页",
    key: "home",
    path: "/home",
    type: [0, 1],
    icon: "icon_home",
  },
  {
    title: "图表",
    key: "table",
    path: "/table",
    type: [0, 1],
    icon: "icon_faimlyalbum",
    children: [
      {
        title: "表格",
        key: "t_table",
        path: "/table",
        type: [0, 1],
      },
      {
        title: "图表",
        key: "shape",
        path: "/shape",
        type: [0, 1],
      },
      {
        title: "表单",
        key: "form",
        path: "/form",
        type: [0, 1],
      },
    ],
  },
  {
    title: "拖拽组件",
    key: "drag",
    path: "/drag",
    type: [0, 1],
  },
  {
    title: "图标库",
    key: "icons",
    path: "/icons",
    type: [0, 1],
  },
  {
    title: "404页面",
    key: "404",
    path: "/test404",
    type: [0, 1],
  },
  {
    title: "权限路由",
    key: "power",
    path: "/power",
    type: [0, 1],
    children: [
      {
        title: "权限页：低级",
        key: "power1",
        path: "/1",
        type: [0, 1],
      },
      {
        title: "权限页：高级",
        key: "power0",
        path: "/0",
        type: [0],
      },
    ],
  },
];

function getMenus() {
  return new Promise((res, rej) => {
    let list = menu.map((item) => ({ ...item }));
    let data = list.map((i) => {
      if (i.children) {
        let temp = i.children.map((child) => {
          return {
            ...child,
            parentKey: i.key,
            path: i.path + child.path,
          };
        });
        i.children = temp;
      }
      i.parentKey = "";
      return i;
    });
    res(data);
  });
}

export { getMenus, RouterBasename };
