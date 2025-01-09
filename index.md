---
layout: default
title: Swift Everywhere: Android Build Status
---
<h1>{{ page.title }}</h1>

{% assign items = site.data.android %}

<p>
List of Android builds
<p>

<table>
<tr>
<th>Name</th>
<th>Status</th>
<th>Stars</th>
</tr>
{% for object in items %}
    <tr>
    {% assign value = object %}
    <td><a href="{{ value.repo }}">{{ value.repo }}</a></td>
    <td>{{ value.status }}</td>
    <td>{{ value.stars }}</td>
    <!--
    <td>{{ value.created }}</td>
    <td>{{ value.modified }}</td>
    -->
    </tr>
{% endfor %}
</table>



