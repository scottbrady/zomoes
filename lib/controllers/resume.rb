get "/resume/:resumeId" do |resumeId|
	erb :resume, :locals => {
		:resumeId  => h(resumeId)
	}
end