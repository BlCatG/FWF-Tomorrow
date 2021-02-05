
let statusEdit = false;
let statusMenu = false;
let backupEdit = null;
let backupDel = null;

let inputPiece = $("<input></input>").attr({
    "type" : "input",
    "value" : "",
    "id" : "piece-input"
});

// let clickMenu = $(`<div class="clickMenu">
//                     <div class="piece--button__del click" id="button-del">删除</div>
//                 </div>`);

let addPiece = (() => {
    let counter = 0;
    return () => {
        //这里还有操作空间
        return $(`<div class="piece">
                    <div class="piece--selectBox click" id="piece-selectBox">O</div>
                    <div class="piece--text click" id="piece-text">文字</div>
                    <div class="piece--buttons click" id="piece-buttons">ooo</div>
                    <div class="piece--menu" id="piece-menu">
                        <div class="piece--button__del click" id="button-del">删除</div>
                    </div>
                </div> `).attr({
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
    
}
let exitEdit = (status) => {
    if (inputPiece.val() !== "") {
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
    } else {
        inputPiece.remove();
        console.log($("#piece-input")[0]);
    }
    
}

let add = () => {
    let p = addPiece();
    $("#pieces").append(p);
    edit(p.find("[class='piece--text']"));
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
        // case 27:
        //     console.log("ESC确认！");
        //     exitEdit(false);
        //     break;
        case 13:
            console.log("回车确认！");
            exitEdit(true);
            break;
        

    }
});

$(document).on("click", function (e) {
    console.log("点击事件触发!");
    console.log($(e.target)[0]);
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

        add();
        return;
    }
    if ($(e.target).attr("id") == "piece-text") {
        if (statusEdit) {
            console.log("有piece正在修改！")
            exitEdit(true);
            edit($(e.target));
            //此处应该保存正在编辑的piece-text，并退出编辑
            return;
        } else {
            console.log("触发修改函数");
            edit($(e.target));
            return;
        }
        
    }
    if (e.target !== inputPiece[0] && $("#piece-input")[0] !== undefined && statusEdit) {
        exitEdit(true);
        console.log("编辑时点击其他地方!");

    }
    if (statusMenu) {
        if ($(e.target).attr("id") == "button-del") {
            del($(e.target).parent().parent());
            console.log("该piece已删除")
        }
        $("[id='piece-buttons']").css({
            "display": "block"
        });
        $("[id='piece-menu']").css({
            "display": "none"
        });
    }
    else {
        console.log("点击菜单以外地方");
        statusMenu = false;
        return;
    }
});





export { edit,add,del };