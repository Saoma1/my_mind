class Shared::ReviewCard < Bridgetown::Component
  def initialize(text: "", author: "")
    @text = text
    @author = author
  end
end
