---
layout: default
title: Swift Everywhere: Android Build Status
---

<h1>{{ page.title }}</h1>

<div>
<p>
<small>
This page acts as a supplement to the
<a href="https://swiftpackageindex.com">Swift Package Index</a>
by providing build status for alternative platforms that are not
yet supported, such as
<a href="https://github.com/SwiftPackageIndex/SwiftPackageIndex-Server/discussions/3461">Android</a> and
<a href="https://github.com/SwiftPackageIndex/SwiftPackageIndex-Server/discussions/1354">Windows</a>. 
</small>
</p>
</div>

<h2>Android Build Status</h2>

{% assign items = site.data.android %}
{% assign stats = site.data.android_stats %}

Of the <b>{{ stats.total_packages | number_format:"#,##0" }}</b> packages that are successfully building for
<a href="https://swiftpackageindex.com/search?query=platform:linux">Linux</a>,
<b>{{ stats.success_packages | number_format:"#,##0" }}</b>
are successfully building for Android.

<h3>Build Status by Repository</h3>

<table>
<tr>
<th>Name</th>
<th>Status</th>
<th>Stars</th>
<th>Build Log</th>
</tr>
{% for object in items %}
    <tr>
    {% assign value = object %}
    <td><a href="{{ value.repo }}">{{ value.repo }}</a></td>
    <td>{{ value.status }}</td>
    <td>{{ value.stars }}</td>
    <td><a href="https://github.com/swift-everywhere/swift-package-builds/actions/runs/{{ value.runid }}>">{{ value.runid }}</a></td>
    <!--
    <td>{{ value.created }}</td>
    <td>{{ value.modified }}</td>
    -->
    </tr>
{% endfor %}
</table>

<p>
<small>
This page is automatically updated by a GitHub action running at
<a href="https://github.com/swift-everywhere/swift-package-builds">https://github.com/swift-everywhere/swift-package-builds</a>.
It was last generated at {{ site.time | date_to_string }}.
</small>
</p>
