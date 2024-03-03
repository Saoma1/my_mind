class Shared::Navbar < Bridgetown::Component
  def initialize(metadata:, resource:, current_locale:)
    @metadata, @resource, @current_locale = metadata, resource, current_locale
  end
end
