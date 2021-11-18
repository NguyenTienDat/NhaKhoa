getUserByID();
function getUserByID() {
    const e = JSON.parse(sessionStorage.getItem('user_emax'));
    console.log(e);
    //getData('Emax/${ma_chung_nhan}', null, (e) => {
    const html = `<tbody>
            <tr>
                <th>Mã chứng nhận:</th>
                <td>${e.ma_chung_nhan}</td>
            </tr>
            <tr>
                <th>Tên khách hàng:</th>
                <td>${e.name}</td>
            </tr>
            <tr>
                <th>Nha khoa</th>
                <td>${e.nha_khoa}</td>
            </tr>
            <tr>
                <th>Labo</th>
                <td>${e.labo}</td>
            </tr>
            <tr>
                <th>Phục hình:</th>
                <td>${e.phuc_hinh}</td>
            </tr>
            <tr>
                <th>Vật liệu:</th>
                <td>${e.vat_lieu}</td>
            </tr>
            <tr>
                <th>Xuất xứ:</th>
                <td>${e.xuat_xu}</td>
            </tr>
            <tr>
                <th>Ngày bắt đầu:</th>
                <td>${e.start_date}</td>
            </tr>
            <tr>
                <th>Ngày kết thúc:</th>
                <td>${e.end_date}</td>
            </tr>
        </tbody>
        `;
    $('#table-info').html(html);
    // }, (req) => {
    //     alert(req.responseJSON.message);
    // });
}


