---
layout: default
title: Swift Everywhere – Android Build Status
---

<div>
<p>
<small>
This site acts as a supplement to the
<a href="https://swiftpackageindex.com">Swift Package Index</a>
by providing build status for additional platforms, such as
<a href="https://github.com/SwiftPackageIndex/SwiftPackageIndex-Server/discussions/3461">Android</a>,
<a href="https://github.com/SwiftPackageIndex/SwiftPackageIndex-Server/discussions/1354">Windows</a>,
and <a href="https://www.swift.org/documentation/articles/static-linux-getting-started.html">Musl</a>. 
</small>
</p>
</div>

{% assign items = site.data.android %}
{% assign stats = site.data.android_stats %}

<h3>Android Build Status: {{ stats.success_packages | times: 100 | divided_by: stats.total_packages }}%</h3>

Of the <b>{{ stats.total_packages | number_format:"#,##0" }}</b> packages that are successfully building for
<a href="https://swiftpackageindex.com/search?query=platform:linux">Linux</a>,
<b>{{ stats.success_packages | number_format:"#,##0" }}</b>
are successfully building for Android.

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

<h3>Windows Build Status: Coming Soon!</h3>
<hr />
<h3>Musl Build Status: Coming Soon!</h3>
<hr />

<div>
<p>
<small>
This page is automatically updated by a GitHub action running at
<a href="https://github.com/swift-everywhere/swift-package-builds">https://github.com/swift-everywhere/swift-package-builds</a>.
It was last generated at {{ site.time | date_to_string }}.
</small>
</p>
</div>
