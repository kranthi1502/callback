var a=document.createElement("div");
a.innerHTML=""
document.body.appendChild(a);
a.style.color="red";
a.style.fontSize="100px";
a.style.textAlign="centre";
setTimeout(() => {
    a.innerHTML="10";
    setTimeout(() => {
        a.innerHTML="9";
        setTimeout(() => {
            a.innerHTML="8";
            setTimeout(() => {
                a.innerHTML="7";
                setTimeout(() => {
                    a.innerHTML="6";
                    setTimeout(() => {
                        a.innerHTML="5";
                        setTimeout(() => {
                            a.innerHTML="4";
                            setTimeout(() => {
                                a.innerHTML="3";
                                setTimeout(() => {
                                    a.innerHTML="2";
                                    setTimeout(() => {
                                        a.innerHTML="1";
                                        setTimeout(() => {
                                            a.innerHTML="Happy Independence day";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
