name        "webserver-dev"
description "Development webserver"
run_list(
    # "recipe[zomoes::pre]",
    "recipe[zomoes::gems]",
    "recipe[zomoes::post]"
)