---
# Feel free to add content and custom Front Matter to this file.
title: Helen Lekka
layout: default
locale: multi
locales:
  - en
  - ελ
---

<div class="space-y-16 mb-16">
  <%= render "hero_section" %>
  <%= render "devider_line" %>
  <%= render Shared::SplitImageSection.new(image: "/images/helen.png", header: t("about_me_heading")) do %>
    <%= t("about_me_text_html").html_safe %>
  <% end %>
  <%= render Shared::SplitImageSection.new(image: "/images/stones.png", header: t("my_approach_heading"), image_left: false, mobile_image: false) do %>
    <%= t("my_approach_text_html").html_safe %>
  <% end %>
</div>
