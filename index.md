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
{% for object in items | sort: 'stars' %}
  <dt>Object names: {{ object }}</dt>
      <dd>propertyA: {{ object.propertyA }}</dd>
      <dd>propertyB: {{ object.propertyB }}</dd>
{% endfor %}


