/**
 * @description 列表项的功能实现
 * @author Hans
 */
let statusEdit = false;
let statusMenu = false;
let backupEdit = null;
let backupDel = null;

let inputPiece = $("<input></input>").attr({
    "type" : "input",
    "value" : "",
    "id" : "piece-input"
}).css({
    "border": "0",
    "margin": "0",
    "height": "16px",
    "width": "100%",
    "font-size": "13px",
    "place-self": "center start"
});

// let clickMenu = $(`<div class="clickMenu">
//                     <div class="piece--button__del click" id="button-del">删除</div>
//                 </div>`);

let addPiece = (() => {
    let counter = 0;
    return () => {
        //这里还有操作空间
        return $(`<div class="piece">
                    <i class="iconfont click icon-todolist-choose piece--selectBox selected" id="piece-selectBox"></i>
                    <div class="piece--text click selected" id="piece-text"></div>
                    <i class="iconfont click icon-more piece--buttons click selected" id="piece-buttons"></i>
                    <div class="piece--menu" id="piece-menu">
                        <div class="piece--button__del click" id="button-del">删除</div>
                    </div>
                </div>`).attr({
            "index" : counter++,
        });
    }
})();


let edit = (p) => {

    backupEdit = p.clone(true,true);

    inputPiece.val(p.text());

    p.replaceWith(inputPiece);
    inputPiece.focus();
    statusEdit = true;
    console.log("edit()执行完毕")
    
}
let exitEdit = (status) => {
    
    if (status) {
        console.log("已保存修改");
        backupEdit.text(inputPiece.val()).replaceAll(inputPiece);
        inputPiece.val("");
        statusEdit = false;
    } else {
        console.log("放弃修改！");
        backupEdit.replaceAll(inputPiece);
        inputPiece.val("");
        statusEdit = false;
    }
    
    
}

let add = (p) => {
    let pieceAdd = addPiece();
    p.append(pieceAdd);
    console.log(pieceAdd.find(".piece--text"));
    edit(pieceAdd.find(".piece--text"));
    console.log("add()执行完毕");
}

let del = (p) => {
    backupDel = p.detach();

}

let giveUpDel = () => {
    $("#pieces").append(backupDel);

}

$(document).keypress((e) => {
    console.log("检测到键盘输入！");
    console.log(e.keyCode);
    switch (e.keyCode)
    {
        case 27:
            if (!statusEdit) {
                console.log("ESC确认！");
                exitEdit(false);
                break;
            }
        case 13:
            if (statusEdit) {
                console.log("回车确认编辑！");
                exitEdit(true);
                break;
            }

    }
});

$(document).on("click", function (e) {
    console.log("点击事件触发!");
    console.log("点击的元素是：" + $(e.target)[0]);
    
    
    //确保已退出“编辑”、“弹出菜单”状态
    if (statusMenu) {
        if ($(e.target).attr("id") == "button-del") {
            del($(e.target).parent().parent());
            console.log("该piece已删除");
        }
        $("[id='piece-buttons']").css({
            "display": "block"
        });
        $("[id='piece-menu']").css({
            "display": "none"
        });
    }
    if (e.target !== inputPiece[0] && $("#piece-input")[0] !== undefined && statusEdit) {
        exitEdit(true);
        console.log("编辑时点击其他地方!");
    }


    if ($(e.target).attr("id") == "piece-buttons") {
        console.log("点击菜单！");
        console.log(e.pageX);
        console.log(e.pageY);
        $(e.target).css({
            "display": "none"
        });
        $(e.target).next().css({
            "left": e.pageX,
            "top": e.pageY,
            "display": "block"
        });
        statusMenu = true;
        return;
    };
    if ($(e.target).attr("id") == "button-add") {
        console.log($(e.target).parent().parent().find("#pieces"));

        add($(e.target).parent().parent().find("#pieces"));
        return;
    }
    if ($(e.target).attr("id") == "piece-text") {
        if (statusEdit) {
            console.log("有piece正在修改！")
            exitEdit(true);
            edit($(e.target));
            return;
        } else {
            console.log("触发修改函数");
            edit($(e.target));
            return;
        }
        
    }
    
    
});





//export { edit,add,del };