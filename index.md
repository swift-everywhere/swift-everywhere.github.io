---
layout: default
title: Swift Everywhere: Android Build Status
---
<h1>{{ page.title }}</h1>

{% assign items = site.data.android | map: 'value' %}
{% assign sorted_items = items | sort: 'stars' | reverse %}

<table>
  <thead>
    <tr>
      <th>Repository</th>
      <th>Build</th>
      <th>Stars</th>
    </tr>
  </thead>
  <tbody>
    {% for item in sorted_items %}
    <tr>
      <td>{{ item.repo }}</td>
      <td>{{ item.status }}</td>
      <td>{{ item.stars }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
