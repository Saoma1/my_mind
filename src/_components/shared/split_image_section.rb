class Shared::SplitImageSection < Bridgetown::Component
  def initialize(image: "", header: "", image_side: "left", with_background: false, kontent: nil)
    @image, @header, @image_side, @with_background= image, header, image_side, with_background
  end
end
