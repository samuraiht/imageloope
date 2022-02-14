window.addEventListener('load', () => {
    const loope = document.getElementById('loope'),
        zoomImage = document.getElementById('zoomimage'),
        scopeTarget = document.getElementById('scopetarget');
    let scopeImageHeight = zoomImage.clientHeight;
// マウスカーソルが乗ったとき
    scopeTarget.addEventListener('mouseover', e => {
        loope.style.display = 'block';
        zoomImage.setAttribute('src', scopeTarget.src);
        zoomImage.setAttribute('alt', scopeTarget.alt);
        scopeImageHeight = zoomImage.clientHeight;
        const offset = scopeTarget.getBoundingClientRect();
// eとoffsetとscroll関連
        const nowX = e.clientX - offset.left, nowY = e.clientY - offset.top;
        zoomImage.style.marginLeft = (-2 * nowX) + 'px';
        zoomImage.style.marginTop = (-2 * nowY) + 'px';
    });
    scopeTarget.addEventListener('mousemove', e => {
        const offset = scopeTarget.getBoundingClientRect();
// eとoffsetとscroll関連
        const nowX = e.clientX - offset.left, nowY = e.clientY - offset.top;
        let mLeft = -2 * nowX + 200, mTop = -2 * nowY + 200;
        if(mLeft > 0) mLeft = 0;
        if(mTop > 0) mTop = 0;
        // -400 <- (ルーペ内の)画像の横幅(800px) - ルーペの横幅(400px)
        if(mLeft < -400) mLeft = -400;
        if(mTop < -scopeImageHeight + 400) mTop = -scopeImageHeight + 400;
        // ??? <- (ルーペ内の)画像の高さ(auto) - ルーペの高さ(400px)
        zoomImage.style.marginLeft = mLeft + 'px';
        zoomImage.style.marginTop = mTop + 'px';
    });
});