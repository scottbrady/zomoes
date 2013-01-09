get "/resume/:resumeId" do |resumeId|
	erb :resume, :locals => {
		:resumeId  => resumeId
	}
end