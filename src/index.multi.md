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
  <%= render Shared::SplitImageSection.new(image: "/images/helen.png", header: t("about_me_heading"), link_text: t("about_me_link_text"), link_path: t("about_me_link_url")) do %>
    <%= t("about_me_text_html").html_safe %>
  <% end %>
  <%= render Shared::SplitImageSection.new(image: "/images/stones.png", header: t("my_approach_heading"), image_left: false, mobile_image: false) do %>
    <%= t("my_approach_text_html").html_safe %>
  <% end %>

  <div class="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-1 sm:gap-y-10 lg:grid-cols-3">
    <%= render Shared::Card.new(image: "/images/card_1.jpg", heading: t("card_1_heading"), text: t("card_1_text"), path: t("card_1_url")) %>
    <%= render Shared::Card.new(image: "/images/card_2.jpg", heading: t("card_2_heading"), text: t("card_2_text"), path: t("card_2_url")) %>
    <%= render Shared::Card.new(image: "/images/card_3.jpg", heading: t("card_3_heading"), text: t("card_3_text"), path: t("card_3_url")) %>
  </div>
</div>
