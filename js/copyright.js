window.addEventListener('load', (
    function () {
        document.getElementById('copyright-year').appendChild(
            document.createTextNode(
                new Date().getFullYear()
            )
        );
    }
));