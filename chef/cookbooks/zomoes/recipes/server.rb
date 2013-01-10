bash "start_HTTP_server" do
    cwd "/var/www"
    code <<-EOH
        nohup thin start -R config.ru -p 8080 -d 2>&1 &
    EOH
end