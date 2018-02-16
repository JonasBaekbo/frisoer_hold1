document.addEventListener('DOMContentLoaded', () => {
    // const styles = require('../../json_data/styles.json');
    // console.log(styles);
    document.getElementById('styles_select').querySelectorAll('option').forEach(option => {
        console.log(option.innerHTML);
        if(option.innerHTML == "default") {
            option.selected = true;
        }
    })
    console.log(document.getElementById('dyn_style'));
    document.getElementById('styles_select').addEventListener('change', () => {
        document.getElementById('styles_select').querySelectorAll('option').forEach(option => {
            console.log("option.innerHTML = " + option.innerHTML);
            console.log("select value = " + document.getElementById('styles_select').value);
            if(option.innerHTML.trim() == document.getElementById('styles_select').value.trim()) {
                console.log("changed!");
                document.getElementById('dyn_style').href = "./css/" + option.getAttribute('data-link');
            }
        })
    })
})