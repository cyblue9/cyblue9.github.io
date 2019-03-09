var getContributions = function(contributions_data) {
    contributions_data = JSON.parse(contributions_data);
    var total_contributions = 0;
    contributions_data.years.forEach(year => {
        total_contributions += year.total;
    });
    return total_contributions;
}

var setContributions = function(contributions) {
    contributions_tag = document.getElementsByClassName('counter contributions');
    contributions_tag[0].innerHTML = contributions;
}


var getRepositories = function(repositories_data) {
    repositories_data = JSON.parse(repositories_data);
    return repositories_data.public_repos;
}

var setRepositories = function(repositories) {
    repositories_tag = document.getElementsByClassName('counter repositories');
    repositories_tag[0].innerHTML = repositories;
}


var getPullRequests = function(pullrequests_data) {
    pullrequests_data = JSON.parse(pullrequests_data);
    return pullrequests_data.total_count;

}

var setPullRequests = function(pullrequests) {
    pullrequests_tag = document.getElementsByClassName('counter pullrequests');
    pullrequests_tag[0].innerHTML = pullrequests;
}

function catApi(url, get_func, set_func) {
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.addEventListener("load", (event) => {
        if (event.target.status !== 200)
            return;
    });

    request.addEventListener("error", () => {
        console.log("Network Error");
    });

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            set_func(get_func(request.responseText));
        }
    }
    request.send();
}

const get_contributions_api = "https://github-contributions-api.now.sh/v1/cyblue9"
catApi(get_contributions_api, getContributions, setContributions);

const get_repositories_api =  "https://api.github.com/users/cyblue9"
catApi(get_repositories_api, getRepositories, setRepositories);

const get_pull_requests_api = "https://api.github.com/search/issues?q=author%3Acyblue9";
catApi(get_pull_requests_api, getPullRequests, setPullRequests);

