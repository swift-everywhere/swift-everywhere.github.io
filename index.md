---
layout: default
title: Swift Everywhere: Android Build Status
---
<h1>{{ page.title }}</h1>

{% assign items = site.data.android %}

<p>
Items
<p>

<pre>
{% for object in items | sort: 'stars' %}
<dl>
  {% for object in objects %}
  <dt>Object names: {{ object }}</dt>
      <dd>propertyA: {{ object.propertyA }}</dd>
      <dd>propertyB: {{ object.propertyB }}</dd>
  {% endfor %}
</dl>
{% endfor %}
</pre>


