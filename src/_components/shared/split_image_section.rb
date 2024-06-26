class Shared::SplitImageSection < Bridgetown::Component
  def initialize(image: "", header: "", image_left: true, with_background: false, mobile_image: true, link_text: "", link_path: "")
    @image = image
    @header = header
    @image_left = image_left
    @with_background = with_background
    @mobile_image = mobile_image
    @link_text = link_text
    @link_path = link_path
  end
end
