
document.addEventListener('DOMContentLoaded', () => {
    var form = document.querySelector('.opretForm');
    document.querySelector('#opretKnap').addEventListener('click', event => {
        event.preventDefault();
        const data = JSON.stringify({
            'name': form.name.value,
            'price': form.price.value
        });

        fetch('/addService', {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Content-Length': data.length
            },
            'mode': 'cors',
            'cache': 'default',
            'body': data
        })
        .then(response => {
            // console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
    });
});
function edit(target_id) {
    fetch('/getService/' + target_id, {
        'method': 'GET',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        'mode': 'cors',
        'cache': 'default'
    })
    .then(data => {
        return data.json();
    })
    .then(response => {
        console.log(response);     
        document.querySelector('#edit_div').insertAdjacentHTML('afterbegin', `
            <h2>Edit Service</h2>
            <form class="editForm" method="post" enctype="multipart/form-data">
                <div>
                    <label for="name">Titel: </label><br/>
                    <input type="text" id="name" name="name" value = ${response.name} min="5" max="100" required>
                </div>
                <div>
                    <label for="price">Pris: </label><br/>
                    <input type="number" id="price" name="price"  value = ${response.pris} min="5" max="100" required>
                </div>
                <button type="submit" id="updateKnap" type="submit">Update</button>
            </form>
        `);
        document.querySelector('#updateKnap').addEventListener('click', event => {
            event.preventDefault();
            var form = document.querySelector('.editForm');
            const data = JSON.stringify({
                'name': form.name.value,
                'price': form.price.value
            });
    
            fetch('/updateService/' + target_id, {
                'method': 'PUT',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                },
                'mode': 'cors',
                'cache': 'default',
                'body': data
            })
            .then(response => {
                window.location.assign('http://localhost:3000/services');
            })
            .catch((err) => {
                console.log(err);
            }); 
        })
    })
    .catch((err) => {
        console.log(err);
    });
}


// document.querySelector('#equipment_edit_div').innerHTML = `
//             <form id="equipment_edit_form" method="post" enctype="multipart/form-data">
//                 <p>
//                     <label for="name">Item Name: </label><br/>
//                     <input type="text" id="name" name="name" min="5" max="100" value="${data[0].item}" required>
//                 </p>
//                 <p>
//                     <label for="description">Description: </label><br/>
//                     <input type="text" id="description" name="description" min="5" max="1000" value="${data[0].description}" required>
//                 </p>
//                 <p>
//                     <label>Old Image</label>
//                     <img src="http://localhost:8080/images/zombiemania/equipment/${data[0].url}" id="old_pic" alt="billede hentes" width="200" height="75">
//                     <label>New Image</label>
//                     <input type="hidden" name="oldItemImage" id="oldItemImage" value="${data[0].url}">
//                     <input type="file" name="itemImage" id="itemImage" value="empty">
//                     <img id="preview" width="200" height="75">
//                 </p>
//                 <button type="" id="updateEquipmentItem">Update Item</button>
//             </form>
//         `;

//         if (!document.querySelector("#equipment_edit_form").reportValidity()) {
//             document.querySelector("#equipment_edit_form").reportValidity()
//         } else {
//             // grib formularen og håndter indholdet via FormData objektet
//             let form = document.querySelector('#equipment_edit_form');
//             let data = new FormData(form);
//             let init = {
//                 method: 'PUT',
//                 body: data,
//                 cache: 'no-cache',
//                 mode: 'cors'
//             };

//             console.log(init.body);

//             let request = new Request(`http://localhost:8080/updateEquipmentItem/${target_id}`, init);

//             fetch(request)
//                 .then(result => {
//                     window.location.assign('http://localhost:3000/sub/template/zombiemania.html?site=Equipment');
//                 }).catch(err => {
//                     console.log(err)
//                 });
//         }