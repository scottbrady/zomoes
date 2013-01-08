# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant::Config.run do |config|
    config.vm.define :dev do |dev_config|
        dev_config.vm.share_folder("v-root", "/var/www", ".", :nfs => true)

        dev_config.vm.box = "centos6.3"

        dev_config.vm.box_url = "https://dl.dropbox.com/u/7225008/Vagrant/CentOS-6.3-x86_64-minimal.box"

        dev_config.vm.network :hostonly, "10.10.10.10"

        dev_config.vm.customize ["modifyvm", :id, "--memory", "512"]

        dev_config.vm.provision :chef_solo do |chef|
            chef.cookbooks_path = "chef/cookbooks"
            chef.data_bags_path = "chef/data_bags"
            chef.roles_path     = "chef/roles"

            chef.add_role("webserver-dev")
        end
    end
end
