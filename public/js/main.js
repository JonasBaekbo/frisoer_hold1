document.addEventListener('DOMContentLoaded', () => {
    var form = document.querySelector('.opretForm');
    document.querySelector('#opretKnap').addEventListener('click', event => {
        event.preventDefault();
        const data = JSON.stringify({
            'name': form.name.value,
            'price': form.price.value
        });

        fetch('http://localhost:3000/addService', {
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
                location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    });

    const styles = require('../../json_data/styles.json')
        styles.styles.forEach(style => {
            document.getElementById('styles_select').innerHTML += `
                <option data-link="${style.link}" id="${style.id}_option">${style.name}</option>
            `;
            document.getElementById('styles_select').querySelectorAll('option').forEach(option => {
                if(option.innerHTML == "dark") {
                    option.selected = true;
                }
            })

        })
        document.getElementById('styles_select').addEventListener('change', () => {
            document.getElementById('styles_select').querySelectorAll('option').forEach(option => {
                if(option.innerHTML == document.getElementById('styles_select').value) {
                    document.getElementById('my_css_file').href = "./../../css/" + option.getAttribute('data-link');
                }
            })
        })
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
                    <input type="text" class="form-control" id="name" name="name" value = ${response.name} min="5" max="100" required>
                </div>
                <div>
                    <label for="price">Pris: </label><br/>
                    <input type="number" class="form-control" id="price" name="price"  value = ${response.pris} min="5" max="100" required>
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

function entfernenErzeugnis(response) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let init = {
        method: 'delete',
        headers: headers,
        cache: 'no-cache',
        mode: 'cors'
    };

    let request = new Request(`http://localhost:3000/delProduct/${response}`, init);

    fetch(request)
        .then(response => {
            location.reload();
        }).catch(err => {
            console.log(err);
        });
}

function entfernenBenutzer(response) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let init = {
        method: 'delete',
        headers: headers,
        cache: 'no-cache',
        mode: 'cors'
    };

    let request = new Request(`http://localhost:3000/delBruger/${response}`, init);

    fetch(request)
        .then(response => {
            location.reload();
        }).catch(err => {
            console.log(err);
        });
}

function deleteService(target_id) {
    fetch('/deleteService/' + target_id, {
        'method': 'get',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        'mode': 'cors',
        'cache': 'default'
    })
        .then(response => {
            //window.location.assign('http://localhost:3000/services');
            location.reload();
        })
        .catch((err) => {
            console.log(err);
        });
}