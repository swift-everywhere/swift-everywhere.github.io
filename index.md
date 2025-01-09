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
{% for object in items.objectsandproperties %}
  {{ object | inspect }} 
{% endfor %}
</pre>


