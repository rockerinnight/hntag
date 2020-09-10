// lấy lại danh sách ID các món đã chọn từ lS
let addedIDList = localStorage.getItem("addedIDList").split(",");

// tìm các món đã chọn
let addedItemList = [];
for (let index = 0; index < itemList.length; index++) {
    const item = itemList[index];
    if (item.id === addedIDList[index]) {
        addedItemList.push(item);
    }
}

// hiển thị danh sách món đã chọn
function displayCart(data) {
    let s = '';
    let total = 0;
    for (let index = 0; index < data.length; index++) {
        const addedItem = data[index];
        total += addedItem.price * Math.pow(10, 3);
        s += `
            <tr>
                <td>${addedItem.name}</td>
                <td>1</td>
                <td>${addedItem.price * Math.pow(10, 3)}</td>
                <td>${addedItem.price * Math.pow(10, 3)}</td>
                <td>
                    <button style="background-color: red; font-weight: lighter;" type="button"
                        class="fa fa-trash btn"></button>
                </td>
            </tr>
            `
    }
    s += `
        <tr>
            <td></td>
            <td colspan="2" style="font-weight: bold">Tổng tiền</td>
            <td>${total}</td>
            <td colspan="1"></td>
        </tr>
        <tr>
            <td style="text-align: left;">
                <a href="danh-sach-mon.html">
                    <button style="background-color: gold;" type="button" class="btn">❮ Danh sách
                        món</button></a>
            </td>
            <td colspan="3"></td>
            <td>
                <a href="thanh-toan.html">
                    <button style="background-color: gold;" type="button" class="btn">Thanh toán
                        ❯</button></a>
            </td>
        </tr>
        `
    document.getElementById("cart-body").innerHTML = s;
}
displayCart(addedItemList);