<script>
    var target = [
        "https://www.toprevenuegate.com/q4ms9s6mt3?key=86fc2ec73225843192e6d91ebc298f82",
        "https://www.toprevenuegate.com/q4ms9s6mt3?key=86fc2ec73225843192e6d91ebc298f82"
    ];

    var one_per_how_many_hours = 1;

    function tampilkanUrl() {
        var last = localStorage.getItem('my-key');
        var now = new Date();
        if (last) {
            last = new Date(last);
            var hours_diff = (now.getTime() - last.getTime()) / 60 / 60 / 1000;
            if (hours_diff < one_per_how_many_hours) {
                return;
            }
        }

        localStorage.setItem('my-key', now.toJSON())

        var url = target[Math.floor(Math.random() * target.length)];
        window.open(url);
    }

    document.body.addEventListener("click", tampilkanUrl);
</script>
