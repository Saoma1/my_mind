class Shared::Button < Bridgetown::Component
  def initialize(type: "", text: "", path: "")
    @type, @text, @path = type, text, path
  end

  def type_style
    case @type
    when "standart"
      "bg-primary text-white hover:bg-primary-dark shadow-sm px-3.5"
    when "border"
      "bg-transparent text-primary ring-1 ring-inset ring-primary hover:bg-primary hover:text-white shadow-sm px-3.5"
    when "text"
      "text-primary hover:text-primary-dark"
    end
  end
end
