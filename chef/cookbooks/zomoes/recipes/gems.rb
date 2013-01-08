dataBag = data_bag_item('zomoes', 'configs')

dataBag['gems'].each do |gem|
    gem_package "#{gem}"
end