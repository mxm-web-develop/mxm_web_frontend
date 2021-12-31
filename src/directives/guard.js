"use strict";
exports.__esModule = true;
var AUTH;
(function (AUTH) {
    AUTH[AUTH["CREATOR"] = 1] = "CREATOR";
    AUTH[AUTH["SUPPER"] = 2] = "SUPPER";
    AUTH[AUTH["NORMAL"] = 3] = "NORMAL";
    AUTH[AUTH["CHECK_STAFF"] = 4] = "CHECK_STAFF";
    AUTH[AUTH["ADD_STAFF"] = 5] = "ADD_STAFF";
    AUTH[AUTH["EDIT_STAFF"] = 6] = "EDIT_STAFF";
    AUTH[AUTH["DELETE_STAFF"] = 7] = "DELETE_STAFF";
    AUTH[AUTH["CHECK_ROLE"] = 8] = "CHECK_ROLE";
    AUTH[AUTH["ADD_ROLE"] = 9] = "ADD_ROLE";
    AUTH[AUTH["EDIT_ROLE"] = 10] = "EDIT_ROLE";
    AUTH[AUTH["DELETE_ROLE"] = 11] = "DELETE_ROLE";
})(AUTH || (AUTH = {}));
function insert(el, binding) {
    var elementStyle = el.style;
    var permissions = binding.value;
    if (!permissions[1].length)
        return;
    permissions[1].map(function (a) {
        if (permissions[0] === a.id) {
            if (a.has_privilege === false) {
                console.log(el);
                elementStyle.display = 'none';
            }
        }
    });
}
exports["default"] = {
    //指令名称
    name: 'guard',
    insert: insert
};
