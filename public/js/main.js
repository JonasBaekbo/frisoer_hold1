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
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    });
});

function entfernen(response) {
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