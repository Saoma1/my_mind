class Shared::SplitImageSection < Bridgetown::Component
  def initialize(image: "", header: "", image_left: true, with_background: false, kontent: nil, mobile_image: true)
    @image, @header, @image_left, @with_background, @mobile_image = image, header, image_left, with_background, mobile_image
  end
end
