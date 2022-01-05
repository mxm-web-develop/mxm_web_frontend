import {DirectiveBinding} from 'vue'

export interface item  {
    keyword:string,
    link?:string,
    color?:'#F13842',
    size?:'32px'
}

export default {
    created(el:HTMLElement, binding:DirectiveBinding){
    let innerStr = el.innerText
    let data:item[] = binding.value
    if(!data) return
    data.forEach((i:item)=>{
        innerStr = innerStr.replaceAll(i.keyword,i.link?
            `<a href='${i.link}' style='font-size:${i.size};color:${i.color}'>${i.keyword}</a>`:
            `<span style='font-size:${i.size};color:${i.color}'>${i.keyword}</span>`)
    })
    el.innerHTML = `${innerStr}`
    return
    }
}
