class Shared::Card < Bridgetown::Component
  def initialize(image: "", heading: "", text: "", path: "")
    @image = image
    @heading = heading
    @text = text
    @path = path
  end
end
