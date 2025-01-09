---
layout: default
title: Swift Everywhere: Android Build Status
---
<h1>{{ page.title }}</h1>

{% assign items = site.data.android %}

<p>
List of Android builds
<p>

<dl>
{% for object in items %}
  {% assign value = object %}
  <dt>Object names: {{ value }}</dt>
      <dd>repo: {{ value.repo }}</dd>
      <dd>created: {{ value.created }}</dd>
      <dd>modified: {{ value.modified }}</dd>
      <dd>stars: {{ value.stars }}</dd>
      <dd>status: {{ value.status }}</dd>
{% endfor %}


