dataBag = data_bag_item('zomoes', 'configs')

dataBag['gems'].each do |gem|
    execute "installing GEM: #{gem}" do
        command "gem install #{gem}"
    end
end