name        "webserver-dev"
description "Development webserver"
run_list(
    "recipe[yum]",
    "recipe[mongodb::10gen_repo]",
    "recipe[mongodb::default]",
    "recipe[zomoes::gems]",
    "recipe[zomoes::post]"
)