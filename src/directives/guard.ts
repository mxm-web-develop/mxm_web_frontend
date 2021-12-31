import {DirectiveBinding} from 'vue'

interface PrivilegeItem {
    has_privilege: boolean;
    id: number;
    name: string;
    position: number
    text: string
}


enum AUTH {
    CREATOR =1,
    SUPPER,
    NORMAL,
    CHECK_STAFF,
    ADD_STAFF,
    EDIT_STAFF,
    DELETE_STAFF,
    CHECK_ROLE,
    ADD_ROLE,
    EDIT_ROLE,
    DELETE_ROLE
}



type AuthData = PrivilegeItem[]
function insert(el:HTMLElement, binding:DirectiveBinding){
        let elementStyle = el.style
        let permissions = binding.value as [AUTH,AuthData]
        console.log(permissions,'死了快点减肥了；是肯德基疯狂了；收到就发了；看三大纪律开发建设了；可爱的');
        if(!permissions[1].length) return
        permissions[1].map(a=>{
            if(permissions[0] === a.id){
                if(a.has_privilege === false){
                    console.log(el);
                    elementStyle.display = 'none'
                }
            }
           
        })
     
    
    }


export default {
    //指令名称
    name: 'guard',
    insert
}
  