 var lst = document.getElementById("infi-list");
        let nxt =1;        
        loadmore = () =>{
            for (let i = 0; i < 20; i++){
                let txt = document.createTextNode("item " +nxt++);
                let li = document.createElement('li').innerText=txt;
                let br = document.createElement('br');
                lst.appendChild(li);
                lst.appendChild(br);
            }           
        }       
loadmore();

lst.addEventListener('scroll' ,function(){
    if(lst.scrollTop + lst.clientHeight >= lst.scrollHeight) {
		loadmore();
	}	
});