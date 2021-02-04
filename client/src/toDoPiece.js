
let statusEdit = false;
let backupEdit = null;
let backupDel = null;

let inputPiece = $("<input></input>").attr({
    "type" : "input",
    "value" : "",
    "id" : "piece-input"
});



let addPiece = (() => {
    let counter = 0;
    return () => {
        //这里还有操作空间
        return $(`<div name="piece">
                    <div name="piece-text"></div>
                    <div id="piece-buttons">123</div>
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
    edit(p.find("[name='piece-text']"));
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
    if ($(e.target).attr("id") == "button-add") {

        add();
        return;
    }
    if ($(e.target).attr("name") == "piece-text") {
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
        console.log("点击其他地方!");
        return;
    } else {
        console.log("不是在编辑时点击其他地方");
        return;
    }
});




$("#button-del").on("click", (e) => {

    del($(e.target));

});

export { edit,add,del };