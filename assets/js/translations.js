var translations = {
    {% for item in site.projects %}
      "title-{{ item.slug }}": {{ item.title | jsonify }},
      "desc-{{ item.slug }}": {{ item.description | jsonify }},
    {% endfor %}
  };
  