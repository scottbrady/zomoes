execute "clear firewall rules" do
    # if we don't clear the firewall rules we won't be able to connect
    command "iptables -F"
end

bash "install_gems_bundle" do
    cwd "/var/www"
    code <<-EOH
        bundle install
    EOH
end

execute "import mongo data" do
    command "mongo zomoes /var/www/chef/cookbooks/zomoes/files/default/mongo-import.js"
end