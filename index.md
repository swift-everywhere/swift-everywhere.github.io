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
  <dt>Object names: {{ object }}</dt>
      <dd>repo: {{ object.repo }}</dd>
      <dd>created: {{ object.created }}</dd>
      <dd>modified: {{ object.modified }}</dd>
      <dd>stars: {{ object.stars }}</dd>
      <dd>status: {{ object.status }}</dd>
{% endfor %}


