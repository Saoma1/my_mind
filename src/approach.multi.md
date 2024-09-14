---
title: Approach
layout: page
locale: multi
locales:
  - en
  - el
---

<div class="space-y-16 mb-16">
  <%= render "approach_section" %>
  <%= render "devider_line" %>
  <div class="md:space-y-36">
    <div id= "psychodynamic-therapy"></div>
      <%= render(Shared::PsychodynamicTherapyComponent.new(
        description: t('approach.description_1'),
        how_it_works: t('approach.how_it_works_1'),
        benefits: t('approach.benefits_1'),
        image_url: "/images/card_1.jpg"))
      %>
    
    <div id= "person-centered-therapy"></div>
      <%= render(Shared::PsychodynamicTherapyComponent.new(
        description: t('approach.description_2'),
        how_it_works: t('approach.how_it_works_2'),
        benefits: t('approach.benefits_2'),
        image_url: "/images/card_2.jpg", 
        image_position: :right))
      %>

    <div id= "cognitive-behavioral-therapy"></div>
        <%= render(Shared::PsychodynamicTherapyComponent.new(
      description: t('approach.description_3'),
      how_it_works: t('approach.how_it_works_3'),
      benefits: t('approach.benefits_3'),
      image_url: "/images/card_3.jpg"))
    %>
  </div>
</div>
<%= render "devider_line" %>
