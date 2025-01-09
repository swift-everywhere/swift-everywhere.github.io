---
layout: default
title: Swift Everywhere: Android Build Status
---
<h1>{{ page.title }}</h1>

{% assign items = site.data.android %}

<p>
This page acts as a supplement to the
<a href="https://swiftpackageindex.com">Swift Package Index</a>
by providing build status for alternative platforms that are not
yet supported, such as
<a href="">Android</a> and
<a href="">Windows</a>. 
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

<p>
This page is automatically updated by a GitHub action running at
<a href="https://github.com/swift-everywhere/swift-package-builds">https://github.com/swift-everywhere/swift-package-builds</a>.
It was last generated at {%- page.date | date: date_format -%}.
</p>
