function showtips(id, info) {
	// 1.获取提醒标签元素
	// alert(id);
	document.getElementById(id + "span").innerHTML = "<font id='"+id+"tips' color='gray'>" + info + "</font>";
	// eValue = document.getElementById(id+"span");
	// alert(eValue.id);

}

function checkifblank(id) {
	uValue = document.getElementById(id).value;
	if (uValue == "") {
		alert(id+"不能为空");
	}else{
		var parent = document.getElementById(id+"span");
		var child = document.getElementById(id+"tips");
		parent.removeChild(child);
		
	}

}

function checkpwd(){
	pValue = document.getElementById("password").value;
	rpValue = document.getElementById("repassword").value;
	if(pValue != rpValue){
		document.getElementById("repasswordspan").innerHTML = "<font color='red'>密码不一致</font>"
	}
	// alert(pValue);
}
// alert("123");
