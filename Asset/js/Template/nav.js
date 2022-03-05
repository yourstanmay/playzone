$(function () {
    var bar = '';
    bar += '<!-- Navbar -->';
    bar += ' <nav class="navbar navbar-expand-lg navbar-dark bg-dark">';
    bar += '    <a class="navbar-brand" href="https://yourstanmay.github.io"><img style="width: 40px;height: 40px; margin-right: 8px; border-radius: 178px;"';
    bar += '            src="https://avatars0.githubuserContent.com/u/61911537?s=400&u=7a9a3aaaa1af68f89f2e6b04d3fd421c435f4b59&v=4">YoursTanmay</a>';
    bar += '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"';
    bar += '        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">';
    bar += '        <span class="navbar-toggler-icon"></span>';
    bar += '    </button>';
    bar += '    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">';
    bar += '        <div class="navbar-nav ml-auto">';
    bar += '            <div class="nav-item dropdown ">';
    bar += '                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"';
    bar += '                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
    bar += '                    Courses';
    bar += '                </a>';
    bar += '                <div class="dropdown bg-secondary" aria-labelledby="navbarDropdownMenuLink" style="position: absolute; left:45px;">';
    bar += '                    <div class="dropOnHover">';
    bar += '                        <a class="dropdown-item" href="/Content/py.html">Python</a>';
    bar += '                        <a class="dropdown-item" href="/Content/java/java.html">Java</a>';
    bar += '                        <a class="dropdown-item" href="/Content/mysql/mysql.html">MySQL</a>';
    bar += '                        <a class="dropdown-item" href="/Content/c.html">c</a>';
    bar += '                        <a class="dropdown-item" href="/Content/c++.html">c++</a>';
    bar += '                        <a class="dropdown-item" href="/Content/php.html">php</a>';
    bar += '                        <a class="dropdown-item" href="/Content/ds.html">Data Structrue</a>';
    bar += '                        <a class="dropdown-item" href="/Content/springMVC.html">Spring MVC</a>';
    bar += '                        <a class="dropdown-item" href="/Content/Hybris_Core.html">SAP Hybris Core</a>';
    bar += '                    </div>';
    bar += '                </div>';
    bar += '            </div>';
    bar += '            <div class="nav-item dropdown ">';
    bar += '                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"';
    bar += '                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
    bar += '                    Explore More';
    bar += '                </a>';
    bar += '                <div class="dropdown bg-secondary" aria-labelledby="navbarDropdownMenuLink" style="position: absolute; left:45px;">';
    bar += '                    <div class="dropOnHover">';
    bar += '                        <a class="dropdown-item" href="https://pinup.42web.io" target="_blank">Pinup(Social Networking)</a>';
    bar += '                        <a class="dropdown-item" href="https://yourstanmay.github.io/fitness" target="_blank">YoursTanmay Fitness</a>';
    bar += '                        <a class="dropdown-item" href="https://yourtanmay.000webhostapp.com/Banking/" target="_blank">YoursTanmay Banking <span class="badge badge-danger">&nbsp;Confidential🔒</span></a>';
    bar += '                        <a class="dropdown-item" href="https://yourstanmay.000webhostapp.com/AdminPanel" target="_blank">Admin Panel <span class="badge badge-danger">&nbsp;🔒</span></a>';
    bar += '                    </div>';
    bar += '                </div>';
    bar += '            </div>';
    bar += '            <a class="nav-item nav-link" href="/Content/video.html">🎥Videos</a>';
    bar += '            <a class="nav-item nav-link" href="/Content/store.html">🏬Play Store</a>';
    bar += '            <a class="nav-item nav-link" href="https://yourstanmay.epizy.com/Cinematic.php" title="Watch Movie & Video Song" target="_blank">🎬Cinematic </a>';
    bar += '            <a class="nav-item nav-link" href="https://yourstanmay.000webhostapp.com/Notebook/" target="_blank">📓NoteBook</a>'; 
    bar += '            <a class="nav-item nav-link" href="https://www.onlinegdb.com/" target="_blank">👨‍💻Compiler</a>';
    bar += '            <a class="nav-item nav-link" href="https://yourstanmay.000webhostapp.com/AdminPanel/contactMe.php">📧Contact Me</a>';
    bar += '        </div>';
    bar += '    </div>';
    bar += '</nav>';

    $("#navbar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}
