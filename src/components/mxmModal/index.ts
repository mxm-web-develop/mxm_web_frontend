//使用import.meta.globEager读取components文件夹的文件，以后缀名ts区分
// const componentsList = import.meta.globEager("../mxmModal/**");
import Modal from './mxmModal'

let List = {} as any
export default function (app:any) {
  List[`$${Modal.name}`] =Modal;
  app.config.globalProperties[`$${Modal.name}`] =Modal;
}

//抛出函数组件，用于导入使用
export const MxmModal = List;
