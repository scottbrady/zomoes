require "models/resume"
require "singleton"

class ResumePeer
    include Singleton

    def getResumeById(resumeId)
        resume = Resume.find(resumeId)
        return resume
    end
end