import ajax from "@/common/ajax";

const request = ajax;
//重写登陆接口
const login = (data) => request.post(`/api/login?${data}`);



// const getMenu = () => request.get("/getmenu");
const getMenuList = () => request.get("/getmenulist");
const addMenu = (data) => request.post("/addmenu", data);
const addMsg = (data) => request.post("/addmessage", data);
const getMsg = (data) => request.post("/getmessage", data);
const getPower = () => request.get("/getpower");
const delMenu = (data) => request.post("/delmenu", data);
const getMenuInfo = (data) => request.post("/getmenuinfo", data);
const editMenu = (data) => request.post("/editmenuinfo", data);
const getVisitorList = (data) => request.post("/getiplist", data);
const getVisitorData = () => request.get("/getvisitordata");
const getUserList = (data) => request.post("/getuserlist", data);
const addUser = (data) => request.post("/adduserinfo", data);
const getUser = (data) => request.post("/getuserinfo", data);
const editUser = (data) => request.post("/edituserinfo", data);
const editType = (data) => request.post("/edittype", data);
const addType = (data) => request.post("/addtype", data);
const getFeedBack = (data) => request.post("/getfeedback", data);
const reply = (data) => request.post("/reply", data);
export {
  login,
  addMenu,
  addMsg,
  getMsg,
  getPower,
  delMenu,
  getMenuInfo,
  editMenu,
  getVisitorList,
  getVisitorData,
  getUserList,
  addUser,
  getUser,
  editUser,
  editType,
  addType,
  getMenuList,
  getFeedBack,
  reply,
};
