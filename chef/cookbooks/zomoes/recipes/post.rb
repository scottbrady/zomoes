execute "clear firewall rules" do
    # if we don't clear the firewall rules we won't be able to connect
    command "iptables -F"
end