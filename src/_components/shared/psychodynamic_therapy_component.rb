class Shared::PsychodynamicTherapyComponent < Bridgetown::Component
  def initialize(description:, how_it_works:, benefits:, image_url:, image_position: :left)
    @description = description
    @how_it_works = how_it_works
    @benefits = benefits
    @image_url = image_url
    @image_position = image_position.to_sym
  end

  def image_left?
    @image_position == :left
  end
end
