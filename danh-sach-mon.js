// Tìm kiếm
function itemSearch() {
    let keyWord = (document.getElementById("key-word").value).toString().toLowerCase();
    if (keyWord !== "") {
        let newList = [];
        for (let index = 0; index < itemList.length; index++) {
            const item = itemList[index];
            if (item.name.toLowerCase().includes(keyWord) == true) {
                newList.push(item);
            }
            if (item.price.toString().includes(keyWord) == true) {
                newList.push(item);
            }
            if (item.address.toLowerCase().includes(keyWord) == true) {
                newList.push(item);
            }
            if (item.phoneNumber.toLowerCase().includes(keyWord) == true) {
                newList.push(item);
            }
        }
        if (newList.length !== 0) {
            displayMenu(newList);
        }
        else {
            document.getElementById("itemList").innerHTML = `<h4 style="margin-left: 9px">Không có kết quả phù hợp với từ khóa "${(document.getElementById("key-word").value).toString()}"`;
        }
    }
    else {
        displayMenu(itemList);
    }
}

// Hiển thị danh sách món mặc định
function displayMenu(data) {
    let s = '';
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        s += `
            <div class="card">
                <a  href="${item.review}" title="Đánh giá món ăn">
                    <img src="${item.image}" class="card-img-top"
                        alt="...">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                </div>
                <ul class="list-group list-group-flush" style="font-size: 15px;">
                    <li class="list-group-item" style="color:red; font-weight:bold; font-size: 20px">
                    ${(item.price - (item.discount * item.price) / 100) * Math.pow(10, 3)} VND</li>
                    <li class="list-group-item"> ${item.address}</li>
                    <li class="list-group-item font-italic">SĐT: ${item.phoneNumber}</li>
                </ul>
                <button id="item-${index}" class="buy" onclick="addToCart(this.id)">Thêm vào giỏ</button>
            </div>
            `
    }
    document.getElementById("itemList").innerHTML = s;
}
displayMenu(itemList);

// Sắp xếp danh sách món
function sorting() {
    let newList = [];
    let index = select.selectedIndex;
    if (index === 1) {
        newList = itemList.sort(function (a, b) {
            let priceSaleA = a.price - (a.price * a.discount) / 100;
            let priceSaleB = b.price - (b.price * b.discount) / 100;
            return priceSaleA - priceSaleB;
        });
        displayMenu(newList);
    }
    if (index === 2) {
        newList = itemList.sort(function (a, b) {
            let priceSaleA = a.price - (a.price * a.discount) / 100;
            let priceSaleB = b.price - (b.price * b.discount) / 100;
            return priceSaleB - priceSaleA;
        });
        displayMenu(newList);
    }
}

// Thêm món vào giỏ hàng
let amount = '';
let clickedIDList = [];
function addToCart(clickedID) {
    // hiệu ứng giao diện
    document.getElementById("cart").setAttribute("class", "dropdown animated pulse");
    document.getElementById("cart-button").setAttribute("style", "color: red;");
    // [code] thông báo "đã thêm món TÊN_MÓN vào Giỏ hàng"

    // hiển thị món có id trùng với data
    for (let index = 0; index < itemList.length; index++) {
        const item = itemList[index];
        if (item.id === clickedID) {
            if (clickedIDList.includes(clickedID) == false) {
                clickedIDList.push(clickedID);

                amount += `
            <p class="dropdown-item"><img src="${item.image}" style="height:70px; vertical-align:baseline;">${item.name}</p>
            `
                document.getElementById("added-item-list").innerHTML = amount;
            }
        }
    }
}

// lưu danh sách ID các món đã chọn vào lS
function checkOut() {
    localStorage.setItem("addedIDList", clickedIDList);
    window.location.href = "gio-hang.html";
}