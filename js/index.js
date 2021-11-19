function check() {
    const txtproductCode = $('#txtproductCode').val().trim();
    const txtPhone = $('#txtPhone').val().trim();

    if (!txtproductCode && !txtPhone) {
        alert('Vui lòng nhập thông tin!');
        return;
    }
    const query = {"$or": [{"ma_chung_nhan": txtproductCode}, {phone: txtPhone}]};
    
    getData('emax', query, (e) => {
        const user = e.find(item => (item.ma_chung_nhan && item.ma_chung_nhan.trim() == txtproductCode && txtproductCode) || (item.phone && item.phone.trim() == txtPhone));
        if (user) {
            sessionStorage.setItem('user_emax', JSON.stringify(user));
            window.location.replace('view.html');
        } else {
            alert('Thông tin không đúng!');
        }
    }, (req) => {
        alert(req.responseJSON.message);
    });
    console.log('check');
}