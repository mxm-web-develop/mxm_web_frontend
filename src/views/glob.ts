import { App, Component } from 'vue'
// import  {extname,basename} from 'path'
interface FileType {
    [key: string]: Component
}

// 导入 globComponents 下面的 所有 .vue文件
const files: Record<string, FileType> = import.meta.globEager("/src/views/*.vue")
const globComponentsMount = (app: App): void => {
    Object.keys(files).forEach((c: string) => {
        const component = files[c]?.default
        console.log(component.name);
        app.component(component.name as string, component)
    })
}

const asyncPageWhitOptions =(path:string)=> {
    return {
      loader:()=>import(path),
      delay:200,
      timeout:3000,
      error:`<div>error</div> `,
      loading:`<div>loading</div>`
    }
  }
const componentsRenderDynamically = ()=>{
    let components:any = {} 
    Object.entries(files).forEach(e=>{
        const fileFormat = e[0].substring(e[0].lastIndexOf('.'))
        const path= e[0].split('.')[0]
        const importPath ='.'+e[0].substring(e[0].lastIndexOf('/'))
        const cname = path.substring(path.lastIndexOf('/')).slice(1)
        const cc = e[1] as Component
        if(fileFormat === '.vue'){
            const c = asyncPageWhitOptions(importPath)
            components[cname] = c   
        }  
    })
    console.log(components);
    return components
}



export {
    globComponentsMount,
    componentsRenderDynamically}