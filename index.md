---
layout: default
title: Swift Everywhere: Android Build Status
---
<h1>{{ page.title }}</h1>

{% assign items = site.data.android %}

<p>
ITEMS: {{ items }}
<p>

<pre>
{% for object in site.data.objectsandproperties %}
  {{ object | inspect }} 
{% endfor %}
</pre>


