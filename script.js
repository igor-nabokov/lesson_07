var memos, massage;

window.onload = function() {
	memos = document.getElementById("memos");
	massage = document.getElementById("massage");
}

function addMemo() {
	if (massage.value != "") {
		var elem = document.createElement('p');
		elem.className = "memo";
		elem.innerHTML = massage.value;
		memos.appendChild(elem);
		massage.value = "";
	}
}

